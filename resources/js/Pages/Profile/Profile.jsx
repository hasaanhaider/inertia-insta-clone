import React from "react";
import Layout from "../Layout";
import Header from "./components/Header";
import { usePage } from "@inertiajs/react";

const profile = () => {
    const { user } = usePage().props;

    return (
        <Layout>
            <div className="max-w-[935px] mx-auto">
                <Header user={user} />
            </div>
        </Layout>
    );
};

export default profile;
