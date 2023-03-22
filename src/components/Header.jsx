import React from "react";
import * as PropTypes from "prop-types";
import "../App.css"

const Header = (props) => {
    const {title} =props;
    return (
        <div className="header">
            {title}
        </div>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired
};

export default Header;