import React from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import * as PropTypes from "prop-types";
import AppContext from "../AppContext";

const ThemeToggle = (props) => {
    const {onClick} = props;
    const handleOnChange = (darkMode) => {
        darkMode.toggle();
        onClick();
    }

    return (
        <>
        <AppContext.Consumer>
            {(values)=> (
                <div style={{marginBottom: 8}}>
                    <DarkModeToggle
                    onChange={()=>handleOnChange(values.darkMode)}
                    checked={values.darkMode.value}
                    size={50} />
                </div>
            )}
        </AppContext.Consumer>
        </>
    )
}

ThemeToggle.propTypes = {
    onClick: PropTypes.func
};

ThemeToggle.defaultProps = {
    onClick: () => {}
};

export default ThemeToggle;