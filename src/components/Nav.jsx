import { useState, useEffect } from "react";
import personalLogo from "../assets/images/no-bg-logo-photoroom.png";
import { RiMenu2Line } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";

const sections = ["home", "about", "service", "project", "contact"];

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Smooth scroll and close menu
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <div className="bg-custom-dark md:sticky md:top-0 md:z-50">
        <div className="flex items-center justify-between px-5 py-3 container">
          <div>
            <img
              className="w-[178px] h-[50px]"
              src={personalLogo}
              alt="Personal Logo"
            />
          </div>
          <div
            className={`md:static bg-custom-dark absolute md:min-h-fit min-h-[70vh] left-0 ${
              isMenuOpen ? "top-[11%]" : "top-[-100%]"
            } md:w-auto w-full flex items-center px-5 transition-all duration-700 ease-in-out`}
          >
            <div className="text-custom-green gap-10 text-[16px] flex md:flex-row flex-col md:items-center">
              {sections.map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  onClick={(e) => handleSmoothScroll(e, `#${section}`)}
                  className={`menu-item ${
                    activeSection === section ? "active" : ""
                  }`}
                >
                  {section.toUpperCase()}
                </a>
              ))}
              <a href="http://localhost:5173/FullStackDeveloper.pdf" download className="md:hidden w-[156px] h-[40px] leading-[40px] text-center bg-custom-orange text-white rounded-[3px]">Download CV</a>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <a href="http://localhost:5173/FullStackDeveloper.pdf" download className="hidden md:block w-[156px] h-[40px] leading-[40px] text-center bg-custom-orange text-white rounded-[3px]">Download CV</a>
            {isMenuOpen ? (
              <IoCloseSharp
                className="md:hidden size-6 cursor-pointer text-custom-orange"
                onClick={toggleMenu}
              />
            ) : (
              <RiMenu2Line
                className="md:hidden size-6 cursor-pointer text-custom-orange"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
