const variables = {
    colorPrimary: '#5558CA',
    colorSecondary: '#C837AB',
    colorDanger: '#FFC5C5',
    colorWarning: '#FFEFAC',
    navHeight: '100px',
    gray: '#424242',
    blue: '#21235A'
}

const lightMode = {
    variables,
    colors: {
        text: '#111827',
        background: '#ffffff',
        gray: variables.gray,
        blue: variables.blue,
        danger: variables.colorDanger,
        primary: variables.colorPrimary,
        warning: variables.colorWarning,
        secondary: variables.colorPrimary,
        gradient: `linear-gradient(252.78deg, ${variables.colorPrimary} 20.97%, ${variables.colorSecondary} 76.04%)`
    }
}

export default lightMode
