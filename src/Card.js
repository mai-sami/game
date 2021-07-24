import React from 'react'
import './App.css';

function Card({image,title,price,rating,date}) {
    return (
        <div className="card">
            <div className="waper">

       <img src={image} alt="" />    
       <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <p>{date}</p>
          <div className="product__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>🌟</p>
              ))}
          </div>
          </div>

        </div>
    )
}

export default Card
