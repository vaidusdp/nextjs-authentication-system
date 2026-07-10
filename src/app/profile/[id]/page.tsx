import Link from "next/link";

export default async function UserProfilePage({params}:any){
    const {id} = await params;
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-zinc-950 p-4">
            <div className="w-full max-w-md p-8 bg-white dark:bg-zinc-900 rounded-2xl shadow-xl border border-gray-100 dark:border-zinc-800 flex flex-col gap-6">
                <div>
                    <h1 className="text-3xl font-extrabold text-center text-gray-900 dark:text-zinc-50 tracking-tight">User Details</h1>
                    <p className="text-gray-500 dark:text-zinc-400 text-center mt-1 text-sm">Public details for this account</p>
                </div>
                
                <hr className="border-gray-200 dark:border-zinc-800" />

                <div className="bg-zinc-50 dark:bg-zinc-800/40 p-5 rounded-xl border border-zinc-100 dark:border-zinc-800/80 flex flex-col gap-2">
                    <span className="text-xs font-semibold text-gray-400 dark:text-zinc-500 uppercase tracking-wider">Account ID</span>
                    <span className="font-mono text-sm font-bold text-gray-900 dark:text-zinc-100 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-3 py-2 rounded-lg block select-all break-all">
                        {id}
                    </span>
                </div>

                <Link 
                    href="/profile" 
                    className="w-full py-2.5 px-4 bg-zinc-800 hover:bg-zinc-700 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-white font-medium rounded-lg transition-colors cursor-pointer text-center text-sm shadow-sm"
                >
                    Back to Profile
                </Link>
            </div>
        </div>
    )
}