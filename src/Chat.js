import React from "react"
import chat_svg from './images/chat.svg'
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import {success, error} from "./Toast"
import { toast } from "react-hot-toast"

function Chat() {
    const [styleModal, setStyleModal] = useState({visibility: "visible"});
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [message, setMessage] = useState(null);

    const form = useRef();
    function sendEmail() {

        if(!name || !email || !message) {
            error("Please fill in the form")
        }else {
            toast.promise(emailjs.sendForm('service_cpcx647', 'template_853mmme', form.current, '87SPuhRK_gwZkd88g'), {
                loading: 'Sending ...',
                success: 'Thank you for contacting me. I will answer you as soon as possible.',
                error: 'Something went wrong',
              },
              {
                success: {
                  duration: 7000
                },
              });
            setStyleModal({visibility: "hidden"})
            return;
        }
    }
    function onChangeInput(event, name) {
        if(name == "name") {
            setName(event.target.value)
        }
        if(name == "email") {
            setEmail(event.target.value)
        }
        if(name == "message") {
            setMessage(event.target.value)
        }
    }


    function toggleUntoggleModal() {

        if(styleModal.visibility == "hidden") {
            setStyleModal({visibility: "visible"})
        }else {
            setStyleModal({visibility: "hidden"})
        }

    }

    return (
        <div className="fixed-container">
            {styleModal.visibility == "visible" &&
                <div className='modal'>
                     <div className="section-80">
                        <form ref={form} onSubmit={sendEmail}>
                            <label>Name: </label>
                            <br />
                            <input onChange={(event)=>onChangeInput(event,"name")} type="text" name="user_name"></input>
                            <br />
                            <label>Email: </label>
                            <br />
                            <input onChange={(event)=>onChangeInput(event,"email")} type="text" name="user_email"></input>
                            <br />
                            <br />
                            <textarea onChange={(event)=>onChangeInput(event,"message")} name="message" rows={10} cols={70}></textarea>
                            <br />
                            <button type="button" onClick={()=>sendEmail()}>Send</button>
                        </form>
                     </div>
                 </div>
            }

            <div className='chat'>
                <img onClick={()=>toggleUntoggleModal()} src={chat_svg} width={50} height={50}/>
            </div>

        </div>
    );

}


export default Chat;