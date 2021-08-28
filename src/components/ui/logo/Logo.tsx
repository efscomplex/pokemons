import React from 'react'

type LogoProps = {
    src: string
}

const Logo: React.FC<LogoProps> = ({ src }) => {
    return <img src={'/pokemon.jpeg'} width="140px" height="auto" />
}

export default Logo
