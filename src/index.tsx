import createReactApp from '@/modules/react/createReactApp'
import App from './App'
import React from 'react'

createReactApp(<App />)

if (import.meta.hot) {
    import.meta.hot.accept()
}
