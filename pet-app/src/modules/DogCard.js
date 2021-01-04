import React from 'react'
import CardDetail from '../img/card-detail.PNG'
import Dog1 from '../img/dog1.PNG'

function DogCard({ dog }) {
    return (
        <div className="container-card">
            <div className="photo-container">
                <img className="photo-dog" src={dog.photoURL}></img>
                <img className="detail-card" src={CardDetail}></img>
            </div>
            <div className='info-container-card'>
                <div>Name: {dog.Name}</div>
                <div>Type: {dog.type} </div>
                <div>Height: {dog.height}</div>
                <div>Weight: {dog.weight}</div>
                <div>Adoption status: {dog.adoptionStatus}</div>
            </div>
            <button className="card-button">Get to know each other</button>
        </div>
    )
}
export default DogCard;