import { Poket, Card } from '@/components/containers/pokemons/pokeCard/CardStyles'
import type { Pokemon } from '@/components/containers/pokemons/Pokemons'
import React from 'react'

type CardProps = {
    pokemon: Pokemon
    onClick: (name: string) => React.MouseEventHandler<HTMLDivElement> | undefined
}

const PokemonCard: React.FC<CardProps> = ({ pokemon, onClick }) => {
    return (
        <Card onClick={onClick(pokemon.name)}>
            <h2 className="title">{pokemon.name}</h2>
            <div>
                <Poket src={pokemon.image} alt="image-pokemon" />
                <img src={pokemon.artwork} alt="image-pokemon" width="100px" />
                <img src={pokemon.dreamworld} alt="image-pokemon" width="100px" />
            </div>
        </Card>
    )
}

export default PokemonCard
