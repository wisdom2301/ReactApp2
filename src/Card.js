import React from 'react'

export default function Card(props) {
    return (
        <div>
            <h2>{props.myProducts.Title}</h2>
            <p>{props.myProducts.Description}: {props.myProducts.Price}</p>
            <button onClick={props.myClick}>Add to Cart</button>
        </div>
    )
}
