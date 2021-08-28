import styled from 'styled-components'

const PokemonList = styled('div')`
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
