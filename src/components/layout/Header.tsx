import SearchBar from '@/components/ui/searchBar/SearchBar'
import Nav from '@/components/ui/nav/Nav'
import React from 'react'
import styled from 'styled-components'
import Logo from '@/components/ui/logo/Logo'
import { routes } from '@/config'

const Header: React.FC = () => {
    return (
        <StyledHeader>
            <Logo src="https://c0.klipartz.com/pngpicture/405/350/gratis-png-logo-de-pokemon.png" />
            <Nav links={routes} />
            <SearchBar />
        </StyledHeader>
    )
}
const StyledHeader = styled('header')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #3b5ba6;
    color: white;
`
export default Header
