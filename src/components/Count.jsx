import { useState } from 'react'

export default function Count() {
    const [count, setCount] = useState(0)
    
    return (
        <> <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
        </button>
            <div>Count: {count}</div></>
    )
}



const ReusableBlockOfCode = (number, setNumber) => {
    return (
        <button onClick={() => setNumber((number) => number + 1)}>
            count is {number}
        </button>
    )
}