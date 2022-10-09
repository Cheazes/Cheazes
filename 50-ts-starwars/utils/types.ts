export interface Hero {
    name: string,
    img: string,
    url: string
}

export interface Characters{
    [key: string]: Hero
}

export interface Item {
    title: string,
    route: string
}