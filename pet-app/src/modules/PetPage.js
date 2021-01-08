import React, { useState, useEffect } from 'react'
import photo from '../img/pet-page.PNG'
import axios from './axios'
import { useHistory, useLocation } from 'react-router-dom'
import { useParams } from "react-router";

function PetPage({ adoptedPetsList, setAdoptedPetsList, savedPetsList, setSavedPetsList }) {
    const history = useHistory()

    let { id } = useParams()
    console.log(id)
    const [pet, setPet] = useState("")
    const [savedPet, setSavedPet] = useState("")
    const checkIfAdopted = pet && pet.adoptionStatus.toLowerCase().includes('adopted')

    useEffect(() => {
        const petInfo = async () => {
            if (id != "") {
                const petInfo = await axios.get(`/pet/${id}`)
                setPet(petInfo.data)
            }
        }
        petInfo()
    }, [])

    const savePet = async () => {
        const savePet = await axios.put(`/userinfo/save-pet`, pet, {
            headers: {
                'auth-token': localStorage.getItem('token'),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        history.push('/my-pets')
    }
    const unsavePet = async () => {
        const savePet = await axios.put(`/userinfo/unsave-pet`, pet, {
            headers: {
                'auth-token': localStorage.getItem('token'),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        history.push('/my-pets')
    }
    const toggleSavePet = () => {
        if (savedPet === false) {
            savePet()
            setSavedPet(true)
        } else {
            unsavePet()
            setSavedPet(false)
        }
    }
    const adoptPet = async () => {
        pet.adoptionStatus = "Adopted"
        console.log({ adoptedPet: pet })
        const adoptPet = await axios.put(`/userinfo/adopt-pet/${id}`, pet, {
            headers: {
                'auth-token': localStorage.getItem('token'),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        history.push('/my-pets')
    }

    return (
        <div className="pet-page-container">
            <div className="container-photo-pet-name">
                <div className="container-photo-pet">
                    <img className="pet-detail" src={photo} />
                    <img className="pet-photo" src={pet.photoURL}></img>
                </div>
                <div className="name-pet">Hi, I'm {pet.Name} :)</div>
            </div>
            <div className="text-pet">
                <div className="pet-box">
                    <div className="pet-border-container">
                        <div className="info-container">
                            <div className="white-container1-pet">
                                <div>Weight: {pet.weight} kg</div>
                                <div>Color: {pet.color}</div>
                                <div>Dietary restrictions: {pet.diet}</div>
                            </div>
                            <div className="white-container2-pet">
                                <div>Type: {pet.type}</div>
                                <div>Height: {pet.height} cm</div>
                                <div>Hypoallergenic: {pet.hypoallergenic}</div>
                            </div>
                        </div>
                        <div className="bio-pet">Bio: {pet.bio}</div>
                        <div className="adoption-container">
                            <div className="adoption-status-label">Adoption Status: </div>
                            <div className="adoption-status">{pet.adoptionStatus}</div>
                        </div>
                        <div className="container-buttons-pet">
                            <button
                                onClick={adoptPet}
                                className={checkIfAdopted ? 'button-pet-adopt-disabled' : "button-pet-adopt"}
                                disabled={checkIfAdopted}>
                                Give this cutie a home
                                </button>
                            <button onClick={toggleSavePet} className="button-pet-save">Save and think about it</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )




}
export default PetPage;