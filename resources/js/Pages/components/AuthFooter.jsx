import React from "react";
import { Link } from "@inertiajs/react";

const AuthFooter = ({linkTitle, text, link}) => {
    return (
        <div className="auth-form-card-bottom text-center text-sm">
            <p>
                {text}
                <Link href={link} className="text-sky-500 font-semibold">
                    {linkTitle}
                </Link>
            </p>
        </div>
    );
};

export default AuthFooter;
