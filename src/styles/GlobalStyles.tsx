import { createGlobalStyle } from "styled-components";
import { colors } from './colors.ts';
import { fontStyles } from './fonts.ts';

export const GlobalStyles = createGlobalStyle`
    ${fontStyles}
    
    body {
        font-family: 'Raleway', sans-serif; color: ${colors.primary};
        font-size: 14px;
    }
`