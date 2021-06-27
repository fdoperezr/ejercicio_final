import { PRODUCT_GETALL_FAILED, PRODUCT_GETALL_START, PRODUCT_GETALL_SUCCESS } from "./getAllReducer"
import { createProduct, deleteProduct, getAllProduct, getProduct } from "../../../clients/products"
import { Product, ProductCreate } from "./types"
import { PRODUCT_CREATE_FAILED, PRODUCT_CREATE_START, PRODUCT_CREATE_SUCCESS } from "./createReducer"
import { PRODUCT_GETONE_FAILED, PRODUCT_GETONE_START, PRODUCT_GETONE_SUCCESS } from "./getOneReducer"
import { PRODUCT_DELETEONE_FAILED, PRODUCT_DELETEONE_START, PRODUCT_DELETEONE_SUCCESS } from "./deleteOneReducer"

export const productGetAllAction = () => (dispatch: any, getState: any) => {
    dispatch({ type: PRODUCT_GETALL_START, payload: null })
    getAllProduct().then(data => {
        dispatch({ type: PRODUCT_GETALL_SUCCESS, payload: data })
    }).catch(e => {
        dispatch({ type: PRODUCT_GETALL_FAILED, payload: e })
    })
}

export const productCreateAction = (product: ProductCreate, token: string) => (dispatch: any, getState: any) => {
    dispatch({ type: PRODUCT_CREATE_START, payload: null })
    createProduct(product, token).then(data => {
        dispatch({ type: PRODUCT_CREATE_SUCCESS, payload: data })
    }).catch(e => {
        dispatch({ type: PRODUCT_CREATE_FAILED, payload: e })
    })
}


export const productGetOneAction = (productId: number) => (dispatch: any, getState: any) => {
    dispatch({ type: PRODUCT_GETONE_START, payload: null })
    getProduct(productId).then(data => {
        dispatch({ type: PRODUCT_GETONE_SUCCESS, payload: data })
    }).catch(e => {
        dispatch({ type: PRODUCT_GETONE_FAILED, payload: e })
    })
}

export const productDeleteOneAction = (productId: number) => (dispatch: any, getState: any) => {
    dispatch({ type: PRODUCT_DELETEONE_START, payload: null })
    deleteProduct(productId).then(data => {
        dispatch({ type: PRODUCT_DELETEONE_SUCCESS, payload: data })
    }).catch(e => {
        dispatch({ type: PRODUCT_DELETEONE_FAILED, payload: e })
    })
}