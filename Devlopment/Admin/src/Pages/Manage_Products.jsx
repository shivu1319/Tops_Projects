import React, {useState,useEffect} from 'react'

import axios from 'axios';

import { toast } from 'react-toastify';

function Manage_Products() {

  
  useEffect(() => {
    fetch();
  },[]);

  const [data, setData] = useState([]);

  const fetch = async () => {
    const res = await axios.get( ' http://localhost:3000/manage_Products');
    setData(res.data)
  }

  
  const onDelete=async(id)=>
  {
    const res=await axios.delete(`http://localhost:3000/manage_Products/${id}`);
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
              <div className="panel panel-default">
                <div className="panel-heading">Manage Products</div>
                <div className="panel-body">
                  <div className="table-responsive">
                    <table className="table table-striped table-bordered table-hover">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Categories Name</th>
                          <th>Product Name</th>
                          <th>Product Description</th>
                          <th>Main Price</th>
                          <th>Discount Price</th>
                          <th>Product Image</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                      {
                          data.map((value, index , entarr) => {
                            return (
                              <tr>
                              <td>{value.id}</td>
                              <td>{value.categories}</td>
                              <td>{value.productname}</td>
                              <td>{value.disc}</td>
                              <td>{value.mainprice}</td>
                              <td>{value.discpri}</td>
                              <td>
                                <img src={value.img} width={150} height={200} />
                              </td>
                              
                              <td>
                              <button className="btn btn-danger" onClick={()=>onDelete(value.id)}>Delete</button>
                                &nbsp;
                                <button className="btn btn-primary">Edit</button>
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
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Manage_Products;
