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
            <div className="w-full max-w-md p-8 bg-white dark:bg-zinc-900 rounded-2xl shadow-xl border border-gray-100 dark:border-zinc-800 flex flex-col gap-6">
                <div>
                    <h1 className="text-3xl font-extrabold text-center text-gray-900 dark:text-zinc-50 tracking-tight">Profile Page</h1>
                    <p className="text-gray-500 dark:text-zinc-400 text-center mt-1 text-sm">Manage your account information</p>
                </div>
                
                <hr className="border-gray-200 dark:border-zinc-800" />

                <div className="bg-zinc-50 dark:bg-zinc-800/40 p-4 rounded-xl border border-zinc-100 dark:border-zinc-800/80">
                    <span className="text-xs font-semibold text-gray-400 dark:text-zinc-500 uppercase tracking-wider block mb-1">User Identifier</span>
                    {data === "nothing" ? (
                        <p className="text-sm font-medium text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-950/20 px-3 py-1.5 rounded-lg inline-block">
                            No user data loaded yet
                        </p>
                    ) : (
                        <Link 
                            href={`/profile/${data}`}
                            className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline underline-offset-4 decoration-2 break-all"
                        >
                            <span>{data}</span>
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </Link>
                    )}
                </div>

                <div className="flex flex-col gap-3">
                    <button 
                        onClick={getUserDetails} 
                        className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors cursor-pointer text-center text-sm shadow-sm shadow-blue-500/10"
                    >
                        Get User Details
                    </button>
                    
                    <button 
                        onClick={onLogout} 
                        className="w-full py-2.5 px-4 bg-transparent border border-red-200 dark:border-red-900/30 hover:bg-red-50 dark:hover:bg-red-950/20 text-red-600 dark:text-red-400 font-medium rounded-lg transition-colors cursor-pointer text-center text-sm"
                    >
                        Sign Out
                    </button>
                </div>
            </div>
        </div>
    )
}