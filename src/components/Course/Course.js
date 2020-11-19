import React from 'react';
import './Course.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'


const Course = (props) => {
    console.log(props);
    const {image,price,description,name,author}=props.course;
    
    return (
    <div class="card">
        <div class="row no-gutters">
            <div class="col-auto">
                <img src={image} class="img-fluid" alt=""></img>
            </div>
            <div class="col">
                <div class="card-block px-2">
                    <h4 class="card-title">Course Name:<h5 className="name">{name}</h5></h4>
                        <p class="card-text">Written by: {author}</p>
                        
                        
                </div>
            </div>
        </div>
        <div class="card-footer w-100 ">
             {description}
             
        </div>
        <div className="price"> 
            <Button variant="success">Price:${price}</Button>  
        </div>
        <br/>
        
        <div className="enroll">
            <Button variant="primary"
            onClick={()=>props.handleAddCourse(props.course)}
            ><FontAwesomeIcon icon={faShoppingBasket} /> Enroll Now </Button>
        </div>
  </div>
        
    );
};

export default Course;