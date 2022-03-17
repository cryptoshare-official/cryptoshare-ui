export interface AppModalInterface {
    width?: number | string
    height?: number | string
    maxWidth?: number | string
    isOpen: boolean
    header?: JSX.Element
    footer?: JSX.Element
    onBackdropClick?: Function
    onClose?: Function
}
