import "babel-polyfill"
import "whatwg-fetch"
import DOM from "react-dom"
import { createStore, applyMiddleware, compose } from "redux"
import { createHistory } from "history"
import { syncHistory } from "react-router-redux"
import sagaMiddleware from "redux-saga"
import view from "./views"
import { reducer, sagas } from "./data"

const history = createHistory()
const reduxRouterMiddleware = syncHistory(history)

const addDevTools = window.devToolsExtension
    ? window.devToolsExtension()
    : (f) => f

const store = compose(
    applyMiddleware(
        sagaMiddleware(...sagas),
        syncHistory(history)),
    addDevTools
)(createStore)(reducer)

reduxRouterMiddleware.listenForReplays(store, (state) => state.routing.location)

document.addEventListener("DOMContentLoaded", () => {
    DOM.render(view(store, history), document.getElementById("app"))
})
