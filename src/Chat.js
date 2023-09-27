import React from "react"
import chat_svg from './images/chat.svg'
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
function Chat() {
    const [styleModal, setStyleModal] = useState({visibility: "hidden"});
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();


    const form = useRef();
    const sendEmail = (e) => {
        if(!name || !email || !message) {
            alert("Mancano dei campi")
        }else {
            emailjs.sendForm('service_cpcx647', 'template_853mmme', form.current, '87SPuhRK_gwZkd88g')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
        }
    };


    function toggleUntoggleModal() {

        if(styleModal.visibility == "hidden") {
            setStyleModal({visibility: "visible"})
        }else {
            setStyleModal({visibility: "hidden"})
        }
        console.log(styleModal)

    }

    return (
        <div className="fixed-container">
            {styleModal.visibility == "visible" &&
                <div className='modal'>
                     <div className="section-80">
                        <form ref={form} onSubmit={sendEmail}>
                            <label>Name: </label>
                            <br />
                            <input type="text" name="user_name"></input>
                            <br />
                            <label>Email: </label>
                            <br />
                            <input type="text" name="user_email"></input>
                            <br />
                            <br />
                            <textarea name="message" rows={10} cols={70}></textarea>
                            <br />
                            <button type="submit">Send</button>
                        </form>
                     </div>
                 </div>
            }

            <div className='chat'>
                <img onClick={()=>toggleUntoggleModal()} src={chat_svg} width={70} height={70}/>
            </div>
        </div>
    );

}


export default Chat;