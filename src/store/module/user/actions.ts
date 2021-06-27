import { userLogin } from "../../../clients/login"
import { USER_LOGIN_START, USER_LOGIN_FAILED, USER_LOGIN_SUCCESS } from "./loginReducer"

export const loginAction = () => (dispatch: any, getState: any) => {
    dispatch({ type: USER_LOGIN_START, payload: null })
    userLogin().then(data => {
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data })
    }).catch(e => {
        dispatch({ type: USER_LOGIN_FAILED, payload: e })
    })
}