"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "./components/navigation";

export default function Home() {
  const fullText = "Welcome to My Experimental Website";
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      setText((currentText) => {
        if (isDeleting) {
          return fullText.substring(0, currentText.length - 1);
        } else {
          return fullText.substring(0, currentText.length + 1);
        }
      });

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000); // Wait before deleting
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
      }
    };

    const timer = setTimeout(handleTyping, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting]);

  return (
    <>
      <Navigation />
      <div className="flex flex-col items-center justify-center min-h-screen p-8 sm:p-20 bg-gradient-to-b from-teal-50 via-cyan-50 to-cyan-100 text-gray-800">
        {/* Hero Section */}
        <div className="w-full max-w-4xl text-center mb-12">
          <h1 className="text-6xl font-extrabold mb-6 text-teal-800 animate-fade-in">
            {text}
            <span className="border-r-2 border-teal-800 animate-pulse ml-1"></span> {/* blinking cursor */}
          </h1>
          <p className="text-lg text-gray-500">
            Exploring new ideas and pushing boundaries.
          </p>
        </div>

        <main className="flex flex-col items-center gap-8">
          <Link href="/about">
            <button className="px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-700 text-white text-lg font-semibold rounded-full shadow-lg hover:scale-110 transform transition-transform duration-300 hover:shadow-xl">
              Learn More About Me
            </button>
          </Link>
        </main>

        {/* Quick Navigation Section */}
        <section className="w-full max-w-4xl mt-20">
          <h2 className="text-4xl font-bold mb-8 text-center text-teal-800">
            Explore
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { title: "Projects", desc: "See what I've built.", link: "/projects" },
              { title: "Experience", desc: "Check out my journey.", link: "/experience" },
              { title: "Contact", desc: "Let’s get in touch!", link: "/contact" },
            ].map((item, index) => (
              <Link href={item.link} key={index}>
                <div className="p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-xl hover:scale-105 transition-transform duration-300 bg-white text-gray-800">
                  <h3 className="text-2xl font-semibold mb-2 text-teal-700">
                    {item.title}
                  </h3>
                  <p className="text-gray-500">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Personal Quote */}
        <section className="w-full max-w-3xl mt-16 text-center italic text-lg text-teal-700">
          <p>"Build with curiosity, learn with purpose, and share with heart."</p>
        </section>

        {/* Featured Project */}
        <section className="w-full max-w-4xl mt-16 text-center">
          <h2 className="text-4xl font-bold mb-6 text-teal-800">
            Featured Project
          </h2>
          <div className="p-8 rounded-lg shadow-lg bg-white text-gray-800">
            <h3 className="text-2xl font-semibold text-teal-700">
              AI Food Tracker
            </h3>
            <p className="mt-4 mb-6 text-gray-500">
              A smart app that tracks food freshness and expiration using ML & sensors.
            </p>
            <Link href="/projects">
              <button className="px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-full hover:scale-110 transition-transform duration-300">
                View More Projects
              </button>
            </Link>
          </div>
        </section>

        {/* Tech Stack Preview */}
        <section className="w-full max-w-4xl mx-auto mt-20 px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-10 text-teal-700">
            What I am currently working/studying with
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: "Next.js", src: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" },
              { name: "React", src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
              { name: "Tailwind CSS", src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
              { name: "AWS", src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
              { name: "Python", src: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
              { name: "GCP", src: "/images/gcp.png" },
              { name: "TensorFlow", src: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg" },
              { name: "PyTorch", src: "https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg" },
              { name: "Docker", src: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg" },
              { name: "Kubernetes", src: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg" },
              { name: "Azure", src: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg" },
              { name: "Hugging Face", src: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
            ].map((tool, index) => (
              <div key={index} className="flex items-center space-x-3 bg-teal-50 rounded-full px-4 py-2 shadow-sm hover:shadow-md transition-shadow">
          <Image src={tool.src} alt={tool.name} width={30} height={30} />
          <span className="text-sm font-semibold text-teal-900">{tool.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Call-to-Action */}
        <section className="w-full max-w-4xl mt-20 text-center">
          <h2 className="text-3xl font-bold mb-4 text-teal-800">
            Curious to see more?
          </h2>
          <p className="mb-6 text-gray-500">
            Start your journey through my site and learn more about what I do.
          </p>
          <Link href="/projects">
            <button className="px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-700 text-white text-lg font-semibold rounded-full hover:scale-110 transition-transform duration-300">
              Browse My Work
            </button>
          </Link>
        </section>

        {/* Powered By Section */}
        <section className="w-full max-w-4xl mt-16 text-center">
          <h3 className="text-sm text-gray-500 mb-2">Powered by:</h3>
          <div className="flex justify-center items-center gap-6 flex-wrap">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
              alt="Next.js"
              width={50}
              height={50}
              className="hover:scale-110 transition-transform"
            />
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              alt="React"
              width={50}
              height={50}
              className="hover:scale-110 transition-transform"
            />
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
              alt="TypeScript"
              width={50}
              height={50}
              className="hover:scale-110 transition-transform"
            />
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full max-w-4xl text-center mt-16 border-t border-gray-300 pt-4">
          <p className="text-sm text-gray-500">&copy; 2025 By yours truly</p>
        </footer>
      </div>
    </>
  );
}
