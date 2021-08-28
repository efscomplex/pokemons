import React from 'react'
import styled from 'styled-components'

type CardProps = {}

const Card: React.FC<CardProps> = (props) => {
    return <StyledCard {...props} />
}
const StyledCard = styled('div')`
    gap: 1rem;
    animation: fade 0.4s ease-in-out;

    position: relative;
    .title {
        text-align: right;
    }
    @keyframes fade {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`

export default Card
