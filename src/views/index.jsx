import "./reset.css"
import "./style.css"
import React from "react"
import { Provider } from "react-redux"
import { Router, IndexRoute, Route, Redirect } from "react-router"
import { PersonListView } from "./PersonList"

export default function (store, history) {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Redirect from="/" to="/people" />
                <Route path="/people">
                    <IndexRoute component={PersonListView}/>
                    <Route path=":id" component={DetailPlaceholder}/>
                </Route>
            </Router>
        </Provider>
    )
}

function DetailPlaceholder ({params}) {
    return (
        <div>TODO: detail page for {params.id}</div>
    )
}
