import React from 'react'

const MySkill = () => {
  return (
    <div className="bg-custom-dark">
        <div className="container px-5 py-[30px] sm:py-[60px]">
            <div className="w-full">
                <h3 className="text-3xl sm:text-[36px] font-medium">
                    <span className="text-white content-head">My </span> 
                    <span className="text-custom-green">Skill</span>
                </h3>
            </div>
            <p className="text-white font-normal leading-7 mt-[50px] mb-[40px]">
                Full stack developer with 4+ years of experience in building custom websites for small and 
                medium-sized businesses. Skilled in front-end and back-end development, responsive 
                design, and user-friendly interfaces. Proficient in creating functional, visually 
                appealing, and high-performance websites that meet client needs and business goals.
            </p>

            <div>
                <div className="flex justify-between gap-x-10 mb-[60px] sm:flex-row flex-col">
                    <div className="w-full sm:w-1/2 mb-[60px] sm:mb-0">
                        <div className="text-white mb-2">HTML</div>
                        <div className="bg-custom-orange bg-opacity-20 rounded">
                            <div data-per="90%" className="skill-per bg-custom-orange w-[90%] h-2 rounded"></div>
                        </div>
                    </div> 
                    <div className="w-full sm:w-1/2">
                        <div className="text-white mb-2">CSS</div>
                        <div className="bg-custom-orange bg-opacity-20 rounded">
                            <div data-per="85%" className="skill-per bg-custom-orange w-[85%] h-2 rounded"></div>
                        </div>
                    </div> 
                </div>

                <div className="flex justify-between gap-x-10 mb-[60px] sm:flex-row flex-col">
                    <div className="w-full sm:w-1/2 mb-[60px] sm:mb-0">
                        <div className="text-white mb-2">Bootstrap</div>
                        <div className="bg-custom-orange bg-opacity-20 rounded">
                            <div data-per="75%" className="skill-per bg-custom-orange w-[75%] h-2 rounded"></div>
                        </div>
                    </div> 
                    <div className="w-full sm:w-1/2">
                        <div className="text-white mb-2">JavaScript</div>
                        <div className="bg-custom-orange bg-opacity-20 rounded">
                            <div data-per="70%" className="skill-per bg-custom-orange w-[70%] h-2 rounded"></div>
                        </div>
                    </div> 
                </div>
                
                <div className="flex justify-between gap-x-10 mb-[60px] sm:flex-row flex-col">
                    <div className="w-full sm:w-1/2 mb-[60px] sm:mb-0">
                        <div className="text-white mb-2">jQuery</div>
                        <div className="bg-custom-orange bg-opacity-20 rounded">
                            <div data-per="70%" className="skill-per bg-custom-orange w-[70%] h-2 rounded"></div>
                        </div>
                    </div> 
                    <div className="w-full sm:w-1/2">
                        <div className="text-white mb-2">Figma</div>
                        <div className="bg-custom-orange bg-opacity-20 rounded">
                            <div data-per="80%" className="skill-per bg-custom-orange w-[80%] h-2 rounded"></div>
                        </div>
                    </div> 
                </div>

                <div className="flex justify-between gap-x-10 mb-[60px] sm:flex-row flex-col">
                    <div className="w-full sm:w-1/2 mb-[60px] sm:mb-0">
                        <div className="text-white mb-2">Vue JS</div>
                        <div className="bg-custom-orange bg-opacity-20 rounded">
                            <div data-per="50%" className="skill-per bg-custom-orange w-[50%] h-2 rounded"></div>
                        </div>
                    </div> 
                    <div className="w-full sm:w-1/2">
                        <div className="text-white mb-2">React JS</div>
                        <div className="bg-custom-orange bg-opacity-20 rounded">
                            <div data-per="65%" className="skill-per bg-custom-orange w-[65%] h-2 rounded"></div>
                        </div>
                    </div> 
                </div>

                <div className="flex justify-between gap-x-10 mb-[60px] sm:flex-row flex-col">
                    <div className="w-full sm:w-1/2 mb-[60px] sm:mb-0">
                        <div className="text-white mb-2">Nodejs</div>
                        <div className="bg-custom-orange bg-opacity-20 rounded">
                            <div data-per="70%" className="skill-per bg-custom-orange w-[70%] h-2 rounded"></div>
                        </div>
                    </div> 
                    <div className="w-full sm:w-1/2">
                        <div className="text-white mb-2">PHP</div>
                        <div className="bg-custom-orange bg-opacity-20 rounded">
                            <div data-per="80%" className="skill-per bg-custom-orange w-[80%] h-2 rounded"></div>
                        </div>
                    </div> 
                </div>

                <div className="flex justify-between gap-x-10 mb-[60px] sm:flex-row flex-col">
                    <div className="w-full sm:w-1/2 mb-[60px] sm:mb-0">
                        <div className="text-white mb-2">Laravel</div>
                        <div className="bg-custom-orange bg-opacity-20 rounded">
                            <div data-per="85%" className="skill-per bg-custom-orange w-[85%] h-2 rounded"></div>
                        </div>
                    </div> 
                    <div className="w-full sm:w-1/2">
                        <div className="text-white mb-2">MySQL</div>
                        <div className="bg-custom-orange bg-opacity-20 rounded">
                            <div data-per="85%" className="skill-per bg-custom-orange w-[85%] h-2 rounded"></div>
                        </div>
                    </div> 
                </div>

                <div className="flex justify-between gap-x-10 sm:flex-row flex-col">
                    <div className="ww-full sm:w-1/2 sm:mb-0">
                        <div className="text-white mb-2">MogoDB</div>
                        <div className="bg-custom-orange bg-opacity-20 rounded">
                            <div data-per="65%" className="skill-per bg-custom-orange w-[65%] h-2 rounded"></div>
                        </div>
                    </div> 
                    <div className="w-full sm:w-1/2">
                        
                    </div> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default MySkill