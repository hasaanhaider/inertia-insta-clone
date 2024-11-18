import React from "react";
import Input from "../components/Input";

const Login = () => {
    return (
        <section className="h-screen m-auto  w-full bg-red">
            <div className="w-[350px] mx-auto mt-5 border px-10 py-10 border-gray-300 flex flex-col gap-10">
                <h1 className="text-center font-semibold text-3xl">
                    Instagram
                </h1>
                <div className="flex flex-col gap-2">
                    <Input
                        placeholder="Phone number, username, or email"
                        type="email"
                        name="email"
                        id="email"
                    />
                    <Input
                        placeholder="password"
                        type="password"
                        name="password"
                        id="password"
                    />

                    <button className="w-full bg-sky-400 rounded-md mt-3 p-1 text-white font-semibold">
                        Log in
                    </button>
                    <div className="w-full flex items-center gap-5 justify-center mt-2">
                        <div className="flex-1 h-[1px] bg-gray-300"></div>
                        <div className="font-small text-sm text-gray-500">OR</div>
                        <div className="flex-1 h-[1px] bg-gray-300"></div>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default Login;
