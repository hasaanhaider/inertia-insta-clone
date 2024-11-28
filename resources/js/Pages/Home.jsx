import React, { useRef, useState } from "react";
import Layout from "./Layout";
import Story from "./components/Story";

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
                    sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
                const newPosition = Math.min(prevPosition + scrollAmount, maxScroll);
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
        scrollPosition + sliderRef.current.clientWidth < sliderRef.current.scrollWidth;
    const canScrollLeft = scrollPosition > 0;

    return (
        <Layout>
            <div className="flex gap-3">
                <div className="flex-1 max-w-[600px] mx-auto">
                    <div className="relative">
                        <div
                            className="flex overflow-x-auto gap-1 snap-x scrollbar-hide"
                            ref={sliderRef}
                        >
                            {[...Array(10)].map((_, i) => (
                                <Story
                                    storyKey={i}
                                    userName={`user${i + 1}`}
                                    profilePic={`https://picsum.photos/200?random=${i + 1}`}
                                    className="snap-center"
                                />
                            ))}
                        </div>
                        {canScrollRight && (
                            <button
                                type="button"
                                onClick={scrollRight}
                                className="absolute top-1/2 -right-3 -translate-y-1/2 bg-white p-1 rounded-full shadow-md"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                    />
                                </svg>
                            </button>
                        )}
                        {canScrollLeft && (
                            <button
                                type="button"
                                onClick={scrollLeft}
                                className="absolute top-1/2 -left-5 -translate-y-1/2 bg-white p-1 rounded-full shadow-md"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                                    />
                                </svg>
                            </button>
                        )}
                    </div>
                </div>
                <div>Right Side</div>
            </div>
        </Layout>
    );
};

export default Home;
