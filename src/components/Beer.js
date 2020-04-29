import React from 'react'
import BeerItems from './BeerItems'

const Beer = (props)=> {
    return (
        <div>
            {props.beer && <BeerItems beers={props.beer} />}
        </div>
    )
}

export default Beer