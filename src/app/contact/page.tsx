"use client";
import { useState } from "react";
import Navigation from "../components/navigation";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    
// comment here
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
    
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitMessage("Thank you for your message! I'll get back to you soon.");
            setFormData({
                name: "",
                email: "",
                message: "",
            });
        }, 1500);
    };

    return (
        <>
            <Navigation />
            <div className="flex flex-col items-center justify-center min-h-screen p-8 sm:p-20 bg-gradient-to-br from-teal-50 to-purple-100 text-gray-800">
              <div className="w-full max-w-2xl bg-white shadow-2xl rounded-3xl p-8 sm:p-14">
                {/* Header Section */}
                <div className="flex flex-col items-center mb-10">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-teal-400 to-purple-500 flex items-center justify-center mb-5 shadow-lg">
                    <FaEnvelope className="text-white" size={48} />
                  </div>
                  <h1 className="text-4xl font-extrabold text-center text-teal-700 mb-2 tracking-tight">
                    Get in Touch
                  </h1>
                  <p className="text-lg text-gray-500 text-center max-w-md">
                    Have a question, want to collaborate, or just want to say hi? Fill out the form below or connect with me on social media.
                  </p>
                </div>

                {/* Success Message */}
                {submitMessage ? (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6 text-center">
                    {submitMessage}
                  </div>
                ) : null}

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition duration-200 bg-gray-50"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition duration-200 bg-gray-50"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition duration-200 bg-gray-50"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-teal-500 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold text-lg shadow-md hover:from-teal-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400 disabled:bg-teal-400 transition duration-200"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>

                {/* Divider */}
                <div className="my-12 border-t border-gray-200"></div>

                {/* Social Links Section */}
                <div className="text-center">
                  <h2 className="text-xl font-bold mb-6 text-gray-700 tracking-tight">
                    Or connect with me
                  </h2>
                  <div className="flex justify-center gap-10">
                    <a
                      href="https://linkedin.com/in/realpjcabigao"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center text-teal-600 hover:text-teal-800 transition duration-200"
                    >
                      <FaLinkedin size={36} />
                      <span className="text-sm font-medium mt-2">LinkedIn</span>
                    </a>
                    <a
                      href="https://github.com/y333tm4n"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center text-teal-600 hover:text-teal-800 transition duration-200"
                    >
                      <FaGithub size={36} />
                      <span className="text-sm font-medium mt-2">GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
        </>
    );
}
