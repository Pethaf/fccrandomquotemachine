import React from "react"; 
import PropTypes from "prop-types";

const Textdisplay = ({content,styling, id}) =>
{
    return (
        <div id={id} 
             style={styling}>
            {content}
        </div>
    )
}

export default Textdisplay;

Textdisplay.PropTypes = {
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    styling: PropTypes.object.isRequired,
}

Textdisplay.defaultProps = {
    id: "",
    content: "Textdisplay",
    styling: {}
}