import React from "react";

export const ColorModeContext = React.createContext({
    mode:"",
    setMode: () => {alert("Me configura primeiro")},
    toggleMode: function () { alert("CU"); },
});

export default function ColorModeProvider (props) {

    const [mode, setMode] = React.useState(props.initialMode)

    const toggleMode = () => {
        mode === "dark" ? setMode("light") : setMode("dark")
    }

    return (
        <ColorModeContext.Provider value={{mode:mode, setMode: setMode, toggleMode: toggleMode}}>
            {props.children}
        </ColorModeContext.Provider>
    )
}