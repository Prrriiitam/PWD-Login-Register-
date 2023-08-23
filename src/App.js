import React, { useState } from "react";
import Login from "./Login.jsx";
import Register from "./Register.jsx";


const App=()=>{
  const[currentform,setCurrentForm]=useState('login');

  const toggleForm=(formName)=>{
    setCurrentForm(formName);

  }
  return(
    <>
     {/* <Routes>
        <Route exact path="/login" Component={Login} />
        <Route exact path="/register" Component={Register} />
        <Route exact path="/form" Component={form} />
     </Routes> */}
    

    <div className="App">
    {
      currentform === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
    }
    </div>
    </>
  );
}
export default App;

