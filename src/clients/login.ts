import { Login } from '../store/module/user/types';
import { API_HOST } from './products';

export const userLogin = async () => {
    const login: Login = {
        username: 'claudio.rojas',
        password: '123.123'
    }
    const url = `${API_HOST}/auth/login`
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(login),
    })
    return await response.json()
}