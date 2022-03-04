export interface ItemInterface {
    name: string
    route: string
    icon: JSX.Element
}

export interface MenuItemsInterface extends ItemInterface {
    subItems: ItemInterface[]
}
