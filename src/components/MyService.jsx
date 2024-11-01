import { CgWebsite } from "react-icons/cg";
import { FaLaptopCode } from "react-icons/fa";
import { BsFiletypeJson } from "react-icons/bs";

const MyService = () => {
  return (
    <div className="bg-custom-dark" id="service">
        <div className="container px-5 py-[30px] sm:py-[60px]">
            <div className="w-full">
                <h3 className="text-3xl sm:text-[36px] font-medium">
                    <span className="text-white content-head">My </span> 
                    <span className="text-custom-green">Services</span>
                </h3>
            </div>
            <div className="flex sm:flex-row flex-col justify-between mt-[50px] gap-5">
                <div>
                    <CgWebsite className="text-custom-orange size-12"/>
                    <h4 className="text-xl sm:text-2xl text-custom-green my-[15px] font-medium">Design & Prototype</h4>
                    <p className="text-white font-normal leading-7">
                        I offer creative and user-centered design solutions, transforming ideas into intuitive 
                        digital experiences. From wireframes to high-fidelity prototypes, I ensure that each 
                        design is functional, visually appealing, and ready for development, providing a seamless 
                        user experience for web and mobile platforms.
                    </p>
                </div>
                <div>
                    <FaLaptopCode className="text-custom-orange size-12"/>
                    <h4 className="text-xl sm:text-2xl text-custom-green my-[15px] font-medium">Web Development</h4>
                    <p className="text-white font-normal leading-7">
                        I build responsive, high-performing websites tailored to your business needs. 
                        With expertise in front-end and back-end development, I deliver functional, 
                        scalable, and user-friendly solutions that drive engagement and growth.
                    </p>
                </div>
                <div>
                    <BsFiletypeJson className="text-custom-orange size-12"/>
                    <h4 className="text-xl sm:text-2xl text-custom-green my-[15px] font-medium">API Development</h4>
                    <p className="text-white font-normal leading-7">
                        I specialize in building secure, scalable APIs that enable seamless communication
                         between systems. Whether integrating third-party services or creating custom 
                         APIs, I ensure efficient data exchange and optimized functionality for your 
                         applications.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyService