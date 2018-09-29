import React from "react";
import { FancyButton } from './Button';
import injectSheet from "react-jss";

const styles = {
    text: {
        padding: "20px 40px",
        textAlign: "center"
    },
    content: {
        fontSize: "2rem",
        color: "white"
    },
    heroText: {
        fontSize: "3.5rem",
        display: "block",
        padding: "0 0 20px 0",
        fontWeight: "700"
    },
    secondaryText: {
        "font-size": "1.5rem",
        "display": "block",
        "line-height": "1.5",
        marginBottom: "20px"
    },
};

const Text = ({ classes, openModal }) => {
  return (
    <div className={classes.text}>
      <div className={classes.content}>
          <span className={classes.heroText}>Hello, friends and family. </span>

          <span className={classes.secondaryText}>You're invited to Bec and Milly's party where
        some legal stuff just so happens to get read out and officiated and
        stuff.</span>
        <FancyButton showBorder={false} padding="10px" width={"50%"} height={"40px"} action={openModal}> RVSP </FancyButton>
      </div>
    </div>
  );
};

export default injectSheet(styles)(Text);
