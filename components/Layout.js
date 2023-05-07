import { useState } from "react";
import Link from "next/link";

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap p-6 bg-black bg-opacity-90">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link href="/">
            <div className="font-bold text-xl cursor-pointer">Mon Application</div>
          </Link>
        </div>
        <div className="block md:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-gray-300 border-gray-400 hover:text-white hover:border-white"
            onClick={toggleMenu}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path
                d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:block md:flex-grow md:items-center md:w-auto`}
        >
          <div className="text-sm md:flex-grow">
            <Link href="/scenarios">
              <div className="block mt-4 md:inline-block md:mt-0 text-gray-300 hover:text-white mr-4 cursor-pointer">
                Scénarios
              </div>
            </Link>
            <Link href="/faq">
              <div className="block mt-4 md:inline-block md:mt-0 text-gray-300 hover:text-white mr-4 cursor-pointer">
                FAQ
              </div>
            </Link>
          </div>
        </div>
      </nav>
      <main className="p-6">{children}</main>
      <footer className="p-6 bg-black bg-opacity-90 text-gray-100">
        <div className="text-base font-semibold leading-6">
          © 2023 Mon Application, Inc. Tous droits réservés.
        </div>
      </footer>
    </>
  );
}
