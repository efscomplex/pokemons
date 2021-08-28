import { GraphQLClient } from 'graphql-request'

const gql = {}

export const createGqlClient = (
    url: string,
    clientName: any,
    options: RequestInit = {},
) => {
    class Gql {
        public client: GraphQLClient
        constructor(public url, public clientName: string, options: RequestInit) {
            this.client = new GraphQLClient(url, options)
        }
        getResource = async (query, vars, headers: HeadersInit): Promise<any> => {
            return await this.client.request(query, vars, headers)
        }
    }
    gql[clientName] = new Gql(url, clientName, options)

    return gql
}
export default gql
