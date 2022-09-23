import React from 'react';
import add from "../Images/addAvatar.png"
const Register = () => {
    return (
        <div className='formContainer'>
            <div className="formWrapper">
                <span className='logo'>Simple Chat</span>
                <span className='title'>Register</span>
                <form >
                    <input type="text" placeholder='Name' />
                    <input type="email" placeholder='Email ' />
                    <input type="password" placeholder='Password' />
                    <input style={{ display: "none" }} type="file" id='file' />
                    <label htmlFor="file">
                        <img src={add} alt="" />
                        <span>Add an avatar</span>
                    </label>
                    <button>Sign Up</button>
                </form>
                <p>Already have an account? Login</p>
            </div>

        </div>
    );
};

export default Register;