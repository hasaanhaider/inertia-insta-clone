import React, { useEffect } from "react";
import Layout from "./Layout";
import Story from "./components/Story";
import Post from "./components/Post";
import RightSideBar from "./components/rightSidebar";
import { usePage } from '@inertiajs/react';
import axios from "axios";


const Home = () => {

    const {user, posts} = usePage().props; 

    console.log(posts);
    
    return (
        <Layout>
            <div className="flex gap-3 justify-center">
                <div className=" max-w-full md:max-w-[850px]">
                    <div className="relative">
                        <div
                            className="flex justify-center max-w-[600px] mx-auto gap-3 py-4 overflow-auto no-scrollbar"
                           
                        >
                            {[...Array(10)].map((_, i) => (
                                <Story
                                    storyKey={i}
                                    key={i}
                                    userName={`user${i + 1}`}
                                    profilePic={`https://picsum.photos/200?random=${
                                        i + 1
                                    }`}
                                    className="snap-center"
                                />
                            ))}
                        </div>
                    </div>

                    {
                        posts.map((post) => (
                            <Post Post={post} />
                        ))
                    }
                    
                </div>
                <div className="flex-1 hidden md:block  max-w-[350px] pl-[64px]">
                    <RightSideBar user={user} />
                </div>
            </div>
        </Layout>
    );
};

export default Home;
