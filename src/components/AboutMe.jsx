import aboutMeImg from "../assets/images/naungnaung-profile.jpg";
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

const AboutMe = () => {
  return (
    <div className="bg-custom-dark" id="about">
        <div className="flex container gap-x-10 px-5 py-[30px] sm:py-[60px] sm:flex-row flex-col items-center">
            <div className="sm:w-[610px] mb-10 sm:mb-0 ">
                <h3 className="text-3xl sm:text-[36px] font-medium">
                    <span className="text-white content-head">About </span> 
                    <span className="text-custom-green">Me</span>
                </h3>
                <h4 className="text-xl sm:text-2xl font-medium mt-[50px] mb-2.5">
                    <span className="text-white">Hello, I'm </span>
                    <span className="text-custom-green">Naung Naung</span>
                </h4>
                <p className="text-white font-normal leading-7 pb-5">
                    I am a full stack developer with over 4+ years of experience creating websites for small 
                    and medium-sized businesses. I specialize in both web design and development, 
                    building websites that are easy to use and visually appealing. My focus is on 
                    delivering websites that not only look good but also help businesses grow. I enjoy 
                    using the latest tools and technologies to create high-quality websites that meet 
                    each client’s specific needs.
                </p>
                <h4 className="text-xl sm:text-2xl font-medium mb-[15px]">
                    <span className="text-white">Personal </span>
                    <span className="text-custom-green">Info</span>
                </h4>
                <div className="flex gap-5">
                    <div className="text-custom-green w-[20%] text-base">Birthday:</div>
                    <div className="text-white w-[80%] ml-auto text-base">15 November 1997</div>
                </div>
                <div className="flex my-4 gap-5">
                    <div className="text-custom-green w-[20%] text-base">Email:</div>
                    <div className="text-white w-[80%] ml-auto text-base">naungnaung.code@gmail.com</div>
                </div>
                <div className="flex gap-5">
                    <div className="text-custom-green w-[20%] text-base">Phone:</div>
                    <div className="text-white w-[80%] ml-auto text-base">+6680 965 2078</div>
                </div>
                <div className="flex my-4 gap-5">
                    <div className="text-custom-green w-[20%] text-base">Education:</div>
                    <div className="text-white w-[80%] ml-auto text-base">Bachelor of Computer Science (B.C.Sc) <br /> University of Computer Studies, Meiktila, Myanmar </div>
                </div>
                <div className="flex gap-5">
                    <div className="text-custom-green w-[20%] text-base">Freelance:</div>
                    <div className="text-white w-[80%] ml-auto text-base">Available</div>
                </div>
                <div className="flex my-4 gap-5">
                    <div className="text-custom-green w-[20%] text-base">Follow Me:</div>
                    <div className="text-white w-[80%] ml-auto text-base flex space-x-[15px]">
                        <a href="https://www.facebook.com/share/18R8yxYE2H" target="_blank"><img className="w-[30px] h-[30px] rounded-full" src={facebookIcon} alt="Facebook" /></a>
                        <a href="https://www.linkedin.com/in/naung-naung" target="_blank"><img className="w-[30px] h-[30px] rounded-full" src={linkedinIcon} alt="Linkedin" /></a>
                        {/* <a href="https://github.com/Naung2024" target="_blank"><img className="w-[30px] h-[30px] rounded-full" src={githubIcon} alt="Github" /></a> */}
                    </div>
                </div>
                <button onClick={(e) => handleSmoothScroll(e, '#contact')} className="my-5 w-[156px] h-[40px] bg-custom-orange align-center text-white rounded-[3px]">
                  Hire Me
                </button>
            </div>

            <div className="w-full sm:w-[444px] sm:h-[589px] sm:ml-auto rounded-sm sm:rounded-tl-[80px]">
                <img className="rounded-[10px] sm:rounded-tl-[80px] max-w-full w-full sm:w-[444px] sm:h-[589px] object-cover" src={ aboutMeImg } alt="Naung Naung" />
            </div>
        </div>
    </div>
  )
}

export default AboutMe
