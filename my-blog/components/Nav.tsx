import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "./Mod-Toggle";

const Nav = () => {
    return (
        <nav className="bg-white border-gray-200 dark:bg-purple-900">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link href={"/"}>
              <div className="flex items-center gap-3">
                <Image 
                src="/logo.png"
                alt="logo"
                height={50}
                width={50}
                />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-900 md:hover:text-purple-700 md:dark:hover:text-purple-500 dark:text-white hover:underline">Life's Lab</span>
              </div>
            </Link>
            <div className="hidden w-full md:block md:w-auto sm:w-auto"  id="navbar-default">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white sm: dark:bg-purple-900 md:dark:bg-purple-900 dark:border-purple-700">
                <li>
                  <a href="/" className="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded md:bg-transparent md:text-purple-700 md:p-0 mt-2 sm:w-auto  dark:text-white md:dark:text-purple-500" aria-current="page">Home</a>
                </li>
                <li>
                  <a href="/about" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 mt-2 md:hover:text-purple-700 md:p-0 dark:text-white md:dark:hover:text-purple-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                </li>
                <li>
                  <ModeToggle/>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    );
}

export default Nav;

