import React from "react";
import Input from "../components/Input";
import { FaFacebook } from "react-icons/fa";
import AuthFooter from "../components/AuthFooter";
import { useForm } from "@inertiajs/react";
import { BiLoader } from "react-icons/bi";

const Login = () => {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;

        setData(name, value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        post("login-user");
    };
    return (
        <section className="h-screen m-auto  bg-red">
            <form className="auth-form-login-card" onSubmit={handleSubmit}>
                <h1 className="text-center font-semibold text-3xl">
                    Instagram
                </h1>
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
                    <button
                        disabled={processing}
                        className="w-full bg-sky-400 rounded-md mt-3 p-1 text-white font-semibold"
                    >
                        {processing ? (
                            <BiLoader className="animate-spin mx-auto" />
                        ) : (
                            "Log in"
                        )}
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
            </form>

            <AuthFooter
                link="/register"
                linkTitle="Sign up"
                text="Don't have an account?"
            />
        </section>
    );
};

export default Login;
