import { createStore } from "redux";
import MyReducer from "./Services/Reducer";

const store=createStore(MyReducer)
export default store;