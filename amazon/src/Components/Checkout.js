import React from 'react'
import { useStateValue } from '../Context/StateProvider';
import '../Styles/Checkout.css'
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    const [{basket},dispatch] = useStateValue();
    return (
        <div className='checkout'>
            <img className='checkout__ad' src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/PrimeRewards/LP_Revamp/PC_Header_Banner._CB468631809_.jpg" alt="" />
            {
                basket?.length === 0 ? (
                    <div>
                        <h2>Your Cart is Empty</h2>
                    </div>)
                     :
                    (
                        <div>
                            <h2 className='checkout__title'>Your Cart</h2>
                            {basket.map((item)=>(
                                <CheckoutProduct 
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                                />
                            ))}
                            
                        </div>
                    )
            }
        </div>
    )
}

export default Checkout
