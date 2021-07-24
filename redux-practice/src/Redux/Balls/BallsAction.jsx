//actions creators return an action 
//return actions

const BUY_BALL = 'BUY_BALL';

//if i need to make a change we can do it here and iy will reflected everywhere

export const buyBall = () => {
    return {
        type:BUY_BALL,
    }
}
