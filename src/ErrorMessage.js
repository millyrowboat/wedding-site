import React from 'react';
import injectSheet from 'react-jss';

const styles = {
    errorContainer: {
        overflow: "hidden",
        width: "100%"
    },
    errorMessage: {
        color: "red",
        opacity: 0,
        margin: "10 0 0 0",
        transform: "translateY(-100px)"
   },
    errorMessageShow: {
        opacity: 100,
        transition: "all 0.3s ease-out",
        transform: "translateY(0)"
    }
}

class ErrorMessage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        };
    };

    componentWillReceiveProps(nextProps) {
        if(this.props.show !== nextProps.show) {
            this.setState({show: true})
        }
    };

    render() {
        const { message, classes } = this.props;
        const errorClasses = !this.state.show ? `${classes.errorMessage}` : `${classes.errorMessage} ${classes.errorMessageShow}`;
        return(
            <div className={classes.errorContainer}>
                <p className={errorClasses}>{message}</p>
            </div>
        )
    };
}

export default injectSheet(styles)(ErrorMessage);
