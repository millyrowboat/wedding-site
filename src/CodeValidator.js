import React from 'react';
import injectSheet from 'react-jss';
import firebase from 'firebase';
import { FancyButton } from './Button';
import ErrorMessage from './ErrorMessage';

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
            loggedIn: false,
            inputError: false
        }
    }

    handleUserInput(e) {
        const value = e.target.value;
        this.setState({code: value});
    };

    attemptLogIn(value) {
        firebase.auth().signInWithEmailAndPassword("milly.rowett@gmail.com", value).then(() => {
            this.validateForm();
        }, error => {
            this.setState({inputError: true});
            console.log(error.message, error.code);
        });
    };

    validateForm() {
        if (firebase.auth().currentUser) {
            this.setState({loggedIn: true});
            this.props.formComplete(this.state.loggedIn);
        } else {
            this.setState({loggedIn: false});
        }
    }

    render() {
        const { classes } = this.props;
        return(
            <div>
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
                        <FancyButton showBorder={true} width="20%" height="auto" action={() => this.attemptLogIn(this.state.code)}>Go</FancyButton>
                    </div>
                </div>
                <ErrorMessage 
                    message={"Uh, that's not right. Did you look on the invitation?"}
                    show={this.state.inputError}
                />
            </div>
        )
    };
}

export default injectSheet(styles)(CodeValidator);
