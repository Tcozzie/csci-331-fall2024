'use client'
import React, {useEffect} from "react";

const Counter = ({increment, color}) => {
    const [count, setCount] = React.useState(0);

    useEffect(() => {
        if(count > 10){
            setCount(0)
        }
    }, [count]);

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: color}}>
            <h1>{count}</h1>
            <button onClick={() => setCount((prev) => prev + increment)}>Increment</button>
        </div>
    )
}

export default Counter;
