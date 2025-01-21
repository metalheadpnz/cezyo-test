import { createGlobalStyle } from "styled-components";
import { colors } from './colors.ts';
import { fontStyles } from './fonts.ts';

export const GlobalStyles = createGlobalStyle`
    ${fontStyles}
    html {
        font-size: 14px;
        font-family: 'Raleway', sans-serif;
        color: ${colors.primary};

    }
`