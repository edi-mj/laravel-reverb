import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.1) 0%, transparent 50%), 
                                     radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)`
                }}></div>
            </div>

            <div className="relative z-10">
                <Link href="/" className="block mb-8">
                    <div className="flex items-center justify-center space-x-3">
                        <div className="bg-indigo-600 p-4 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-200">
                            <svg
                                className="h-12 w-12 text-white"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                            </svg>
                        </div>
                        <div className="text-center">
                            <h1 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">BlogERA</h1>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Sistem Manajemen Artikel</p>
                        </div>
                    </div>
                </Link>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-8 py-8 bg-white/80 backdrop-blur-md shadow-xl ring-1 ring-gray-200 overflow-hidden sm:rounded-2xl border border-indigo-100 relative z-10 dark:bg-gray-800/80 dark:ring-gray-700 dark:border-gray-600">
                {/* Card Header Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-t-2xl"></div>
                
                {/* Card Content */}
                <div className="relative">
                    {children}
                </div>
                
                {/* Card Footer */}
                <div className="mt-8 pt-6 border-t border-indigo-100 dark:border-gray-600">
                    <div className="flex justify-center items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                        <div className="bg-indigo-100 dark:bg-indigo-900 p-1 rounded-md">
                            <svg className="w-3 h-3 text-indigo-600 dark:text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                            </svg>
                        </div>
                        <span>Sistem Manajemen Artikel Professional</span>
                    </div>
                </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-indigo-400/20 to-purple-600/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-xl animate-pulse delay-500"></div>
        </div>
    );
}