import React,{useState} from 'react'

const Input = () => {
    const [user1, setUser] = useState='';
  const handler =e =>{
    setUser(e.target.value)
  }
  return (
    <>
    <input type="text" placeholder="FirstName" value={user1} onChange={handler}></input><br/>
    <input type="text" placeholder="LastName"></input>
    <div><h1>FirstName:{user1}</h1></div>
    <div><h1>LastName:</h1></div>
    
 
    </>
  )
}

export default Input