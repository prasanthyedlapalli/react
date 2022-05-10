import React,{useState} from "react"
import axios from 'axios'
import Signup from "./signup"

const Login = () => {
 const [data,setData] = useState({
     email: '',
     password: ''
 })
 const [isLogin,setLogin] = useState(false)
//  const [isLoginClicked,setLoginClicked] = useState(true)
 const [isSignupClicked,setSignupClicked] = useState(false)
 const changeHandler = (e) => {
    setData({...data,[e.target.name]:e.target.value})
 }
 const signup = (e) => {
     setSignupClicked(true)
 }
 const submit = () => {
    // creates entity
   const formdata = new FormData()
   formdata.append('email',data.email)
   formdata.append('password',data.password)
   const path = 'http://localhost:5000/login'
   const config = {
       header : {
           'Content-Type' : 'multipart/form-data'
       }
   }                                                       
   axios.post(path, formdata, config)
   .then(res => {
       console.log(res.data)
       setLogin(true)
   })
 }
 if (isLogin) {
    return (
        <div>
            Login sucessfull
        </div>
    )
 } else {
     if (isSignupClicked) {
         return (
            <Signup />
         )
     } else 
        return (
            <div> <center>
                <label>user</label> <br></br> 
                <input type='email' name='email' onChange={changeHandler}></input> <br></br>
                <label>password</label><br></br>
                <input type='password' name='password' onChange={changeHandler}></input> <br></br>
                <button disabled={!data.email.length || !data.password.length ? true : false} onClick={submit}>Login</button>
                <button  onClick={signup}>signup</button>
            </center>
            </div>
        )   
 }
    
}
export default Login