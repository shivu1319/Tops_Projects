import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// import { toast } from "react-toastify";
import { toast } from "react-toastify";


function Log() {
  const redirect = useNavigate();

  const [formValue, setFormValue] = useState({
    email: "",
    pass: ""
  });

  const onchange = (e) => {
    setFormValue({ ...formValue,[e.target.name]: e.target.value });
    console.log(formValue);
  };

  function validation() {
    var result = true;

    if (formValue.email == "") {
      toast.error("Email field is Required !");
      result = false;
    }
    if (formValue.pass == "") {
      toast.error("Password field is Required !");
      result = false;
    }
    return result
  }

  const onsubmit = async (e) => {
    e.preventDefault();
    if (validation()) {
      const res = await axios.get(
        `http://localhost:3000/signup?email=${formValue.email}`
      );
      
      // alert("Password is Incorrect !");
      if (res.data.length > 0) 
      {
        if (res.data[0].pass == formValue.pass) {
          localStorage.setItem('username', res.data[0].name);
          localStorage.setItem('uid', res.data[0].id);
        
          toast.success("Login Success !");
          redirect('/Men');
        } else {
            toast.error("Password is Incorrect !");
          return false;
        }
      } else {
        toast.error("Email is incorrect !");
      }
    }
  };

  return (
    <div
      className="container py-5 mt-5 col-md-4"
      style={{ backgroundColor: "black", borderRadius: "20px" }}
    >
      <form action="" method="post">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>

          <input
            type="email"
            value={formValue.email}
            onChange={onchange}
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />

          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            value={formValue.pass}
            onChange={onchange}
            name="pass"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button onClick={onsubmit} type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Log;
