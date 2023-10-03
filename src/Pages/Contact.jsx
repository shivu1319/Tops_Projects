import React,{useState} from 'react'
import axios from 'axios';

import { toast } from 'react-toastify'


function Contact() {

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

    function validation(){
      var result=true;
      if(formvalue.name==""){
        toast.error('Name field is Required !');
        result=false;
      }
      if(formvalue.email==""){
        toast.error('Email field is Required !');
        result=false;
      }
      if(formvalue.pass==""){
        toast.error('Password field is Required !');
        result=false;
      }
      if(formvalue.mobile==""){
        toast.error('Mobile Number field is Required !');
        result=false;
      }
    }

    const onsubmit=async(e)=>{
        e.preventDefault();
        if(validation())
        {
            const res=await axios.post(`http://localhost:3000/contact`,formvalue);
            if(res.status==201)
            {
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
            <form action='' method='post'>
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
                    <h3 className="mb-5 text-uppercase">Contact Us</h3>
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
                  

                    <div className="d-flex justify-content-start">
                      <button onClick={resetall} type="button" className="btn btn-light btn-lg">
                        Reset all
                      </button>
                      <button onClick={onsubmit}
                        type="button"
                        className="btn btn-warning btn-lg "
                      >
                        Submit form
                      </button>
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}

export default Contact