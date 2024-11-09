import React from "react";


type DarkModeReturn = {
    /** The current state of the dark mode. */
    isDarkMode: boolean;
    /** Function to toggle the dark mode. */
    toggle: () => void;
    /** Function to enable the dark mode. */
    enable: () => void;
    /** Function to disable the dark mode. */
    disable: () => void;
    /** Function to set a specific value to the dark mode. */
    set: (value: boolean) => void;
};


const AppContext = React.createContext<DarkModeReturn>({
    toggle : () => {
    },
    isDarkMode : false,
    enable : () => {
    },
    disable : () => {
    },
    set : () => {
    }
});


export type {DarkModeReturn} ;

export default AppContext;