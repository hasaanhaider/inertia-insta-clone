import React from "react";
import Layout from "../Layout";
import Header from "./components/Header";
import { usePage } from "@inertiajs/react";
import Tabs from "./components/Tabs";

const Profile = ({children}) => {
    const { user } = usePage().props;

    return (
        <Layout>
            <div className="max-w-[935px] mx-auto">
                <Header user={user} />
                <Tabs user={user}></Tabs>   
                {children}             
            </div>
        </Layout>
    );
};

export default Profile;
