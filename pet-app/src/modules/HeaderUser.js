import React, { useState, useEffect } from 'react'
import photo from '../img/user-photo.PNG'
import axios from './axios'
function HeaderUser() {

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

            if (response.status === 200) {
                localStorage.setItem('id', response.data._id);
            }
            const nameAndLastName = await axios.get(`/userinfo/username/${response.data._id}`, {
                headers: {
                    'auth-token': localStorage.getItem('token'),
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            setInfoUser(nameAndLastName)
        }
        userInfo()
        
    }, [])


    console.log(infoUser)
    return (
        <div className="header-user-container">
            {/* ${infoUser.data.name} ${infoUser.data.lastName} */}
            <img src={photo}></img>
            <div>
                <div className="welcome">{`Welcome to the The Waiting Game, ${infoUser ? infoUser.data.name : "loading"} ${infoUser ? infoUser.data.lastName : "loading"}!`}</div>
                <div className="proposal">A pet adoption proposal</div>
            </div>
        </div>
    )


}
export default HeaderUser;