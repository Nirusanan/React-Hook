import React, { createContext, useContext, useState } from 'react'

const UserContext = createContext()

export default function ContextHook() {
    const [user] = useState("React")
    return (
        <UserContext.Provider value={user}>
            <h2> Parent using local state</h2>
            <Component1 />
        </UserContext.Provider>
    )
}

function Component1() {
    return (
        <>
            <h1>component1</h1>
            <Component2 />
        </>
    )
}

function Component2() {
    return (
        <>
            <h1>component2</h1>
            <Component3 />
        </>
    )
}

function Component3() {
    const user = useContext(UserContext)
    return (
        <>
            <h1>component3</h1>
            <h3>{user}</h3>
        </>
    )
}
