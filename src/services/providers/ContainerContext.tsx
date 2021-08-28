import React, { createContext, memo, useContext } from 'react'

const ContainerContext = createContext<any>(null)

export function useContainer<Props>() {
    return useContext<Props>(ContainerContext)
}
type Props = {
    [key: string]: any
}
export const ContainerProvider: React.FC<Props> = ({ children, ...props }) => {
    return (
        <ContainerContext.Provider value={props}>
            {children}
        </ContainerContext.Provider>
    )
}

export function asContainer<T>(Comp: React.FC) {
    const ContanerizedComponent: React.FC<T> = ({ children, ...props }) => (
        <ContainerProvider {...props}>
            <Comp> {children} </Comp>
        </ContainerProvider>
    )
    ContanerizedComponent.displayName = Comp.displayName

    return memo(ContanerizedComponent)
}
