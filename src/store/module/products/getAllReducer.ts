import { Selectors } from "../../types"
import { Product } from "./types"

export const initialStateGetAll: Selectors<Product[]>= {
    data: [],
    success: null,
    error: null,
    errorMessage: '',
    loading: false,
}

export const PRODUCT_GETALL_START = 'PRODUCT_GETALL_START'
export const PRODUCT_GETALL_SUCCESS = 'PRODUCT_GETALL_SUCCESS'
export const PRODUCT_GETALL_FAILED = 'PRODUCT_GETALL_FAILED'

const reducer = (prevState = initialStateGetAll, action: { type: string, payload: any }) => {
    switch (action.type) {
        case PRODUCT_GETALL_START:
            return {
                ...prevState,
                loading: true,
            }
        case PRODUCT_GETALL_FAILED:
            return {
                ...prevState,
                loading: false,
                error: true,
                success: false,
                errorMessage: action.payload,
            } 
        case PRODUCT_GETALL_SUCCESS:
            return {
                ...prevState,
                loading: false,
                error: false,
                success: true,
                data: action.payload,
            } 
    
        default:
            return prevState
    }
}

export default reducer