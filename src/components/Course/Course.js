import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Course.css';
import CourseInfo from '../CourseInfo/CourseInfo';
import Card from '../Card/Card';

const Course = () => {
    //Fetch fakedata
    const first15 = fakeData.slice(0, 15);
    const [courses, setCourses] = useState(first15);

   
    const [card, setCard] = useState([]);


//Enroll button Click 
   const handleEnrollButton = (course) =>{
       //Send EnrollInfo to card
       const newCard =[...card, course];
       setCard(newCard);
   }




    return (
        <div className="course-container">
            <div className="course">
                <h1>Total Course: {courses.length}</h1>
                {
                    courses.map(course => <CourseInfo course={course} handleEnrollButton={handleEnrollButton}></CourseInfo>)
                } 
            </div>
            <div className="card-container">
                <Card card={card}></Card>
            </div>
           
        </div>
    );
};

export default Course;