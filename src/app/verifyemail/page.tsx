"use client";

import axios from "axios";
import Link from "next/link";
import React, {useState, useEffect} from "react";
import toast from "react-hot-toast";

export default function VerifyPage() {
    const [token, setToken] = useState("");
    const [verified, setVerified] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const verifyUserEmail = async () => {
        try {
            setLoading(true);
            await axios.post("/api/users/verifyemail", {token});
            setVerified(true);
            toast.success("Email verified successfully!");
        } catch (err: any) {
            setError(true);
            console.log(err.response?.data);
            toast.error(err.response?.data?.error || "Verification failed");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        const urlToken = window.location.search.split("=")[1];
        setToken(urlToken || "");
    }, [])

    useEffect(() => {
        if(token.length > 0){
            verifyUserEmail();
        }
    }, [token])

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-zinc-950 p-4">
            <div className="w-full max-w-md p-8 bg-white dark:bg-zinc-900 rounded-2xl shadow-xl border border-gray-100 dark:border-zinc-800 flex flex-col gap-6 text-center">
                
                {/* Header Section */}
                <div>
                    <h1 className="text-3xl font-extrabold text-gray-900 dark:text-zinc-50 tracking-tight">
                        Email Verification
                    </h1>
                    <p className="mt-2 text-sm text-gray-500 dark:text-zinc-400">
                        NextJS Authentication System
                    </p>
                </div>

                <hr className="border-gray-200 dark:border-zinc-800" />

                {/* Loading / Processing State */}
                {loading && (
                    <div className="flex flex-col items-center gap-4 py-6">
                        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                        <p className="text-gray-600 dark:text-zinc-400 font-medium">Verifying your email address...</p>
                    </div>
                )}

                {/* Initial State (No Token yet & Not Loading) */}
                {!token && !loading && !verified && !error && (
                    <div className="flex flex-col gap-4 py-6">
                        <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-full flex items-center justify-center mx-auto">
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800 dark:text-zinc-200">No Verification Token</h2>
                            <p className="text-sm text-gray-500 dark:text-zinc-400 mt-1">
                                Please check your email inbox for the verification link.
                            </p>
                        </div>
                    </div>
                )}

                {/* Verified Success State */}
                {verified && (
                    <div className="flex flex-col gap-4 py-4 animate-in fade-in zoom-in-95 duration-300">
                        <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-gray-900 dark:text-zinc-100">Email Verified!</h2>
                            <p className="text-sm text-gray-500 dark:text-zinc-400 mt-1">
                                Your account is now active and ready.
                            </p>
                        </div>
                        <Link 
                            href="/login" 
                            className="mt-4 w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-sm shadow-blue-500/10"
                        >
                            Log In to Your Account
                        </Link>
                    </div>
                )}

                {/* Error State */}
                {error && (
                    <div className="flex flex-col gap-4 py-4 animate-in fade-in zoom-in-95 duration-300">
                        <div className="w-16 h-16 bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 rounded-full flex items-center justify-center mx-auto">
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-gray-900 dark:text-zinc-100">Verification Failed</h2>
                            <p className="text-sm text-gray-500 dark:text-zinc-400 mt-1">
                                The verification token is invalid or has expired.
                            </p>
                        </div>
                        <Link 
                            href="/signup" 
                            className="mt-4 w-full py-2.5 px-4 bg-zinc-800 hover:bg-zinc-700 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-white font-medium rounded-lg transition-colors"
                        >
                            Back to Sign Up
                        </Link>
                    </div>
                )}

                {/* Displaying Token Debug Info (Subtle) */}
                {token && !verified && !error && !loading && (
                    <div className="text-xs text-zinc-400 dark:text-zinc-500 truncate bg-zinc-50 dark:bg-zinc-800/50 p-2 rounded">
                        Token: <span className="font-mono">{token}</span>
                    </div>
                )}

            </div>
        </div>
    )
}