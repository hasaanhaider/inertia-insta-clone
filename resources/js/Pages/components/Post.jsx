import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { BsSend } from "react-icons/bs";
import { CiBookmark } from "react-icons/ci";
import { MdOutlineEmojiEmotions } from "react-icons/md";

const Post = () => {
    return (
        <div className="flex flex-col gap-3 mt-3 mx-auto max-w-[450px] py-3 border-b border-gray-200">
            <div className="flex justify-between items-center">
                <div className="flex flex-row gap-2 items-center">
                    <img
                        src="https://picsum.photos/200?random=6"
                        className="h-10 w-10 rounded-full"
                        alt="profile picture"
                    />
                    <p className="font-semibold text-sm">Hasaan</p>
                    <p className="text-gray-600 text-sm font-semibold">
                        1 day ago
                    </p>
                </div>
                <div>
                    <BsThreeDots />
                </div>
            </div>
            <img
                src="https://picsum.photos/200?random=10"
                className="rounded-sm"
                alt=""
            />
            <div className="flex items-center justify-between">
                <div className="flex items-center justify-center gap-3">
                    <FaRegHeart
                        size={22}
                        className="hover:text-gray-600 hover:cursor-pointer"
                    />
                    <FiMessageCircle
                        size={22}
                        className="hover:text-gray-600 hover:cursor-pointer"
                    />
                    <BsSend
                        size={22}
                        className="hover:text-gray-600 hover:cursor-pointer"
                    />
                </div>
                <div>
                    <CiBookmark
                        size={22}
                        className="hover:text-gray-600 hover:cursor-pointer"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <p className="font-semibold text-sm">123 Likes</p>
                <p className="text-sm">
                    <span className="font-semibold mr-2">Hasaan</span>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quidem suscipit saepe nostrum!
                    </span>
                </p>
                <p className="text-gray-600 text-sm hover:cursor-pointer">
                    View all 20 comments
                </p>
            </div>
            <div className="flex items-center justify-between">
                <input
                    type="text"
                    placeholder="Add your comment"
                    className="outline-none text-sm"
                />
                <MdOutlineEmojiEmotions />
            </div>
        </div>
    );
};

export default Post;
