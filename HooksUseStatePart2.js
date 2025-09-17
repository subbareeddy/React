//updating a object

import { useState } from 'react';


function HooksUseStatePart2() {

    const intialState={
        name: '',
        email: '',
        password: '',
        mobile: '',
        altNumber: ''
    }
    const [form, setForm]=useState(intialState);
    const onNameChange=(event)=>{
        setForm({ ...form, name: event.target.value});
    }
    const onEmailChange=(event)=>{
        setForm({ ...form, email: event.target.value});
    }
    console.log(form);
  return (
    <>
    <div>
       <label>Name: </label>
       <input onChange={onNameChange} placeholder="Enter Your Name" />
    </div>

    <div>
       <label>Email: </label>
       <input onChange={onEmailChange} placeholder="Enter Your Email" />
    </div>

    <div>
       <label>Password: </label>
       <input onChange={onNameChange} placeholder="Enter your password" />
    </div>

    <div>
       <label>Mobile Number: </label>
       <input onChange={onNameChange} placeholder="Enter your Mobile Number" />
    </div>

    <div>
       <label>Alternate Number: </label>
       <input onChange={onNameChange} placeholder="Enter your Alternate Number" />
    </div>
    

    </>
  );
}

export default HooksUseStatePart2;
