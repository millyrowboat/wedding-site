import React from 'react';
import injectSheet from "react-jss";

const styles = {
    button: props => ({
        "margin-top": "20px",
        "width": props.width,
        "font-size": "1rem",
        "padding": "10px",
        "background-color": "#ffffff",
        "font-family": "Cormorant Garamond, serif",
        "border": "none",
        "border-radius": "5px"
    })
}

const Button = ({classes, children, onClick }) => {
    return (<button onClick={onClick} className={classes.button}>{children}</button> )
};

export const FancyButton = injectSheet(styles)(Button);
