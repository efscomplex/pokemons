import PokemonCard from '@/components/containers/pokemon/PokemonCard'
import Resource from '@/components/utilities/Resource'
import asResource from '@/HOCs/asResource'
import { useContainer } from '@/services/providers/ContainerContext'
import React from 'react'
import { Redirect } from 'wouter'

type PokemonProps = {
    name: string
}

const PokemonContainer: React.FC<PokemonProps> = ({ name }) => {
    const { pokemons } = useContainer()
    const pokemon = pokemons.find?.((p) => p.name === name)

    if (!pokemon) return <Redirect to="/" />

    return (
        <Resource
            url={pokemon.url}
            map={(data) => data.abilities}
            fallback={<h1>loading data</h1>}
        >
            {(abilities) => <PokemonCard pokemon={pokemon} abilities={abilities} />}
        </Resource>
    )
}

export default asResource(PokemonContainer)
