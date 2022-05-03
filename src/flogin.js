import React,{useState} from "react"
import axios from 'axios'

const Login = () => {
 const [data,setData] = useState({
     email: '',
     password: ''
 })
 const changeHandler = (e) => {
    setData({...data,[e.target.name]:e.target.value})
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
   })
 }
    return (
        <div> 
            <label>user</label> {data.email} <br></br>
            <input type='email' name='email' onChange={changeHandler}></input> <br></br>
            <label>password</label> {data.password} <br></br>
            <input type='password' name='password' onChange={changeHandler}></input> <br></br>
            <input type='submit' onClick={submit}></input>
        </div>
    )   
}
export default Login