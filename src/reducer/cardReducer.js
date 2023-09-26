const SET_CARDS = "SET_CARDS"
const ADD_CARD = "ADD_CARD"
const DELETE_CARD = "DELETE_CARD"
const EDIT_CARD = "EDIT_CARD"
const EDIT_CARD_BACKGROUND = "EDIT_CARD_BACKGROUND"
const EDIT_CARD_UPPER_TEXT = "EDIT_CARD_UPPER_TEXT"
const EDIT_CARD_BOTTOM_TEXT = "EDIT_CARD_BOTTOM_TEXT"
const EDIT_CARD_UPPER_FONT = "EDIT_CARD_UPPER_FONT"
const EDIT_CARD_BOTTOM_FONT = "EDIT_CARD_BOTTOM_FONT"
const EDIT_CARD_NAME = "EDIT_CARD_NAME"
const EDIT_CARD_ROLE = "EDIT_CARD_ROLE"
const EDIT_CARD_TELEPHONE = "EDIT_CARD_TELEPHONE"
const EDIT_CARD_ADDRESS = "EDIT_CARD_ADDRESS"
const EDIT_CARD_EMAIL = "EDIT_CARD_EMAIL"
const EDIT_CARD_WEBSITE = "EDIT_CARD_WEBSITE"
const EDIT_CARD_NOTE = "EDIT_CARD_NOTE"

const defaultState = {
    cards: [],
}

export default function cardReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_CARDS: return {...state, cards: action.payload}
        case ADD_CARD: return {...state, cards: [...state.cards, action.payload]}
        case DELETE_CARD: return {...state, cards: [...state.cards.filter(card => card._id != action.payload)]}
        case EDIT_CARD: return {...state, cards: state.cards.map(card => card._id === action.payload._id ? (card.backgroundColor = action.payload) : card)}
        case EDIT_CARD_BACKGROUND: return {...state, cards: state.cards.map(card => card._id === action.payload._id ? (card.backgroundImage = action.payload) : card)}
        case EDIT_CARD_UPPER_TEXT: return {...state, cards: state.cards.map(card => card._id === action.payload._id ? (card.upperTextColor = action.payload) : card)}
        case EDIT_CARD_BOTTOM_TEXT: return {...state, cards: state.cards.map(card => card._id === action.payload._id ?(card.bottomTextColor = action.payload) :card)}
        case EDIT_CARD_UPPER_FONT: return {...state, cards:state.cards.map(card => card._id === action.payload._id ? (card.upperFontStyle = action.payload) : card)}
        case EDIT_CARD_BOTTOM_FONT: return {...state, cards:state.cards.map(card => card._id === action.payload._id ? (card.bottomFontStyle = action.payload) : card)}
        case EDIT_CARD_NAME: return {...state, cards:state.cards.map(card => card._id === action.payload._id ? (card.name = action.payload) : card)}
        case EDIT_CARD_ROLE: return {...state, cards:state.cards.map(card => card._id === action.payload._id ? (card.position = action.payload) : card)}
        case EDIT_CARD_TELEPHONE: return {...state, cards:state.cards.map(card => card._id === action.payload._id ? (card.phone = action.payload) : card)}
        case EDIT_CARD_ADDRESS: return {...state, cards:state.cards.map(card => card._id === action.payload._id ? (card.address = action.payload) : card)}
        case EDIT_CARD_EMAIL: return {...state, cards:state.cards.map(card => card._id === action.payload._id ? (card.email = action.payload) : card)}
        case EDIT_CARD_WEBSITE: return {...state, cards:state.cards.map(card => card._id === action.payload._id ? (card.website = action.payload) : card)}
        case EDIT_CARD_NOTE: return {...state, cards:state.cards.map(card => card._id === action.payload._id ? (card.note = action.payload) : card)}

        default:
            return state
    }
}

export const setCards = (cards) => ({type: SET_CARDS, payload: cards})
export const addCard = (card) => ({type: ADD_CARD, payload: card})
export const editCard = (cards) => ({type: EDIT_CARD, payload: cards})
export const editCardBackgroundImage = (cards) => ({type: EDIT_CARD_BACKGROUND, payload: cards})
export const editCardUpperText = (cards) => ({type: EDIT_CARD_UPPER_TEXT, payload: cards})
export const editCardBottomText = (cards) => ({type: EDIT_CARD_BOTTOM_TEXT, payload: cards})
export const editCardUpperFontStyle = (cards) => ({type: EDIT_CARD_UPPER_FONT, payload: cards})
export const editCardBottomFontStyle = (cards) => ({type: EDIT_CARD_BOTTOM_FONT, payload: cards})
export const editCardName = (cards) => ({type: EDIT_CARD_NAME, payload: cards})
export const editCardRole = (cards) => ({type: EDIT_CARD_ROLE, payload: cards})
export const editCardTelephone = (cards) => ({type: EDIT_CARD_TELEPHONE, payload: cards})
export const editCardAddress = (cards) => ({type: EDIT_CARD_ADDRESS, payload: cards})
export const editCardEmail = (cards) => ({type: EDIT_CARD_EMAIL, payload: cards})
export const editCardWebsite = (cards) => ({type: EDIT_CARD_WEBSITE, payload: cards})
export const editCardNote = (cards) => ({type: EDIT_CARD_NOTE, payload: cards})
export const deleteCardAction = (cards) => ({type: DELETE_CARD, payload: cards})
