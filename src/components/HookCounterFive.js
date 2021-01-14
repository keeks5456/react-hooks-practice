import React, {useEffect, useState} from 'react';

function HookCounterFive() {

    const [count, setCount] = useState(0) //array destructuring
    const [likes, setLikes] = useState(0)
    const [name, setName] = useState('') //now have initialized a name initial state

    useEffect(() => {
        console.log(document.title)
        document.title = `You have clicked ${count} times`
    }, [count]) 
    
    // without this second parameter we risk the dom getting updates with name and count state updates, 
    //with it we can specify what we are trying t update on the dom in this component
    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            <button onClick={() => setCount(count + 1)}> Count {count}</button>
            <button onClick={() => setLikes(likes + 1)}> Likes {likes}</button>
        </div>
    );
}

export default HookCounterFive;