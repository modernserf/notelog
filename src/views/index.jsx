import "./reset.css"
import "./style.css"
import React from "react"
import { Provider } from "react-redux"
import { Router, Route, Redirect } from "react-router"
import { PersonListView, PersonDetailItem } from "./PersonList"

export default function (store, history) {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Redirect from="/" to="/people" />
                <Route path="/people" component={PersonListView}>
                    <Route path=":id" component={PersonDetailItem}/>
                </Route>
            </Router>
        </Provider>
    )
}
