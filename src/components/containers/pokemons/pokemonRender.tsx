import type { Pokemon } from '@/components/containers/pokemons/Pokemons'
import Card from '@/components/ui/card/Card'
import React from 'react'
import styled from 'styled-components'

const pokemonsRender = (pokemon: Pokemon, i) => (
    <Card key={i}>
        <h2 className="title">{pokemon.name}</h2>
        <div>
            <Poket src={pokemon.image} alt="image-pokemon" />
            <img src={pokemon.artwork} alt="image-pokemon" width="100px" />
            <img src={pokemon.dreamworld} alt="image-pokemon" width="100px" />
        </div>
    </Card>
)
const Poket = styled('img')`
    position: absolute;
    top: -4rem;
    left: -2rem;
    max-width: 6rem;
`
export default pokemonsRender
