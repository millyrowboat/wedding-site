import React from "react";
import preset from "jss-preset-default";
import injectSheet from "react-jss";
import photo from "./background-shot.jpg";
import { IntroductionText } from "./IntroductionText";

const styles = {
  app: {
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.57)"
  },
  coverPhoto: {
    background: `url(${photo}) no-repeat center center fixed`,
    backgroundSize: "cover",
    position: "fixed",
    width: "100%",
    height: "100%",
    zIndex: "-10"
  },
  centered: {
    maxWidth: 800,
    height: 400
  }
};

const ContentWrapper = ({ classes, children }) => {
  return <div className={classes.coverPhoto}>{children}</div>;
};

const App = ({ classes }) => {
  return (
    <div className={classes.app}>
      <ContentWrapper classes={classes}>
        <div className={classes.centered}>
          <IntroductionText classes={classes}>
            Hello friends and family. You're invited to Bec and Milly's party
            where some legal stuff just so happens to get read out and
            officiated and stuff.
          </IntroductionText>
        </div>
      </ContentWrapper>
    </div>
  );
};

export const StyledApp = injectSheet(styles)(App);
