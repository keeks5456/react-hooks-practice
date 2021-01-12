import React, {useState} from 'react';

function HookCounter() {

    const [count, setCount] = useState(0) //array destructuring
    const [likes, setLikes] = useState(0)

    return (
        <div>
            <button onClick={() => setCount(count + 1)}> Count {count}</button>
            <button onClick={() => setLikes(likes + 1)}> Likes {likes}</button>
        </div>
    );
}

export default HookCounter;