import React from 'react';
import injectSheet from "react-jss";

const styles = {
  text: {
    padding: 20,
  },
  content: {
    fontSize: '2rem',
    color: 'white'
  }
} 


const Text = ({classes}) => {
  return(
   <div className={classes.text}>
      <span className={classes.content}>
        Hello friends and family. You're invited to Bec and Milly's party
        where some legal stuff just so happens to get read out and
        officiated and stuff.
      </span>
    </div>
  )
}

export const IntroductionText = injectSheet(styles)(Text);
