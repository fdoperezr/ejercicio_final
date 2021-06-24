import { Selectors } from "../../types"
import { Product } from "./types"

export const initialStateGetOne: Selectors<Product> = {
    data: {},
    success: null,
    error: null,
    errorMessage: '',
    loading: false,
}

export const PRODUCT_GETONE_START = 'PRODUCT_GETONE_START'
export const PRODUCT_GETONE_SUCCESS = 'PRODUCT_GETONE_SUCCESS'
export const PRODUCT_GETONE_FAILED = 'PRODUCT_GETONE_FAILED'

const reducer = (prevState = initialStateGetOne, action: { type: string, payload: any }) => {
    switch (action.type) {
        case PRODUCT_GETONE_START:
            return {
                ...prevState,
                loading: true,
            }
        case PRODUCT_GETONE_FAILED:
            return {
                ...prevState,
                loading: false,
                error: true,
                success: false,
                errorMessage: action.payload,
                data: {}
            } 
        case PRODUCT_GETONE_SUCCESS:
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