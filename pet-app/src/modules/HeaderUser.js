import React, { useState, useEffect } from 'react'
import photo from '../img/user-photo.PNG'
import axios from './axios'
function HeaderUser() {
    let user = {
        name: 'Giorgia',
        last: 'Borgmann'
    }
    const [userID, setUserID] = useState("")
    const [infoUser, setInfoUser] = useState("")
    useEffect(() => {
        const userInfo = async () => {
            const response = await axios.get("/userinfo", {
                headers: {
                    'auth-token': localStorage.getItem('token'),
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            setUserID(response.data._id)
            console.log(userID)
            const nameAndLastName = await axios.get(`/userinfo/username/${response.data._id}`, {
                headers: {
                    'auth-token': localStorage.getItem('token'),
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            setInfoUser(nameAndLastName)
            console.log(nameAndLastName)
        }

        userInfo()

    }, [])
    console.log(infoUser)
    // useEffect(() => {
    //     const nameinfo = async () => {
    //         const nameAndLastName = await axios.get(`/userinfo/username/${userID}`, {
    //             headers: {
    //                 'auth-token': localStorage.getItem('token'),
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'application/json'
    //             }
    //         })
    //         setInfoUser(nameAndLastName)
    //         console.log(infoUser)
    //     }
    //     nameinfo()
    // }, [])
    return (
        <div className="header-user-container">

            <img src={photo}></img>
            <div>
                <div className="welcome">{`Welcome to the The Waiting Game, ${infoUser.data.name} ${infoUser.data.lastName}!`}</div>
                <div className="proposal">A pet adoption proposal</div>
            </div>
        </div>
    )
}
export default HeaderUser;