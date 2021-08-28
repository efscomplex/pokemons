import React from 'react'
import Pokemons from '@/components/containers/pokemons/Pokemons'
import Layout from '@/components/layout/Layout'
import { Router, Route } from 'wouter'

import '@/styles/index.sass'

function App() {
    return (
        <Router>
            <Layout>
                <Route path="/">
                    <Pokemons fallback="loading pokemons" />
                </Route>
                <Route path="/pokemons/:id">
                    <h1>pokemon info page</h1>
                </Route>
            </Layout>
        </Router>
    )
}

export default App
