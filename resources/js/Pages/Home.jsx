import React, { useRef, useState } from "react";
import Layout from "./Layout";
import Story from "./components/Story";
import Post from "./components/Post";
import RightSideBar from "./components/rightSidebar";

const Home = () => {
    const sliderRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const scrollAmount = 200;

    const scrollLeft = () => {
        if (sliderRef.current) {
            setScrollPosition((prevPosition) => {
                const newPosition = Math.max(prevPosition - scrollAmount, 0);
                sliderRef.current.scrollTo({
                    left: newPosition,
                    behavior: "smooth",
                });
                return newPosition;
            });
        }
    };

    const scrollRight = () => {
        if (sliderRef.current) {
            setScrollPosition((prevPosition) => {
                const maxScroll =
                    sliderRef.current.scrollWidth -
                    sliderRef.current.clientWidth;
                const newPosition = Math.min(
                    prevPosition + scrollAmount,
                    maxScroll
                );
                sliderRef.current.scrollTo({
                    left: newPosition,
                    behavior: "smooth",
                });
                return newPosition;
            });
        }
    };

    const canScrollRight =
        sliderRef.current &&
        scrollPosition + sliderRef.current.clientWidth <
            sliderRef.current.scrollWidth;
    const canScrollLeft = scrollPosition > 0;

    return (
        <Layout>
            <div className="flex gap-3 justify-center">
                <div className=" max-w-[800px]">
                    <div className="relative">
                        <div
                            className="flex justify-center max-w-[600px] mx-auto gap-3 py-4 overflow-auto no-scrollbar"
                            ref={sliderRef}
                        >
                            {[...Array(10)].map((_, i) => (
                                <Story
                                    storyKey={i}
                                    userName={`user${i + 1}`}
                                    profilePic={`https://picsum.photos/200?random=${
                                        i + 1
                                    }`}
                                    className="snap-center"
                                />
                            ))}
                        </div>
                    </div>

                    <Post />
                    <Post />
                    <Post />
                </div>
                <div className="flex-1 max-w-[300px] pl-[64px]">
                    <RightSideBar />
                </div>
            </div>
        </Layout>
    );
};

export default Home;
