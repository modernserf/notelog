import { combineReducers } from "redux"
// import { call, put } from "redux-saga"
import { routeReducer } from "react-router-redux"

export const reducer = combineReducers({
    routing: routeReducer,
})

export const sagas = []
