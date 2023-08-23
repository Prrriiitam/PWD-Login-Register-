import React from "react";
const Login=(props)=>{
    // const[email,setEmail]=useState('');
    // const[pass,setPass]=useState('');


    const handleSubmit=(e)=>{
         e.preventDefault();
       
    }

    return(
        <>
        <div className="auth-form-container">
        <h1>Login</h1>
        <form>
        <div class="form-group">
    <label for="Email1">Phone or Email address </label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter number or email" />
  </div>
  <div class="form-group">
    <label for="Password1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
          <button className="link-btn" onClick={()=>props.onFormSwitch('register')}>Don't have an account? Reagister here</button>
          </div>
          </>
        )
};
export default Login;