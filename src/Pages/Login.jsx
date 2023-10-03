import React,{useState} from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import { toast } from "react-toastify";

function Login() {

  const [formvalue,setFormvalue]=useState({
    name:"",
    email:"",
    pass:"",
    mobile:""
})

const onchange=(e)=>{
    setFormvalue({...formvalue,id:new Date().getTime().toString(),[e.target.name]:e.target.value});
    console.log(formvalue);
}

const onsubmit=async(e)=>{
    e.preventDefault();
    
    {
        const res=await axios.post(` http://localhost:3000/signup`,formvalue);
        if(res.status==201){
            toast.success('Success')
            setFormvalue({...formvalue,name:"",email:"",pass:"",mobile:""})
        }
    }
}

const resetall=()=> {
    setFormvalue({...formvalue,name:"",email:"",pass:"",mobile:""})
}





  return (
    <div>
      <section className="h-100 bg-dark">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card card-registration my-4">
                <div className="row g-0">
                  <div className="col-xl-6 d-none d-xl-block">
                    <img
                      src="https://freepngimg.com/save/18945-shopping-png-hd/1112x1021"
                      alt="Sample photo"
                      className="img-fluid"
                      style={{
                        borderTopLeftRadius: ".25rem",
                        borderBottomLeftRadius: ".25rem",
                        height:"800px"
                      }}
                    />
                  </div>
                  <div className="col-xl-6">
                    <div className="card-body p-md-5 text-black">
                      <h3 className="mb-5 text-uppercase">Sign Up Form</h3>
                      <div className="row">
                        <div className="col-md-12 mb-4">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="form3Example1m"
                              className="form-control form-control-lg"
                              value={formvalue.name} onChange={onchange} name="name" placeholder='Name'
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example1m"
                            >
                              First name
                            </label>
                          </div>
                          <div className="form-outline mb-4">
                            <input
                              type="text"
                              id="form3Example97"
                              className="form-control form-control-lg"
                              value={formvalue.email} onChange={onchange} name="email" placeholder='Email'
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example97"
                            >
                              Email ID
                            </label>
                          </div>
                          <div className="form-outline mb-4">
                            <input
                              type="text"
                              id="form3Example90"
                              className="form-control form-control-lg"
                              value={formvalue.pass} onChange={onchange} name="pass" placeholder='Password'
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example90"
                            >
                              Password
                            </label>
                          </div>
                          <div className="form-outline mb-4">
                            <input
                              type="text"
                              id="form3Example99"
                              className="form-control form-control-lg"
                              value={formvalue.mobile} onChange={onchange} name="mobile" placeholder='Mobile Number'
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example99"
                            >
                              Mobile Number
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                        <h4 className="mb-0 me-4">Gender: &nbsp; </h4>
                        <div className="form-check form-check-inline mb-0 me-4">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="femaleGender"
                            defaultValue="option1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="femaleGender"
                          >
                            Female
                          </label>
                        </div>
                        <div className="form-check form-check-inline mb-0 me-4">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="maleGender"
                            defaultValue="option2"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="maleGender"
                          >
                            Male
                          </label>
                        </div>
                        <div className="form-check form-check-inline mb-0">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="otherGender"
                            defaultValue="option3"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="otherGender"
                          >
                            Other
                          </label>
                        </div>
                      </div>
                      <div className="row">
                      <div className="col-md-3 mb-4">
                          <select className="select">
                            <option value={1}>Country</option>
                            <option value={2}>India</option>
                            <option value={3}>Russia</option>
                            <option value={4}>New York</option>
                          </select>
                        </div>
                        <div className="col-md-3 mb-4">
                          <select className="select">
                            <option value={1}>State</option>
                            <option value={2}>Gujrat</option>
                            <option value={3}>Maharashtra</option>
                            <option value={4}>rajshthan</option>
                          </select>
                        </div>
                        <div className="col-md-6 mb-4">
                          <select className="select">
                            <option value={1}>City</option>
                            <option value={2}>Ahmedabad</option>
                            <option value={3}>Mumbai</option>
                            <option value={4}>Udaypur</option>
                          </select>
                        </div>
                      </div>

                      <div className="d-flex justify-content-end pt-3">
                        <button onClick={resetall} type="button" className="btn btn-light btn-lg">
                          Reset all
                        </button>
                        <button onClick={onsubmit}
                          type="button"
                          className="btn btn-warning btn-lg ms-2"
                        >
                          Submit form
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
