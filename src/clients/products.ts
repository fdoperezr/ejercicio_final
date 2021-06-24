import { ProductCreate } from "../store/module/products/types"

const API_HOST = 'http://localhost:4000'

export const getAllProduct = async () => {
    //return new Promise((res, rej) => {
    //   rej('ERROR GENERADO')
    // })
    const url = `${API_HOST}/products`
    const response = await fetch(url)
    return await response.json()
}

export const getProduct = async (id: number) => {
    const url = `${API_HOST}/products/${id}`
    const response = await fetch(url)
    return await response.json()
}

export const createProduct = async (product: ProductCreate) => {
    const url = `${API_HOST}/products`
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(product),
    })
    return await response.json()
}


export const deleteProduct = async (id: number) => {
    const url = `${API_HOST}/products/${id}`
    const response = await fetch(url, {
        method: 'DELETE'
    })
    return await response.json()
}
