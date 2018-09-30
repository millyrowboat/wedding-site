import React from 'react';
import injectSheet from 'react-jss';
import photo from './background-shot.jpg';
import IntroductionText from './IntroductionText';
import ModalContent from './ModalContent';
import Modal from 'react-modal';

const localStorage = window.localStorage;

const styles = {
    app: {
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.57)',
        fontFamily: 'Cormorant Garamond, serif',
    },
    coverPhoto: {
        background: `url(${photo}) no-repeat center center fixed`,
        'background-color': 'black',
        backgroundSize: 'cover',
        position: 'fixed',
        width: '100%',
        height: '100%',
        zIndex: '-10',
        filter: 'blur(5px)',
    },
    contentWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        width: '100%',
        maxWidth: '500px',
        margin: '0 auto',
        height: '100%',
        flexWrap: 'wrap',
        flexDirection: 'column'
    },
    centered: {
        maxWidth: 800,
        height: 400,
    },
    modal: {
        maxWidth: "500px",
        position: "static",
        margin: "40px",
        backgroundColor: "white",
        padding: "40px"
    },
    overlay: {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "rgba(49, 49, 49, 0.75)"
    },
    troubleshooter: {
        position: "absolute",
        width: "30%",
        bottom: 0,
        right: 0,
        textAlign: "right",
        padding: 20,
        '& a': {
            color: "white",
            textDecoration: "none",
            fontSize: "0.9rem",
            lineHeight: "0.9rem"
        }
    }
};

const modalStyles = {
    overlay: styles.overlay,
    content: styles.modal
};

const ContentWrapper = ({classes, children}) => {
  return <div className={classes.contentWrapper}>{children}</div>;
};

Modal.setAppElement('#root');

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
            rsvpComplete: false
        };
    };

    componentDidMount() {
        const completed = localStorage.getItem("completed");
        if ( completed ) { 
            this.setState({rsvpComplete: true}) 
        } else { 
            this.setState({rsvpComplete: false})
        }
    }

    openModal = () => {
        this.setState({modalIsOpen: true});
    };

    closeModal = () => {
        this.setState({modalIsOpen: false});
    };

    render = () => {
        const { classes } = this.props;
        return (
            <div className={classes.app}>
            <div className={classes.coverPhoto} />
            <ContentWrapper classes={classes}>
                <IntroductionText rsvpComplete={this.state.rsvpComplete} openModal={this.openModal} />
                <div className={classes.troubleshooter}>
                    <a target="_blank" rel="noopener noreferrer" href="mailto:milly.rowett@gmail.com?subject=Wedding">
                        Having trouble? Click here to contact us!
                    </a>
                </div>
            </ContentWrapper>
            <Modal 
                isOpen={this.state.modalIsOpen} 
                onRequestClose={this.closeModal} 
                contentLabel="Invitation"
                style={modalStyles}
            >
                <ModalContent />
            </Modal>
            </div>
        );
    };
};

export const StyledApp = injectSheet(styles)(App);
