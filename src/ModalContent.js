import React from 'react';
import injectSheet from 'react-jss';
import CodeValidator from './CodeValidator';
import RSVPForm from './RSVPForm';
import firebase from 'firebase/app';
import 'firebase/auth';

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
            title: 'Oh so you wanna come do ya?'
        }
    };

    componentDidMount() {
        this.setState({showInformation: firebase.auth().currentUser});
    }

    switchInformation = (isLoggedIn) => {
        console.log("Is logged in?", isLoggedIn);
        isLoggedIn && this.setState({showInformation: true, title: `Cool cool. Here's the details`});
    };

    render() {
        const { classes } = this.props;
        return(
            <div className={classes.content} >
                <div className={classes.header}>
                    <h2 className={classes.h2}>{this.state.title}</h2>
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
                            <h2>Cool, so if you can come, please fill out this form: </h2>
                            <RSVPForm />
                        </div>
                    )
                    }
            </div>
        )
    }
};

export default injectSheet(styles)(ModalContent);
