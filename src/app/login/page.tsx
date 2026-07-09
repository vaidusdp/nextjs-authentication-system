"use client";

import axios from "axios";
import Link from "next/link";
import React, {useState, useEffect} from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";


export default function LoginPage(){
    const router = useRouter();
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const [buttonDisabled, setButtonDisabled] = useState(false); 
    const [loading, setLoading] = useState(false);

    const onChangeField = (e:any) => {
        const {name, value} = e.target;
        setUser((prev) => ({
            ...prev, 
            [name]: value
        }))
    }

    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            router.push("/profile")
        } catch (error:any) {
            console.log(error);
            toast.error(
                error.response?.data?.error || error.response?.data?.message || error.message 
            );
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0){
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user])

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-zinc-950 p-4">
            <div className="w-full max-w-md p-8 bg-white dark:bg-zinc-900 rounded-xl shadow-md border border-gray-100 dark:border-zinc-800 flex flex-col gap-4">
                <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-zinc-100">{loading ? "Processing..." : "Login"}</h1>
                <hr className="border-gray-200 dark:border-zinc-800" />
                
                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-600 dark:text-zinc-400" htmlFor="email">Email</label>
                    <input className="w-full px-3 py-2 border border-gray-300 dark:border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-zinc-800 dark:text-zinc-100" type="email" name="email" id="email" placeholder="Type Your Email" onChange={onChangeField} />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-600 dark:text-zinc-400" htmlFor="password">Password</label>
                    <input className="w-full px-3 py-2 border border-gray-300 dark:border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-zinc-800 dark:text-zinc-100" type="password" name="password" id="password" placeholder="Type Your Password" onChange={onChangeField} />
                </div>

                <button onClick={onLogin} disabled={buttonDisabled} className="w-full mt-2 py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed">Login Here</button>
                
                <div className="text-center mt-2">
                    <Link href="/signup" className="text-sm text-blue-600 hover:underline">SignUp</Link>
                </div>
            </div>
        </div>
    )
}