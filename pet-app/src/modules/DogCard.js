import React from 'react'
import CardDetail from '../img/card-detail.PNG'
import Dog1 from '../img/dog1.PNG'

function DogCard() {
    return (
        <div className="container-card">
            <div className="photo-container">
                <img className="photo-dog" src={Dog1}></img>
                <img className="detail-card" src={CardDetail}></img>
            </div>
            <div className='info-container-card'>
                <div>Name: Rog</div>
                <div>Breed: unknown </div>
                <div>Height: 45kg</div>
                <div>Weight: 120cm</div>
                <div>Adoption status: adoption</div>
            </div>
            <button className="card-button">Get to know each other</button>
        </div>


    )
}
export default DogCard;