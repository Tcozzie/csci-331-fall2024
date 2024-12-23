import React from "react";
const Counter = () => {
    const [count, setCount] = React.useState(0);

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
        </div>
    )
}

export default Counter
