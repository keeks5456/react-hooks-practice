import React, { useState, useEffect } from 'react';
import axios from 'axios'
function DataFetchingThree() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1) //we are changing the state of ID
    const [idButtonClick, setIdButtonClick] = useState(1)

    const handleChange = () =>{
        setIdButtonClick(id) //passing in the id b.c thats the change we are looking to make
    }
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idButtonClick}`)
        .then(res =>{
            console.log(res)
            setPost(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    }, [idButtonClick]) //the effect is now dependent on the idButtonClick, b/c thats the change we are telling react to look for.
    console.log(post)
    debugger
    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)}/>
            <button type="button" onClick={handleChange}>Fetch Data</button>
            <div>{post.title}</div>
        </div>
    );
}

export default DataFetchingThree;