import { Selectors } from "../../types"
import { Product } from "./types"

export const initialStateUpdate : Selectors<Product> = {
    data: {},
    success: null,
    error: null,
    errorMessage: '',
    loading: false,
}

export const PRODUCT_UPDATE_START = 'PRODUCT_UPDATE_START'
export const PRODUCT_UPDATE_SUCCESS = 'PRODUCT_UPDATE_SUCCESS'
export const PRODUCT_UPDATE_FAILED = 'PRODUCT_UPDATE_FAILED'

const reducer = (prevState = initialStateUpdate, action: { type: string, payload: any }) => {
    switch (action.type) {
        case PRODUCT_UPDATE_START:
            return {
                ...prevState,
                loading: true,
            }
        case PRODUCT_UPDATE_FAILED:
            return {
                ...prevState,
                loading: false,
                error: true,
                success: false,
                errorMessage: action.payload,
            } 
        case PRODUCT_UPDATE_SUCCESS:
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