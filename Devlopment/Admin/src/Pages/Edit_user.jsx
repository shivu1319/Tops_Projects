import React,{useState , useEffect} from 'react'
import axios from 'axios';


import { useNavigate , useParams } from "react-router-dom";
import { toast } from 'react-toastify';

function Edit_user() {

    const redirect=useNavigate();
    useEffect(()=>{
        editdata();
    },[]);

    const [formvalue, setFormvalue] = useState({
        name:"",
        email: "",
        pass: "",
        mobile:""
      });   

      const {id}=useParams();
      const editdata = async () => {
        const res =await axios.get(`http://localhost:3000/signup/${id}`);
        setFormvalue(res.data)
      }

      const onchange = (e) => {
        setFormvalue({...formvalue, [e.target.name]: e.target.value})
        console.log(formvalue);
      }
      function validation() {
        var result = true;
        if (formvalue.name == "") {
            toast.error("Email field is Required !");
            result = false;
          }
          if (formvalue.email == "") {
            toast.error("Email field is Required !");
            result = false;
          }
        if (formvalue.pass == "") {
          toast.error("Email field is Required !");
          result = false;
        }
        if (formvalue.mobile == "") {
          toast.error("Password field is Required !");
          result = false;
        }
        return result
      }

      const onsubmit=async(e)=>{
        e.preventDefault();
        if(validation()){
        {
            const res=await axios.patch(`http://localhost:3000/signup/${id}`,formvalue);
            if(res.status==200){
               
                setFormvalue({...formvalue,name:"",email:"",pass:"",mobile:""})
                toast.success('Success')
                return redirect('/Manage_user')
            }
        }
    }}

  return (
    <div>
         <div>
      <div id="page-wrapper">
        <div id="page-inner">
          <div className="row">
            <div className="col-md-12">
              <h2>Edit User</h2>
              <h5>Welcome </h5>
            </div>
          </div>
          {/* /. ROW  */}
          <hr />
          <div className="row">
            <div className="col-md-12">
              {/* Form Elements */}
              <div className="panel panel-default">
                <div className="panel-heading">User Details</div>
                <div className="panel-body">
                  <div className="row">
                    <div className="col-md-6">
                      
                      <form action='' method='post'>
                       
                        <div className="form-group">
                          <label> Name</label>
                          <input
                            className="form-control"
                            placeholder="PLease Enter Keyword"
                            onChange={onchange} name='name' value={formvalue.name}
                          />
                        </div>
                        <div className="form-group">
                          <label>Email</label>
                          <input
                            className="form-control"
                            placeholder="PLease Enter Keyword"
                            name='email'
                            onChange={onchange} value={formvalue.email}
                          />
                        </div>
                        <div className="form-group">
                          <label>Password</label>
                          <input
                            className="form-control"
                            placeholder="PLease Enter Keyword"
                            name='pass'
                            onChange={onchange} value={formvalue.pass}
                          />
                        </div>
                        <div className="form-group">
                          <label>Mobile</label>
                          <input
                            className="form-control"
                            placeholder="PLease Enter Keyword"
                            name='mobile'
                            onChange={onchange} value={formvalue.mobile}
                          />
                        </div>

                        <button type="submit" onClick={onsubmit} className="btn btn-default">
                          Submit Button
                        </button>
                        &nbsp;&nbsp;&nbsp;
                        
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
    </div>
  )
}

export default Edit_user