import PokemonList from '@/components/containers/pokemons/PokemonList'
import pokemonsQuery from '@/graphql/queries/pokemons'
import asLazy from '@/HOCs/asLazy'
import { createGqlClient } from '@/modules/gql/Gql'
import { useContainer } from '@/services/providers/ContainerContext'
import { Clients } from '@/types/Clients'
import React, { useEffect, useMemo } from 'react'
import { useLocation } from 'wouter'
import { TransitionGroup } from 'react-transition-group'
import styled from 'styled-components'

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
    const { search, setPokemons } = useContainer()
    const [location, setLocation] = useLocation()

    useEffect(() => {
        setPokemons(initialData.pokemons.results)
    }, [])

    const pokemons = useMemo(() => {
        return initialData.pokemons.results.filter((p) => p.name.includes(search))
    }, [search])

    const onClickCard = (name: string) => (e) => {
        setLocation(`${location}/${name}`)
    }

    return <PokemonList pokemons={pokemons} onClickCard={onClickCard} />
}
export default asLazy<PokeProps>(Pokemons, Clients.POKEMON, pokemonsQuery)
