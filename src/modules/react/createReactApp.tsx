import React from 'react'
import ReactDOM from 'react-dom'

const createReactApp = (App: JSX.Element, elementId: string = 'root') => {
    ReactDOM.render(
        <React.StrictMode>{App}</React.StrictMode>,
        document.getElementById(elementId),
    )
}
export default createReactApp
