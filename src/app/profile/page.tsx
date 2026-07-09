"use client";

export default function ProfilePage(){
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-zinc-950 p-4">
            <div className="w-full max-w-md p-8 bg-white dark:bg-zinc-900 rounded-xl shadow-md border border-gray-100 dark:border-zinc-800 flex flex-col gap-4">
                <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-zinc-100">Profile</h1>
                <hr className="border-gray-200 dark:border-zinc-800" />
                <p className="text-gray-600 dark:text-zinc-400 text-center">Welcome to your profile page.</p>
            </div>
        </div>
    )
}