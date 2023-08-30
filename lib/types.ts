
export interface Product {
    id: string,
    categoryId: string,
    name: string,
    price: string,
    description: string,
    images: Image[]
}

export interface Image {
    id: string,
    url: string
}

export interface Category {
    id: string
}