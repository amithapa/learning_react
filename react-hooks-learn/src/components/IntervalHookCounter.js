import React, {useState} from 'react'
import { useEffect } from 'react/cjs/react.development';

function IntervalHookCounter() {
    const [count, setCount] = useState(0);

    const tick = () => {
        setCount(prevCount => prevCount+1);
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000);
        console.log("useEffect");
        return () => {
            clearTimeout(interval);
        };
    }, []);

    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalHookCounter
