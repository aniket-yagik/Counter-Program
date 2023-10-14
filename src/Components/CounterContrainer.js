import React from 'react'
import Inc_Action from './Redux/Services/Action'
import { connect } from 'react-redux'

 function CounterContrainer(props) {
  return (
    <>
        <h1>Count:{props.count}</h1>
      <button onClick={props.incCount}>Click to Increment</button>
    </>
  
  )
}

const mapStateToProps=(state)=>{
    return {count:state.count}
}

const mapDispatchToProps=(dispatch)=>{
    return{incCount:()=>dispatch(Inc_Action())}
}



export default connect(mapStateToProps,mapDispatchToProps)(CounterContrainer )