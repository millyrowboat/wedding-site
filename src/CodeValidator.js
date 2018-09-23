import React from 'react';
import injectSheet from 'react-jss';
import firebase from 'firebase';
import { FancyButton } from './Button';

const styles = {
    form: {
        display: "flex",
        fontSize: "1.2rem",
        flexDirection: "row",
        alignItems: "center"
    },
    '@media (max-width: 450px)': {
        form: {
            flexDirection: "column"
        }
    },
    label: {
        margin: "0 3% 0 0"
    },
    inputConstrainer: {
        flexGrow: 1,
        display: "flex",
        '& input': {
            border: "1px solid gray",
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "1rem",
            letterSpacing: ".03rem",
            flexGrow: 1,
            padding: "5px",
            marginRight: "5%",
            width: "75%"
        }
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
        console.log("did i get here");
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
                    <div className={classes.inputConstrainer}>
                        <input
                            type="text"
                            id="code"
                            className={classes.input}
                            value={this.state.code}
                            onChange={(event) => this.handleUserInput(event)}
                        />
                        <FancyButton showBorder={true} width="20%" height="100%" action={() => this.attemptLogIn(this.state.code)}>Go</FancyButton>
                    </div>
                </div>
        )
    };
}

export default injectSheet(styles)(CodeValidator);
