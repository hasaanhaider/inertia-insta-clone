import React from "react";
import { AiFillHome } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineExplore } from "react-icons/md";
import { PiMonitorPlay } from "react-icons/pi";
import { TbBrandMessenger } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import { CgAddR } from "react-icons/cg";
import { CgProfile } from "react-icons/cg";
import { VscThreeBars } from "react-icons/vsc";

const Sidebar = () => {
    return (
        <>
            <button
                data-drawer-target="sidebar-multi-level-sidebar"
                data-drawer-toggle="sidebar-multi-level-sidebar"
                aria-controls="sidebar-multi-level-sidebar"
                type="button"
                className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
                <span className="sr-only">Open sidebar</span>
                <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    ></path>
                </svg>
            </button>
            <aside
                id="sidebar-multi-level-sidebar relative z-40"
                className="sticky top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
                aria-label="Sidebar"
            >
                <div className="h-full px-3 py-4 overflow-y-auto border-r-2  dark:bg-gray-800">
                    <ul className="space-y-4 font-medium">
                        <li>
                            <a
                                href="#"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <span className="ms-3">Instagram</span>
                            </a>
                        </li>
                        <li>
                            <button
                                type="button"
                                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                aria-controls="dropdown-example"
                                data-collapse-toggle="dropdown-example"
                            >
                                <AiFillHome size={26} />

                                <span className="flex-1 text-lg ms-3 text-left rtl:text-right whitespace-nowrap">
                                    Home
                                </span>
                            </button>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <IoIosSearch size={26} />
                                <span className="flex-1 text-lg ms-3 whitespace-nowrap">
                                    Search
                                </span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <MdOutlineExplore size={26} />
                                <span className="flex-1 text-lg ms-3 whitespace-nowrap">
                                    Explore
                                </span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <PiMonitorPlay size={26} />
                                <span className="flex-1 text-lg ms-3 whitespace-nowrap">
                                    Reels
                                </span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <TbBrandMessenger size={26} />
                                <span className="flex-1 text-lg ms-3 whitespace-nowrap">
                                    Messages
                                </span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <CiHeart size={26} />
                                <span className="flex-1 text-lg ms-3 whitespace-nowrap">
                                    Notifications
                                </span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <CgAddR size={26} />
                                <span className="flex-1 text-lg ms-3 whitespace-nowrap">
                                    Create
                                </span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <CgProfile size={26} />
                                <span className="flex-1 text-lg ms-3 whitespace-nowrap">
                                    Profile
                                </span>
                            </a>
                        </li>
                    </ul>
                    <ul className="space-y-3 font-medium absolute bottom-0 w-full left-0">
                        <li>
                            <button
                                type="button"
                                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                aria-controls="dropdown-example"
                                data-collapse-toggle="dropdown-example"
                            >
                                <VscThreeBars size={26} />

                                <span className="flex-1 text-lg ms-3 text-left rtl:text-right whitespace-nowrap">
                                    Setting
                                </span>
                            </button>
                        </li>
                    </ul>
                </div>
            </aside>
            
        </>
    );
};

export default Sidebar;
