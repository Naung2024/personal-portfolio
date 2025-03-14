import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import myImg from "../assets/images/naungnaung.png";
import facebookIcon from "../assets/images/facebook.png";
import linkedinIcon from "../assets/images/linkedin.webp";
import githubIcon from "../assets/images/github.png";

// Smooth scroll and close menu
const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setIsMenuOpen(false);
};

const Hero = () => {

  return (
    <div className="bg-custom-gray-dark" id="home">
        <div className="flex container gap-x-10 px-5 py-[60px] sm:flex-row flex-col items-center">
            <div className="mb-10 sm:mb-0 max-w-[385px] sm:w-[370x] sm:h-[480px] sm:bg-custom-dark rounded-br-[40px] rounded-bl-[40px] rounded-tr-[80px]">
                <img className="max-w-full h-[350px] sm:w-[370x] sm:h-[480px] object-contain sm:object-cover" src={ myImg } alt="Naung Naung" />
            </div>
            <div className="gap-1 md:gap-0 sm:ml-auto sm:w-[470px] md:w-[510px] lg:w-[646px] flex flex-col justify-center sm:items-start items-center">
                <h4 className="text-custom-green text-xl lg:text-2xl font-medium">Hello, It's me</h4>
                <h1 className="text-white text-[30px] sm:text-[40px] md:text-[60px] lg:text-[80px] font-medium">Naung Naung</h1>
                <h3 className="text-[20px] sm:text-2xl md:text-[30px] lg:text-[36px] font-medium">
                    <span className="text-white">And I'm a </span> 
                    <span className="text-custom-green"> 
                        <Typewriter
                            words={['Web Developer', 'Full Stack Developer']}
                            loop={false}
                            cursor  
                            cursorStyle='|'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </h3> 
                <p className="text-white text-center sm:text-start font-normal leading-7 mt-[9px]">
                    I am full stack developer with experience in building websites for small and medium sized business. 
                    I have experience in the web design and web development field for above 4 years.
                </p>
                <button onClick={(e) => handleSmoothScroll(e, '#contact')} className="my-5 w-[156px] h-[40px] bg-custom-orange align-center text-white rounded-[3px]">
                  Contact Me
                </button>
                <div className="flex space-x-[15px]">
                    <span className="text-white font-normal leading-7">Follow Me: </span>
                    <a href="https://www.facebook.com/share/18R8yxYE2H" target="_blank"><img className="w-[30px] h-[30px] rounded-full" src={facebookIcon} alt="Facebook" /></a>
                    <a href="https://www.linkedin.com/in/naung-naung" target="_blank"><img className="w-[30px] h-[30px] rounded-full" src={linkedinIcon} alt="Linkedin" /></a>
                    <a href="https://github.com/Naung2024" target="_blank"><img className="w-[30px] h-[30px] rounded-full" src={githubIcon} alt="Github" /></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
