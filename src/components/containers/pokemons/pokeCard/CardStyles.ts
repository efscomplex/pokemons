import styled from 'styled-components'

export const Card = styled('div')`
    gap: 1rem;
    animation: fade 0.4s ease-in-out;
    transition: transform ease-in-out 0.3s;
    position: relative;
    .title {
        text-align: right;
    }
    &:hover {
        cursor: pointer;
        transform: scale(1.07);
        box-shadow: 3px 3px 8px rgba(200, 200, 200, 0.7);
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

export const Poket = styled('img')`
    position: absolute;
    top: -4rem;
    left: -2rem;
    max-width: 6rem;
`
