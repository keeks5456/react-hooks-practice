import React, { useState, useEffect } from 'react';
import axios from 'axios'
function DataFetching() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1) //we are changing the state of ID
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res =>{
            console.log(res)
            setPost(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    }, [id]) //the effect is now dependent on the id, b/c thats the change we are telling react to look for.
    console.log(post)
    debugger
    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)}/>
            <div>{post.title}</div>
        </div>
    );
}

export default DataFetching;