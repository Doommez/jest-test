import {combineReducers, configureStore} from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterReducer";

const rootReducer = combineReducers({
    counter: counterReducer,
})

export const createReduxStore = (initialState={counter: {value:1000}})=>configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
})