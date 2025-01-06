import Image from "next/image";
import Logo from "../assets/logo.png";
import Link from "next/link";
import { Button } from "@/components/ui/button";
const Header = () => {
  return (
    <>
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="text-lg font-bold">
            <Link className="text-gray-800" href="/">
              {/* <Image src={Logo} /> */}
              <h1>Raqeeb</h1>
            </Link>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex space-x-6">
            <Link
              className="text-gray-600 hover:text-gray-900"
              href="/features"
            >
              Features
            </Link>
            <Link
              className="text-gray-600 hover:text-gray-900"
              href="/industries"
            >
              Industries
            </Link>
            <Link
              className="text-gray-600 hover:text-gray-900"
              href="/howitworks"
            >
              How it works
            </Link>
            <Link className="text-gray-600 hover:text-gray-900" href="/pricing">
              Pricing
            </Link>
            <Link className="text-gray-600 hover:text-gray-900" href="/faq">
              FAQ
            </Link>
            <Link className="text-gray-600 hover:text-gray-900" href="/blog">
              Blog
            </Link>
            <Link className="text-gray-600 hover:text-gray-900" href="/demo">
              Demo
            </Link>
          </div>

          {/* Buttons */}
          <div className="hidden md:flex space-x-4">
            <Link href="/loginPage">
              <Button
                style={{
                  color: "#5470CB",
                  border: "none",
                  backgroundColor: "white",
                }}
              >
                Login
              </Button>
            </Link>
            <Link href="/signUpPage">
              <Button
                style={{ border: "2px solid #FF4041", color: "#FF4041" }}
                className="px-4 hover:bg-white py-2 bg-white   rounded-3xl w-48"
              >
                Sign Up For Free
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-600 focus:outline-none focus:text-gray-900">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
