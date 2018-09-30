import React from 'react';
import injectSheet from 'react-jss';
import { FancyButton } from './Button';
import ErrorMessage from './ErrorMessage';
import firebase from 'firebase';

const styles = {
    form: {
        display: "flex",
        fontSize: "1.2rem",
        flexDirection: "column"
    },
    question: {
        margin: "10px 0",
        fontWeight: "700"
    },
    row: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        marginBottom: "20px",
        '& label': {
            fontWeight: '500',
            display: "flex",
            alignItems: "center",
            marginBottom: 10
        },
        '& input': {
            marginRight: 15,
            height: 30
        }
    },
}


class RSVPForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            attendance: '',
            plusOne: '',
            inputError: false,
            formComplete: false,
        }
    };

    fieldsRequired = (name, attendance, plusOne) => {
        return name !== '' && attendance !== '' && plusOne !== '' ? true : false;
    };

    formSubmit = () => {
        console.log("Attempting to submit form...");

        this.fieldsRequired(this.state.name, this.state.attendance,this.state.plusOne) ?
            firebase.database().ref(`rsvps/${this.state.name}`).push().set({
                name: this.state.name,
                attending: this.state.attendance,
                withSomeone: this.state.plusOne
            }, error => {
                if (error) {
                    console.log(error.message, error.code);
                } else {
                    this.props.rsvpComplete()
                    console.log("Wrote successfully to the database!");
                }
    }) 
        : this.setState({inputError:true});
    };

    handleChange = (event) => {
        const target = event.target;
        this.setState({
            [target.name]: target.value
        });
        console.log("Form state:", this.state);
    };

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.form}>
                <div className={classes.row}>
                    <p className={classes.question}>Your name*</p>
                    <input type="text" value={this.state.name} onChange={this.handleChange} name="name"/>
                </div>

                <div className={classes.row}>
                    <p className={classes.question}>Can you come?*</p>
                    <label>
                        <input type="radio" name="attendance" onChange={this.handleChange} value="yes"/>
                        Yes, I will be there with bells on
                    </label>
                    <label>
                        <input type="radio" name="attendance" onChange={this.handleChange} value="no"/>
                        No, but I'll catch up in Melbourne!
                    </label>
                    <label>
                        <input type="radio" name="attendance" onChange={this.handleChange} value="maybe"/>
                        Don't know yet
                    </label>
                </div>

                <div className={classes.row}>
                    <p className={classes.question}>You bringin' someone?*</p>
                    <label>
                        <input type="radio" name="plusOne" onChange={this.handleChange} value="yes"/>
                        Hell yeah
                    </label>
                    <label>
                        <input type="radio" name="plusOne" onChange={this.handleChange} value="no"/>
                        Nah
                    </label>
                </div>
                <FancyButton showBorder={true} width="100%" height="40px" action={this.formSubmit}> Count me in! </FancyButton>
                <ErrorMessage message="Oops! You have to fill in all the fields" show={this.state.inputError} />
            </div>
        )
    }
}

export default injectSheet(styles)(RSVPForm);
