import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
    return (
        <header className="w-full bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-500 text-white py-4 shadow-lg">
            <nav className="max-w-7xl mx-auto flex justify-between items-center px-8">
                <Link href="/" className="flex items-center">
                    <Image
                        src="/images/logo.png"
                        alt="Piolo's Portfolio Logo"
                        width={180}
                        height={70}
                        className="hover:opacity-90 transition-opacity bg-transparent"
                    />
                </Link>
                <ul className="flex gap-8 text-lg font-medium">
                    <li>
                        <Link
                            href="/"
                            className="hover:underline hover:text-teal-200 transition-colors"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            className="hover:underline hover:text-teal-200 transition-colors"
                        >
                            About Me
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/experience"
                            className="hover:underline hover:text-teal-200 transition-colors"
                        >
                            Experiences
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/contact"
                            className="hover:underline hover:text-teal-200 transition-colors"
                        >
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/projects"
                            className="hover:underline hover:text-teal-200 transition-colors"
                        >
                            Projects
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}