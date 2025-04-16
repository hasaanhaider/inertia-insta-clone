import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { BsSend } from "react-icons/bs";
import { CiBookmark } from "react-icons/ci";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { Inertia } from "@inertiajs/inertia";

const Post = ({ Post }) => {
    const [liked, setLiked] = useState(Post.is_liked); // assuming your backend returns this
    const [likeCount, setLikeCount] = useState(Post.likes_count); // backend should pass this

    const handleLike = () => {
        if (liked) return; // prevent multiple likes (or handle unlike logic here)

        Inertia.post(`/post/like/${Post.id}`, {}, {
            preserveScroll: true,
            onSuccess: () => {
                setLiked(true);
                setLikeCount(prev => prev + 1);
                
            },
            onError: () => {
                console.error("Something went wrong while liking the post");
            }
        });
    };

    return (
        <div className="flex flex-col gap-3 mt-3 mx-auto max-w-[450px] py-3 border-b border-gray-200">
            <div className="flex justify-between items-center">
                <div className="flex flex-row gap-2 items-center">
                    <img
                        src={Post.user.profile_pic ?? "https://picsum.photos/200?random=10"}
                        className="h-10 w-10 rounded-full"
                        alt="profile picture"
                    />
                    <p className="font-semibold text-sm">{Post.user.username}</p>
                    <p className="text-gray-600 text-sm font-semibold">
                        {new Intl.DateTimeFormat("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "2-digit",
                        }).format(new Date(Post.created_at))}
                    </p>
                </div>
                <div>
                    <BsThreeDots />
                </div>
            </div>
            <img src={Post.post_image} className="rounded-sm" alt="post" />

            <div className="flex items-center justify-between">
                <div className="flex items-center justify-center gap-3">
                    {liked ? (
                        <FaHeart
                            size={22}
                            className="text-red-500 cursor-pointer"
                            onClick={handleLike}
                        />
                    ) : (
                        <FaRegHeart
                            size={22}
                            className="hover:text-gray-600 cursor-pointer"
                            onClick={handleLike}
                        />
                    )}
                    <FiMessageCircle size={22} className="hover:text-gray-600 cursor-pointer" />
                    <BsSend size={22} className="hover:text-gray-600 cursor-pointer" />
                </div>
                <CiBookmark size={22} className="hover:text-gray-600 cursor-pointer" />
            </div>

            <div className="flex flex-col gap-2">
                <p className="font-semibold text-sm">{likeCount} Likes</p>
                <p className="text-sm">
                    <span className="font-semibold mr-2">{Post.user.username}</span>
                    <span>{Post.post_description}</span>
                </p>
                <p className="text-gray-600 text-sm hover:cursor-pointer">View all 20 comments</p>
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
