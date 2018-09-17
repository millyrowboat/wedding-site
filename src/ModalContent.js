import React from 'react';
import injectSheet from 'react-jss';
import CodeValidator from './CodeValidator';

const styles = {
    content: {
        fontFamily: 'Cormorant Garamond, serif',
        textAlign: "center"
    },
    'h2': {
        margin: 0
    }
}

class ModalContent extends React.Component {
    constructor(props) {
        super(props)
    };


    render() {
        const { classes } = this.props;
        return(
            <div className={classes.content} >
                <div className={classes.header}>
                    <h2 className={classes.h2}>Oh, so you wanna come do ya?</h2>
                </div>  
                <div className={classes.body}>
                    <p> Well that's real nice. If you've recieved an invite please enter the
                        super duper secret code word you saw on the postcard and please indicate
                        whether you're bringing a 'friend'! </p>
                    <CodeValidator />
                </div>
            </div>
        )
    }
};

export default injectSheet(styles)(ModalContent);
