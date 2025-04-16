import React from "react";
import Profile from "./profile";
import Card from "../components/Card";
import { usePage } from "@inertiajs/react";

const Posts = () => {
    const { user, posts } = usePage().props;
    return (
        <Profile>
            <div className="flex flex-wrap gap-[5px] justify-center">
                {posts.map((post, index) => (
                    <Card
                        img={post.post_image}
                        comments={index}
                        likes={index}
                    />
                ))}
            </div>
        </Profile>
    );
};

export default Posts;
