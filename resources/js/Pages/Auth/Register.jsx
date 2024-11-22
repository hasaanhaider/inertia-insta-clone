import Input from "../components/Input";

import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import AuthFooter from "../components/AuthFooter";
import { useForm } from "@inertiajs/react";
import { Audio } from "react-loader-spinner";
import { BiLoader } from "react-icons/bi";

const Register = () => {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        password: "",
        username: "",
    });

    const validateField = (name, value) => {
        let error = "";

        switch (name) {
            case "email":
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    error = "Invalid email format";
                }
                break;
            case "password":
                if (value.length < 8) {
                    error = "Password must be at least 8 characters";
                }
                break;
            case "name":
                if (!value.trim() && value.trim() < 3) {
                    error = "Name is required";
                }
                break;
            case "username":
                if (!value.trim() && value.trim() < 3) {
                    error = "Username is required";
                }
                break;
            default:
                break;
        }

        setErrors((prev) => ({ ...prev, [name]: error }));

        return error === "";
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        post("register-user");
    };
    const handleChange = (e) => {
        const { name, value } = e.target;

        setData(name, value);
    };
    return (
        <section className="h-screen m-auto  bg-red">
            <form className="auth-form-register-card" onSubmit={handleSubmit}>
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
                        value={data.email}
                        handleChange={handleChange}
                        id="email"
                    />
                    {errors.email && (
                        <div className="text-red-500 text-[10px]">
                            {errors.email}
                        </div>
                    )}
                    <Input
                        placeholder="password"
                        type="password"
                        name="password"
                        value={data.password}
                        handleChange={handleChange}
                        id="password"
                    />
                    {errors.password && (
                        <div className="text-red-500 text-[10px]">
                            {errors.password}
                        </div>
                    )}
                    <Input
                        placeholder="Full Name"
                        type="text"
                        name="name"
                        value={data.name}
                        handleChange={handleChange}
                        id="name"
                    />
                    {errors.name && (
                        <div className="text-red-500 text-[10px]">
                            {errors.name}
                        </div>
                    )}
                    <Input
                        placeholder="Username"
                        type="text"
                        name="username"
                        value={data.username}
                        handleChange={handleChange}
                        id="username"
                    />
                    {errors.username && (
                        <div className="text-red-500 text-[10px]">
                            {errors.username}
                        </div>
                    )}
                    <p className="text-[12px] text-center text-slate-500">
                        people who use our service may have uploaded your
                        contact information to Instagram.
                    </p>
                    <p className="text-[12px] text-center text-slate-500">
                        by tapping Sign Up, you agree to our Terms, Data Policy
                        and Cookie Policy.
                    </p>

                    <button
                        disabled={processing}
                        className="w-full bg-sky-400 rounded-md mt-3 p-1 text-center text-white font-semibold"
                    >
                        {processing ? (
                            <BiLoader className="animate-spin mx-auto" />
                        ) : (
                            "Sign Up"
                        )}
                    </button>
                </div>
            </form>

            <AuthFooter
                link="/login"
                linkTitle="Log in"
                text="Have an account? "
            />
        </section>
    );
};

export default Register;
