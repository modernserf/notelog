import "babel-polyfill"
import "whatwg-fetch"
import React from "react"
import DOM from "react-dom"
import { createStore, applyMiddleware, compose } from "redux"
import { createHistory } from "history"
import { syncHistory } from "react-router-redux"
import sagaMiddleware from "redux-saga"
import App from "./views"
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

reduxRouterMiddleware.listenForReplays(store,
    (state) => state.routing.location)

document.addEventListener("DOMContentLoaded", () => {
    DOM.render(React.createElement(App, {store, history}),
    document.getElementById("app"))
})
