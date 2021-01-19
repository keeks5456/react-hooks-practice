import React from 'react';
import {useState, useEffect} from 'react'
function HookMouse() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition)

        return () => {
            window.removeEventListener('mousemove', logMousePosition)
        }
    },[]) //we pass in an empty array as a param b.c we dont want our useEffect to keep re-rendering 

    return (
        <div>
            Mouse: X - {x}, Y - {y}
        </div>
    );
}

export default HookMouse;