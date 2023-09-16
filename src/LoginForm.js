import React, { useState } from 'react'
import "./login.css"

const LoginForm = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState({})
    const [loginSuccess, setLoginSuccess] = useState(false)

    const validateEmail = (email) => {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
      return emailPattern.test(email)
    }

    const handleSubmit = (e) => {
      console.log(e)
      e.preventDefault()

      const message = {}

      if(!name) {
        message.name = "Your name is required"
      }
  
      if(!email) {
        message.email = "Your email is required"
      } else if(!validateEmail(email)) {
        message.email = "Invalid email"
      }

      if(password.length < 8 ) {
        message.password = "Password must be at least eight characters"
      }
      
      setErrors(message)

      if (Object.keys(message).length === 0) {
        setLoginSuccess(true)
      } else {
        setLoginSuccess(false)
      }
    }

  return (
    <div>
     <form onSubmit={handleSubmit}>
       <h1>{loginSuccess ? "You've successfully logged in" : "Login"}</h1>
       {loginSuccess ? (
        <p className='name'>Welcome, {name}</p>
       ) : (
       <>
         <div className="input-container">
        <label htmlFor='name'>Name</label>
        <input
         id='name' 
         type="text"
         value={name}
         onChange={e => 
          setName(e.target.value)}
         placeholder='Enter Name'
        />
        {errors.name && <p className='error'>{errors.name}</p>}
      </div>

      <div className="input-container">
        <label htmlFor='email'>Email</label>
        <input 
         id='email'
         type="email"
         value={email}
         onChange={e => setEmail(e.target.value)}
         placeholder='Enter Email'
        />
         {errors.email && <p className='error'>{errors.email}</p>}
      </div>

      <div className="input-container">
        <label htmlFor='password'>Password</label>
        <input 
         id='password'
         type="password"
         value={password}
         onChange={e => setPassword(e.target.value)}
         placeholder='Enter Password'
        />
         {errors.password && <p className='error'>{errors.password}</p>}
      </div>
        <button type='submit'>Login</button>
       </>
       )}
     </form>
    </div>
  )
}

export default LoginForm