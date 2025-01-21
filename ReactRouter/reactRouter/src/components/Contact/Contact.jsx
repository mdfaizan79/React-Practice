import React from 'react'

export default function Contact() {
  return (
    
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-300 via-blue-300 to-purple-300 text-gray-800 px-4 py-10">
        <h1 className="text-4xl font-bold mb-10">Get in Touch with Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">
          <div className="hidden md:flex items-center justify-center bg-white p-6 shadow-xl rounded-lg">
            <img
              src="/pro.png"
              alt="Contact Us Illustration"
              className="w-150 h-190"
            />
          </div>
          <div className="bg-white p-8 shadow-xl rounded-lg">
            <form className="space-y-6" >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  
                  
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-md"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="flex items-center space-x-3 p-4 bg-white shadow-lg rounded-lg transition-transform duration-300 hover:scale-105">
            
            <div>
              <p className="text-lg font-medium">Call Us</p>
              <p className="text-sm text-gray-500">+91 7992265461</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-4 bg-white shadow-lg rounded-lg transition-transform duration-300 hover:scale-105">
            
            <div>
              <p className="text-lg font-medium">Email Us</p>
              <p className="text-sm text-gray-500">support@sharespace.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-4 bg-white shadow-lg rounded-lg transition-transform duration-300 hover:scale-105">
            
            <div>
              <p className="text-lg font-medium">Visit Us</p>
              <p className="text-sm text-gray-500">VIT University, Vellore</p>
            </div>
          </div>
        </div>
      </div>
    
  )
}


