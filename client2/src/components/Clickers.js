import React, { useState } from 'react'

const Clickers = () => {

    const [count, setCount] = useState(0);

    const inc = () => {
        setCount(count + 1);
    }

    const dec = () => {
        setTimeout(() => {
            setCount(count - 1);
        }, 300);
    }

    return (
        <div>
            <a href="#!" onClick={inc}>Increase</a>
            <a href="#!" onClick={dec}>Decrease</a>
            <p data-testid='count'>{count}</p>
        </div>
    )
}

export default Clickers
