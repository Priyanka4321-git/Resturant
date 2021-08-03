import React from 'react';
import Productbox from './Productbox';
import pimage1 from '../images/s1.png';
import pimage2 from '../images/s1.png';

function Products() {
    return(
        <div id= 'products'>
            <h1>CHOOSE & ENJOY</h1>
            <p>Lorem ipsum dolor sit amt consectetur adipisicing elit. Facilis maxim veniam voluptate, quis nostrum aliquid!</p>
            <div className= 'a-container'>
                <Productbox image={pimage1} title="Luger Burger" />
                <Productbox image={pimage2} title="Le Pigeon Burger" />
                <Productbox image={pimage1} title="Luger Burger" />
            </div>
        </div>
    )
}

export default Products;