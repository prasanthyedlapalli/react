import React from 'react';
class Cls extends React.Component {
    data = {
        user: "yu",
        password: ""
    }
    changeHandler = (e) => {
        this.data[e.target.name] = e.target.value
        console.log(this.data)
    }
    render () {
        return (
            <div> 
                <label>user</label> {this.data.user} <br></br>
                <input type='email' name='user' onChange={this.changeHandler}></input> <br></br>
                <label>password</label> {this.data.password} <br></br>
                <input type='password' name='password' onChange={this.changeHandler}></input> <br></br>
                <input type='submit'></input>
            </div>
        )
    }
}

export default Cls