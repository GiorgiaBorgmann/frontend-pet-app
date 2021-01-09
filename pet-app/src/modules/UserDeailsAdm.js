import React, { useState, useEffect } from 'react'
import CardDetail from '../img/card-detail.PNG'

import { useParams } from "react-router";
import axios from './axios'

function UserInfo() {

    let { id } = useParams()
    const [user, setUser] = useState("")
    useEffect(() => {
        const userInfo = async () => {
            if (id != "") {
                const userInfo = await axios.get(`/userinfo/username/${id}`, {
                    headers: {
                        'auth-token': localStorage.getItem('token'),
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                })
                setUser(userInfo.data.foundObject)
            }

        }
        userInfo()
    }, [])
    console.log(user)
    return (
        <div className="container-user-info">

            <div>Name: {user.name} {user.lastName} </div>

        </div>
    )
}
export default UserInfo;