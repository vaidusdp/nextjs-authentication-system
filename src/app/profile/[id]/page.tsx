export default async function UserProfilePage({params}:any){
    const {id} = await params;
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-zinc-950 p-4">
            <div className="w-full max-w-md p-8 bg-white dark:bg-zinc-900 rounded-xl shadow-md border border-gray-100 dark:border-zinc-800 flex flex-col gap-4">
                <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-zinc-100">Profile</h1>
                <hr className="border-gray-200 dark:border-zinc-800" />
                <p className="text-center text-gray-600 dark:text-zinc-400">
                    User ID: <span className="font-semibold text-black dark:text-white bg-gray-100 dark:bg-zinc-800 px-2 py-1 rounded text-sm">{id}</span>
                </p>
            </div>
        </div>
    )
}