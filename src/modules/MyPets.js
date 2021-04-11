import React, { useEffect, useState } from 'react'
import DogCard from './DogCard'
import axios from './axios'
import '../style/myPet.css'

function MyPets({ adoptedPetsList, setAdoptedPetsList, savedPetsList, setSavedPetsList }) {

    const [pageToggle, setPageToggle] = useState("")
    useEffect(() => {
        const getSavedPetsList = async () => {

            const petList = await axios.get(`/userinfo/list-saved-pets/${localStorage.getItem('id')}`, {
                headers: {
                    'auth-token': localStorage.getItem('token'),
                    'Accept': 'application/json',
                }
            })
            setSavedPetsList(petList.data.savePets)
            setAdoptedPetsList(petList.data.adoptedPets)
        }
        getSavedPetsList()
    }, [setAdoptedPetsList, setSavedPetsList])
    
    const showSavedPets = () => (
        setPageToggle(true)
    )
    const showAdoptedPets = () => (
        setPageToggle(false)
    )

    if (pageToggle === true) {

        return (
            <div className="container-my-pets-page">
                <div className="toggle-button-container">
                    <div className={pageToggle ? 'toggle-button' : 'toggle-button-pink'} onClick={showSavedPets}>Saved Pets</div>
                    <div className={pageToggle ? 'toggle-button-pink-option' : 'toggle-button-option'} onClick={showAdoptedPets}>My pet family</div>
                </div>
                <div className="list-dogs">
                    {savedPetsList && savedPetsList.map((dog, index) => (
                        < DogCard key={index} dog={dog} />
                    ))}
                </div>

            </div>
        )
    }
    else {
        return (
            <div className="container-my-pets-page" >
                <div className="toggle-button-container">
                    <div className={pageToggle ? 'toggle-button' : 'toggle-button-pink'} onClick={showSavedPets}>Saved Pets</div>
                    <div className={pageToggle ? 'toggle-button-pink-option' : 'toggle-button-option'} onClick={showAdoptedPets}>My pet family</div>
                </div>
                <div className="list-dogs">
                    {adoptedPetsList && adoptedPetsList.map((dog, index) => (
                        < DogCard key={index} dog={dog} />
                    ))}
                </div>
            </div>
        )
    }
}
export default MyPets;