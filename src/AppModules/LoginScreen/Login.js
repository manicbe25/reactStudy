import React, {useState} from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Username is ${username} and password is ${password}`)
  }

  return(
    <div className="App">
      <form onSubmit={handleSubmit}>
      <h1>Login Form</h1>
      <div>
        <label htmlFor="username">Username</label>
      <input type='text' value={username} onChange={(e) =>setUsername(e.target.value)}></input>
      </div>
      <div>
        <label htmlFor="password">Password</label>
      <input type='password' value={password} onChange={(e) =>setPassword(e.target.value)}></input>
      </div>
      <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Login;