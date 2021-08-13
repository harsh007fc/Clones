import React from 'react'
import '../Styles/Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../Context/StateProvider';
import { getbasketTotal } from '../Context/Reducer';

function Subtotal() {
    const [{basket},dispatch] = useStateValue();
    console.log(getbasketTotal(basket));
    return (
        <div  className='subtotal'>

            <CurrencyFormat
            renderText={(value) => (
                <>
                <p>
                    Subtotal({basket.length} items) : <strong>{value}</strong>
                </p>
                <small className="subtotal__gift">
                    <input type="checkbox"/>This order contains a gift
                </small>
                </>
            )}
            decimalScale={2}
            value={getbasketTotal(basket)}
            displayType={'text'}
            thousandSeparator={true}
            prefix={"₹"}
            />
            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
