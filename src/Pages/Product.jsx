import React, {useState,useEffect} from 'react'

import axios from 'axios'

import { toast } from 'react-toastify';

function Product() {

    useEffect(() => {
        fetch();
      },[]);
    
      const [data, setData] = useState([]);
    
      const fetch = async () => {
        const res = await axios.get( ' http://localhost:3000/manage_Products');
        setData(res.data)
      } 



  return (
  <div> 
  <div className="container mb-5 ">

    <div className="card" style={{width: 250 , border: '1px solid', borderRadius:15}}>

    {
        data.map((value) => {
            return 
                
            
        })
    }

    {/* <p className='text-center' style={{fontWeight:"bold" , fontSize:18}}>Shirt</p>

      <img className="card-img-top" src="https://m.media-amazon.com/images/I/71ShBw4g6GL._AC_UL320_.jpg" alt="Card image" style={{width: '80%', marginLeft:20, height:250, }} />

      <div className="card-body">

        <h4 className="card-title"  style={{fontWeight:"bold" , fontSize:16 , marginLeft:5}} >Man Fancy Shirt For Men</h4>

        <div style={{marginTop:-10,marginLeft:60}}>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        </div>

        <div style={{height:27, marginLeft:35 , width:130, backgroundColor:"red"}}>

            <span  style={{color:"white" , marginLeft:10}}>Deal Of The Day</span>

        </div>

        <p className="card-text" style={{marginTop:4 , marginLeft:55}}><del>₹ 400</del> &nbsp; ₹ 300</p>

        <p className="card-text"></p>

        <a href="#" className="btn btn-success" style={{marginTop:-8, marginLeft:55}} >Buy Now</a> */}

      </div>
    </div>
  </div>
    

  )
}

export default Product