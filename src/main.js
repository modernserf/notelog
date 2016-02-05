import "babel-polyfill"
import "whatwg-fetch"
import DOM from "react-dom"
import { createStore, applyMiddleware, combineReducers } from "redux"
import { createHistory } from "history"
import { syncHistory, routeReducer } from "react-router-redux"
import sagaMiddleware from "redux-saga"
import view from "./views"

const reducer = combineReducers({
    routing: routeReducer,
})

const history = createHistory()
const reduxRouterMiddleware = syncHistory(history)
const store = createStore(
    reducer,
    applyMiddleware(
        sagaMiddleware(),
        syncHistory(history)))

reduxRouterMiddleware.listenForReplays(store, (state) => state.routing.location)

document.addEventListener("DOMContentLoaded", () => {
    DOM.render(view(store, history), document.getElementById("app"))
})
