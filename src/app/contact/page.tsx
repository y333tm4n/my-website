"use client";
import { useState } from "react";
import Navigation from "../components/navigation";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState("");

    // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    //     const { name, value } = e.target;
    //     setFormData({
    //         ...formData,
    //         [name]: value,
    //     });
    // };
    

    // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     setIsSubmitting(true);
    
    //     // Simulate form submission
    //     setTimeout(() => {
    //         setIsSubmitting(false);
    //         setSubmitMessage("Thank you for your message! I'll get back to you soon.");
    //         setFormData({
    //             name: "",
    //             email: "",
    //             message: "",
    //         });
    //     }, 1500);
    // };

    return (
        <>
            <Navigation />
            <div className="flex flex-col items-center justify-center min-h-screen p-8 sm:p-20 bg-gradient-to-br from-teal-50 to-purple-100 text-gray-800">
                <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8 sm:p-12">
                    <h1 className="text-4xl font-extrabold mb-8 text-center text-teal-600">
                        Contact Me
                    </h1>

                    {submitMessage ? (
                        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6 text-center">
                            {submitMessage}
                        </div>
                    ) : null}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 transition duration-200"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 transition duration-200"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                                rows={5}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 transition duration-200"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-gradient-to-r from-teal-500 to-purple-600 text-white py-2 px-4 rounded-md hover:from-teal-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:bg-teal-400 transition duration-200"
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </button>
                    </form>

                    <div className="mt-12 text-center">
                        <h2 className="text-xl font-bold mb-4 text-gray-700">
                            Other Ways to Connect
                        </h2>
                        <div className="flex justify-center space-x-6">
                            <a
                                href="https://linkedin.com/in/realpjcabigao"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-teal-600 hover:text-teal-800 transition duration-200 flex items-center space-x-2"
                            >
                                <FaLinkedin />
                                <span>LinkedIn</span>
                            </a>
                            <a
                                href="https://github.com/y333tm4n"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-teal-600 hover:text-teal-800 transition duration-200 flex items-center space-x-2"
                            >
                                <FaGithub />
                                <span>GitHub</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
