import React from "react";
import {useState} from "react";

export default function () {
    const [title, setTitle] = useState('Hello')
    return (
    <div className='application'>
        <h1>{title}</h1>
        <button onClick={()=>setTitle(state=>state==='Hello' ? 'Pidor' : 'Hello')}>Click me</button>
    </div>
    )
}
