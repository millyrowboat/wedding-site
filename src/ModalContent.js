import React from 'react';
import injectSheet from 'react-jss';
import { FancyButton } from './Button';

const styles = {
    content: {
    fontFamily: 'Cormorant Garamond, serif'
    },
    header: {
        display: "flex",
        padding: "20px",
        justifyContent: "space-between"
    },
    'h2': {
        margin: 0
    }
}

const ModalContent = ({ classes, closeModal }) => {
    return (
        <div className={classes.content} >
            <div className={classes.header}>
                <h2 className={classes.h2}>Oh, so you wanna come do ya?</h2>
                <FancyButton width={"50px"} onClick={closeModal}>X</FancyButton>
            </div>  
            <div className={classes.body}>
                <p> Well that's real nice. If you've recieved an invite please enter the
                    super duper secret code word you saw on the postcard and please indicate
                    whether you're bringing a 'friend'! </p>
                <form>
                    <div>
                        <label>Code:</label>
                        <input type="text" id="code" name="code"/>
                    </div>
                </form>
            </div>
        </div>
)};

export default injectSheet(styles)(ModalContent);
