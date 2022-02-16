export const variablesCSS = {
    colorPrimary: '#5558CA',
    colorSecondary: '#C837AB',
    colorDanger: '#FFC5C5',
    colorWarning: '#FFEFAC',
    navHeight: '100px',
    gray: '#424242',
    blue: '#21235A'
}

const lightMode = {
    variables: variablesCSS,
    colors: {
        text: '#111827',
        background: '#ffffff',
        gray: variablesCSS.gray,
        blue: variablesCSS.blue,
        danger: variablesCSS.colorDanger,
        primary: variablesCSS.colorPrimary,
        warning: variablesCSS.colorWarning,
        secondary: variablesCSS.colorSecondary,
        gradient: `linear-gradient(252.78deg, ${variablesCSS.colorPrimary} 20.97%, ${variablesCSS.colorSecondary} 76.04%)`
    }
}

export default lightMode
