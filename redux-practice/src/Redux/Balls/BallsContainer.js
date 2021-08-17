import React from 'react'
import { buyBall } from './BallsAction';
import {connect} from 'react-redux'

function BallsContainer(props) {
    console.log(props);
    return (
        <div>
            <h2>Number of Balls = {props.numOfBalls} </h2>
            <button onClick={props.buyBall}>Buy Balls</button>
        </div>
    )
}

//first method for reading from global state

const mapStateToProps = (state)=>{ 
    return {
        numOfBalls:state.ball.numOfBalls
    }
}

//mapDispatchToProps

const mapDispatchToProps = (dispatch) => {
    return {
        buyBall : () => dispatch(buyBall())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BallsContainer)
