import React from 'react';
import injectSheet from 'react-jss';
import { FancyButton } from './Button';

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
    }
}
class RSVPForm extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { classes } = this.props
        return (
            <div className={classes.form}>
                <div className={classes.row}>
                    <p className={classes.question}>Your name:</p>
                    <input type="text" name="name"/>
                </div>

                <div className={classes.row}>
                    <p className={classes.question}>Can you come? </p>
                    <label>
                        <input type="radio" name="attendance" value="yes"/>
                        Yes, I will be there with bells on
                    </label>
                    <label>
                        <input type="radio" name="attendance" value="no"/>
                        No, but I'll catch up in Melbourne!
                    </label>
                    <label>
                        <input type="radio" name="attendance" value="maybe"/>
                        Don't know yet
                    </label>
                </div>

                <div className={classes.row}>
                    <p className={classes.question}>You bringin' someone?</p>
                    <label>
                        <input type="radio" name="plusones" value="yes"/>
                        Hell yeah
                    </label>
                    <label>
                        <input type="radio" name="plusones" value="no"/>
                        Nah
                    </label>
                </div>
                <FancyButton showBorder={true} width="100%" height="40px"> Count me in! </FancyButton>
            </div>
        )
    }
}

export default injectSheet(styles)(RSVPForm);
