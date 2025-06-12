import Link from "next/link";
import Image from "next/image";
import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaFolderOpen } from "react-icons/fa";

export default function Navigation() {
    return (
        <header className="w-full bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-500 text-white py-4 shadow-lg">
            <nav className="max-w-7xl mx-auto flex flex-col items-center sm:flex-row sm:justify-between px-4 sm:px-8 gap-2 sm:gap-0">
                <Link href="/" className="flex items-center mb-2 sm:mb-0">
                    <Image
                        src="/images/logo.png"
                        alt="Piolo's Portfolio Logo"
                        width={140}
                        height={50}
                        className="hover:opacity-90 transition-opacity bg-transparent w-32 sm:w-[180px] h-auto"
                    />
                </Link>
                <ul className="flex flex-row flex-wrap justify-center gap-4 sm:gap-8 text-base sm:text-lg font-medium w-full sm:w-auto items-center">
                    <li>
                        <Link
                            href="/"
                            className="flex items-center gap-2 hover:underline hover:text-teal-200 transition-colors"
                        >
                            <FaHome size={20} />
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            className="flex items-center gap-2 hover:underline hover:text-teal-200 transition-colors"
                        >
                            <FaUser size={20} />
                            About Me
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/experience"
                            className="flex items-center gap-2 hover:underline hover:text-teal-200 transition-colors"
                        >
                            <FaBriefcase size={20} />
                            Experiences
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/contact"
                            className="flex items-center gap-2 hover:underline hover:text-teal-200 transition-colors"
                        >
                            <FaEnvelope size={20} />
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/projects"
                            className="flex items-center gap-2 hover:underline hover:text-teal-200 transition-colors"
                        >
                            <FaFolderOpen size={20} />
                            Projects
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}