import { createGqlClient } from '@/modules/gql/Gql'
import { useEffect, useState } from 'react'

import gql from '@/modules/gql/Gql'

const useQuery = (clientName: any) => {
    const [data, setData] = useState<any>({})

    return (query, vars) =>
        gql[clientName].getResource(query, vars).then(setData).catch(console.log)
}

export default useQuery
