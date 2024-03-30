// Property Drilling
import React, { useState } from 'react'

export default function ParentUsingLocalState() {
    const [user] = useState("React")
    return (
        <>
            <h1>Parent using local state</h1>
            <Component1 user={user} />
        </>
    )
}

function Component1({ user }) {
    return (
        <>
            <h1>component1</h1>
            <Component2 user={user} />
        </>
    )
}

function Component2({ user }) {
    return (
        <>
            <h1>component2</h1>
            <Component3 user={user} />
        </>
    )
}

function Component3({ user }) {
    return (
        <>
            <h1>component3</h1>
            <h3>{user}</h3>
        </>
    )
}
