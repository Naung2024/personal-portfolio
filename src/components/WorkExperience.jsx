import { MdWorkOutline } from "react-icons/md";
import { PiBuildingOfficeBold } from "react-icons/pi";
import { MdWorkHistory } from "react-icons/md";

const WorkExperience = () => {
  return (
    <div className="bg-custom-dark">
        <div className="container px-5 py-[30px] sm:py-[60px]">
            <div className="w-full">
                <h3 className="text-3xl sm:text-[36px] font-medium">
                    <span className="text-white content-head">My Work </span> 
                    <span className="text-custom-green">Experience</span>
                </h3>
            </div>
            <div className="flex sm:flex-row flex-col justify-between mt-[50px] gap-10">
                <div className="w-full sm:w-[560px]">
                    <div className="flex justify-between items-start">
                        <div className="flex items-start">
                            <MdWorkOutline className="text-custom-orange size-7 mr-2" />
                            <h5 className="text-white text-lg sm:text-xl">Freelance UI/UX Designer</h5>
                        </div>
                        <div className="w-[102px] h-[28px] bg-custom-orange flex items-center justify-center text-white text-sm rounded-[50px]">
                            Part Time
                        </div>
                    </div>
                    <div className="ml-[35px] mt-[15px]">
                        <div className="flex mb-2.5 items-center">
                            <PiBuildingOfficeBold className="text-custom-orange size-5 mr-2"/>
                            <p className="text-white font-normal leading-7">Top Range Gps Co., Ltd, Dubai</p>
                        </div>
                        <div className="flex items-center">
                            <MdWorkHistory className="text-custom-orange size-5 mr-2" />
                            <p className="text-white font-normal leading-7">Aug 2024 ~ Aug 2024</p>
                        </div>
                        <h6 className="text-lg font-medium text-custom-green my-[15px]">Responsibilities</h6>
                        <ul className="text-white list-disc pl-5">
                            <li className="mb-2.5">Designed user interfaces for web and mobile applications using Figma.</li>
                            <li className="mb-2.5">Created wireframes, prototypes, and user flows to effectively communicate interaction and design ideas.</li>
                        </ul>
                    </div>
                </div>
                <div className="w-full sm:w-[560px]">
                    <div className="flex justify-between items-start">
                        <div className="flex items-start">
                            <MdWorkOutline className="text-custom-orange size-7 mr-2" />
                            <h5 className="text-white text-lg sm:text-xl">Software Engineer</h5>
                        </div>
                        <div>
                            <div className="w-[102px] h-[28px] bg-custom-orange flex items-center justify-center text-white text-sm rounded-[50px]">
                                Full Time
                            </div>
                        </div>
                    </div>
                    <div className="ml-[35px] mt-[15px]">
                        <div className="flex mb-2.5 items-center">
                            <PiBuildingOfficeBold className="text-custom-orange size-5 mr-2"/>
                            <p className="text-white font-normal leading-7">Uplyrn Co., Ltd, Singapore</p>
                        </div>
                        <div className="flex items-center">
                            <MdWorkHistory className="text-custom-orange size-5 mr-2" />
                            <p className="text-white font-normal leading-7">Mar 2022 ~ Jun 2024</p>
                        </div>
                        <h6 className="text-lg font-medium text-custom-green my-[15px]">Responsibilities</h6>
                        <ul className="text-white list-disc pl-5">
                            <li className="mb-2.5">Designed and implemented dynamic Web applications using HTML, CSS, Bootstrap, JavaScript, jQuery, Ajax, VueJs and Laravel (PHP framework), MySQL.</li>
                            <li className="mb-2.5">Designed and maintained databases and execute back-end and user interface tests to optimize system performance.</li>
                            <li>Troubleshoot, test and maintain the core product software and databases to ensure strong optimization and functionality.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex sm:flex-row flex-col justify-between mt-[30px] gap-10">
                <div className="w-full sm:w-[560px]">
                    <div className="flex justify-between items-start">
                        <div className="flex items-start">
                            <MdWorkOutline className="text-custom-orange size-7 mr-2" />
                            <h5 className="text-white text-lg sm:text-xl">Freelance Web Developer</h5>
                        </div>
                        <div>
                            <div className="w-[102px] h-[28px] bg-custom-orange flex items-center justify-center text-white text-sm rounded-[50px]">
                                Part Time
                            </div>
                        </div>
                    </div>
                    <div className="ml-[35px] mt-[15px]">
                        <div className="flex mb-2.5 items-center">
                            <PiBuildingOfficeBold className="text-custom-orange size-5 mr-2"/>
                            <p className="text-white font-normal leading-7">LMB Management Co., Ltd</p>
                        </div>
                        <div className="flex items-center">
                            <MdWorkHistory className="text-custom-orange size-5 mr-2" />
                            <p className="text-white font-normal leading-7">Jan 2023 ~ March 2023</p>
                        </div>
                        <h6 className="text-lg font-medium text-custom-green my-[15px]">Responsibilities</h6>
                        <ul className="text-white list-disc pl-5">
                            <li className="mb-2.5">Designed user interfaces for web and mobile applications using Figma</li>
                            <li className="mb-2.5">Created wireframes, prototypes, and user flows to effectively communicate interaction and design ideas.</li>
                            <li className="mb-2.5">Designed and implemented dynamic Web applications using HTML, CSS, Bootstrap, JavaScript, jQuery, Ajax, VueJs and Laravel (PHP framework), MySQL.</li>
                            <li className="mb-2.5">Designed and maintained databases and execute back-end and user interface tests to optimize system performance.</li>
                            <li>Troubleshoot, test and maintain the core product software and databases to ensure strong optimization and functionality.</li>
                        </ul>
                    </div>
                </div>
                <div className="w-full sm:w-[560px]">
                    <div className="flex justify-between items-start">
                        <div className="flex items-start">
                            <MdWorkOutline className="text-custom-orange size-7 mr-2" />
                            <h5 className="text-white text-lg sm:text-xl">Software Development Engineer</h5>
                        </div>
                        <div>
                            <div className="w-[102px] h-[28px] bg-custom-orange flex items-center justify-center text-white text-sm rounded-[50px]">
                                Full Time
                            </div>
                        </div>
                    </div>
                    <div className="ml-[35px] mt-[15px]">
                        <div className="flex mb-2.5 items-center">
                            <PiBuildingOfficeBold className="text-custom-orange size-5 mr-2"/>
                            <p className="text-white font-normal leading-7">Pinnacle Venture Myanmar Co., Ltd, Yangon</p>
                        </div>
                        <div className="flex items-center">
                            <MdWorkHistory className="text-custom-orange size-5 mr-2" />
                            <p className="text-white font-normal leading-7">Oct 2020 ~ Feb 2022</p>
                        </div>
                        <h6 className="text-lg font-medium text-custom-green my-[15px]">Responsibilities</h6>
                        <ul className="text-white list-disc pl-5">
                            <li className="mb-2.5">Designed and implemented dynamic Web applications using HTML, CSS, Bootstrap, JavaScript, jQuery, Ajax, VueJs and Laravel (PHP framework), MySQL.</li>
                            <li> Developed, built and maintained RESTful APIs</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex sm:flex-row flex-col justify-between mt-[30px] gap-10">
                <div className="w-full sm:w-[560px]">
                    <div className="flex justify-between items-start">
                        <div className="flex items-start">
                            <MdWorkOutline className="text-custom-orange size-7 mr-2" />
                            <h5 className="text-white text-lg sm:text-xl">Internship</h5>
                        </div>
                        <div>
                            <div className="w-[102px] h-[28px] bg-custom-orange flex items-center justify-center text-white text-sm rounded-[50px]">
                                Full Time
                            </div>
                        </div>
                    </div>
                    <div className="ml-[35px] mt-[15px]">
                        <div className="flex mb-2.5 items-center">
                            <PiBuildingOfficeBold className="text-custom-orange size-5 mr-2"/>
                            <p className="text-white font-normal leading-7">Oway Co., Ltd, Yangon</p>
                        </div>
                        <div className="flex items-center">
                            <MdWorkHistory className="text-custom-orange size-5 mr-2" />
                            <p className="text-white font-normal leading-7">July 2020 ~ Sept 2020</p>
                        </div>
                        <h6 className="text-lg font-medium text-custom-green my-[15px]">Responsibilities</h6>
                        <ul className="text-white list-disc pl-5">
                            <li className="mb-2.5">Developed location tracking using Nodejs, Express, Elasticsearch, Docker, Kibina.</li>
                            <li className="mb-2.5">Developed Map Improvement (Map Accuracy) using Nodejs (API), Express, Google Map API, MongoDB (NoSQL).</li>
                        </ul>
                    </div>
                </div>
                <div className="w-full sm:w-[560px]">
                    <div className="flex justify-between items-start">
                        <div className="flex items-start">
                            <MdWorkOutline className="text-custom-orange size-7 mr-2" />
                            <h5 className="text-white text-lg sm:text-xl">Junior Web Developer</h5>
                        </div>
                        <div>
                            <div className="w-[102px] h-[28px] bg-custom-orange flex items-center justify-center text-white text-sm rounded-[50px]">
                                Full Time
                            </div>
                        </div>
                    </div>
                    <div className="ml-[35px] mt-[15px]">
                        <div className="flex mb-2.5 items-center">
                            <PiBuildingOfficeBold className="text-custom-orange size-5 mr-2"/>
                            <p className="text-white font-normal leading-7">Marter Solutions, Mandalay</p>
                        </div>
                        <div className="flex items-center">
                            <MdWorkHistory className="text-custom-orange size-5 mr-2" />
                            <p className="text-white font-normal leading-7">Oct 2018 ~ Nov 2018 </p>
                        </div>
                        <h6 className="text-lg font-medium text-custom-green my-[15px]">Responsibilities</h6>
                        <ul className="text-white list-disc pl-5">
                            <li className="mb-2.5">Designed and implemented dynamic Web applications using HTML, CSS, Bootstrap, JavaScript, jQuery, Ajax, Nodejs, Express, MongoDB (NoSQL).</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkExperience
