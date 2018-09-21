import React from 'react';
import injectSheet from 'react-jss';
import firebase from 'firebase';

const styles = {
    form: {
        display: "flex",
        fontSize: "1.5rem",
        height: "30px",
        justifyContent: "center"
    },
    label: {
        marginRight: "15px"
    },
    input: {
        border: "1px solid gray",
        fontFamily: "Cormorant Garamond, serif",
        fontSize: "1rem",
        letterSpacing: ".03rem",
        padding: "5px"
    }
}

class CodeValidator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            code: '',
            loggedIn: false
        }
    }

    handleUserInput(e) {
        console.log("User input:", e.target.value);
        const value = e.target.value;
        this.setState({code: value});
    };

    attemptLogIn(value) {
        firebase.auth().signInWithEmailAndPassword("milly.rowett@gmail.com", value).then(() => {
            console.log("Username and password were correct")
            this.validateForm();
        }, error => {
            console.log(error.message, error.code);
        });
    };

    validateForm() {
        if (firebase.auth().currentUser) {
            this.setState({loggedIn: true});
            this.props.formComplete(this.state.loggedIn);
            console.log("State is", this.state);
        } else {
            this.setState({loggedIn: false});
            console.log("State is", this.state);
        }
    }

    render() {
        const { classes } = this.props;
        return(
                <div className={classes.form}>
                    <label className={classes.label}>Codeword:</label>
                    <input
                        type="text"
                        id="code"
                        className={classes.input}
                        value={this.state.code}
                        onChange={(event) => this.handleUserInput(event)}
                    />
                    <button onClick={() => this.attemptLogIn(this.state.code)}>Go</button>
                </div>
        )
    };
}

export default injectSheet(styles)(CodeValidator);
