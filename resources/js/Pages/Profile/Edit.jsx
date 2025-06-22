import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { Head } from '@inertiajs/react';

export default function Edit({ auth, mustVerifyEmail, status }) {
    return (
        <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 min-h-screen dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
            <AuthenticatedLayout
                user={auth.user}
                header={
                    <div className="flex items-center space-x-4">
                        <div className="bg-indigo-600 p-3 rounded-xl shadow-lg">
                            <svg
                                className="h-6 w-6 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                                Profil Pengguna
                            </h2>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                Kelola informasi akun dan pengaturan keamanan Anda
                            </p>
                        </div>
                    </div>
                }
            >
                <Head title="Profile" />

                <div className="py-12">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        {/* Header Section */}
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                                Pengaturan <span className="text-indigo-600 dark:text-indigo-400">Profil</span>
                            </h1>
                            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                                Perbarui informasi profil, kata sandi, dan kelola akun Anda dengan aman
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="bg-white shadow-xl ring-1 ring-gray-200 transition duration-300 hover:shadow-2xl hover:ring-indigo-300 dark:bg-gray-800 dark:ring-gray-700 dark:hover:ring-indigo-500 rounded-xl overflow-hidden">
                                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-gray-700 dark:to-gray-800 px-8 py-6">
                                    <div className="flex items-center space-x-3">
                                        <div className="bg-indigo-100 p-2 rounded-lg dark:bg-indigo-900">
                                            <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                            Informasi Profil
                                        </h3>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <UpdateProfileInformationForm
                                        mustVerifyEmail={mustVerifyEmail}
                                        status={status}
                                        className="max-w-xl"
                                    />
                                </div>
                            </div>

                            <div className="bg-white shadow-xl ring-1 ring-gray-200 transition duration-300 hover:shadow-2xl hover:ring-indigo-300 dark:bg-gray-800 dark:ring-gray-700 dark:hover:ring-indigo-500 rounded-xl overflow-hidden">
                                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-gray-700 dark:to-gray-800 px-8 py-6">
                                    <div className="flex items-center space-x-3">
                                        <div className="bg-indigo-100 p-2 rounded-lg dark:bg-indigo-900">
                                            <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                            Keamanan Kata Sandi
                                        </h3>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <UpdatePasswordForm className="max-w-xl" />
                                </div>
                            </div>

                            <div className="bg-white shadow-xl ring-1 ring-gray-200 transition duration-300 hover:shadow-2xl hover:ring-red-300 dark:bg-gray-800 dark:ring-gray-700 dark:hover:ring-red-500 rounded-xl overflow-hidden">
                                <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 px-8 py-6">
                                    <div className="flex items-center space-x-3">
                                        <div className="bg-red-100 p-2 rounded-lg dark:bg-red-900">
                                            <svg className="w-5 h-5 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                            Zona Berbahaya
                                        </h3>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <DeleteUserForm className="max-w-xl" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </div>
    );
}