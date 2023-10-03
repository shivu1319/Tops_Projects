import React, {useState,useEffect} from 'react'

import axios from 'axios'

import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Manage_user() {

  const redirect=useNavigate();

  useEffect(() => {
    fetch();
  },[]);

  const [data, setData] = useState([]);

  const fetch = async () => {
    const res = await axios.get(' http://localhost:3000/signup');
    setData(res.data)
  }

  const onDelete=async(id)=>
  {
    const res=await axios.delete(`http://localhost:3000/signup/${id}`);
    if(res.status=="200"){
      // alert('Delete SuccessFull')
      fetch();
      toast.success('Delete Successfully')

    }
  }

  return (
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
                        <th>Mobile No.</th>
                        <th>Gender</th>
                        <th>Countries</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                        {
                          data.map((value, index, entarr) => {
                            return (
                              <tr>
                              <td>{value.id}</td>
                              <td>{value.name}</td>
                              <td>{value.email}</td>
                              <td>{value.pass}</td>
                              <td>{value.mobile}</td>
                              <td>{value.gender}</td>
                              <td>{value.countries}</td>
                              
                              <td>
                                <button className="btn btn-danger" onClick={()=>onDelete(value.id)}>Delete</button>
                                &nbsp;
                                <button className="btn btn-primary" onClick={()=>{redirect('/Edit_user/' + value.id)}}>Edit</button>
                                &nbsp;
                                <button className="btn btn-success">Save</button>
                              </td>
                            </tr>
                            )
                          })
                        }
                    
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
  )
}

export default Manage_user