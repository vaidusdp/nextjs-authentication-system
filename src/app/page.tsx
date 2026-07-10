import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-gray-50 dark:bg-zinc-950 font-sans px-4 py-12">
      <main className="w-full max-w-3xl bg-white dark:bg-zinc-900 rounded-3xl shadow-xl border border-gray-100 dark:border-zinc-800 p-8 sm:p-12 flex flex-col items-center text-center gap-8">
        
        {/* Logo / Icon */}
        <div className="w-16 h-16 bg-blue-600/10 text-blue-600 rounded-2xl flex items-center justify-center">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>

        {/* Hero Copy */}
        <div className="flex flex-col gap-4 max-w-xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-zinc-50 leading-tight">
            Secure Next.js <span className="text-blue-600 dark:text-blue-500">Authentication</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-500 dark:text-zinc-400">
            A full-stack authentication system built with Next.js App Router, MongoDB, Mongoose, JWT, Nodemailer for email verification, and Tailwind CSS.
          </p>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg text-left">
          <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800/40 transition-colors">
            <div className="mt-1 text-emerald-500">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-zinc-100 text-sm">Secure Signup & Login</h3>
              <p className="text-xs text-gray-400 mt-0.5">Password hashing with bcryptjs & cookie-based JWT sessions.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800/40 transition-colors">
            <div className="mt-1 text-emerald-500">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-zinc-100 text-sm">Email Verification</h3>
              <p className="text-xs text-gray-400 mt-0.5">Secure email token generation and delivery using Nodemailer.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800/40 transition-colors">
            <div className="mt-1 text-emerald-500">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-zinc-100 text-sm">Protected Routes</h3>
              <p className="text-xs text-gray-400 mt-0.5">Next.js middleware handling profile pages & authentication state.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800/40 transition-colors">
            <div className="mt-1 text-emerald-500">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-zinc-100 text-sm">Responsive Design</h3>
              <p className="text-xs text-gray-400 mt-0.5">Premium dark mode compatible UI using Tailwind CSS.</p>
            </div>
          </div>
        </div>

        {/* Buttons / CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mt-2 max-w-sm">
          <Link
            className="flex-1 py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-center transition-all shadow-md shadow-blue-500/10"
            href="/signup"
          >
            Get Started
          </Link>
          <Link
            className="flex-1 py-3 px-6 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-gray-800 dark:text-zinc-200 font-semibold rounded-xl text-center transition-all"
            href="/login"
          >
            Log In
          </Link>
        </div>

      </main>
    </div>
  );
}
