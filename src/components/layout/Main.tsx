import React from 'react'
import styled from 'styled-components'

const Main: React.FC = ({ children, ...props }) => {
    return <StyledMain {...props}>{children}</StyledMain>
}
const StyledMain = styled('main')`
    padding: 2rem;
    padding-top: 4rem;
`

export default Main
