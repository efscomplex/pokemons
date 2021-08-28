import { ErrorBoundary } from '@/components/ui/error/ErrorBoundary'
import React, { Suspense } from 'react'

type ResourceProps<T> = T & { errorMsg?: any; fallback?: any }

function asResource<P>(Comp: React.ComponentType<P>) {
    const ResourceComponent: React.FC<ResourceProps<P>> = ({
        errorMsg,
        fallback,
        ...props
    }) => (
        <ErrorBoundary errorMsg={errorMsg}>
            <Suspense fallback={fallback || null}>
                <Comp {...(props as P)} />
            </Suspense>
        </ErrorBoundary>
    )
    ResourceComponent.displayName = `resource(${Comp.displayName})`

    return ResourceComponent
}

export default asResource
