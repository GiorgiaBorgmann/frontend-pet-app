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
        width: '60%',
        padding: '0'
    },
    overlay: {
        backgroundColor: 'rgb(192,192,192, 0.4)',

    }
};
const SignUp = () => {

    const [modalIsOpen, setIsOpen] = useState(false)
    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }
    return (
        <div>
            <div className="link-sign-up" onClick={openModal}>SignUp</div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="container-sing-in">
                    <div className="blue-bg">
                        <div className="logo-modal-sign-up"><img src={logo} /></div>
                        {/* <img src={singin} /> */}
                    </div>
                    <div className="form-container">
                        <div className="close-button" onClick={closeModal}>X</div>
                        <div className="sign-up-title">Join our community</div>
                        <form className="form-sign-up">
                            <div className="name-container">
                                <div className="name-sign-up">
                                    <label>First name</label>
                                    <input className="name-sign-up-input" type="text"></input>
                                </div>
                                <div className="last-name-sign-up">
                                    <label>Last name</label>
                                    <input className="name-sign-up-input" type="text"></input>
                                </div>
                            </div>
                            <label>Phone number</label>
                            <input className="input-la" type="tel"></input>
                            <label> Email</label>
                            <input className="input-la" type="email"></input>
                            <label> Password</label>
                            <input className="input-la" type="password"></input>
                            <label> Confirm password</label>
                            <input className="input-la" type="password"></input>
                            <button type="submit">Enter</button>
                        </form>
                    </div>
                </div>

            </Modal>
        </div>
    )
}
export default SignUp

