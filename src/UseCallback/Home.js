import React, { useCallback, useState } from 'react'
import Heading from './Heading';
import InfoComponent from './InfoComponent';
import ButtonComponent from './ButtonComponent';

export default function Home() {

    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(100);

    

    const increment1 = useCallback(() => {
        setCounter1(counter1 + 1)}, [counter1])
    

    const increment2 = useCallback(() => {
        setCounter2(counter2 + 1)}, [counter2])

  return (
    <>
      <Heading />
      <InfoComponent title="Counter1 : " value={counter1} />
      <ButtonComponent title="Increment 1" eventHandler={increment1}/>
      <InfoComponent title="Counter2 : " value={counter2} />
      <ButtonComponent title="Increment 2" eventHandler={increment2}/>
    </>
  )
}
