import React, {useState} from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import '../components/firebase'
import { useNavigate } from 'react-router-dom';




export default  function Register() {
    // const[fullName,setFullName] = useState('')
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const [val, setVal] = useState();

    let navigate = useNavigate();

    const registerUser = async (e) => {
        e.preventDefault()
        let auth = getAuth();
        try {
            await createUserWithEmailAndPassword(auth,email, password).then (() => navigate('/Home')).catch(e => console.log(e))
        } catch(error) {
            console.log(error)
        }
    }

  return (
    <div className="container">
        <div className="app-wrapper">
            <div>
                <h2 className="title">Create Account</h2>
            </div>
            <form className="form-wrapper" onSubmit={registerUser}>
                <div className="name">
                    <label className="label">Email</label>
                    <input className="input" type="email" value={val} name={"email"} onChange={(v) => setEmail(v.target.value)}></input>
                </div>
                <div className="email">
                    <label className="label">Password</label>
                    <input className="input" type="password" name={"password"} value={val} required onChange={(v) => setPassword(v.target.value)}></input>
                </div>
                <div>
                    <button className="submit" type='submit'>Sign Up</button>
                </div>
            </form>
                    
        </div>
    </div>
  )
}

