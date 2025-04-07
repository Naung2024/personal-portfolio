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
                            <h5 className="text-white text-lg sm:text-xl">Freelance Web Developer | Self-Learning</h5>
                        </div>
                    </div>
                    <div className="ml-[35px] mt-[15px]">
                        <div className="flex mb-2.5 items-center">
                            <p className="text-white font-normal leading-7">Remote | Self-directed</p>
                        </div>
                        <div className="flex items-center">
                            <MdWorkHistory className="text-custom-orange size-5 mr-2" />
                            <p className="text-white font-normal leading-7">Sep 2024 ~ Present</p>
                        </div>
                        <h6 className="text-lg font-medium text-custom-green my-[15px]">Overview</h6>
                        <p className="text-white font-normal leading-7">Currently enhancing full-stack development skills through hands-on learning and practice, focusing on building modern, scalable web applications.</p>
                        <h6 className="text-lg font-medium text-custom-green my-[15px]">Key Activities</h6>
                        <ul className="text-white list-disc pl-5">
                            <li className="mb-2.5">Practicing front-end development using React.js and Tailwind CSS to build responsive, user-friendly interfaces.</li>
                            <li className="mb-2.5">Exploring back-end development with Node.js, MongoDB, and RESTful APIs, preparing for full project integration.</li>
                            <li className="mb-2.5">Studying AWS cloud services to understand hosting, deployment, and scalability.</li>
                            <li className="mb-2.5">Applying Git and GitHub for version control and project management.</li>
                            <li className="mb-2.5">Worked on several UI/UX projects using Figma, from personal
                            concepts to client-focused designs.</li>
                            <li className="mb-2.5">Preparing for full project implementation to apply backend and frontend skills in an integrated, real-world application.</li>
                        </ul>
                    </div>
                </div>
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
                            <p className="text-white font-normal leading-7">July 2024 ~ Aug 2024</p>
                        </div>
                        <h6 className="text-lg font-medium text-custom-green my-[15px]">Responsibilities</h6>
                        <ul className="text-white list-disc pl-5">
                            <li className="mb-2.5">Created wireframes, prototypes, and user flows using Figma.</li>
                            <li className="mb-2.5">Designed UI for web & mobile apps using Figma.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex sm:flex-row flex-col justify-between mt-[50px] gap-10">
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
                            <li className="mb-2.5">Designed and implemented dynamic web applications using HTML, CSS, Bootstrap, JavaScript, jQuery, Ajax, Vue.js, Laravel (PHP framework), and MySQL.</li>
                            <li className="mb-2.5">Developed and maintained databases and executed back-end and user interface tests to optimize system performance.</li>
                            <li>Troubleshot, tested, and maintained the core product software and databases to ensure strong optimization and functionality.</li>
                        </ul>
                    </div>
                </div>
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
                            <p className="text-white font-normal leading-7">LM LearnMyanmar Co., Ltd</p>
                        </div>
                        <div className="flex items-center">
                            <MdWorkHistory className="text-custom-orange size-5 mr-2" />
                            <p className="text-white font-normal leading-7">Jan 2023 ~ March 2023</p>
                        </div>
                        <h6 className="text-lg font-medium text-custom-green my-[15px]">Responsibilities</h6>
                        <ul className="text-white list-disc pl-5">
                            <li className="mb-2.5">Created wireframes, prototypes, and user flows using Figma.</li>
                            <li className="mb-2.5">Designed UI for web & mobile apps using Figma.</li>
                            <li className="mb-2.5">Designed and implemented dynamic web applications using HTML, CSS, Bootstrap, JavaScript, jQuery, Ajax, Vue.js, Laravel (PHP framework), and MySQL.</li>
                            <li className="mb-2.5">Developed and maintained databases and executed back-end and user interface tests to optimize system performance.</li>
                            <li>Troubleshot, tested, and maintained the core product software and databases to ensure strong optimization and functionality.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex sm:flex-row flex-col justify-between mt-[30px] gap-10">
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
                            <p className="text-white font-normal leading-7">PV Myanmar Co., Ltd, Yangon</p>
                        </div>
                        <div className="flex items-center">
                            <MdWorkHistory className="text-custom-orange size-5 mr-2" />
                            <p className="text-white font-normal leading-7">Oct 2020 ~ Feb 2022</p>
                        </div>
                        <h6 className="text-lg font-medium text-custom-green my-[15px]">Responsibilities</h6>
                        <ul className="text-white list-disc pl-5">
                            <li className="mb-2.5">Designed and implemented dynamic web applications using HTML, CSS, Bootstrap, JavaScript, jQuery, Ajax, Vue.js, Laravel (PHP framework), and MySQL.</li>
                            <li>Developed, built, and maintained RESTful APIs.</li>
                        </ul>
                    </div>
                </div>
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
                            <li className="mb-2.5">Developed location tracking using Node.js, Express, Elasticsearch, Docker, and Kibana.</li>
                            <li className="mb-2.5">Developed map improvement (map accuracy) using Node.js (API), Express, Google Maps API, and MongoDB (NoSQL).</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkExperience
