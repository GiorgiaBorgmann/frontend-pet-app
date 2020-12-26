import React from 'react'
import photo from '../img/user-photo.PNG'
function HeaderUser() {
    let user = {
        name: 'Giorgia',
        last: 'Borgmann'
    }
    return (
        <div className="header-user-container">
            <img src={photo}></img>
            <div>
                <div className="welcome">{`Welcome ${user.name} ${user.last} to the The Waiting Game!`}</div>
                <div className="proposal">A pet adoption proposal</div>
            </div>
        </div>
    )
}
export default HeaderUser;