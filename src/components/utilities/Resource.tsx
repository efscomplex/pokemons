import useRequest from '@/services/providers/Request'
import { useMemo, useState } from 'react'

type ResourceProps = {
    url: string
    fallback?: JSX.Element | null
    map?: (data: any) => any
    children: (data: any) => JSX.Element
}

const Resource = ({ url, map, fallback = null, children }: ResourceProps) => {
    const [data, setData] = useState<any>(null)
    const fetcher = useRequest(url)

    useMemo(() => {
        fetcher()
            .then(map)
            .then(setData)
            .catch((err) => console.log(err))
    }, [url])

    return data ? children?.(data) : fallback
}

export default Resource
