import React from 'react';
import injectSheet from "react-jss";

const styles = {
    button: props => ({
        "width": props.width,
        "height": props.height,
        "font-size": "1rem",
        "padding": "10px",
        "background-color": "#ffffff",
        "font-family": "Cormorant Garamond, serif",
        "border": props.showBorder ? "1px gray solid" : "none",
        "border-radius": "5px"
    })
}

const Button = ({classes, children, action }) => {
    return (<button onClick={action} className={classes.button}>{children}</button> )
};

export const FancyButton = injectSheet(styles)(Button);
