import React, { useState } from "react";

import axios from "axios";
import { toast } from "react-toastify";

function Add_Products() {
  const [formvalue, setFormvalue] = useState({
    categories: "",
    productname: "",
    disc: "",
    img: "",
    mainprice: "",
    discpri: "",
  });

  const onchange = (e) => {
    setFormvalue({
      ...formvalue,
      id:new Date().getTime().toString(),
      [e.target.name]: e.target.value,
    });
    console.log(formvalue);
  };

  const onsubmit = async (e) => {
    e.preventDefault();
    {
      const res = await axios.post(
        `http://localhost:3000/manage_Products`,
        formvalue
      );
      toast.success("Upload Success");
      setFormvalue({
        ...formvalue,
        categories: "",
        productname: "",
        disc: "",
        img: "",
        mainprice: "",
        discpri: "",
      });
    }
  };

  const resetall = () => {
    setFormvalue({
      ...formvalue,
      categories: "",
      productname: "",
      disc: "",
      img: "",
      mainprice: "",
      discpri: "",
    });
  };

  return (
    <div>
      <div id="page-wrapper">
        <div id="page-inner">
          <div className="row">
            <div className="col-md-12">
              <h2>Add Products</h2>
              <h5>Welcome Shivu Kuhikar , Love to see you back.</h5>
            </div>
          </div>
          {/* /. ROW  */}
          <hr />
          <div className="row">
            <div className="col-md-12">
              {/* Form Elements */}
              <div className="panel panel-default">
                <div className="panel-heading">Products Details</div>
                <div className="panel-body">
                  <div className="row">
                    <div className="col-md-6">
                      <h3>Add Products Details Here</h3>
                      <form role="form">


                        <div className="form-group">
                          <label>Choose Categories</label>

                          <select  name="categories" 
                            onChange={onchange}className="form-control">
                            <option disabled selected>Choose Products</option>
                            <option  >Clothes</option>
                            <option  >Electronics</option>
                            <option  >Jwellary</option>
                          </select>
                        </div>


                        <div className="form-group">
                          <label>Product Name</label>
                          <input
                            className="form-control"
                            placeholder="PLease Enter Keyword"
                            value={formvalue.productname}
                            onChange={onchange}
                            name="productname"
                          />
                        </div>
                        <div className="form-group">
                          <label>Product Description</label>
                          <input
                            className="form-control"
                            placeholder="PLease Enter Keyword"
                            value={formvalue.disc}
                            onChange={onchange}
                            name="disc"
                          />
                        </div>
                        <div className="form-group">
                          <label>Main Price</label>
                          <input
                            className="form-control"
                            placeholder="PLease Enter Keyword"
                            value={formvalue.mainprice}
                            onChange={onchange}
                            name="mainprice"
                          />
                        </div>
                        <div className="form-group">
                          <label>Discount Price</label>
                          <input
                            className="form-control"
                            placeholder="PLease Enter Keyword"
                            value={formvalue.discpri}
                            onChange={onchange}
                            name="discpri"
                          />
                        </div>
                        <div className="form-group">
                          <label>Product Image</label> &nbsp;
                          <input
                            type="url"
                            value={formvalue.img}
                            onChange={onchange}
                            name="img"
                          />
                        </div>
                        <button
                          onClick={onsubmit}
                          type="submit"
                          className="btn btn-default"
                        >
                          Submit Button
                        </button>
                        &nbsp;&nbsp;&nbsp;
                        <button
                          onClick={resetall}
                          type="reset"
                          className="btn btn-primary"
                        >
                          Reset Button
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add_Products;
