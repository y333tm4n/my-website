import Navigation from "../components/navigation";
import { FaBriefcase, FaGraduationCap, FaAward, FaCertificate, FaUsers } from "react-icons/fa";

export default function ExperiencePage() {
  return (
    <>
      <Navigation />
      <div className="flex flex-col items-center justify-center min-h-screen p-8 sm:p-20 bg-gradient-to-b from-teal-50 to-blue-100 text-gray-800">
        <div className="w-full max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-8 text-center text-teal-700">
            Experience and Achievements
          </h1>
          <div className="space-y-8 sm:space-y-10 md:space-y-16">
            {/* Work Experience */}
            <section>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-10 text-teal-600 text-center">
                Work Experience
              </h2>
              <div className="space-y-6 sm:space-y-10">
                <div className="border-l-4 border-teal-600 pl-6 hover:shadow-2xl transition-shadow duration-300 bg-white p-6 sm:p-8 rounded-lg">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
                    Data Analyst Intern
                  </h3>
                  <p className="text-gray-600 mt-2">
                    S.P Madrid and Associates | January 2025 - March 2025
                  </p>
                  <ul className="list-disc ml-5 mt-4 text-gray-700 space-y-2">
                    <li>
                      Collected, analyzed, and generated reports for assigned campaigns.
                    </li>
                    <li>
                      Automated repetitive reporting tasks using Python, VBA, and Macros, increasing efficiency by 90%.
                    </li>
                    <li>
                      Utilized SQL to extract data, ensuring accurate and insightful reports.
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-teal-600 pl-6 hover:shadow-2xl transition-shadow duration-300 bg-white p-6 sm:p-8 rounded-lg">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
                    Senior Data Volunteer
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Google Developer on Campus - PLM | September 2023 - Present
                  </p>
                  <ul className="list-disc ml-5 mt-4 text-gray-700 space-y-2">
                    <li>Maintains and builds AI/ML models.</li>
                    <li>Ensures model reliability across different models developed.</li>
                    <li>Assists in managing AI/ML scientists.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="flex items-center justify-center gap-2 text-3xl font-bold mb-8 text-teal-600">
                <FaGraduationCap className="text-blue-500" /> Education
              </h2>
              <div className="space-y-8">
                <div className="border-l-4 border-teal-600 pl-6 hover:shadow-2xl transition-shadow duration-300 bg-white p-8 rounded-lg">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    Bachelor of Science in Computer Engineering
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Pamantasan ng Lungsod ng Maynila | 2021 - 2025
                  </p>
                  <ul className="list-disc ml-5 mt-4 text-gray-700 space-y-2">
                    <li>GPA: 1.84274</li>
                    <li>Dean's Lister (2023 - 2025)</li>
                    <li>
                      Relevant Coursework: Machine Learning, Digital Signal Processing, Internet of Things, Software Development, Electronic and Electrical Circuits, Feedback and Control Systems
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-teal-600 pl-6 hover:shadow-2xl transition-shadow duration-300 bg-white p-8 rounded-lg">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    Science, Technology, Engineering, and Mathematics (STEM) Strand
                  </h3>
                  <p className="text-gray-600 mt-2">
                    University of Perpetual Help System - DALTA | 2018 - 2020
                  </p>
                </div>
              </div>
            </section>

            {/* Achievements */}
            <section>
              <h2 className="flex items-center justify-center gap-2 text-3xl font-bold mb-8 text-teal-600">
                <FaAward className="text-yellow-500" /> Achievements
              </h2>
              <div className="space-y-8">
                <div className="border-l-4 border-teal-600 pl-6 hover:shadow-2xl transition-shadow duration-300 bg-white p-8 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 hover:text-teal-600 transition-colors duration-300">
                    Fullstack Developer | Best Generative AI Implementation, AWS Innovations Cup 2024
                  </h3>
                  <p className="text-gray-600 mt-4">
                    Developed the backend for a Generative AI-powered first aid app, integrating AWS Bedrock for personalized medical recommendations.
                  </p>
                </div>
                <div className="border-l-4 border-teal-600 pl-6 hover:shadow-2xl transition-shadow duration-300 bg-white p-8 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 hover:text-teal-600 transition-colors duration-300">
                    A.I, Backend Developer | 3rd Place, Android Development, 13th IT Olympics 2024 (University of Makati)
                  </h3>
                  <p className="text-gray-600 mt-4">
                    Designed a food inventory app using FlutterFlow, AWS Rekognition, and Google Gemini, integrated with Raspberry Pi & webcam for real-time tracking.
                  </p>
                </div>
              </div>
            </section>

            {/* Badges and Certifications */}
            <section>
              <h2 className="flex items-center justify-center gap-2 text-3xl font-bold mb-8 text-teal-600">
                <FaCertificate className="text-purple-500" /> Badges & Certifications
              </h2>
              <div className="space-y-8">
                <div className="border-l-4 border-teal-600 pl-6 hover:shadow-2xl transition-shadow duration-300 bg-white p-8 rounded-lg">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    Generative AI with Large Language Models
                  </h3>
                  <p className="text-gray-600 mt-2">Deeplearning.AI | May 2024</p>
                </div>
                <div className="border-l-4 border-teal-600 pl-6 hover:shadow-2xl transition-shadow duration-300 bg-white p-8 rounded-lg">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    Introduction to Machine Learning with AWS
                  </h3>
                  <p className="text-gray-600 mt-2">AWS | April 2024</p>
                </div>
                <div className="border-l-4 border-teal-600 pl-6 hover:shadow-2xl transition-shadow duration-300 bg-white p-8 rounded-lg">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    Professional Diploma in Python Development
                  </h3>
                  <p className="text-gray-600 mt-2">Udemy | March 2024</p>
                </div>
                <div className="border-l-4 border-teal-600 pl-6 hover:shadow-2xl transition-shadow duration-300 bg-white p-8 rounded-lg">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    Introduction to Machine Learning
                  </h3>
                  <p className="text-gray-600 mt-2">Kaggle | July 2023</p>
                </div>
              </div>
            </section>

            {/* Memberships and Affiliations */}
            <section>
              <h2 className="flex items-center justify-center gap-2 text-3xl font-bold mb-8 text-teal-600">
                <FaUsers className="text-pink-500" /> Memberships & Affiliations
              </h2>
              <div className="space-y-8">
                <div className="border-l-4 border-teal-600 pl-6 hover:shadow-2xl transition-shadow duration-300 bg-white p-8 rounded-lg">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    Cohort 1 Scholar
                  </h3>
                  <p className="text-gray-600 mt-2">AI Academy Philippines | April – June 2025</p>
                </div>
                <div className="border-l-4 border-teal-600 pl-6 hover:shadow-2xl transition-shadow duration-300 bg-white p-8 rounded-lg">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    DataCamp Scholar
                  </h3>
                  <p className="text-gray-600 mt-2">DataCamp Donates, GDG on Campus – PLM | September 2023 – Present</p>
                </div>
                <div className="border-l-4 border-teal-600 pl-6 hover:shadow-2xl transition-shadow duration-300 bg-white p-8 rounded-lg">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    GCP Associate Cloud Engineer Track
                  </h3>
                  <p className="text-gray-600 mt-2">Google Cloud Get Certified Program | 2024</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
