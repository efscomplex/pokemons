import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import Main from '@/components/layout/Main'
import useInput from '@/hooks/useInput'
import { ContainerProvider } from '@/services/providers/ContainerContext'
import React from 'react'
import styled from 'styled-components'

const Layout: React.FC = ({ children, ...props }) => {
    const ctxt = useInput()

    return (
        <StyledLayout {...props} className="App">
            <ContainerProvider {...ctxt}>
                <Header />
                <Main>{children}</Main>
                <Footer />
            </ContainerProvider>
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
