import React from 'react'

export default function BeerItems(props) {
    return (
        <div>
            {props.beer && <div className="ui card" style={{width:'100vw', padding:'20px'}}>
                <div className ="content">
                    <div className="header">{props.beer.name}</div>
                    <div className="meta">{props.beer.description}</div>
                    <div className="meta">{props.beer.brewers_tips}</div>
                    <div className="meta">{props.beer.food_pairing}</div>
                </div>
            </div>
            }
        </div>
    )
}

