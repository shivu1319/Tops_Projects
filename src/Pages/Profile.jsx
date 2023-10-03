import React, { useEffect, useState } from "react";
import axios from "axios";

import { toast } from "react-toastify";



function Profile() {
  useEffect(() => {
    fetch();
  }, []);

  const [data, setData] = useState({});

  const fetch = async () => {
    const res = await axios.get(
      ` http://localhost:3000/signup/${localStorage.getItem("uid")}`
    );
    setData(res.data);
  };

  const [formvalue, setFormvalue] = useState({
    name: "",
    email: "",
    pass: "",
    mobile: "",
  });

  const [editid, setid] = useState("");
  const editdata = async (id) => {
    const res = await axios.get(`http://localhost:3000/signup/${id}`);
    setFormvalue(res.data);
    setid(id);
  };

  const onchange = (e) => {
    setFormvalue({...formvalue,[e.target.name]:e.target.value });
    console.log(formvalue);
  };

  function validation() {
    var result = true;
    if (formvalue.name == "") {
      toast.error("Name field is Required !");
      result = false;
    }
    if (formvalue.email == "") {
      toast.error("Email field is Required !");
      result = false;
    }
    if (formvalue.pass == "") {
      toast.error("Password field is Required !");
      result = false;
    }
    if (formvalue.mobile == "") {
      toast.error("Mobile Number field is Required !");
      result = false;
    }
    return result
  }

  const onsubmit = async (e) => {
    e.preventDefault();
    if (validation()) {
      const res = await axios.patch(
        `http://localhost:3000/signup/${editid}`,
        formvalue
      );

      // alert("Password is Incorrect !");
      if (res.status == 200) {
        toast.success("Update Success !");
        setFormvalue({
          ...formvalue,
          name: "",
          email: "",
          pass: "",
          mobile: "",
        });
        fetch();
      }
    }
  };

  return (
    <body style={{ backgroundColor: "grey" }}>
      <section className="h-100 gradient-custom-2">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-9 col-xl-7">
              <div className="card">
                <div
                  className="rounded-top text-white d-flex flex-row"
                  style={{ backgroundColor: "#000", height: 200 }}
                >
                  <div
                    className="ms-4 mt-5 d-flex flex-column"
                    style={{ width: 150 }}
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                      alt="Generic placeholder image"
                      className="img-fluid img-thumbnail mt-4 mb-2"
                      style={{ width: 150, zIndex: 1, marginLeft: 20 }}
                    />
                    <a
                      href="javascript:void(0)"
                      onClick={() => editdata(data.id)}
                      data-bs-toggle="modal"
                      data-bs-target="#myModal"
                      type="button"
                      className="btn btn-outline-dark"
                      data-mdb-ripple-color="dark"
                      style={{
                        zIndex: 1,
                        border: -2,
                        marginLeft: 30,
                        color: "red",
                      }}
                    >
                      Edit profile
                    </a>
                  </div>

                  <div className="ms-3" style={{ marginTop: 130 }}>
                    <h5
                      style={{
                        color: "white",
                        marginLeft: 50,
                        fontSize: 18,
                        marginTop: -20,
                      }}
                    >
                      {data.name}
                    </h5>
                    <p style={{ marginLeft: 70 }}>Ahmedabad</p>
                  </div>
                </div>
                <div
                  className="p-4 text-black"
                  style={{
                    backgroundColor: "#f8f9fa",
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  <div className="d-flex justify-content-end text-center py-1">
                    <div>
                      <p className="mb-1 h5">253</p>
                      <p className=" text-muted mb-0">Photos</p>
                    </div>
                    <div className="px-3">
                      <p className="mb-1 h5">1026</p>
                      <p className=" text-muted mb-0">Followers</p>
                    </div>
                    <div>
                      <p className="mb-1 h5">478</p>
                      <p className=" text-muted mb-0">Following</p>
                    </div>
                  </div>
                </div>
                <div className="card-body p-4 text-black">
                  <div className="mb-5">
                    <p className="lead fw-normal mb-1">About</p>
                    <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                      <p className="font-italic mb-1">Email : - {data.email}</p>
                      <p className="font-italic mb-1">
                        Password :- {data.pass}
                      </p>
                      <p className="font-italic mb-0">
                        Mobile Number :- {data.mobile}
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <p className="lead fw-normal mb-0">Recent Shoppings</p>
                    <p className="mb-0">
                      <a href="#!" className="text-muted">
                        Show all
                      </a>
                    </p>
                  </div>
                  <div className="row g-2">
                    <div className="col mb-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                        alt="image 1"
                        className="w-100 rounded-3"
                      />
                    </div>
                    <div className="col mb-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                        alt="image 1"
                        className="w-100 rounded-3"
                      />
                    </div>
                  </div>
                  <div className="row g-2">
                    <div className="col">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                        alt="image 1"
                        className="w-100 rounded-3"
                      />
                    </div>
                    <div className="col">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                        alt="image 1"
                        className="w-100 rounded-3"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">
              {/* Modal Header */}
              <div className="modal-header">
                <h4 className="modal-title text-danger">Edit Profile</h4>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                />
              </div>
              <div className="container container-bg">
              <div className="row">
                <div className="col-md-6 col-lg-6 mt-5 mb-5 px-5">
                  <form action="" method="post">
                    <input type="text" style={{width:300, height:50,  marginBottom:5}} name="name" value={formvalue.name} onChange={onchange} placeholder="Name" />
                    <input type="email" style={{width:300, height:50, marginBottom:5}} name="email"  value={formvalue.email} onChange={onchange}   placeholder="email" />
                    <input type="text" style={{width:300, height:50, marginBottom:5}} name="pass" value={formvalue.pass} onChange={onchange}   placeholder="password" />
                   <input type="number"  style={{width:300, height:50, marginBottom:5}}  name="mobile" value={formvalue.mobile} onChange={onchange}   placeholder="Mobile" />
                  </form>
                </div>
              </div>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  onClick={onsubmit}
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </body>
  );
}

export default Profile;
