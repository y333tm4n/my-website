import Navigation from "../components/navigation";
import Link from "next/link";
import { FaProjectDiagram, FaCode, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectsPage() {
    return (
        <>
            <Navigation />
            <div className="flex flex-col items-center justify-center min-h-screen p-8 sm:p-20 bg-gradient-to-b from-teal-100 via-blue-50 to-blue-200 text-gray-800">
                <div className="w-full max-w-5xl">
                    <h1 className="text-3xl sm:text-5xl font-extrabold mb-8 text-center text-teal-700 drop-shadow-lg animate-fade-in">
                        <span className="flex items-center justify-center gap-4"><FaProjectDiagram className="text-teal-500" size={28}/> My Projects</span>
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl text-center mb-8 sm:mb-14 text-gray-600 animate-fade-in max-w-2xl mx-auto">
                        A collection of my work, experiments, and ongoing projects. Each project reflects my passion for building, learning, and experimenting with new technologies.
                    </p>

                    <div className="space-y-8 sm:space-y-10 md:space-y-16">
                        {/* Featured Project */}
                        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                            <div className="relative h-48 sm:h-64 w-full bg-gradient-to-r from-teal-700 to-teal-500 flex items-center justify-center">
                                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-white flex items-center justify-center shadow-lg">
                                    <img src="/images/refresh-logo.png" alt="ReFresh Logo" className="w-24 h-24 sm:w-32 sm:h-32 object-contain" />
                                </div>
                            </div>
                            <div className="p-6 sm:p-8">
                                <h2 className="text-2xl sm:text-3xl font-bold text-teal-700 mb-4 flex items-center gap-2"><FaCode className="text-teal-400"/> AI Food Tracker</h2>
                                <p className="text-gray-600 mb-4 sm:mb-6">
                                    An IoT and Computer Vision-Enabled System for Food Spoilage Detection and Filipino Cuisine Recommendation Using Large Language Models
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                                    {["Python", "TensorFlow", "React Native", "IoT"].map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm shadow-sm hover:bg-teal-200 transition-colors"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a
                                        href="https://github.com/yourusername/ai-food-tracker"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 sm:px-5 sm:py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors shadow-md flex items-center gap-2 text-center"
                                    >
                                        <FaExternalLinkAlt /> View Code
                                    </a>
                                    <a
                                        href="https://ai-food-tracker-demo.vercel.app"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 sm:px-5 sm:py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-500 transition-colors shadow-md flex items-center gap-2 text-center"
                                    >
                                        <FaExternalLinkAlt /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Smaller Projects Section */}
                        <section className="mt-16 sm:mt-20">
                            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-teal-800 animate-fade-in flex items-center justify-center gap-3">
                                <FaCode className="text-teal-400"/> Smaller Projects
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                                {[
                                    {
                                        title: "Predicting Insurance Charges",
                                        desc: "A datacamp project that utilizes supervised machine learning techniques for predicting Insurance charges.",
                                        tech: ["Python", "Pandas", "Scikit-learn"],
                                        link: "https://github.com/y333tm4n/Predicting-Insurance-Charges",
                                    },
                                    {
                                        title: "Clustering Antarctic Penguin Species",
                                        desc: "A DataCamp project that utilizes unsupervised machine learning techniques for identifying and clustering different types of Penguins in the Antarctic",
                                        tech: ["Python", "Pandas", "Scikit-learn"],
                                        link: "https://github.com/y333tm4n/Clustering-Antarctic-Penguin-Species",
                                    },
                                    {
                                        title: "Life Expectancy Analysis",
                                        desc: "A data analysis project that focuses on exploring and analyzing life expectancy data for selected countries in Southeast Asia.",
                                        tech: ["Python", "Pandas", "Matplotlib"],
                                        link: "https://github.com/y333tm4n/PH-ASEAN-Life-Expectancy-Data-Analysis",
                                    },
                                    {
                                        title: "Portfolio Website",
                                        desc: "This very website you're browsing right now!",
                                        tech: ["Next.js", "Tailwind CSS"],
                                        link: "https://github.com/y333tm4n/my-website",
                                    },
                                ].map((project, index) => (
                                    <div
                                        key={index}
                                        className="bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
                                    >
                                        <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-teal-700 flex items-center gap-2">
                                            <FaCode className="text-teal-400"/>{project.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4 flex-1">{project.desc}</p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tech.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="px-2 py-1 bg-teal-50 text-teal-700 rounded-md text-xs shadow-sm hover:bg-teal-100 transition-colors"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-teal-600 hover:text-teal-800 font-medium flex items-center gap-1"
                                        >
                                            View Project <FaExternalLinkAlt className="inline-block"/>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Contact CTA */}
                        <div className="bg-gradient-to-r from-teal-600 to-cyan-700 rounded-xl p-8 sm:p-10 text-white text-center mt-16 sm:mt-20 shadow-lg animate-fade-in">
                            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Interested in collaborating?</h2>
                            <p className="mb-6 sm:mb-8">I'm always open to discussing new projects and opportunities.</p>
                            <Link href="/contact">
                                <button className="px-6 py-3 sm:px-8 sm:py-4 bg-white text-teal-700 rounded-full font-medium hover:bg-gray-100 transition-colors shadow-md">
                                    Get in Touch
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}