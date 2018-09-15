import React from 'react';
import injectSheet from 'react-jss';
import photo from './background-shot.jpg';
import IntroductionText from './IntroductionText';
import ModalContent from './ModalContent';
import Modal from 'react-modal';

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
        height: "400px",
        backgroundColor: "white"
    },
    overlay: {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "rgba(49, 49, 49, 0.75)"
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
            modalIsOpen: false
        };
    };

    openModal = () => {
        console.log("Modal opened!", this.state);
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
                <IntroductionText openModal={this.openModal} />
            </ContentWrapper>
            <Modal 
                isOpen={this.state.modalIsOpen} 
                onRequestClose={this.closeModal} 
                contentLabel="Invitation"
                style={modalStyles}
            >
                <ModalContent closeModal={this.closeModal} />
            </Modal>
            </div>
        );
    };
};

export const StyledApp = injectSheet(styles)(App);
