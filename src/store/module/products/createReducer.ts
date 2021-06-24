const initialStateGetAll = {
    data: {},
    success: null,
    error: null,
    errorMessage: '',
    loading: false,
}

export const PRODUCT_CREATE_START = 'PRODUCT_CREATE_START'
export const PRODUCT_CREATE_SUCCESS = 'PRODUCT_CREATE_SUCCESS'
export const PRODUCT_CREATE_FAILED = 'PRODUCT_CREATE_FAILED'

const reducer = (prevState = initialStateGetAll, action: { type: string, payload: any }) => {
    switch (action.type) {
        case PRODUCT_CREATE_START:
            return {
                ...prevState,
                loading: true,
            }
        case PRODUCT_CREATE_FAILED:
            return {
                ...prevState,
                loading: false,
                error: true,
                success: false,
                errorMessage: action.payload,
            } 
        case PRODUCT_CREATE_SUCCESS:
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