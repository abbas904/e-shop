import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease: "easeOut" } 
  }
};

const Contact = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-4xl w-full bg-gray-50 rounded-lg shadow-lg p-8"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-extrabold text-pink-600 mb-8 text-center">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <p className="text-gray-700 text-lg">
              We'd love to hear from you! Whether you have questions, feedback, or
              just want to say hello, we're here to help.
            </p>
            <div>
              <h3 className="font-semibold text-pink-600 mb-2">Email</h3>
              <p className="text-gray-600">support@yourstore.com</p>
            </div>
            <div>
              <h3 className="font-semibold text-pink-600 mb-2">Phone</h3>
              <p className="text-gray-600">+1 (234) 567-8901</p>
            </div>
            <div>
              <h3 className="font-semibold text-pink-600 mb-2">Address</h3>
              <p className="text-gray-600">123 E-commerce St, Shopping City, USA</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message sent!");
              e.target.reset();
            }}
          >
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-1 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-1 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-1 font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
                placeholder="Write your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-pink-600 text-white py-3 rounded-md shadow hover:bg-pink-700 transition"
            >
              Send Message
            </button>
          </motion.form>
        </div>

        {/* Map Section */}
        <section className="mt-10">
          <h3 className="text-xl font-semibold mb-4 text-pink-600 text-center">Our Location</h3>
          <div className="w-full h-64 rounded overflow-hidden shadow-lg">
            <iframe
              title="Store Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019410423459!2d-122.41941508468183!3d37.77492977975968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858155bf1d09f3%3A0xc62e7e914d5d5f32!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1514524647889"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              className="border-0"
            ></iframe>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default Contact;
