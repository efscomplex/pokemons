import React from 'react'
import styled from 'styled-components'
import { Link } from 'wouter'

type Link = {
    to: string
    label: string
}
type NavProps = {
    links: Link[]
}

const Nav: React.FC<NavProps> = ({ links }) => {
    return (
        <StyledNav>
            {links.map((link, i) => (
                <li key={i}>
                    <Link to={link.to} key={link.to}>
                        {link.label}
                    </Link>
                </li>
            ))}
        </StyledNav>
    )
}
const StyledNav = styled('nav')`
    display: flex;
    gap: 1rem;
    a {
        text-decoration: none;
        color: inherit;
    }
    li {
        list-style: none;
        padding: 1rem;
    }
`
export default Nav
