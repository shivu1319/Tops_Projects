import { combineReducers } from "redux";
import userReducer from "../features/userReducer";
import contactReducer from "../features/contactReducer";

//  combine multiple reducer functions into a single function
const rootReducer=combineReducers({

    userReducer:userReducer,
    contactReducer:contactReducer
})

export default rootReducer;