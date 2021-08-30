import useInput from '@/hooks/useInput'
import { useState } from 'react'

const useGlobalContext = () => {
    const { value: search, onChange: onChangeSearch } = useInput()
    const [pokemons, setPokemons] = useState({})

    return {
        search,
        onChangeSearch,
        pokemons,
        setPokemons,
    }
}

export default useGlobalContext
