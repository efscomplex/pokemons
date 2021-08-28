import { useContainer } from '@/services/providers/ContainerContext'
import React from 'react'
import styled from 'styled-components'

const SearchBar = () => {
    const { value, onChange } = useContainer()

    return (
        <div>
            <Input
                value={value}
                onChange={onChange}
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
