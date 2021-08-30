import React, { Fragment } from 'react'

type MapProps = {
    from: any
    render: any
    as?: any
}

const Map: React.FC<MapProps> = ({ from, render, as, ...props }) => {
    return React.createElement(
        as || Fragment,
        props,
        React.Children.toArray(from.map(render)),
    )
}

export default Map
