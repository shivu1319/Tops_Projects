import React from "react";

function Add_categories() {
  return (
    <div>
      <div id="page-wrapper">
        <div id="page-inner">
          <div className="row">
            <div className="col-md-12">
              <h2>Add Categories</h2>
              <h5>Welcome Shivu Kuhikar , Love to see you back.</h5>
            </div>
          </div>
          {/* /. ROW  */}
          <hr />
          <div className="row">
            <div className="col-md-12">
              {/* Form Elements */}
              <div className="panel panel-default">
                <div className="panel-heading">Categories Details</div>
                <div className="panel-body">
                  <div className="row">
                    <div className="col-md-6">
                      <h3>Add Categories Details Here</h3>
                      <form role="form">
                        <div className="form-group">
                          <label>Categories Name</label>


                          <select Choose Products className="form-control">
                          <option>Categories Name</option>
                            <option>Man T-Shirts</option>
                            <option>Shirt</option>
                            <option>Frock</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label>Product Name</label>
                          <input
                            className="form-control"
                            placeholder="PLease Enter Keyword"
                          />
                        </div>
                        <div className="form-group">
                          <label>Product Description</label>
                          <input
                            className="form-control"
                            placeholder="PLease Enter Keyword"
                          />
                        </div>

                        <div className="form-group">
                          <label>Main Price</label>
                          <input
                            className="form-control"
                            placeholder="PLease Enter Keyword"
                          />
                        </div>

                        <div className="form-group">
                          <label>Discount Price</label>
                          <input
                            className="form-control"
                            placeholder="PLease Enter Keyword"
                          />
                        </div>

                        <div className="form-group">
                          <label>File input</label>
                          <input type="file" />
                        </div>

                        <button type="submit" className="btn btn-default">
                          Submit Button
                        </button>
                        &nbsp;&nbsp;&nbsp;
                        <button type="reset" className="btn btn-primary">
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

export default Add_categories;
