import React, { useState } from 'react'
import './homeStyles.css'
import { WebcamCapture} from '../Webcam/Webcam'
import {compareFaces} from '../../services/FacesService'


const Home = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('');


    const submitForm = () => {
        alert("Form submitted");
        setName('');
        setEmail('');
    }
   
    const isMatched = (e) => {
        compareFaces()
        .then(response => {
            //alert(response);
            
            console.log(response);
        })
    }

    return (
        <div className="home-container">
            <div className="container">
                <div className="text">
                    <h1>Fill up this form!</h1>
                    <h1>Faces : {isMatched} </h1>
                    <form className="form">
                        <WebcamCapture/>
                        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                        <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                        <button type="submit" id="login-button" onClick={(e) => submitForm(e)}>Submit</button>
                        <button type="submit" onClick={isMatched}>Fetch data</button>

                    </form>
                </div>
            </div>
        </div>
    )
}
export default Home
