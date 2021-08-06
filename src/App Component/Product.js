import React, { useState, useEffect } from 'react';

export default function Product() {
    const [count, setCount] = useState(0);
    
    // const handleClick = () => {

        useEffect(() => {
          setCount (count + 1);  
        }, [])
        
    // };
    return (
        <div>
            <p>{count}</p>
            {/* {count ? <p>Too much money in the bag</p> : <p>You have no items in your cart</p>}
            <button onClick = {handleClick}>Add to cart</button> */}
        </div>
    )
}
