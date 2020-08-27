import React from 'react';
import './Card.css';

const Card = (props) => {
    const card = props.card;
   


    let totalPrice = 0;
    for(let i = 0; i < card.length; i++) {
        const course = card[i];
        totalPrice = totalPrice + course.price;
    }

    return (
        <div>
            <div className="card price-card">
                <h1>ENROLL SUMMARY</h1>
                <h2>Total Enroll : {card.length}</h2>
                <h2>Total Price : {totalPrice}</h2>
            </div>

            {/* <h1>Name:</h1>
                {
                    card.map(course =>  <h2>{course.name}</h2>)
                } */}
            <button className="btn btn-success confirm-btn">Confirm</button>
        </div>
       
    );
};

export default Card;