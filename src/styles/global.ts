import { createGlobalStyle } from 'styled-components'
import { lightTheme } from './theme' 

const getCssVarsFromTheme = (theme): string => {
    return Object.keys(theme).reduce((acc, colorKey) => {
        const colorHex = theme[colorKey]

        return acc + `--${colorKey}: ${colorHex};\n`
    }, '')
}

export const GlobalStyle = createGlobalStyle`
    * {
        ${() => {
            return getCssVarsFromTheme(lightTheme)
        }}

        body {
            background-color: var(--base-background);
            margin: 0;
        }

        body, input, textarea, button {
            font: 400 1rem Roboto, sans-serif;
            -webkit-font-smoothing: antialiased;
        }
    }

    #root {
        width: 100%;
    }
`
