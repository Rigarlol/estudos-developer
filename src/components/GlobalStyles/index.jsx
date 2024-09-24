import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: white;
        font-family: 'Inter', sans-serif;
    }

    body {
        min-height: 100vh;
        background-color: #121212;
        background-image: url('../../../public/bg.png');
        background-position: top center; /* Centraliza a imagem horizontalmente e a coloca no topo verticalmente */
        background-size: auto; /* Mantém o tamanho original da imagem */
        background-repeat: no-repeat;
    }

    main {
        display: block;
    }

    ul {
        list-style: none;
    }

    h1 {
        font-size: 22px; /* 24px */
        line-height: 2rem; /* 32px */
        margin: 0.67em 0;

    }

    h2 {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    }

    p {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        line-height: 28px;
        color: #C4C4CC;
    }

    

    hr {
        box-sizing: content-box; 
        height: 0; 
        overflow: visible; 
    }

    a {
        background-color: transparent;
    }

    abbr[title] {
        border-bottom: none; 
        text-decoration: underline; 
        text-decoration: underline dotted; 
    }

    b,
    strong {
        font-weight: bolder;
    }

    code,
    kbd,
    samp {
        font-family: monospace, monospace; 
        font-size: 1em; 
    }

    small {
        font-size: 80%;
    }

    sub,
    sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
    }

    sub {
        bottom: -0.25em;
    }

    sup {
        top: -0.5em;
    }
    img {
        border-style: none;
        max-width: 100%;   
        height: auto;      
    }

    button,
    input,
    optgroup,
    select,
    textarea {
        font-family: inherit; 
        font-size: 100%; 
        margin: 0; 
    }

    button,
    input { 
        overflow: visible;
    }

    button,
    select { 
        text-transform: none;
    }

    button,
        [type="button"],
        [type="reset"],
        [type="submit"] {
        -webkit-appearance: button;
    }

    button::-moz-focus-inner,
        [type="button"]::-moz-focus-inner,
        [type="reset"]::-moz-focus-inner,
        [type="submit"]::-moz-focus-inner {
        border-style: none;
        padding: 0;
    }

    button:-moz-focusring,
        [type="button"]:-moz-focusring,
        [type="reset"]:-moz-focusring,
        [type="submit"]:-moz-focusring {
        outline: 1px dotted ButtonText;
    }   

    fieldset {
        padding: 0.35em 0.75em 0.625em;
    }

    legend {
        box-sizing: border-box; 
        color: inherit; 
        display: table; 
        max-width: 100%; 
        padding: 0; 
        white-space: normal; 
    }

    progress {
        vertical-align: baseline;
    }

    textarea {
        overflow: auto;
    }

    [type="checkbox"],
    [type="radio"] {
        box-sizing: border-box; 
        padding: 0; 
    }

    [type="number"]::-webkit-inner-spin-button,
    [type="number"]::-webkit-outer-spin-button {
        height: auto;
    }

    [type="search"] {
        -webkit-appearance: textfield; 
        outline-offset: -2px; 
    }

    [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none;
    }

    ::-webkit-file-upload-button {
        -webkit-appearance: button; 
        font: inherit; 
    }

    details {
        display: block;
    }

    summary {
        display: list-item;
    }

    template {
        display: none;
    }

    [hidden] {
        display: none;
    }
`