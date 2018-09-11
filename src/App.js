import React from 'react';
import preset from 'jss-preset-default';
import injectSheet from 'react-jss';
import photo from './background-shot.jpg';
import IntroductionText from './IntroductionText';

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
};

const ContentWrapper = ({classes, children}) => {
  return <div className={classes.contentWrapper}>{children}</div>;
};

const App = ({classes}) => {
  return (
    <div className={classes.app}>
      <div className={classes.coverPhoto} />
      <ContentWrapper classes={classes}>
        <IntroductionText />
      </ContentWrapper>
    </div>
  );
};

export const StyledApp = injectSheet(styles)(App);
