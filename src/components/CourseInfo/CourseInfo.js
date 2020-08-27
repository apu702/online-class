import React from 'react';
import './CourseInfo.css'

const CourseInfo = (props) => {
    const course = props.course;
    const {name, instructor, price, img} = props.course;

    const handleEnrollButton = props.handleEnrollButton;

    return (
        <div className="courseInfo-container">
           <div className="card course-info" style={{width:'400px'}}>
               <div>
                    <div className="course-img"></div>
                        <img src={img} alt=""/>
                    
                    <div>
                        <h1>COURSE NAME: {name}</h1>
                        <p>INSTRUCTOR NAME: {instructor}</p>
                        <p>COURSE PRICE: {price}</p>
                    </div>
               </div>
               <button className="btn btn-success" onClick={() => handleEnrollButton(course)}>Enroll Now</button>
           </div>
        </div>
    );
};

export default CourseInfo;