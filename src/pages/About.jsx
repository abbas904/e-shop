import React from "react";
import { motion } from "framer-motion";
import aboutImage from "../assets/Images-main/Images/about-banner.png";
import missionImage from "../assets/Images-main/Images/about-mission.png";
import { FaShippingFast, FaHeadset, FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const fadeInUp = {
 hidden: { opacity: 0, y: 100 }, // bigger distance to slide up
 visible: { 
  opacity: 1, 
  y: 0, 
  transition: { duration: 0.8, ease: "easeOut" } // longer duration and smoother animation
 }
};

const About = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
    <motion.section
  className="relative bg-cover bg-center h-72 flex items-center justify-center"
  style={{ backgroundImage: `url(${aboutImage})` }}
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1.5, ease: "easeInOut" }}
>
  <motion.div
    className="bg-black bg-opacity-50 p-6 rounded text-center"
    variants={fadeInUp}
    initial="hidden"
    animate="visible"
    transition={{ duration: 1.5, ease: "easeInOut" }}
  >
    <h1 className="text-4xl font-bold text-white">About Us</h1>
    <p className="text-white mt-2 text-lg">
      Discover our story behind the best online shopping experience
    </p>
  </motion.div>
</motion.section>


      {/* Our Story */}
      <section className="container mx-auto py-16 grid md:grid-cols-2 gap-10 items-center px-4">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our e-commerce store started with a clear vision: providing high-quality products at affordable prices with fast delivery to all our customers. We always strive to offer an easy and secure shopping experience from your home.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Thanks to our dedicated team and passion for e-commerce, we have become the preferred destination for thousands of customers worldwide.
          </p>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={missionImage}
            alt="Our Story"
            className="rounded-lg shadow-lg w-full"
          />
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center px-4">
          <motion.h2
            className="text-3xl font-bold mb-12"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Why Choose Us?
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[ 
              { icon: <FaShippingFast />, title: "Fast Shipping", text: "We deliver your orders as fast as possible to your doorstep." },
              { icon: <FaHeadset />, title: "24/7 Support", text: "Our team is ready to assist you and answer your inquiries anytime." },
              { icon: <FaStar />, title: "Guaranteed Quality", text: "Our products are carefully selected to ensure your complete satisfaction." }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="text-pink-600 text-5xl mx-auto mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-center">
        <motion.h2
          className="text-3xl font-bold mb-4"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Join Our Family
        </motion.h2>
        <motion.p
          className="text-gray-600 mb-6"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Shop now and enjoy a unique experience.
        </motion.p>
   <motion.div
  variants={fadeInUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{ delay: 0.2 }}
>
  <Link
    to="/contact"
    className="bg-pink-600 text-white px-6 py-3 rounded-lg shadow hover:bg-pink-700 transition inline-block"
  >
    Contact Us
  </Link>
</motion.div>
      </section>
    </div>
  );
};

export default About;
