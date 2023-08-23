import React, { useState } from "react"
const Register=(props)=>{

    // const[email,setEmail]=useState('');
    // const[pass,setPass]=useState('');
    // const[name,setName]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
      
   }
    return(
        <>
        <div className="auth-form-container">
        <h1>Register</h1>
<form>
        <div class="form-group">
        <label for="name">Full Name</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your full name" />
        </div>
        <div class="form-group">
        <label for="number">Mobile</label>
        <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your phone number" />
        </div>
        <div class="form-group">
        <label for="Email1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
        </div>
        <div class="form-group">
        <label for="Password1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div class="form-group">
        <label for="dob">Date of birth</label>
        <input type="date" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your date of birth" />
        </div>
        <div class="form-group">
        <label for="fname">Father's full Name</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your father's full name" />
        </div>
        <div class="form-group">
        <label for="address">Address</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your current address" />
        </div>
        <div class="form-group">
        <label for="state">State</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your state" />
        </div>
        
        
    <div class="form-group">
        <label for="aadhar">Aadhar Card number</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Aadhar number" />
        </div>

        
       <div class="form-group">
        <label for="cert num">Disability Certificate Number</label>
        <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter cert. num" />
        </div>


        <br />
    <div className="oneline">
        <div class="form-row align-items-center">
        <div class="col-auto my-1">
        <label class="mr-sm-2" for="inlineFormCustomSelect">Gender</label>
        <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
        <option selected>Choose...</option>
        <option value="1">Male</option>
        <option value="2">Female</option>
        <option value="3">Other</option>
        </select>
       </div>
        </div>
        <div class="form-row align-items-center">
        <div class="col-auto my-1">
        <label class="mr-sm-2" for="inlineFormCustomSelect">Marital status</label>
        <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
        <option selected>Choose...</option>
        <option value="1">Married</option>
        <option value="2">Unmarried</option>
      </select>
      </div>
      </div>
    </div>
    <div className="oneline">
        <div class="form-row align-items-center">
        <div class="col-auto my-1">
        <label class="mr-sm-2" for="inlineFormCustomSelect">Category</label>
        <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
        <option selected>Select...</option>
        <option value="1">Gen</option>
        <option value="1">OBC</option>
        <option value="2">ST</option>
        <option value="3">SC</option>
        </select>
       </div>
        </div>
        <div class="form-row align-items-center">
        <div class="col-auto my-1">
        <label class="mr-sm-2" for="inlineFormCustomSelect">Type of Disability</label>
        <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
        <option selected>Select...</option>
        <option value="1">Developmental</option>
        <option value="2">Mental</option>
        <option value="2">Physical</option>
        <option value="2">Multiple Disablity</option>
      </select>
      </div>
      </div>
    </div><br />
    
       <div className="together">

     
    <div class="form-group">
    <label for="certificate">Upload Disability Certificate</label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1" />
    </div>
    <div class="form-group">
    <label for="certificate">Upload UDID Certificate</label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1" />
    </div>
    <div class="form-group">
    <label for="Acertificate">Upload Aadhar Card</label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1" />
    </div>
    </div>
    <br />
                    
   


    




        <div class="form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div><br />
    <button onSubmit={handleSubmit} type="submit" class="btn btn-primary">Submit</button>
</form>
          <button className="link-btn" onClick={()=>props.onFormSwitch('login')}>Already have an account? Login here</button>
          </div>
        </>
    )
}
export default Register;