import axios from 'axios'
import {setUser} from '../reducer/userReducer'
import {API_URL} from '../config'

export const login = (email, password) => {
    return async dispatch => {
        try {
            const response = await axios.post(`${API_URL}/auth/login`, {
                email,
                password,
            })
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}

export const registration = (email, password) => {
    return async dispatch => {
        try{
            const response = await axios.post(`${API_URL}/auth/registration`, {
                email,
                password
            })
            alert(response.data.message)
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}

export const auth = () => {
    return async dispatch => {
        try {
            const response = await axios.get(`${API_URL}/auth/auth`,
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
            )
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            localStorage.removeItem('token')
        }
    }
}

