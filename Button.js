//we can click button its take action like increment or decrement in UI and console

//functional component
import { useState } from 'react';

//let count=0;
//var inputTest='';

function Button() {
  let [count, setCount] = useState(0);
  let [text, setText] =useState('');

  //const OnIncrementClick=()=>{
   // count=count+1;
    //console.log({count});
 // }

  //const OnSearchChange=(event)=>{
  //  console.log(event.target.value)
  //  inputTest=event.target.value;
  //}
  return (
    <>
      <h1>JSX</h1>
      <button id='btn' onClick={() => setCount(count+1)}>Increment</button>
      <span>{count}</span>
      <div>
      <input onChange={(e) => setText(e.target.value)} placeholder='Search...' />
      <span>{text}</span>
    </div>
    </>
    
  );
}

export default Button;
