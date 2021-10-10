import { createGlobalStyle } from 'styled-components';
import env from '../../env.json';

export const GlobalStyle = createGlobalStyle `
    /****************** fonts ************************ */
    @font-face {
        font-family: 'Roboto';
        src: local('Roboto'),
            local('Roboto-Regular'),
            url('./fonts/Roboto.woff2') format('woff2'),
            url('./fonts/Roboto.woff') format('woff');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'Roboto';
        src: local('Roboto Bold'),
            local('Roboto-Bold'),
            url('./fonts/Robotobold.woff2') format('woff2'),
            url('./fonts/Robotobold.woff') format('woff');
        font-weight: 700;
        font-style: normal;
    }
    :root {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;

        &::-webkit-scrollbar {
            width: 15px;
        }

        &::-webkit-scrollbar-thumb {
            background-color: ${env.colors.scroll};
            border-radius: 100px;
        }
    }
    /* ***************** reset & global********************** */
    *,
    *::before,
    *::after {
        -webkit-box-sizing: inherit;
            box-sizing: inherit;
    }

    body {
        min-width: 320px;
        min-height: 100vh;
        margin: 0;
        background-color: ${env.colors.brown};
        font-family: "Roboto", Arial, sans-serif;
        font-size: ${env.fonts.mainFont.size};
        line-height: ${env.fonts.mainFont.line}
        font-weight: 400;
        color: ${env.colors.mainText};
        overflow-x: hidden;
    }

    /* Document */
    html {
        line-height: 1.15;
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: transparent;
    }

    /* Sections */
    main {
        display: block;
    }

    /* Vertical rhythm */
    p,
    table,
    blockquote,
    address,
    pre,
    iframe,
    form,
    figure,
    dl {
        margin: 0;
    }

    /* Headings */
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-size: inherit;
        font-weight: inherit;
        margin: 0;
    }

    /* Lists (enumeration) */
    ul,
    ol,
    li {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    /* Lists (definition) */
    dt {
        font-weight: bold;
    }

    dd {
        margin-left: 0;
    }

    /* Grouping content */
    hr {
        box-sizing: content-box;
        height: 0;
        overflow: visible;
        border-top-width: 1px;
        margin: 0;
        clear: both;
        color: inherit;
    }

    pre {
        font-family: monospace, monospace;
        font-size: inherit;
    }

    address {
        font-style: inherit;
    }

    /* Text-level semantics */
    a {
        background-color: transparent;
        text-decoration: none;
        color: inherit;
    }

    abbr[title] {
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
        font-size: inherit;
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

    /* Replaced content */
    svg,
    img,
    embed,
    object,
    iframe {
        vertical-align: bottom;
    }

    /* Forms */
    button,
    input,
    optgroup,
    select,
    textarea {
        -webkit-appearance: none;
        appearance: none;
        vertical-align: middle;
        color: inherit;
        font: inherit;
        background: transparent;
        padding: 0;
        margin: 0;
        border-radius: 0;
        text-align: inherit;
        text-transform: inherit;
    }

    [type="checkbox"] {
        -webkit-appearance: checkbox;
        appearance: checkbox;
    }

    [type="radio"] {
        -webkit-appearance: radio;
        appearance: radio;
    }

    button,
    [type="button"],
    [type="reset"],
    [type="submit"] {
        cursor: pointer;
        outline: none;
        border: none;
    }

    button:disabled,
    [type="button"]:disabled,
    [type="reset"]:disabled,
    [type="submit"]:disabled {
        cursor: default;
    }

    :-moz-focusring {
        outline: auto;
    }

    select:disabled {
        opacity: inherit;
    }

    option {
        padding: 0;
    }

    fieldset {
        margin: 0;
        padding: 0;
        min-width: 0;
    }

    legend {
        padding: 0;
    }

    progress {
        vertical-align: baseline;
    }

    textarea {
        overflow: auto;
    }

    [type="number"]::-webkit-inner-spin-button,
    [type="number"]::-webkit-outer-spin-button {
        height: auto;
    }

    [type="search"] {
        outline-offset: -2px;
    }

    [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none;
    }

    ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
    }

    label[for] {
        cursor: pointer;
    }

    /* Interactive */
    details {
        display: block;
    }

    summary {
        display: list-item;
    }

    [contenteditable]:focus {
        outline: auto;
    }

    /* Tables */
    table {
        border-color: inherit;
    }

    caption {
        text-align: left;
    }

    td,
    th {
        vertical-align: top;
        padding: 0;
    }

    th {
        text-align: left;
        font-weight: bold;
    }
    /* ******************************** */

    .invalid {
        color: #f93c00;
    }

    .footer__column-item {
        margin-bottom: 5px;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
    }
`;