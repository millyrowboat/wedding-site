import React from 'react';
import injectSheet from 'react-jss';
import CodeValidator from './CodeValidator';
import RSVPForm from './RSVPForm';
import firebase from 'firebase/app';
import 'firebase/auth';

const localStorage = window.localStorage;
const styles = {
    content: {
        fontFamily: 'Cormorant Garamond, serif',
        textAlign: "center"
    },
    innerContent: {
        textAlign: "left"
    },
    noSpace: {
        margin: 0
    },
    centered: {
        textAlign: "center"
    }
}

class ModalContent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showInformation: false,
            title: 'Oh so you wanna come do ya?',
            rsvpComplete: false
        }
    };

    componentDidMount() {
        this.setState({showInformation: firebase.auth().currentUser});
        if(localStorage.getItem("completed")) {
            this.setState({rsvpComplete: true})
        } else {
            this.setState({rsvpComplete: false})
        }
    };

    rsvpComplete = () => {
        this.setState({rsvpComplete: true});
        console.log("RSVP COMPLETE", this.state.rsvpComplete);
        localStorage.setItem("completed", true);
    };

    switchInformation = (isLoggedIn) => {
        console.log("Is logged in?", isLoggedIn);
        isLoggedIn && this.setState({showInformation: true, title: `Cool cool. Here's the details`});
    };

    render() {
        const { classes, rsvpComplete } = this.props;
        const defaultText = "Cool, so if you can come, please fill out this form:";
        const completedText = "Thanks! Hope to see you soon either way.";
        return(
            <div className={classes.content} >
                <div className={classes.header}>
                    <h2 className={classes.noSpace}>{this.state.title}</h2>
                </div>
                    {!this.state.showInformation ? (
                        <div className={classes.innerContent}>
                            <p> Well that's real nice. If you've recieved an invite please enter the
                                super duper secret code word you saw on the postcard and please indicate
                                whether you're bringing a 'friend'! </p>
                            <CodeValidator formComplete={this.switchInformation} />
                        </div>
                        )
                    :(
                        <div className={classes.innerContent}>
                            <p><strong>Date: </strong>19th of January 2019</p>
                            <p><strong>Location: </strong>987 Midland Highway, Pontville, TAS 7030 </p>
                            <p><strong>Time: </strong>Official 'ceremony' starts at 1pm</p>
                            <p>Cool! That's the one. I suppose you want details now?
                                So it'll be at a property in Tasmania. It'll be really chill.
                                There'll be food provided but please arrange your own accomodation if
                                if you plan to stay overnight. You can bring a tent and bedding if you want
                                to camp on the property (but spots are limited!).</p>
                            <h2 className={classes.centered}>{!this.state.rsvpComplete ? defaultText : completedText}</h2>
                            {!this.state.rsvpComplete ? <RSVPForm rsvpComplete={() => this.rsvpComplete()}/> : null }
                        </div>
                    )
                    }
            </div>
        )
    }
};

export default injectSheet(styles)(ModalContent);
