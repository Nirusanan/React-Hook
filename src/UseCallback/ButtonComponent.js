import React,{memo} from 'react'

const ButtonComponent = ({title, eventHandler}) => {
    console.log(`Button component rendering for ${title}`)

  return (
    <button onClick={eventHandler}> {title}</button>
  )
}

export default memo(ButtonComponent);
