"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "./components/navigation";
import { FaProjectDiagram, FaBriefcase, FaEnvelope } from "react-icons/fa";

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
        setTimeout(() => setIsDeleting(true), 1000); 
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
        {/* Hero Section Redesigned */}
        <section className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-12 mb-16 mt-8">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-6xl font-extrabold mb-4 text-teal-800 animate-fade-in leading-tight">
              {text}
              <span className="border-r-2 border-teal-800 animate-pulse ml-1"></span>
            </h1>
            <p className="text-xl text-gray-500 mb-8 max-w-xl">
              Exploring new ideas and pushing boundaries in tech, AI, and cloud.
            </p>
            <Link href="/about">
              <button className="px-10 py-4 bg-gradient-to-r from-teal-500 to-cyan-700 text-white text-xl font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300 hover:shadow-xl">
                Learn More About Me
              </button>
            </Link>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <Image src="/images/2x2.jpg" alt="Profile" width={260} height={260} className="rounded-full shadow-xl border-4 border-teal-200 object-cover" />
          </div>
        </section>

        {/* Quick Navigation Section Redesigned */}
        <section className="w-full max-w-5xl mt-10 mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            { [
              {
                title: "Projects",
                desc: "See what I've built.",
                link: "/projects",
                icon: <FaProjectDiagram size={48} className="mb-4 text-teal-700" />,
              },
              {
                title: "Experience",
                desc: "Check out my journey.",
                link: "/experience",
                icon: <FaBriefcase size={48} className="mb-4 text-teal-700" />,
              },
              {
                title: "Contact",
                desc: "Let’s get in touch!",
                link: "/contact",
                icon: <FaEnvelope size={48} className="mb-4 text-teal-700" />,
              },
            ].map((item, index) => (
              <Link href={item.link} key={index} className="group">
                <div className="flex flex-col items-center p-8 rounded-2xl shadow-lg bg-white hover:shadow-2xl hover:scale-105 transition-transform duration-300 text-gray-800">
                  {item.icon}
                  <h3 className="text-2xl font-bold mb-2 text-teal-700">{item.title}</h3>
                  <p className="text-gray-500 text-base">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Project Redesigned */}
        <section className="w-full max-w-5xl mt-10 mb-16 flex flex-col md:flex-row items-center gap-10 bg-white rounded-2xl shadow-xl p-10">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-4 text-teal-800">Featured Project</h2>
            <h3 className="text-2xl font-semibold text-teal-700 mb-2">AI Food Tracker</h3>
            <p className="mb-6 text-gray-500 text-lg">
              A smart app that tracks food freshness and expiration using ML & sensors.
            </p>
            <Link href="/projects">
              <button className="px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-full hover:scale-110 transition-transform duration-300">
                View More Projects
              </button>
            </Link>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <Image src="/images/logo.png" alt="AI Food Tracker" width={180} height={180} className="rounded-xl shadow-lg bg-teal-50 p-4" />
          </div>
        </section>

        {/* Tech Stack Preview Redesigned */}
        <section className="w-full max-w-5xl mx-auto mt-16 px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-8 text-teal-700">
            My Current Tech Stack
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            { [
              {
                name: "Next.js",
                src: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
              },
              {
                name: "React",
                src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
              },
              {
                name: "Tailwind CSS",
                src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
              },
              {
                name: "AWS",
                src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
              },
              {
                name: "Python",
                src: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
              },
              {
                name: "GCP",
                src: "/images/gcp.png",
              },
              {
                name: "TensorFlow",
                src: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg",
              },
              {
                name: "PyTorch",
                src: "https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg",
              },
              {
                name: "Docker",
                src: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg",
              },
              {
                name: "Kubernetes",
                src: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg",
              },
              {
                name: "Azure",
                src: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg",
              },
              {
                name: "Hugging Face",
                src: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
              },
            ].map((tool, index) => (
              <div key={index} className="flex items-center bg-white rounded-full w-36 h-10 shadow hover:shadow-md transition-shadow px-3 border border-gray-200 gap-2">
                <div className="flex items-center justify-center w-8 h-8 rounded-full overflow-hidden">
                  <Image src={tool.src} alt={tool.name} width={22} height={22} className="object-contain bg-transparent" />
                </div>
                <span className="text-xs font-medium text-teal-900 text-left whitespace-nowrap overflow-hidden text-ellipsis w-full max-w-[6rem]">{tool.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Personal Quote Redesigned */}
        <section className="w-full max-w-3xl mt-20 text-center italic text-2xl text-teal-700 font-medium">
          <p>“Build with curiosity, learn with purpose, and share with heart.”</p>
        </section>

        {/* Call-to-Action Redesigned */}
        <section className="w-full max-w-4xl mt-20 text-center">
          <h2 className="text-3xl font-bold mb-4 text-teal-800">
            Curious to see more?
          </h2>
          <p className="mb-6 text-gray-500 text-lg">
            Start your journey through my site and learn more about what I do.
          </p>
          <Link href="/projects">
            <button className="px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-700 text-white text-lg font-semibold rounded-full hover:scale-110 transition-transform duration-300">
              Browse My Work
            </button>
          </Link>
        </section>

        {/* Powered By Section Redesigned */}
        <section className="w-full max-w-4xl mt-16 text-center">
          <h3 className="text-sm text-gray-500 mb-2">Powered by:</h3>
          <div className="flex justify-center items-center gap-8 flex-wrap">
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
