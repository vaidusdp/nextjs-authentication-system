"use client";

import axios from "axios";
import Link from "next/link";
import React, {useState, useEffect} from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function ProfilePage(){
    const router = useRouter();
    const [data, setData] = useState("nothing");

    const getUserDetails = async () => {
        const res = await axios.get("/api/users/me");
        setData(res.data.data._id);
    }

    const onLogout = async () => {
        try {
            const response = await axios.get("/api/users/logout");
            router.push("/login");
        } catch (error:any) {
            console.log(error);
            toast.error(
                error.response?.data?.error || error.response?.data?.message || error.message 
            );
        } 
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-zinc-950 p-4">
            <div className="w-full max-w-md p-8 bg-white dark:bg-zinc-900 rounded-xl shadow-md border border-gray-100 dark:border-zinc-800 flex flex-col gap-4">
                <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-zinc-100">Profile</h1>
                <h2>{data === "nothing" ? "Nothing" : <Link href={`/profile/${data}`}>{data}</Link>}</h2>
                <hr className="border-gray-200 dark:border-zinc-800" />
                <p className="text-gray-600 dark:text-zinc-400 text-center">Welcome to your profile page.</p>
                <button onClick={onLogout}>Logout</button>
                <button onClick={getUserDetails}>GetUserDetail</button>
            </div>
        </div>
    )
}