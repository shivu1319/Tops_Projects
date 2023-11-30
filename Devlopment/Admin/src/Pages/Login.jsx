import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

function Login() {
  const redirect = useNavigate();

  const [formValue, setFormValue] = useState({
    email: "",
    pass: "",
  });

  const onchange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
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
    return result;
  }

  const onsubmit = async (e) => {
    e.preventDefault();
    if (validation()) {
      const res = await axios.get(
        `http://localhost:3000/signup?email=${formValue.email}`
      );

      // alert("Password is Incorrect !");
      if (res.data.length > 0) {
        if (res.data[0].pass == formValue.pass) {
          localStorage.setItem("username", res.data[0].name);
          localStorage.setItem("uid", res.data[0].id);

          toast.success("Login Success !");
          redirect("/Admin");
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
      className="container"
      style={{ backgroundColor: "#E2E2E2", height: "100vh" }}
    >
      <div className="row text-center " style={{ paddingTop: 100 }}>
        <div className="col-md-12">
          <img src="assets/img/logo-invoice.png" />
        </div>
      </div>
      <div className="row ">
        <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1">
          <div className="panel-body">
            <form role="form">
              <hr />
              <h5>Enter Details to Login</h5>
              <br />
              <div className="form-group input-group">
                <span className="input-group-addon">
                  <i className="fa fa-tag" />
                </span>
                <input
                  type="email"
                  value={formValue.email}
                  onChange={onchange}
                  name="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="form-group input-group">
                <span className="input-group-addon">
                  <i className="fa fa-lock" />
                </span>
                <input
                  type="password"
                  value={formValue.pass}
                  onChange={onchange}
                  name="pass"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="form-group">
                <label className="checkbox-inline">
                  <input type="checkbox" /> Remember me
                </label>
                <span className="pull-right">
                  <a href="index.html">Forget password ? </a>
                </span>
              </div>
              <a
                href="index.html"
                onClick={onsubmit}
                className="btn btn-primary "
              >
                Login Now
              </a>
              <hr />
              Not register ? <a href="index.html">click here </a> or go to{" "}
              <a href="index.html">Home</a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
