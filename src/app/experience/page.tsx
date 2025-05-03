import Navigation from "../components/navigation";

export default function ExperiencePage() {
  return (
    <>
      <Navigation />
      <div className="flex flex-col items-center justify-center min-h-screen p-8 sm:p-20 bg-gradient-to-b from-teal-50 to-blue-100 text-gray-800">
        <div className="w-full max-w-4xl">
          <h1 className="text-4xl font-extrabold mb-8 text-center text-teal-700">
            Experience and Achievements
          </h1>

          <div className="space-y-16">
            {/* Work Experience */}
            <section>
              <h2 className="text-3xl font-bold mb-8 text-teal-600 text-center">
                Work Experience
              </h2>

              <div className="space-y-8">
                <div className="border-l-4 border-teal-600 pl-6 hover:shadow-xl transition-shadow duration-300 bg-white p-6 rounded-lg">
                  <h3 className="text-2xl font-semibold text-gray-800">
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
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-3xl font-bold mb-8 text-teal-600 text-center">
                Education
              </h2>

              <div className="space-y-8">
                <div className="border-l-4 border-teal-600 pl-6 hover:shadow-xl transition-shadow duration-300 bg-white p-6 rounded-lg">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    Bachelor of Science in Computer Engineering
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Pamantasan ng Lungsod ng Maynila | 2021 - 2025
                  </p>
                </div>

                <div className="border-l-4 border-teal-600 pl-6 hover:shadow-xl transition-shadow duration-300 bg-white p-6 rounded-lg">
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
              <h2 className="text-3xl font-bold mb-8 text-teal-600 text-center">
                Achievements
              </h2>
              <div className="space-y-8">
                <div className="border-l-4 border-teal-600 pl-6 hover:shadow-xl transition-shadow duration-300 bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 hover:text-teal-600 transition-colors duration-300">
                    Fullstack Developer | Best Generative AI Implementation, AWS Innovations Cup 2024
                  </h3>
                  <p className="text-gray-600 mt-4">
                    Developed the backend for a Generative AI-powered first aid app, integrating AWS Bedrock for personalized medical recommendations.
                  </p>
                </div>
                <div className="border-l-4 border-teal-600 pl-6 hover:shadow-xl transition-shadow duration-300 bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 hover:text-teal-600 transition-colors duration-300">
                    A.I, Backend Developer | 3rd Place, Android Development, 13th IT Olympics 2024 (University of Makati)
                  </h3>
                  <p className="text-gray-600 mt-4">
                    Designed a food inventory app using FlutterFlow, AWS Rekognition, and Google Gemini, integrated with Raspberry Pi & webcam for real-time tracking.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}