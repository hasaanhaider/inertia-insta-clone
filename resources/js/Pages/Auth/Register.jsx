import Input from "../components/Input";

import React from "react";
import { FaFacebook } from "react-icons/fa";
import AuthFooter from "../components/AuthFooter";

const Register = () => {
    return (
        <section className="h-screen m-auto  bg-red">
            <div className="auth-form-register-card">
                <h1 className="text-center font-semibold text-3xl">
                    Instagram
                </h1>
                <p className="text-center font-semibold text-slate-500 text-sm">
                    Sign up to see photos and videos from your friends.
                </p>

                <a className="flex items-center justify-center gap-2 bg-sky-600 text-white px-1 py-2 text-sm rounded-lg font-semibold  text-sm">
                    <FaFacebook className="" size={20} />
                    <p>Log in with Facebook</p>
                </a>
                <div className="w-full flex items-center gap-5 justify-center">
                    <div className="flex-1 h-[1px] bg-gray-300"></div>
                    <div className="font-small text-sm text-gray-500">OR</div>
                    <div className="flex-1 h-[1px] bg-gray-300"></div>
                </div>
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
                    <Input
                        placeholder="Full Name"
                        type="text"
                        name="fullname"
                        id="fullname"
                    />
                    <Input
                        placeholder="Username"
                        type="text"
                        name="username"
                        id="username"
                    />
                    <p className="text-[12px] text-center text-slate-500">
                        people who use our service may have uploaded your
                        contact information to Instagram.
                    </p>
                    <p className="text-[12px] text-center text-slate-500">
                        by tapping Sign Up, you agree to our Terms, Data Policy
                        and Cookie Policy.
                    </p>

                    <button className="w-full bg-sky-400 rounded-md mt-3 p-1 text-white font-semibold">
                        Log in
                    </button>
                </div>
            </div>

           <AuthFooter link="/login" linkTitle="Log in" text="Have an account? " />
        </section>
    );
};

export default Register;
