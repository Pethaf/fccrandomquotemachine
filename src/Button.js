import React from "react";
import PropTypes from "prop-types";

const Button = ({text, action, styling, id}) => {
    return (
        <button onClick = {action} style={styling} id={id}>{text}</button>
    )
}

export default Button; 

Button.propTypes = {
    text: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
    styling: PropTypes.object.isRequired
}

Button.defaultProps = {
    styling: {},
    action: () => {alert("Button click")},
    text: "Button placeholder text"
}