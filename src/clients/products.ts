import { Product, ProductCreate } from "../store/module/products/types"

export const API_HOST = 'http://localhost:4000'

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

export const createProduct = async (product: ProductCreate, token: string) => {
    const url = `${API_HOST}/products`
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(product),
        headers: {
            'Authorization' : `Bearer ${token}`
        }
    })
    return await response.json()
}


export const deleteProduct = async (id: number, token: string) => {
    const url = `${API_HOST}/products/${id}`
    const response = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Authorization' : `Bearer ${token}`
        }
    })
    return await response.status
}


export const updateProduct = async (id: number,product: Product, token: string) => {
    const url = `${API_HOST}/products/${id}`
    const response = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify(product),
        headers: {
            'Authorization' : `Bearer ${token}`
        }
    })
    return await response.status
}