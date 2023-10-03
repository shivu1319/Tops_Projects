import React from 'react'

function Admin() {
  return (
    <div>
        <div>
         <div id="wrapper">
      <div id="page-wrapper">
        <div className="row">
          <div className="col-md-12">
            {/*   Kitchen Sink */}
            <div className="panel panel-default">
              <div className="panel-heading">Manage User</div>
              <div className="panel-body">
                <div className="table-responsive">
                  <table className="table table-striped table-bordered table-hover">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Gmail ID</th>
                        <th>Password</th>
                     
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Shivam</td>
                        <td>shivamkuhikar@gmail.com</td>
                        <td>shiv1234</td>
                        
                        
                        <td>
                          <button className="btn btn-danger">Delete</button>
                          &nbsp;
                          <button className="btn btn-primary">Edit</button>
                          &nbsp;
                          <button className="btn btn-success">Save</button>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Deepak</td>
                        
                        <td>Deepaksolanki@gmail.com</td>
                        <td>shiv1234</td>
                       

                        <td>
                          <button className="btn btn-danger">Delete</button>
                          &nbsp;
                          <button className="btn btn-primary">Edit</button>
                          &nbsp;
                          <button className="btn btn-success">Save</button>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Mukesh</td>
                        <td>Mukeshpal@gmail.com</td>
                        <td>shiv1234</td>
                     

                        <td>
                          <button className="btn btn-danger">Delete</button>
                          &nbsp;
                          <button className="btn btn-primary">Edit</button>
                          &nbsp;
                          <button className="btn btn-success">Save</button>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Jainish</td>
                        <td>jainispatel@gmail.com</td>
                        <td>shiv1234</td>
                       

                        <td>
                          <button className="btn btn-danger">Delete</button>
                          &nbsp;
                          <button className="btn btn-primary">Edit</button>
                          &nbsp;
                          <button className="btn btn-success">Save</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* End  Kitchen Sink */}
          </div>
        </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Admin