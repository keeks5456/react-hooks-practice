import React, {useEffect, useState} from 'react';

function IntervalHookCounter() {
    const [count, setCount] = useState(0)

    const tick = () =>{
        setCount(count + 1)
    }

    useEffect(() =>{ //componentDidMount
        const interval = setInterval(tick, 1000)
        return () =>{
            clearInterval(interval) //componentWillUpdate
        }
    },[count])
    return (
        <div>
            {count}
        </div>
    );
}

export default IntervalHookCounter;