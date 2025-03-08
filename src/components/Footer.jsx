import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-custom-dark">
        <div className="container px-5 py-[20px]">
            <span className="text-white text-sm leading-7 flex justify-center">
              Developed with ❤️ by Naung Naung © {currentYear}
            </span>
        </div>
    </div>
  )
}

export default Footer
