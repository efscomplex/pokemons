import { useContainer } from '@/services/providers/ContainerContext'
import React from 'react'
import styled from 'styled-components'

const SearchBar = () => {
    const { search, onChangeSearch } = useContainer()

    return (
        <div>
            <Input
                value={search}
                onChange={onChangeSearch}
                type="text"
                placeholder="search for pokemons"
            />
        </div>
    )
}
const Input = styled('input')`
    padding: 0.4rem;
    border-radius: 7px;
    margin: 0 10px;
    border: none;
    :active {
    }
    ::placeholder {
        color: gray;
    }
`

export default SearchBar
