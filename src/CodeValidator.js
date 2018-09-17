import React from 'react';

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
        console.log("Validating code...");
        value === "WEDDING" ? this.setState({codeValid: true }) : this.setState({codeValid: false });
        console.log("Validated:", this.state);
    };

    render() {
        return(
            <form>
                <div>
                    <label>Code:</label><br />
                    <input type="text" id="code" value={this.state.code}
                        onChange={(event) => this.handleUserInput(event)}
                    />
                </div>
            </form>
        )
    };
}

export default CodeValidator;
