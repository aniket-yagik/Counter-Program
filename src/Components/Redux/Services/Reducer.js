import Inc from "./ConstTypes";

const initinalState={count:0};

const MyReducer=(state=initinalState,action)=>{
 if(action.type == Inc){
    return {...state,count:state.count+1}
 }else{
    return state
 }
}


export default MyReducer;