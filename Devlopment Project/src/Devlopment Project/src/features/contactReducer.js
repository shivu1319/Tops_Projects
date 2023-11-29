import axios from "axios";

// For multiple Data
const ALLCONTACT="ALLCONTACT";
// For single Data
const SINGLECONTACT="SINGLECONTACT";

const objectinia={
    allcontact:[],
    singlecontact:{}
}

// for Values and actions
const contactReducer=(state=objectinia,action)=>{

    switch(action.type)
    {
        case "ALLCONTACT":
        return{
            ...state,
            allcontact:action.payload
        }
        case "SINGLECONTACT":
        return{
            ...state,
            singlecontact:action.payload
        }
        
    }
    return state;
}

export default contactReducer;


//  For Multiple Data get
const getcontact=(data)=>({
    type:ALLCONTACT,
    payload:data
})

// For Multiple data get in API
export const fetchcontact=()=>{
    return function(dispatch){
        axios.get('http://localhost:3000/contact')
        .then((resp)=>{
            dispatch(getcontact(resp.data))
        })
    }
}

//  For Multiple Data get
const getsinglecontact=(data)=>({
    type:SINGLECONTACT,
    payload:data
})

// For Single data get in API
export const fetchsinglecontact=(id)=>{
    return function(dispatch){
        axios.get(`http://localhost:3000/contact/${id}`)
        .then((resp)=>{
            dispatch(getsinglecontact(resp.data))
        })
    }
}