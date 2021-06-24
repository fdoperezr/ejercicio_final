export type ProductCreate = {
    imgUrl: string;
    name: string;
    price: number;
    description: string;
}

export type Product = {
    imgUrl?: string;
    name?: string;
    price?: number;
    description?: string;
    id?: number;
}