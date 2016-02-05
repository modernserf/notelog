import React from "react"
import { Provider } from "react-redux"
import { Router, IndexRoute, Route, Redirect } from "react-router"

import "./reset.css"
import "./style.css"

export default function (store, history) {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Redirect from="/" to="/people" />
                <Route path="/people">
                    <IndexRoute component={App}/>
                </Route>
            </Router>
        </Provider>
    )
}

function App () {
    return (
        <div>Hello, World!</div>
    )
}
