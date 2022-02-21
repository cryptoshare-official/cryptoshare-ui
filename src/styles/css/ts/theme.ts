export const variablesCSS = {
    colorPrimary: '#5558CA',
    colorSecondary: '#C837AB',
    colorDanger: '#FFC5C5',
    colorWarning: '#FFEFAC',
    colorSuccess: '#7ED321',
    footerHeight: '170px',
    navHeight: '100px',
    gray: '#424242',
    blue: '#21235A',
    gray_1: '#333333'
}

const lightMode = {
    variables: variablesCSS,
    colors: {
        text: '#111827',
        background: '#ffffff',
        gray: variablesCSS.gray,
        blue: variablesCSS.blue,
        gray_1: variablesCSS.gray_1,
        danger: variablesCSS.colorDanger,
        primary: variablesCSS.colorPrimary,
        warning: variablesCSS.colorWarning,
        success: variablesCSS.colorSuccess,
        secondary: variablesCSS.colorSecondary,
        gradient: `linear-gradient(252.78deg, ${variablesCSS.colorPrimary} 20.97%, ${variablesCSS.colorSecondary} 76.04%)`
    }
}

export default lightMode
