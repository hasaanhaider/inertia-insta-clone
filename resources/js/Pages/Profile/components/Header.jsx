import React from "react";
import { IoIosSettings } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";


const Header = ({ user }) => {
    return (
        <header className="flex flex-col flex-wrap w-full pt-[20px]">
            <section className="grid grid-cols-[1fr_2fr] items-center">
                <img
                    height="150px"
                    width="150px"
                    className="rounded-full mx-auto"
                    src="https://picsum.photos/200?random=6"
                    alt="demo-profile"
                />
                <div className="flex flex-col gap-[20px] ">
                    <div className="flex gap-[8px] items-center">
                        <p className="text-[20px] leading-[25px] text-black mr-[20px]">
                            {user.username}
                        </p>
                        <button className="text-[14px] font-[600] text-black px-[16px] py-0 bg-[#EFEFEF] hover:bg-[#dedddd] rounded-lg h-[32px]">
                            Edit Profile
                        </button>
                        <button className="text-[14px] font-[600] text-black px-[16px] py-0 bg-[#EFEFEF] hover:bg-[#dedddd] rounded-lg h-[32px]">
                            View archive
                        </button>
                        <IoIosSettings className="h-[24px] w-[24px]" />
                    </div>
                    <div className="flex items-center gap-[40px]">
                        <p className="text-[16px]">
                            <span className="font-[600]">12</span> posts
                        </p>
                        <p className="text-[16px]">
                            <span className="font-[600]">34</span> followers
                        </p>
                        <p className="text-[16px]">
                            <span className="font-[600]">111</span> following
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex  items-center gap-[10px]">
                            <p className="leading-[18px] text-[14px] font-[600]">
                                {user.name}
                            </p>
                            <span>he</span>
                        </div>
                        <p>
                            Bringing ideas to life with code. PHP Laravel &
                            ReactJS developer building creative and innovative
                            web solutions. Connect and let's chat!
                        </p>
                    </div>
                </div>
               
            </section>
        </header>
    );
};

export default Header;
