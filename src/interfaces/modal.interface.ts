export interface AppModalInterface {
    width?: number
    height?: number | string
    isOpen: boolean
    header?: JSX.Element
    footer?: JSX.Element
    onBackdropClick?: Function
    onClose?: Function
}
