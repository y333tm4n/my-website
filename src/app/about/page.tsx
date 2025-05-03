import Navigation from "../components/navigation";

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <div className="flex flex-col items-center justify-center min-h-screen p-8 sm:p-20 bg-gradient-to-b from-teal-50 to-teal-100 text-gray-800">
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8 sm:p-12">
          <h1 className="text-5xl font-extrabold mb-8 text-center text-teal-600">
            About Me
          </h1>

          <div className="prose lg:prose-xl">
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-6 mb-8">
              <img
                src="/images/2x2.jpg"
                alt="Piolo's Profile"
                className="w-36 h-36 rounded-full object-cover border-4 border-gradient-to-r from-teal-400 to-teal-600 shadow-lg self-center sm:self-start transition-transform duration-300 hover:scale-105"
              />
              <div className="flex flex-col justify-center">
                <p className="text-base text-gray-800 leading-relaxed">
                  Hello! I'm{" "}
                  <span className="font-bold text-teal-600">Piolo</span>, and
                  welcome to my personal website.
                </p>

                <p className="mt-3 text-gray-800 leading-relaxed">
                  I'm deeply passionate about{" "}
                  <span className="font-semibold text-teal-500">data</span>,{" "}
                  <span className="font-semibold text-teal-500">
                    machine learning
                  </span>
                  ,{" "}
                  <span className="font-semibold text-teal-500">
                    artificial intelligence
                  </span>
                  , and the{" "}
                  <span className="font-semibold text-teal-500">
                    Internet of Things (IoT)
                  </span>
                  . I've been immersed in this field for the past 3 years,
                  actively exploring how these technologies can solve real-world
                  problems and transform industries.
                </p>

                <p className="mt-3 text-gray-800 leading-relaxed">
                  Throughout my journey, I’ve worked on hands-on projects
                  ranging from smart devices to AI-powered applications. I find
                  joy in building solutions that are not only innovative but
                  also impactful, especially in areas like sustainability,
                  education, and public service.
                </p>

                <p className="mt-3 text-gray-800 leading-relaxed">
                  Beyond the code, I'm an advocate for tech for good—I love
                  collaborating with communities and organizations that use
                  technology to empower people and create lasting change.
                  Whether it's volunteering for developer communities,
                  participating in hackathons, or mentoring fellow learners, I
                  believe in sharing knowledge and growing together.
                </p>

                <p className="mt-3 text-gray-800 leading-relaxed">
                  This site is a glimpse into my journey, projects, and
                  passions. Thanks for stopping by!
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-10 mb-6 text-teal-600">
              What Led Me Here
            </h2>
            <p className="text-gray-700 leading-relaxed">
              I started volunteering for tech organizations out of curiosity,
              but what I found was something much deeper. I met mentors and
              peers who inspired me to think bigger and use my skills to make a
              real difference. That’s when I truly realized how impactful
              technology could be in solving real-world challenges.
            </p>

            <h2 className="text-3xl font-bold mt-10 mb-6 text-teal-600">
              My Skills
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
                  <span>☁️</span> Cloud & Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "AWS",
                    "Google Cloud Platform",
                    "Git",
                    "VS Code",
                    "Firebase",
                    "MySQL",
                    "PostgreSQL",
                    "MongoDB",
                    "SQLite",
                  ].map((tool) => (
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
                  <span>🤖</span> AI & ML
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "TensorFlow",
                    "PyTorch",
                    "Google Colaboratory",
                    "AutoML",
                    "Roboflow",
                    "ChatGPT",
                    "Gemini",
                    "Claude",
                    "AWS Sagemaker",
                  ].map((ml) => (
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
          </div>
        </div>
      </div>
    </>
  );
}
