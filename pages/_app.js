import React from "react";
import { ThemeProvider } from "styled-components";
import {CSSReset} from "../src/components/CSSReset";
import ColorModeProvider, {ColorModeContext} from "../src/components/Menu/components/ColorMode";
import RegisterVideo from "../src/components/RegisterVideo";

/*
_app.js -> Definios do NextJS
ThemeProvider -> Prove o tema para todo o app do styled components
ColorModeProvider -> Prove o state de light ou dark mode
*/

const theme = {
    light: {
        backgroundBase: "#f9f9f9",
        backgroundLevel1: "#ffffff",
        backgroundLevel2: "#f0f0f0",
        borderBase: "#bbbbbb",
        textColorBase: "#222222"
    },
    dark: {
        backgroundBase: "#181818",
        backgroundLevel1: "#202020",
        backgroundLevel2: "#313131",
        borderBase: "#383838",
        textColorBase: "#FFFFFF"
    }
};

function ProviderWrapper(props){
    return (
        <ColorModeProvider initialMode={"light"}>
            {props.children}
        </ColorModeProvider>
    )
}

function Root({Component, pageProps}){

    const contexto = React.useContext(ColorModeContext);

    return (
            <ThemeProvider theme={theme[contexto.mode]} >
                <CSSReset />
                <Component {... pageProps}/>
                <RegisterVideo/>
            </ThemeProvider>
    )
}

export default function _App(props){
    return(
        <ProviderWrapper>
            <Root {...props}/>
        </ProviderWrapper>
    )
}