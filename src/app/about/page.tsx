import Navigation from "../components/navigation";
import { FaUser, FaCloud, FaRobot, FaCode } from "react-icons/fa";

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <div className="flex flex-col items-center justify-center min-h-screen p-8 sm:p-20 bg-gradient-to-b from-teal-50 to-teal-100 text-gray-800">
        {/* Hero Section */}
        <section className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-4 sm:p-8 mx-auto mt-8">
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-8 text-center text-teal-600">
            About Me
          </h1>
          <div className="prose lg:prose-xl">
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
              <img
                src="/images/2x2.jpg"
                alt="Piolo's Profile"
                className="w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover border-4 border-gradient-to-r from-teal-400 to-teal-600 shadow-lg self-center sm:self-start transition-transform duration-300 hover:scale-105"
              />
              <div className="flex flex-col justify-center w-full">
                <h2 className="text-2xl sm:text-4xl font-bold text-teal-700 mb-2">
                  Piolo
                </h2>
                <p className="text-lg sm:text-xl text-gray-500 mb-4">
                  Data, AI, and IoT Enthusiast
                </p>
                <p className="text-base sm:text-lg text-gray-700 max-w-3xl">
                  Passionate about building innovative solutions at the
                  intersection of{" "}
                  <span className="font-semibold text-teal-500">AI</span>,{" "}
                  <span className="font-semibold text-teal-500">Cloud</span>, and{" "}
                  <span className="font-semibold text-teal-500">IoT</span>. I love
                  collaborating, learning, and sharing knowledge to make a positive
                  impact.
                </p>
              </div>
            </div>

            {/* Bio Section */}
            <section className="w-full max-w-3xl bg-white rounded-2xl shadow p-8 mb-12">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-teal-600 mb-4">
                <FaUser /> About Me
              </h2>
              <p className="text-gray-800 leading-relaxed mb-3">
                Hello! I'm{" "}
                <span className="font-bold text-teal-600">Piolo</span>. Over the
                past 3 years, I've immersed myself in{" "}
                <span className="font-semibold text-teal-500">Data</span>,{" "}
                <span className="font-semibold text-teal-500">Cloud</span>,{" "}
                <span className="font-semibold text-teal-500">Machine Learning</span>
                , <span className="font-semibold text-teal-500">AI</span>, and{" "}
                <span className="font-semibold text-teal-500">IoT</span>, working on
                projects that solve real-world problems and drive positive change.
              </p>
              <p className="text-gray-800 leading-relaxed mb-3">
                I enjoy building smart devices and AI-powered apps, especially for
                sustainability, education, and public service. I believe in tech for
                good—volunteering, mentoring, and collaborating to empower others.
              </p>
              <p className="text-gray-800 leading-relaxed">
                This site is a glimpse into my journey, projects, and passions. Thanks
                for stopping by!
              </p>
            </section>

            {/* Skills Section */}
            <section className="w-full max-w-3xl bg-white rounded-2xl shadow p-8 mb-12">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-teal-600 mb-6">
                <FaCode /> My Skills
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
                    <span>🌐</span> Languages
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "Java", "C++", "JavaScript", "SQL"].map((lang) => (
                      <span
                        key={lang}
                        className="bg-teal-100 text-teal-700 text-sm font-medium px-3 py-1 rounded-full transition-transform duration-300 hover:scale-105"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
                    <FaCloud className="text-blue-400" /> Cloud & Tools
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["AWS", "Google Cloud Platform", "Git", "VS Code", "Firebase", "MySQL", "PostgreSQL", "MongoDB", "SQLite"].map((tool) => (
                      <span
                        key={tool}
                        className="bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full transition-transform duration-300 hover:scale-105"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
                    <FaRobot className="text-purple-400" /> AI & ML
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["TensorFlow", "PyTorch", "Google Colaboratory", "AutoML", "Roboflow", "ChatGPT", "Gemini", "Claude", "AWS Sagemaker"].map((ml) => (
                      <span
                        key={ml}
                        className="bg-purple-100 text-purple-700 text-sm font-medium px-3 py-1 rounded-full transition-transform duration-300 hover:scale-105"
                      >
                        {ml}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Journey Section */}
            <section className="w-full max-w-3xl bg-white rounded-2xl shadow p-8 mb-12">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-teal-600 mb-4">
                <FaUser /> What Led Me Here
              </h2>
              <p className="text-gray-700 leading-relaxed">
                I started volunteering for tech organizations out of curiosity, but
                what I found was something much deeper. I met mentors and peers who
                inspired me to think bigger and use my skills to make a real
                difference. That’s when I truly realized how impactful technology
                could be in solving real-world challenges.
              </p>
            </section>
          </div>
        </section>
      </div>
    </>
  );
}
