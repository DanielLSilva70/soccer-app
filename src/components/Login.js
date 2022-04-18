import React from 'react'

function Login() {
  return (
    <div className="container">
    <div className="app-wrapper">
        <div>
            <h2 className="title">Login</h2>
        </div>
        <form className="form-wrapper">
            <div className="email">
                <label className="label">Email</label>
                <input className="input" type="email" ></input>
            </div>
            <div className="email">
                <label className="label">Password</label>
                <input className="input" type="password" ></input>
            </div>
            <div>
                <button className="submit">Login</button>
            </div>
        </form>
    </div>
</div>
  )
}

export default Login