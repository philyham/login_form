import React, { useState } from 'react'
import "./login.css"

const LoginForm = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
       e.preventDefault()
    }

  return (
    <div className='wrapper'>
     <form>
       <h1>Login</h1>
       <div>
        <label htmlFor='name'>Name</label>
        <input
        id='name' 
         type="text"
         value={name}
         onChange={(e) => setName(e.target.values)}
         placeholder='Enter Name'
        />
      </div>

      <div>
        <label htmlFor='email'>Email</label>
        <input 
         id='email'
         type="email"
         value={email}
         onChange={(e) => setEmail(e.target.value)}
         placeholder='Enter Email'
        />
      </div>

      <div>
        <label htmlFor='password'>Password</label>
        <input 
         id='password'
         type="password"
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         placeholder='Enter Password'
        />
      </div>
        <button type='submit' onClick={handleSubmit}>Submit</button>
     </form>
    </div>
  )
}

export default LoginForm