import React, { useState } from 'react';
import { fakeData } from '../../fakeData/fakeData';
import Cart from '../Cart/Cart';
import Course from '../Course/Course';
import './Shop.css';


const Shop = (props) => {
    const first10=fakeData.slice(0,10);
    const [courses,setCourse]=useState(first10);
    const[cart,setCart]=useState([]);
    const handleAddCourse=(course)=>{
        console.log('product added',course);
        const newCart=[...cart,course];
        setCart(newCart);}

    return (
        <div className="shop-container">
            <div className="course-container">
            <ul>
                {
                    courses.map(course=><Course handleAddCourse={handleAddCourse} course={course}></Course>)
                }
            </ul>
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>

            </div>
           
        </div>
    );
};

export default Shop;