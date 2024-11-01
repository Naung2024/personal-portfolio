import Nav from "./Nav"
import Hero from "./Hero"
import AboutMe from "./AboutMe"
import MyService from "./MyService"
import WorkExperience from "./WorkExperience"
import MyProject from "./MyProject"
import ContactUs from "./ContactMe"
import MySkill from "./MySkill"
import Footer from "./Footer"

const Main = () => {
  return (
    <div>
        <Nav/>
        <Hero/>
        <AboutMe/>
        <MyService/>
        <WorkExperience/>
        <MySkill/>
        <MyProject/>
        <ContactUs/>
        <Footer/>
    </div>
  )
}

export default Main
