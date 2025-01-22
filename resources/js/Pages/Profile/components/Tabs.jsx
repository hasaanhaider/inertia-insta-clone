import React from "react";
import { Link, usePage } from "@inertiajs/react";
import { BsGrid3X3 } from "react-icons/bs";
import { BsCollectionPlay } from "react-icons/bs";
import { FaUserTag } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";

const Tabs = ({ user }) => {
    const { url } = usePage(); // Get the current URL

    return (
        <div className="mt-32 border-t flex items-center justify-center gap-[60px] h-[52px]">
            <Link
                href={`/profile/${user.username}`}
                className={`flex items-center gap-[6px] text-[12px] font-[600] h-full ${
                    url === `/profile/${user.username}`
                        ? "text-black border-t-2 border-black"
                        : "text-[#737373] hover:text-black"
                }`}
            >
                <BsGrid3X3 className="h-[12px] w-[12px]" /> POSTS
            </Link>
            <Link
                href={`/profile/${user.username}/reels`}
                className={`flex items-center gap-[6px] text-[12px] font-[600] h-full ${
                    url === `/profile/${user.username}/reels`
                        ? "text-black border-t-2 border-black"
                        : "text-[#737373] hover:text-black"
                }`}
            >
                <BsCollectionPlay className="h-[12px] w-[12px]" /> REELS
            </Link>
            <Link
                href={`/profile/${user.username}/saved`}
                className={`flex items-center gap-[6px] text-[12px] font-[600] h-full ${
                    url === `/profile/${user.username}/saved`
                        ? "text-black border-t-2 border-black"
                        : "text-[#737373] hover:text-black"
                }`}
            >
                <FaRegBookmark className="h-[12px] w-[12px]" /> SAVED
            </Link>
            <Link
                href={`/profile/${user.username}/tagged`}
                className={`flex items-center gap-[6px] text-[12px] font-[600] h-full ${
                    url === `/profile/${user.username}/tagged`
                        ? "text-black border-t-2 border-black"
                        : "text-[#737373] hover:text-black"
                }`}
            >
                <FaUserTag className="h-[12px] w-[12px]" /> TAGGED
            </Link>
        </div>
    );
};

export default Tabs;
