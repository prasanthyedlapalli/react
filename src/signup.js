import React,{useState} from "react"
// import axios from 'axios'

const Signup = ()=> {
    const [data,setData] = useState({
        username: '',
        userid: '',
        password: '',
        repassword: ''
    })
    const changeHandler = (e) => {
        setData({...data,[e.target.name]:e.target.value})
    }
    const usersignup = (e) => {
       console.log(data)
     }
    return (
        <div> <center>
                <label>User Name</label> <br></br> 
                <input type='text' name='username' onChange={changeHandler}></input> <br></br>
                <label>User ID</label> <br></br> 
                <input type='text' name='userid' onChange={changeHandler}></input> <br></br>
                <label>password</label><br></br>
                <input type='password' name='password' onChange={changeHandler}></input> <br></br>
                <label>password</label><br></br>
                <input type='password' name='repassword' onChange={changeHandler}></input> <br></br>
                <button disabled={ !Object.values(data).every(v => v) ? true : false} onClick={usersignup}>Signup</button>
            </center>
        </div>
    )
}
export default Signup
