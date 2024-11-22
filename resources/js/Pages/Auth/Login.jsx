import React from "react";
import Input from "../components/Input";
import { FaFacebook } from "react-icons/fa"; 
import AuthFooter from "../components/AuthFooter";

const Login = () => {
    return (
        <section className="h-screen m-auto  bg-red">
            <div className="auth-form-login-card">
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
                        <div className="font-small text-sm text-gray-500">
                            OR
                        </div>
                        <div className="flex-1 h-[1px] bg-gray-300"></div>
                    </div>

                    <a className="flex items-center justify-center gap-2 text-sky-500 font-semibold mt-5 text-sm">
                        <FaFacebook className="" size={20} />
                        <p>Log in with Facebook</p>
                    </a>
                    <p className="text-center mt-1 text-sm">Forgot password?</p>
                </div>
            </div>

            <AuthFooter link="/register" linkTitle="Sign up" text="Don't have an account?" />

        </section>
    );
};

export default Login;
