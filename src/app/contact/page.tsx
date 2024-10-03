import React from 'react'
import Icons from '../icons/icons';

function Contact() {
  return (
    <div className="flex justify-items-end items-center h-full w-screen bg-gradient-to-r from-teal-500 to-yellow-400 flex-col gap-8 overflow-hidden">
      <div className="text-center mt-24">
        <h1 className="text-3xl md:text-5xl text-red-800 font-semibold">Connect With Me</h1>
        <h2 className="text-red-800 text-lg md:text-xl font-medium mt-8 p-3">
          Let&apos;s turn your vision into reality—shoot me a message!
        </h2>
      </div>

      <div className="flex flex-col  justify-evenly items-center h-full w-full p-6  ">
        <form
          action="http://www.example.com/login.php"
          target="_blank"
          method="post"
          className=" p-8 rounded-xl shadow-2xl w-full max-w-md"
        >
          <div className="mb-4">
            <label htmlFor="fname" className="block text-red-800 font-medium mb-2">
              First Name:
            </label>
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="Enter your first name"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-800"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="lname" className="block text-red-800 font-medium mb-2">
              Last Name:
            </label>
            <input
              type="text"
              id="lname"
              name="lname"
              placeholder="Enter your last name"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-800"
            />
          </div>

          <div className="mb-4">
            <label className="block text-red-800 font-medium mb-2">Gender:</label>
            <div className="flex items-center space-x-4">
              <div>
                <input type="radio" id="male" name="gender" value="male" required />
                <label htmlFor="male" className="ml-2 text-red-800">Male</label>
              </div>
              <div>
                <input type="radio" id="female" name="gender" value="female" />
                <label htmlFor="female" className="ml-2 text-red-800">Female</label>
              </div>
              <div>
                <input type="radio" id="other" name="gender" value="other" />
                <label htmlFor="other" className="ml-2 text-red-800">Other</label>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-red-800 font-medium mb-2">
              Email Address:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-800"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-red-800 font-medium mb-2">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Write your message here"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-800"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full text-red-800 font-medium py-2 rounded-xl hover:bg-red-800 border hover:text-white border-red-800 transition-colors duration-300 active:scale-90"
          >
            Submit
          </button>
        </form>
        <div className='mt-9'>

            <Icons />
        </div>
      </div>
    </div>
  );
}

export default Contact;
