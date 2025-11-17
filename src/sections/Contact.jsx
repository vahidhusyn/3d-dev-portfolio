import emailjs from "@emailjs/browser";
import { useState } from "react";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";

const Contact = () => {
    const [formData, setFormData] = useState({name:"",email:"",message:""});

    const [isLoading, setiIsLoading] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertType, setAlertType] = useState("success");
    const [alertMessage, setAlertMessage] = useState("");

    const handleChange=(e)=>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const showAlertMessage =(type,message)=>{
        setAlertType(type);
        setAlertMessage(message);
        setShowAlert(true);
        setTimeout(() => {
           setShowAlert(false); 
        }, 5000);
    }

    const handleSubmit= async (e)=>{
        setiIsLoading(true);
        e.preventDefault();

        try {
            console.log("form submitted", formData);
            
            await emailjs.send("service_wm38li9", "template_clzuqfc", {
            from_name: formData.name,
            to_name: "Vahid",
            from_email: formData.email,
            to_email: "vahidhusyn2@gmail.com",
            message: formData.message,
        }, "VxTYPUfiP8c5VB-ij");
        

        setiIsLoading(false);
        showAlertMessage("success", "your message has been sent successfully");
        setFormData({name:"", email:"", message:""});

        } catch (error) {
            setiIsLoading(false);
            console.log(error);
            showAlertMessage("danger", " Something went wrong!");
            
            
        }
        
        // 
        //         
        
    }

  return (
    <section
    className="relative flex items-center section-spacing">
        <Particles className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#fff"}
        refresh/>
        {showAlert && <Alert type={alertType} text={alertMessage}/>}
        <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
            <div className="flex flex-col items-start w-full gap-5 mb-10">
                <h2 className="text-heading">Let's Talk</h2>
                <p className="font-normal text-neutral-400">Got an idea or project in mind? Let’s build something great together — reach out and say hello.</p>
            </div>
            <form className="w-full" onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label htmlFor="name" className="field-label">Full Name</label>
                    <input 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text"
                    className="field-input field-input-focus"
                    placeholder="John Doe"
                    autoComplete="name"
                    required
                    />
                </div>
                
                <div className="mb-5">
                    <label htmlFor="email" className="field-label">Email</label>
                    <input 
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    name="email"
                    type="email"
                    className="field-input field-input-focus"
                    placeholder="johndoe@gmail.com"
                    autoComplete="email"
                    required
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="message" className="field-label">Message</label>
                    <textarea 
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    name="message"
                    type="text"
                    className="field-input field-input-focus"
                    placeholder="share your message here"
                    autoComplete="message"
                    rows="4"
                    required
                    />
                </div>

                <button
                type="submit"
                className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation">
                    {!isLoading? "Send" : "Sending..."}
                </button>


            </form>
        </div>
    </section>
  )
}

export default Contact