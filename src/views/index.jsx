import "./reset.css"
import "./style.css"
import React from "react"
import { Provider } from "react-redux"
import { Router, Route } from "react-router"

export default class App extends React.Component {
    render () {
        const { store, history } = this.props
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Route path="/" component={HelloWorld} />
                </Router>
            </Provider>
        )
    }
}

function HelloWorld () {
    return <div>Hello, World!</div>
}
