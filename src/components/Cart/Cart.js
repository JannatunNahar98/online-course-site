import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const cart =props.cart;
    const totalPrice=cart.reduce((total,course)=>total+course.price,0);
    return (
        <div className="cart">
            <h3>Order Summary:</h3>
            <h4>Items Ordered:{cart.length}</h4>
            <h4>Total Price:{totalPrice}</h4>

        </div>
    );
};

export default Cart;