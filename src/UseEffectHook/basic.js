import React, { useEffect, useState } from 'react'

const Basic = () => {
    const [resource, setResource] = useState([]);
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resource}`)
            .then(response => response.json())
            .then(json => setItem(json))
    }, [resource])

    return (
        <>
            <div>
                <button onClick={() => setResource('posts')}>Posts</button>
                <button onClick={() => setResource('comments')}>Comments</button>
                <button onClick={() => setResource('users')}>Users</button>
            </div>
            <h1>{resource}</h1>
            {item.map(ele => <pre>{JSON.stringify(ele)}</pre>)}
        </>
    )
}

export default Basic
