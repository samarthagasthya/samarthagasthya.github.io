import React from "react";
import { Spinner } from "react-bootstrap";

const styles = {
    spinnerStyle: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
    }
};

const FallbackSpinner = () => (
    <div style={styles.spinnerStyle}>
        <Spinner animation="grow" />
    </div>
)

export default FallbackSpinner;