import React, {memo} from 'react'

const Heading = () => {
    console.log('Heading rendering')
  return (
    <div>
      <h1 style={{backgroundColor: '#FFB6C1'}}>Counter Example</h1>
    </div>
  )
}

export default memo(Heading);
