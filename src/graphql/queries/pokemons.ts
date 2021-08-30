import { gql } from 'graphql-request'

export default gql`
    query pokemons($limit: Int, $offset: Int) {
        pokemons(limit: $limit, offset: $offset) {
            count
            next
            previous
            status
            message
            results {
                url
                name
                image
                artwork
                dreamworld
                id
            }
        }
    }
`
