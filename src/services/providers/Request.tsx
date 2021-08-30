import { createContext, useContext } from 'react'

const getFetcher = (url: string) => (options?: RequestInit) => {
    return fetch(url, {
        method: 'GET',
        ...options,
    }).then((resp) => resp.json())
}

const RequestContext = createContext(getFetcher)

export const useRequest = (url: string) => {
    const getFetcher = useContext(RequestContext)

    return getFetcher(url)
}

type RequestProviderProps = {
    fetcher: (url: string) => (options?: RequestInit) => any
}
export const RequestProvider: React.FC<RequestProviderProps> = ({
    children,
    fetcher,
}) => {
    return <RequestContext.Provider value={fetcher}>{children}</RequestContext.Provider>
}

export default useRequest
