
import axios from 'axios'

// For multiple Data
const ALLDATA="ALLDATA";
// For single Data
const SINGLEDATA="SINGLEDATA";

const objectinia={
    alluser:[],
    singleuser:{},
    demo:"Raj nagar"
}

// for Values and actions
const userReducer=(state=objectinia,action)=>{

    switch(action.type){

        case 'ALLDATA':
        return{
            ...state,
            alluser:action.payload
        }   

        case 'SINGLEDATA':
        return{
            ...state,
            singleuser:action.payload
        }    
      
        
    }

    return state;
}

export default userReducer;

//  Get Multiple Data 
const getdata=(data)=>({type:ALLDATA,payload:data})

// use for data fetch in API
export const userfetch=()=>{
    return function(dispatch){
        axios.get('http://localhost:3000/user')
        .then((resp)=>{
            dispatch(getdata(resp.data));
        })
    }
}   



//  Get single Data
const getsingledata=(data)=>({type:SINGLEDATA,payload:data})

// use for data fetch in API
export const usersinglefetch=(id)=>{
    return function(dispatch){
        axios.get(`http://localhost:3000/user/${id}`)
        .then((resp)=>{
            dispatch(getsingledata(resp.data));
        })
    }
}   

//  Use for Data Insert
export const insert=(api,object)=>{
    return function(){
        axios.post(api,object).
        then((resp)=> console.log(resp));
    }
}

//  use For delete data
export const deletedata=(api)=>{
    return function(){
        axios.delete(api).
        then((resp)=> console.log(resp));
    }
}

// use for Update data
export const updatedata=(api,object)=>{
    return function(){
        axios.patch(api,object).
        then((resp)=> console.log(resp));
    }
}