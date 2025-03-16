import Uplyrn from "../assets/images/uplyrn-website.png";
import PvMyanmar from "../assets/images/pv-myanmar.png";
import Oway from "../assets/images/oway-website.png";
import { PiBuildingOfficeBold } from "react-icons/pi";


const MyProject = () => {
  return (
    <div className="bg-custom-dark" id="project">
        <div className="container px-5 py-[30px] sm:py-[60px]">
            <div className="w-full">
                <h3 className="text-3xl sm:text-[36px] font-medium">
                    <span className="text-white content-head">My </span> 
                    <span className="text-custom-green">Projects</span>
                </h3>
            </div>
            <div className="flex justify-between items-center mt-[50px] gap-x-[90px] sm:flex-row flex-col">
                <div className="sm:mb-0 mb-[30px]">
                    <h4 className="text-custom-green text-2xl font-medium sm:hidden block mb-5">Uplyrn</h4>
                    <img className="w-full h-auto sm:w-[560px] sm:h-[285px] max-w-full object-cover" src={Uplyrn} alt="Uplyrn project" />
                </div>
                <div className="w-full sm:w-[531px]">
                    <h4 className="text-custom-green text-2xl font-medium sm:block hidden">Uplyrn</h4>
                    <div className="flex mt-0 sm:mt-5 mb-2.5 items-start">
                        <PiBuildingOfficeBold className="text-custom-orange size-6"/>
                        <h6 className="text-lg font-medium text-white ml-2.5">Uplyrn Co., Ltd, Singapore</h6>
                    </div>
                    <p className="text-white font-normal leading-7 mb-5">
                        Uplyrn is an Empowering Skills Ecosystem to Learn, Interact, Apply and Catalyze Career Advancement and I created their website for dynamic Web applications using HTML, CSS, Bootstrap, JavaScript, jQuery, Ajax, VueJs and Laravel (PHP framework), MySQL tools I know.
                    </p>
                    <a href="https://uplyrn.com" target="_blank" className="w-[156px] h-[40px] bg-custom-orange flex items-center justify-center text-white rounded-[3px]">
                        View Website
                    </a>
                </div>
            </div>

            <div className="flex justify-between items-center mt-[40px] gap-x-[90px] sm:flex-row flex-col">
                <div className="sm:mb-0 mb-[30px]">
                    <h4 className="text-custom-green text-2xl font-medium sm:hidden block mb-5">PV Myanmar</h4>
                    <img className="w-full h-auto sm:w-[560px] sm:h-[285px] max-w-full object-cover" src={PvMyanmar} alt="Uplyrn project" />
                </div>
                <div className="w-full sm:w-[531px]">
                    <h4 className="text-custom-green text-2xl font-medium sm:block hidden">PV Myanmar</h4>
                    <div className="flex mt-0 sm:mt-5 mb-2.5 items-start">
                        <PiBuildingOfficeBold className="text-custom-orange size-6"/>
                        <h6 className="text-lg font-medium text-white ml-2.5">PV Myanmar Co., Ltd, Yangon</h6>
                    </div>
                    <p className="text-white font-normal leading-7 mb-5">
                    PV Myanmar has been in operation in since 2016 and provide a range of Transport and Financial services to Multinational compaines, Small and Medium Enterprises and Individual customers. We operate more than 500 units of auto fleet and offer Pick Up Trucks, Seden, 4WD SUVs, 28 seaters Mini Buses, Mini Van such as Alphard and logistic vehicles for value customers and I created their website for dynamic Web applications using HTML, CSS, Bootstrap, JavaScript, jQuery, Ajax, VueJs and Laravel (PHP framework), MySQL tools I know.
                    </p>
                    <a href="https://www.pvmyanmar.com/" target="_blank" className="w-[156px] h-[40px] bg-custom-orange flex items-center justify-center text-white rounded-[3px]">
                        View Website
                    </a>
                </div>
            </div>

            <div className="flex justify-between items-center mt-[40px] gap-x-[90px] sm:flex-row flex-col">
                <div className="sm:mb-0 mb-[30px]">
                    <h4 className="text-custom-green text-2xl font-medium sm:hidden block mb-5">Oway</h4>
                    <img className="w-full h-auto sm:w-[560px] sm:h-[285px] max-w-full object-cover" src={Oway} alt="Oway project" />
                </div>
                <div className="w-full sm:w-[531px]">
                    <h4 className="text-custom-green text-2xl font-medium sm:block hidden">Oway</h4>
                    <div className="flex mt-0 sm:mt-5 mb-2.5 items-start">
                        <PiBuildingOfficeBold className="text-custom-orange size-6"/>
                        <h6 className="text-lg font-medium text-white ml-2.5">Oway Co., Ltd, Yangon</h6>
                    </div>
                    <p className="text-white font-normal leading-7 mb-5">
                        Oway is the leading travel company in Myanmar and I created their website for location tracking and Map Improvement (Map Accuracy) using Nodejs, Express, Elasticsearch, Docker, Kibina tools I know.
                    </p>
                    <a href="https://oway.com.mm" target="_blank" className="w-[156px] h-[40px] bg-custom-orange flex items-center justify-center text-white rounded-[3px]">
                        View Website
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyProject