import Routing from '@/components/routing/Routing'
import useGlobalContext from '@/hooks/useGlobalContext'
import { ContainerProvider } from '@/services/providers/ContainerContext'
import React from 'react'

import '@/styles/index.sass'

function App() {
    const appContext = useGlobalContext()
    return (
        <ContainerProvider {...appContext}>
            <Routing />
        </ContainerProvider>
    )
}

export default App
