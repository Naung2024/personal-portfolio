import { useState } from 'react';
import { FaPhone } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import facebookIcon from "../assets/images/facebook.png";
import linkedinIcon from "../assets/images/linkedin.webp";
import githubIcon from "../assets/images/github.png";
import Swal from 'sweetalert2'


const ContactUs = () => {
    const [isLoading, setIsLoading] = useState(false); // Add loading state
    const onSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true); // Disable button on form submission
        const formData = new FormData(event.target);
    
        formData.append("access_key", "df03371d-8ea7-4f42-9075-815c5b071acd");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
            event.target.reset();
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success",
                width: "300px"
            });
        } else {
            Swal.fire({
                title: "Error",
                text: "Failed to send message. Please try again.",
                icon: "error",
                width: "300px"
            });
        }
        setIsLoading(false); // Re-enable button after submission
    };

    return (
        <div className="bg-custom-gray-dark" id="contact">
            <div className="container px-5 py-[30px] sm:py-[60px]">
                <div className="w-full">
                    <h3 className="text-3xl sm:text-[36px] font-medium">
                        <span className="text-white content-head">Contact </span> 
                        <span className="text-custom-green">Me</span>
                    </h3>
                </div>
                <div className="flex sm:flex-row flex-col justify-between mt-[50px] gap-10">
                    <div className="w-full sm:w-[600px]">
                        <h4 className="text-custom-green text-2xl font-medium mb-2.5">Let’s Discuss Your Project</h4>
                        <p className="text-white font-normal leading-7 mb-[30px]">
                            Always available for freelancing if the right project comes along, 
                            Feel free to contact me.
                        </p>

                        <form onSubmit={onSubmit}>
                            <div>
                                <input type="text" name="name" className="w-full h-[50px] border border-custom-placeholder focus:outline-none focus:ring-2 text-white bg-transparent pl-5 pt-0.5" placeholder="Enter your name" required />
                            </div>
                            <div className="my-[30px]">
                                <input type="email" name="email" className="w-full h-[50px] border border-custom-placeholder focus:outline-none focus:ring-2 text-white bg-transparent pl-5 pt-0.5" placeholder="Enter your email" required/>
                            </div>
                            <div className="mb-[30px]">
                                <textarea name="message" rows="7" className="w-full border border-custom-placeholder focus:outline-none focus:ring-2 text-white bg-transparent pl-5 pt-5" placeholder="Enter your message" required></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className={`w-[156px] h-[40px] ${isLoading ? 'bg-gray-400' : 'bg-custom-orange'} align-center text-white rounded-[3px]`}
                            >
                                {isLoading ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                    <div className="w-full sm:w-[313px]">
                        <div className="flex gap-x-5">
                            <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] rounded-full bg-custom-orange flex items-center justify-center">
                                <FaPhone className="text-white size-5 sm:size-7"/>
                            </div>
                            <div className="flex flex-col justify-center">
                                <h5 className="text-custom-green text-xl font-medium">Call Me</h5>
                                <p className="text-white font-normal leading-7">+6680 965 2078</p>
                            </div>
                        </div>
                        
                        <div className="flex gap-x-5 my-[30px]">
                            <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] rounded-full bg-custom-orange flex items-center justify-center">
                                <MdOutlineMail className="text-white size-5 sm:size-7"/>
                            </div>
                            <div className="flex flex-col justify-center">
                                <h5 className="text-custom-green text-xl font-medium">Email Me</h5>
                                <p className="text-white font-normal leading-7">naungnaung.code@gmail.com</p>
                            </div>
                        </div>

                        <div>
                            <h5 className="text-custom-green text-xl font-medium mb-5">Follow Me</h5>
                            <div className="flex gap-x-6">
                                <a href="https://www.facebook.com/share/18R8yxYE2H" target="_blank"><img className="w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] rounded-full" src={facebookIcon} alt="Facebook" /></a>
                                <a href="https://www.linkedin.com/in/naung-naung" target="_blank"><img className="w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] rounded-full" src={linkedinIcon} alt="Linkedin" /></a>
                                {/* <a href="https://github.com/Naung2024" target="_blank"><img className="w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] rounded-full" src={githubIcon} alt="Github" /></a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
