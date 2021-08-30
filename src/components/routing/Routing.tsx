import Pokemon from '@/components/containers/pokemon/Pokemon'
import Pokemons from '@/components/containers/pokemons/Pokemons'
import Layout from '@/components/layout/Layout'
import React from 'react'
import { Route, Router, Switch } from 'wouter'

const Routing: React.FC = () => {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route path="/">
                        <h1>general Pokemon Page</h1>
                    </Route>
                    <Route path="/pokemon/:name">
                        {({ name }) => (
                            <Pokemon
                                name={name}
                                errorMsg="ups! some fail"
                                fallback="loading pokemon info"
                            />
                        )}
                    </Route>
                    <Route path="/pokemon">
                        <Pokemons fallback="loading pokemons" />
                    </Route>
                    <Route path="/news">
                        <h1>news</h1>
                    </Route>
                    <Route path="/comunity">
                        <h1>comunity</h1>
                    </Route>
                </Switch>
            </Layout>
        </Router>
    )
}

export default Routing
