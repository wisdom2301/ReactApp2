import React from 'react'

export default function Products(props) {
    return (
        <div>
            <p>{props.myCount}</p>
            <button onClick = {props.handleClick}>Click</button>
        </div>
    )
}
