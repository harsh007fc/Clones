import React from 'react'
import '../Styles/Home.css'
import Product from './Product'
function Home() {
    return (
        <div className='home'>
            <img className='home__image' src="https://store-images.s-microsoft.com/image/apps.16285.14618985536919905.552c0017-6644-49a8-8467-8f7b34ce0428.30ad6b05-16d9-4d5e-a242-43107708a16a"alt='image' />

            {/* product id title rating price image */}
            {/* product id title rating price image */}
            <Product
            id='123456'
            title='Fire TV Stick (3rd Gen, 2021) with all-new Alexa Voice Remote (includes TV and app controls) | HD streaming device | 2021 release'
            price={11.12}
            rating={3}
            image='https://m.media-amazon.com/images/I/31DsVbwcK6S._AC_SR400,600_.jpg'/>
            
        </div>
    )
}

export default Home