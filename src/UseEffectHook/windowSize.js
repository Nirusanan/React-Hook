import React, { useEffect, useState } from 'react'

const WindowSize = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const handleResize = () => {
        setWidth(window.innerWidth);
    }

    // If you resize the window, eventListener call the handleResize function, otherwise(state are changed) function is not called.
    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])


    return (
        <div> {width}</div>
    )
}

export default WindowSize
