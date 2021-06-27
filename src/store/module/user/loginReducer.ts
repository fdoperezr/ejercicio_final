import { Selectors } from "../../types"
import { LoginResponse } from "./types"

export const initialStateLogin : Selectors<LoginResponse> = {
    data: {},
    success: null,
    error: null,
    errorMessage: '',
    loading: false,
}


export const USER_LOGIN_START = 'USER_LOGIN_START'
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED'

const reducer = (prevState = initialStateLogin, action: { type: string, payload: any }) => {
    switch (action.type) {
        case USER_LOGIN_START:
            return {
                ...prevState,
                loading: true,
            }
        case USER_LOGIN_FAILED:
            return {
                ...prevState,
                loading: false,
                error: true,
                success: false,
                errorMessage: action.payload,
            } 
        case USER_LOGIN_SUCCESS:
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