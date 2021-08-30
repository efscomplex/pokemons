import Card from '@/components/containers/pokemons/pokeCard/Card'
import type { Pokemon } from '@/components/containers/pokemons/Pokemons'
import React from 'react'
import styled from 'styled-components'

type ListProps = {
    pokemons: Pokemon[]
    onClickCard: (name: string) => React.MouseEventHandler<HTMLDivElement> | undefined
}

const PokemonList: React.FC<ListProps> = ({ pokemons, onClickCard }) => {
    return (
        <List>
            {pokemons.map((pokemon, i) => (
                <Card pokemon={pokemon} key={i} onClick={onClickCard} />
            ))}
        </List>
    )
}

const List = styled('div')`
    display: flex;
    flex-wrap: wrap;
    gap: 4rem 2rem;
    & > * {
        background-color: purple;
        color: white;
        border-radius: 7px;
        padding: 0.7rem;
    }
`
export default PokemonList
