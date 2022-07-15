import { createGlobalStyle } from 'styled-components'
import './fonts/index.css'

export const GlobalStyles = createGlobalStyle`   
   *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;

        font-family: 'Poppins', sans-serif;
    }
`
