import React from 'react'
import { useParams } from 'react-router-dom'

export default function RouteParam() {
    const {id} = useParams();


    return (
        <div>
            Nike Shoe {id}
        </div>
    )
}
