import Pokemon from '@/components/containers/pokemon/Pokemon'
import React from 'react'

const home = <h1>general Pokemon Page</h1>
const pokemon = ({ name }) => (
    <Pokemon name={name} errorMsg="ups! some fail" fallback="loading pokemon info" />
)

const news = <h1>news</h1>
const comunity = <h1>comunity</h1>

type Route = {
    label: string
    to: string
    render: JSX.Element | ((data: any) => JSX.Element)
    path: string
}
const routes: Route[] = [
    { label: 'General', to: '/', render: home, path: '/' },
    { label: 'Pokemon', to: '/pokemon', render: pokemon, path: '/pokemon/:name' },
    { label: 'News', to: '/news', render: news, path: '/news' },
    { label: 'Comunity', to: '/comunity', render: comunity, path: '/comunity' },
]
export default routes
