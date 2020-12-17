import React, { useState } from 'react';
import Modal from 'react-modal';
import logo from '../img/logo.jpg'
import singin from '../img/sing-in-blue.PNG'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#f2dcdd',
        width: '25%'
    },
    overlay: {
        backgroundColor: 'rgb(192,192,192, 0.4)',

    }
};
const SignIn = () => {

    const [modalIsOpen, setIsOpen] = useState(false)
    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }
    return (
        <div>
            <div className="link-log-in" onClick={openModal}>LogIn</div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                {/* <div className="container-sing-in">
                    <div className="blue-bg">
                        <img src={singin} />
                    </div> */}
                {/* <div className="form-container"> */}
                <div className="close-button" onClick={closeModal}>X</div>
                <div className="logo-modal"><img src={logo} /></div>
                <div className="sign-in-title">Sign In</div>
                <form className="form-sign-in">
                    <label> Email</label>
                    <input type="email"></input>
                    <label> Password</label>
                    <input type="password"></input>
                    <button type="submit">Enter</button>
                </form>


            </Modal>
        </div>
    )
}
export default SignIn
