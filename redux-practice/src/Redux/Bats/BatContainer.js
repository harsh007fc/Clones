import React,{useState} from 'react'
import { connect } from 'react-redux'
import { buyBat } from './BatsAction'


function BatContainer(props) {
    let [number,setNumber] = useState(0);
    
    return (
        <>
            <h2>No of bats= {props.numOfBats}</h2>
            <input value={number} onChange={e=>setNumber(e.target.value)} type='number' />
            <button onClick={()=>{props.buyBat(number)}}>Buy {number} Bat</button>
        </>
    )
}


let mapStateToProps = (state) => {
return {
    numOfBats:state.bat.numOfBats
}
}


let mapDispatchToProps = (dispatch) => {
    return {
        buyBat:(number)=>dispatch(buyBat(number))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(BatContainer)
