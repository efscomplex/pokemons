import PokemonList from '@/components/containers/pokemons/PokemonList'
import pokemonsRender from '@/components/containers/pokemons/pokemonRender'
import pokemonsQuery from '@/graphql/queries/pokemons'
import asLazy from '@/HOCs/asLazy'
import { createGqlClient } from '@/modules/gql/Gql'
import { useContainer } from '@/services/providers/ContainerContext'
import { Clients } from '@/types/Clients'
import React, { useMemo } from 'react'

export type Pokemon = {
    url: string
    name: string
    image: string
    artwork: string
    dreamworld: string
}

type PokeProps = {
    initialData: any
}

const { URL_POKEMONS } = __SNOWPACK_ENV__
createGqlClient(URL_POKEMONS, Clients.POKEMON)

const Pokemons: React.FC<PokeProps> = ({ initialData }) => {
    const { value } = useContainer()

    const pokemons = useMemo(() => {
        return initialData.pokemons.results.filter((p) => p.name.includes(value))
    }, [value])

    return <PokemonList>{pokemons.map(pokemonsRender)}</PokemonList>
}

export default asLazy<PokeProps>(Pokemons, Clients.POKEMON, pokemonsQuery)
