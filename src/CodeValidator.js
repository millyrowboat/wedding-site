import React from 'react';
import injectSheet from 'react-jss';

const CODE_WORD = "WEDDING";

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
            codeValid: false,
            showInfo: false
        }
    }

    handleUserInput(e) {
        console.log("User input:", e.target.value);
        const value = e.target.value;
        this.setState({code: value}, () => { this.validateCode(value) });
    };

    validateCode(value) {
        var match = new RegExp(CODE_WORD);
        let codeIsValid = match.exec(value);
        this.setState({codeValid: !!codeIsValid}, this.validateForm)
        console.log("Is the code valid?", codeIsValid);
    };

    validateForm() {
        this.props.formComplete();
        console.log("State is", this.state);
    }

    render() {
        const { classes } = this.props;
        return(
            <form>
                <div className={classes.form}>
                    <label className={classes.label}>Code:</label>
                    <input
                        type="text"
                        id="code"
                        className={classes.input}
                        value={this.state.code}
                        onChange={(event) => this.handleUserInput(event)}
                    />
                </div>
            </form>
        )
    };
}

export default injectSheet(styles)(CodeValidator);
