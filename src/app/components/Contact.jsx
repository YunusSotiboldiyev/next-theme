import React from 'react'
export default function ContactSection() {
  return (

    <section className="w-full px-6 md:px-16 lg:px-24 py-12 " id='contact'>
      <div className="max-w-6xl my-12 mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900">
            Kick-start your dream <br /> home with us
          </h2>
          <p className="text-xl md:text-2xl text-[#9C6B40] italic mt-4 underline">
            Send us a hi
          </p>
        </div>
        
        <div className="md:w-1/2 mt-6 md:mt-0 text-right">
          <h3 className="text-lg font-semibold text-gray-900">Brooklyn, New York</h3>
          <p className="text-gray-600 text-sm mt-1">
            962 Fifth Avenue Str, 3rd Floor - Trump <br /> Building NY 10006, United States.
          </p>
          
          <p className="text-gray-900 mt-4 text-sm">Email us at</p>
          <a
            href="mailto:hello@landify.design"
            className="text-[#9C6B40] font-medium hover:underline"
          >
            hello@landify.design
          </a>
          
          <p className="text-gray-900 mt-4 text-sm">
            If you’re in a hurry, quick call us
          </p>
          <a
            href="tel:+86631250859"
            className="text-[#9C6B40] font-medium text-lg hover:underline"
            >
            +8(663)125-08-59
          </a>
        </div>
      </div>
    </section>
  );
}
