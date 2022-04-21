import React, { useRef} from 'react'
import './Form.css'

function Form() {


    const firstNameRef = useRef<any>(null)
    const lastNameRef =  useRef<any>(null)
    const emailRef = useRef<any>(null)
    const messageRef =  useRef<any>(null)

    
    const handleSubmit = (event: any) => {
        event.preventDefault()
        if(firstNameRef!==null && lastNameRef!==null && emailRef!==null && messageRef!==null){
            const data = {
                firstName: firstNameRef.current!.value,
                lastName: lastNameRef.current!.value,
                email: emailRef.current!.value,
                message: messageRef.current!.value
            }

            alert("tadaaa!: \n" + JSON.stringify(data) + "Your data 😎")
        }

       
    }

    return (
        <div  className="container">
            <h1>Contact us</h1>
            <form onSubmit={handleSubmit} className="form">
                <div className="name">
                    <label htmlFor="firstName" id="nameLabel">First Name</label>
                    <input
                     
                        type="text" 
                        id="firstName" 
                        name="firstName"
                        className="firstName" 
                        ref={firstNameRef} 
                        tabIndex={1} 
                    />
                    
                    <label htmlFor="lastName">Last name</label>
                    <input  
                        type="text" 
                        id="lastName" 
                        className="lastName" 
                        ref={lastNameRef}
                        tabIndex={2}  
                    />
                </div>
                <label htmlFor="email">Email</label>
                <input 
                type="email" 
                name="email"
                id="email"
                className="email"
                placeholder="example@corp.com"
                ref={emailRef}
                tabIndex={3} 
                />

                <label htmlFor="message">Message</label>
                <textarea 
                placeholder="Start typing..." 
                className="message" 
                name="message"
                ref={messageRef}
                >

                </textarea>
                <button type="submit" className="send">Send</button>
            </form>
        </div>
    )
}

export default Form