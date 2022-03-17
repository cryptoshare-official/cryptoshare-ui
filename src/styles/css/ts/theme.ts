const navHeight = 100
const footerHeight = 170

export const variablesCSS = {
    gray: '#424242',
    blue: '#21235A',
    gray_1: '#333333',
    colorDanger: '#B03525',
    colorPrimary: '#5558CA',
    colorWarning: '#D3CE27',
    colorSuccess: '#7ED321',
    colorSecondary: '#C837AB',
    navHeight: `${navHeight}px`,
    footerHeight: `${footerHeight}px`,
    paddingTopContainer: `calc(${navHeight}px + 26px)`
}

const lightMode = {
    variables: variablesCSS,
    colors: {
        text: '#111827',
        background: '#fafafa',
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
