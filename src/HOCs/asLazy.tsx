import asResource from '@/HOCs/asResource'
import gql from '@/modules/gql/Gql'
import { lazy } from 'react'
import React from 'react'

function withInitialData(Comp, initialData) {
    return (props) => <Comp initialData={initialData} {...props} />
}
type WithInitialData = {
    initialData: any
}

function asLazy<T extends WithInitialData = WithInitialData>(
    Comp: React.ComponentType<T>,
    clientName: any,
    query: string,
    queryVars?: any,
) {
    if (!gql[clientName]) throw `there's no gql client named ${clientName}`

    return asResource(
        lazy(() => {
            return new Promise<{ default: any }>(async (resolve, reject) => {
                try {
                    const initialData = await gql[clientName].getResource(
                        query,
                        queryVars,
                    )
                    resolve({ default: withInitialData(Comp, initialData) })
                } catch (error) {
                    reject(error)
                }
            })
        }),
    )
}
export default asLazy
