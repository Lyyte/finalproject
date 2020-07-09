import React from 'react';
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../user/index';

const Checkout = ({ products }) => {

const getTotal = () => {
    return products.reduce((currentValue, nextValue) => {
        return currentValue + nextValue.count * nextValue.price;
    }, 0);
};

const showCheckout = () => {
    return isAuthenticated() ? (
        <button className='btn btn-success'>Checkout</button>
    ) : (
        <Link to="/signin">
            <button className="btn btn-primary">Sign in to checkout</button>
        </Link>
    );
};


    return <div font-size='200%' >
        Total: ${getTotal()}
        {showCheckout()}
    </div>
}

export default Checkout;
