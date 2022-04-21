import React, {useState} from 'react'
import { signInWithEmailAndPassword, getAuth} from 'firebase/auth';
import {useNavigate} from 'react-router-dom'


export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    let navigate = useNavigate();
    
    const loginUser = async (e) => {
        e.preventDefault()
        let auth = getAuth();
        try {
            await signInWithEmailAndPassword(auth,email, password).then (() => navigate('/Home')).catch(e => console.log(e))
        } catch(error) {
            console.log(error)
        }
    }
    
  return (
    <div className="container">
    <div className="app-wrapper">
        <div>
            <h2 className="title">Login</h2>
        </div>
        <form className="form-wrapper" onSubmit={loginUser}>
            <div className="name">
                <label className="label">Email</label>
                <input className="input" type="email"  name={"email"} onChange={(v) => setEmail(v.target.value)}></input>
            </div>
            <div className="email">
                <label className="label">Password</label>
                <input className="input" type="password" name={"password"} required onChange={(v) => setPassword(v.target.value)}></input>
            </div>
            <div>
                <button className="submit" type='submit'>Login</button>
            </div>
        </form>
                
    </div>
</div>
  )
}



