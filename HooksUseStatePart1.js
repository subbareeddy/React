//part-1

//useState means when your click button we can rerender that button only not entire page and not only button like search also


//we can click button its take action like increment or decrement in UI
import { useState } from 'react';

function HooksUseStatePart1() {
  const [value, setValue] = useState(20);


//so it is incrementing three times -It is called Batch Update
  const OnIncrementClick=()=>{
    setValue((prevCount) =>{
      return prevCount+1;
    });
    setValue(prevCount => prevCount+1);
    setValue(prev => prev+1);
 }
  const OnDecrementClick=()=>{
    setValue(value-1);
  }

  
  return (
    <>
      <h1>JSX</h1>
      <button onClick={OnIncrementClick}>increment</button>
      <button onClick={OnDecrementClick}>decrement</button>
      <span>{value}</span>
      
    </>
    
  );
}

export default HooksUseStatePart1;
