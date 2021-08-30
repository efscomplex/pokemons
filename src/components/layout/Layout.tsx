import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import Main from '@/components/layout/Main'
import React from 'react'
import styled from 'styled-components'

const Layout: React.FC = ({ children, ...props }) => {
    return (
        <StyledLayout {...props} className="App">
            <Header />
            <Main>{children}</Main>
            <Footer />
        </StyledLayout>
    )
}
const StyledLayout = styled('div')`
    display: flex;
    flex-direction: column;
    height: 100vh;
    footer {
        margin-top: auto;
    }
`
export default Layout
