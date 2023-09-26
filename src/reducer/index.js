import {combineReducers} from "redux";
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit'

import userReducer from "./userReducer";
import cardReducer from "./cardReducer";

const rootReducer = combineReducers({
    user: userReducer,
    cards: cardReducer
})

export const store = configureStore({reducer: rootReducer, middleware: [thunk]});
