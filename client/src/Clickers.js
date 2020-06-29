import React, { useState } from 'react'

const Clickers = () => {

    let [count, setCount] = useState(0);

    const onUp = e => {
        setCount(++count);
    }

    const onDown = e => {
        setTimeout(() => {
            setCount(--count);
        }, 250);
    }

    return (
        <div>
            <a href="#!" onClick={onUp}>Increase</a>
            <a href="#!" onClick={onDown}>Decrease</a>
            <h1 data-testid='count'>{count}</h1>
        </div>
    )
}

export default Clickers
