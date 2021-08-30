import { Card } from '@/components/containers/pokemon/CardStyles'
import type { Pokemon } from '@/components/containers/pokemons/Pokemons'
import { notify } from '@/components/ui/error/ErrorBoundary'
import Map from '@/components/utilities/Map'
import React from 'react'
import styled from 'styled-components'

type PokemonCardProps = {
    pokemon: Pokemon
    abilities: any[]
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon, abilities }) => {
    return (
        <Card>
            <h1>{pokemon.name}</h1>
            <Map
                as={Abilities}
                from={abilities}
                render={(ab) => <p>{ab.ability.name}</p>}
            />
        </Card>
    )
}

const Abilities = styled('div')`
    background-color: purple;
    color: white;
    display: inline-block;
    padding: 1rem;
`
export default PokemonCard
