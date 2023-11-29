import { createStore,applyMiddleware } from "redux";
import reduxThunk from 'redux-thunk' // for middleware for api serve
import rootReducer from "./rootReducer";

// thunkmiddleware use for delay and dispatch
const thunkmiddleware=[reduxThunk];

const store=createStore(rootReducer,applyMiddleware(...thunkmiddleware));

export default store;