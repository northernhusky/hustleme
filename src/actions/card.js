import axios from 'axios';
import {
    addCard,
    setCards,
    deleteCardAction,
    editCard,
    editCardBackgroundImage,
    editCardBottomText,
    editCardUpperText,
    editCardUpperFontStyle,
    editCardBottomFontStyle,
    editCardName,
    editCardRole,
    editCardTelephone,
    editCardAddress,
    editCardEmail,
    editCardWebsite,
    editCardNote
} from '../reducer/cardReducer'
import {API_URL} from '../config'

export function getCards() {
    return async dispatch => {
        try {
            const response = await axios.get(`${API_URL}/cards`, {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            })
            dispatch(setCards(response.data))
            console.log(response.data)
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}

export function createCard(name, position, phone, address, email, website, logo, linkedIn, backgroundColor, backgroundImage, isOwner, upperTextColor, bottomTextColor, upperFontStyle, bottomFontStyle) {
    return async dispatch => {
        try {
            const response = await axios.post(`${API_URL}/cards`,
                {name, position, phone, address, email, website, logo, linkedIn, backgroundColor, backgroundImage, isOwner, upperTextColor, bottomTextColor, upperFontStyle, bottomFontStyle},
                {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
                })
            dispatch(addCard(response.data))
            // alert("Card has been added successfully")
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}

export function updateCard(card, backgroundColor) {
    return async dispatch => {
        try {
            const response = await axios.put(`${API_URL}/cards/${card._id}`,
                {backgroundColor},
                {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
                })
            dispatch(editCard(response.data))
            console.log("DONE " + backgroundColor)
        } catch (e) {
            alert(e?.response?.data?.message)
        }
    }
}

export function updateCardBackgroundImage(card, backgroundImage) {
    return async dispatch => {
        try {
            const response = await axios.put(`${API_URL}/cards/${card._id}`,
                {backgroundImage},
                {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
                })
            dispatch(editCardBackgroundImage(response.data))
            console.log("DONE " + backgroundImage)
        } catch (e) {
            alert(e?.response?.data?.message)
        }
    }
}

export function updateCardUpperText(card, upperTextColor){
    return async dispatch => {
        try {
            const response = await axios.put(`${API_URL}/cards/${card._id}`,
                {upperTextColor},
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}
                })
            dispatch(editCardUpperText(response.data))
            console.log("DONE" + upperTextColor)
        } catch (e) {
            alert(e?.response?.data?.message)
        }
    }
}

export function updateCardBottomText(card, bottomTextColor){
    return async dispatch => {
        try {
            const response = await axios.put(`${API_URL}/cards/${card._id}`,
                {bottomTextColor},
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}
                })
            dispatch(editCardBottomText(response.data))
            console.log("DONE" + bottomTextColor)
        } catch (e) {
            alert(e?.response?.data?.message)
        }
    }
}

export function updateCardUpperFontStyle(card, upperFontStyle){
    return async dispatch => {
        try {
            const response = await axios.put(`${API_URL}/cards/${card._id}`,
                {upperFontStyle},
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}
                })
            dispatch(editCardUpperFontStyle(response.data))
            console.log("DONE" + upperFontStyle)
        } catch (e) {
            alert(e?.response?.data?.message)
        }
    }
}

export function updateCardBottomFontStyle(card, bottomFontStyle){
    return async dispatch => {
        try {
            const response = await axios.put(`${API_URL}/cards/${card._id}`,
                {bottomFontStyle},
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}
                })
            dispatch(editCardBottomFontStyle(response.data))
            console.log("DONE" + bottomFontStyle)
        } catch (e) {
            alert(e?.response?.data?.message)
        }
    }
}

export function updateName(card, name){
    return async dispatch => {
        try {
            const response = await axios.put(`${API_URL}/cards/${card._id}`,
                {name},
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}
                })
            dispatch(editCardName(response.data))
            console.log("DONE" + name)
        } catch (e) {
            alert(e?.response?.data?.message)
        }
    }
}

export function updateRole(card, position){
    return async dispatch => {
        try {
            const response = await axios.put(`${API_URL}/cards/${card._id}`,
                {position},
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}
                })
            dispatch(editCardRole(response.data))
            console.log("DONE" + position)
        } catch (e) {
            alert(e?.response?.data?.message)
        }
    }
}

export function updateTelephone(card, phone){
    return async dispatch => {
        try {
            const response = await axios.put(`${API_URL}/cards/${card._id}`,
                {phone},
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}
                })
            dispatch(editCardTelephone(response.data))
            console.log("DONE" + phone)
        } catch (e) {
            alert(e?.response?.data?.message)
        }
    }
}

export function updateAddress(card, address){
    return async dispatch => {
        try {
            const response = await axios.put(`${API_URL}/cards/${card._id}`,
                {address},
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}
                })
            dispatch(editCardAddress(response.data))
            console.log("DONE" + address)
        } catch (e) {
            alert(e?.response?.data?.message)
        }
    }
}

export function updateEmail(card, email){
    return async dispatch => {
        try {
            const response = await axios.put(`${API_URL}/cards/${card._id}`,
                {email},
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}
                })
            dispatch(editCardEmail(response.data))
            console.log("DONE" + email)
        } catch (e) {
            alert(e?.response?.data?.message)
        }
    }
}

export function updateWebsite(card, website){
    return async dispatch => {
        try {
            const response = await axios.put(`${API_URL}/cards/${card._id}`,
                {website},
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}
                })
            dispatch(editCardWebsite(response.data))
            console.log("DONE" + website)
        } catch (e) {
            alert(e?.response?.data?.message)
        }
    }
}

export function editNote(card, note){
    return async dispatch => {
        try {
            const response = await axios.put(`${API_URL}/cards/${card._id}`,
                {note},
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}
                })
            dispatch(editCardNote(response.data))
            console.log("DONE" + note)
        } catch (e) {
            alert(e?.response?.data?.message)
        }
    }
}

export function deleteCard(card) {
    return async dispatch => {
        try {
            const response = await axios.delete(`${API_URL}/cards/${card._id}`,{
                headers:{
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            dispatch(deleteCardAction(card._id))
            alert(response.data.message)
        } catch (e) {
            alert(e?.response?.data?.message)
        }
    }
}

export function searchCards(search) {
    return async dispatch => {
        try {
            const response = await axios.get(`${API_URL}/cards/search?search=${search}`,{
                headers:{
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            dispatch(setCards(response.data))
        } catch (e) {
            alert(e?.response?.data?.message)
        }
    }
}
