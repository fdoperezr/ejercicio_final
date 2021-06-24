import { Selectors } from "../../types"

export const initialStateDeleteOne: Selectors<string>= {
    data: "",
    success: null,
    error: null,
    errorMessage: '',
    loading: false,
}

export const PRODUCT_DELETEONE_START = 'PRODUCT_DELETEONE_START'
export const PRODUCT_DELETEONE_SUCCESS = 'PRODUCT_DELETEONE_SUCCESS'
export const PRODUCT_DELETEONE_FAILED = 'PRODUCT_DELETEONE_FAILED'

const reducer = (prevState = initialStateDeleteOne, action: { type: string, payload: any }) => {
    switch (action.type) {
        case PRODUCT_DELETEONE_START:
            return {
                ...prevState,
                loading: true,
            }
        case PRODUCT_DELETEONE_FAILED:
            return {
                ...prevState,
                loading: false,
                error: true,
                success: false,
                errorMessage: action.payload,
            } 
        case PRODUCT_DELETEONE_SUCCESS:
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