import React from 'react'
import { IconContext } from "react-icons";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import './Contact.css'



function Contact() {

        return (
                
                    <div>
                        <ul>
                            <li align="center">
                                    <a href="https://www.linkedin.com/in/alexanderjustinmartinez/" 
                                       target="_blank" 
                                       rel="noreferrer">
                                           <IconContext.Provider value={{size: '50px'}}>
                                                <AiFillYoutube/>
                                            </IconContext.Provider>
                                    </a>
                                </li>
                            <li align="center">
                                    <a href="https://github.com/AlexJMartinez" 
                                       target="_blank" 
                                       rel="noreferrer">
                                           <IconContext.Provider value={{size: '50px'}}>
                                                <AiFillInstagram/>
                                           </IconContext.Provider>

                                    </a>
                                </li>
                            <li align="Center">
                                    <a href="https://medium.com/@Alex__Martinez" 
                                       target="_blank" 
                                       rel="noreferrer">
                                           <IconContext.Provider value={{size: '50px'}}>
                                                <AiFillLinkedin/>
                                           </IconContext.Provider>

                                    </a>
                                </li>
                        </ul>
                    </div>
            
         
        )
}

export default Contact;