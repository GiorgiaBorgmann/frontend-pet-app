import React, { useState } from 'react';
import axios from './axios'
import { useHistory } from 'react-router-dom'
import Cloudinary from './Cloudinary';


const ProfileSettings = () => {
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [adoptionStatus, setAdoptionStatus] = useState('')
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [color, setColor] = useState('')
    const [bio, setBio] = useState('')
    const [hypoallergenic, setHypoallergenic] = useState('')
    const [diet, setDiet] = useState('')
    const [photoURL, setPhotoURL] = useState('')
    const history = useHistory()
    const handleName = event => {
        setName(event.target.value)
    }
    const handleType = event => {
        setType(event.target.value)
    }
    const handleAdoptionStatus = event => {
        setAdoptionStatus(event.target.value)
    }
    const handleHeight = event => {
        setHeight(event.target.value)
    }
    const handleWeight = event => {
        setWeight(event.target.value)
    }
    const handleColor = event => {
        setColor(event.target.value)
    }
    const handleBio = event => {
        setBio(event.target.value)
    }
    const handleHypoallergenic = event => {
        setHypoallergenic(event.target.value)
    }
    const handleDiet = event => {
        setDiet(event.target.value)
    }
    const uploadImg = (img) => {
        let photoURL = img.info.url;
        setPhotoURL(photoURL);
    }

    const addPet = async (event) => {
        event.preventDefault()
         await axios.post(`/pet/new-pet`, {
            type: type,
            Name: name,
            adoptionStatus: adoptionStatus,
            height: height,
            weight: weight,
            color: color,
            bio: bio,
            hypoallergenic: hypoallergenic,
            diet: diet,
            photoURL: photoURL
        })
        history.push('/adm')
         window.location.reload()
    }
    return (
        <div>
            <div className="container-settings">
                <div className="form-container-settings">
                    <div className="sign-up-title">Add a pet</div>
                    <Cloudinary uploadImg={uploadImg} />
                    <form className="form-sign-up">
                        <div className="name-container">
                            <div className="name-sign-up">
                                <label>Type</label>
                                <input onChange={event => handleType(event)} className="name-sign-up-input" type="text"></input>
                            </div>
                            <div className="last-name-sign-up">
                                <label>Name</label>
                                <input onChange={event => handleName(event)} className="name-sign-up-input" type="text"></input>
                            </div>
                        </div>
                        <label>Adoption Status</label>
                        <input onChange={event => handleAdoptionStatus(event)} className="input-la" type="tel"></input>
                        <label> Height</label>
                        <input onChange={event => handleHeight(event)} className="input-la" type="text"></input>
                        <label> Weight</label>
                        <input onChange={event => handleWeight(event)} className="input-la" type="text"></input>
                        <label> Color</label>
                        <input onChange={event => handleColor(event)} className="input-la" type="text"></input>
                        <label>Bio</label>
                        <input onChange={event => handleBio(event)} className="input-la" type="text"></input>
                        <label>Hypoallergenic</label>
                        <input onChange={event => handleHypoallergenic(event)} className="input-la" type="text"></input>
                        <label>Dietary Restriction</label>
                        <input onChange={event => handleDiet(event)} className="input-la" type="text"></input>
                        <button onClick={addPet} type="submit">Add pet</button>
                        <br></br>
                    </form>
                </div>
            </div>
        </div >
    )
}
export default ProfileSettings

