import { useRef } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import { Transition } from '@headlessui/react';

export default function UpdatePasswordForm({ className = '' }) {
    const passwordInput = useRef();
    const currentPasswordInput = useRef();

    const { data, setData, errors, put, reset, processing, recentlySuccessful } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const updatePassword = (e) => {
        e.preventDefault();

        put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                    passwordInput.current.focus();
                }

                if (errors.current_password) {
                    reset('current_password');
                    currentPasswordInput.current.focus();
                }
            },
        });
    };

    return (
        <section className={`${className}`}>
            <div className="bg-white shadow-xl ring-1 ring-gray-200 transition duration-300 hover:shadow-2xl hover:ring-indigo-300 dark:bg-gray-800 dark:ring-gray-700 dark:hover:ring-indigo-500 p-8 rounded-xl">
                <header className="mb-8">
                    <div className="flex items-center space-x-4 mb-4">
                        <div className="bg-indigo-100 p-3 rounded-xl shadow-lg dark:bg-indigo-900">
                            <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                                Update Password
                            </h2>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                Ensure your account is using a long, random password to stay secure.
                            </p>
                        </div>
                    </div>
                </header>

                <form onSubmit={updatePassword} className="space-y-6">
                    <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-xl">
                        <div className="space-y-6">
                            <div>
                                <InputLabel 
                                    htmlFor="current_password" 
                                    value="Current Password" 
                                    className="text-gray-700 dark:text-gray-300 font-semibold mb-2"
                                />
                                <div className="relative">
                                    <TextInput
                                        id="current_password"
                                        ref={currentPasswordInput}
                                        value={data.current_password}
                                        onChange={(e) => setData('current_password', e.target.value)}
                                        type="password"
                                        className="mt-1 block w-full bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 focus:border-indigo-500 focus:ring-indigo-500 rounded-xl px-4 py-3 text-gray-900 dark:text-white shadow-sm transition-all duration-300"
                                        autoComplete="current-password"
                                        placeholder="Enter your current password"
                                    />
                                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </div>
                                </div>
                                <InputError message={errors.current_password} className="mt-2 text-red-600 font-medium" />
                            </div>

                            <div>
                                <InputLabel 
                                    htmlFor="password" 
                                    value="New Password" 
                                    className="text-gray-700 dark:text-gray-300 font-semibold mb-2"
                                />
                                <div className="relative">
                                    <TextInput
                                        id="password"
                                        ref={passwordInput}
                                        value={data.password}
                                        onChange={(e) => setData('password', e.target.value)}
                                        type="password"
                                        className="mt-1 block w-full bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 focus:border-indigo-500 focus:ring-indigo-500 rounded-xl px-4 py-3 text-gray-900 dark:text-white shadow-sm transition-all duration-300"
                                        autoComplete="new-password"
                                        placeholder="Enter your new password"
                                    />
                                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    </div>
                                </div>
                                <InputError message={errors.password} className="mt-2 text-red-600 font-medium" />
                            </div>

                            <div>
                                <InputLabel 
                                    htmlFor="password_confirmation" 
                                    value="Confirm Password" 
                                    className="text-gray-700 dark:text-gray-300 font-semibold mb-2"
                                />
                                <div className="relative">
                                    <TextInput
                                        id="password_confirmation"
                                        value={data.password_confirmation}
                                        onChange={(e) => setData('password_confirmation', e.target.value)}
                                        type="password"
                                        className="mt-1 block w-full bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 focus:border-indigo-500 focus:ring-indigo-500 rounded-xl px-4 py-3 text-gray-900 dark:text-white shadow-sm transition-all duration-300"
                                        autoComplete="new-password"
                                        placeholder="Confirm your new password"
                                    />
                                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <InputError message={errors.password_confirmation} className="mt-2 text-red-600 font-medium" />
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                        <Transition
                            show={recentlySuccessful}
                            enter="transition ease-in-out duration-300"
                            enterFrom="opacity-0 transform scale-95"
                            enterTo="opacity-100 transform scale-100"
                            leave="transition ease-in-out duration-300"
                            leaveTo="opacity-0 transform scale-95"
                        >
                            <div className="flex items-center space-x-2">
                                <div className="bg-green-100 p-1 rounded-full dark:bg-green-900">
                                    <svg className="h-4 w-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                    </svg>
                                </div>
                                <p className="text-sm font-semibold text-green-600 dark:text-green-400">
                                    Password updated successfully!
                                </p>
                            </div>
                        </Transition>

                        <div className="flex items-center space-x-4">
                            <PrimaryButton 
                                disabled={processing}
                                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:transform-none"
                            >
                                {processing ? (
                                    <div className="flex items-center space-x-2">
                                        <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        <span>Updating...</span>
                                    </div>
                                ) : (
                                    <div className="flex items-center space-x-2">
                                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Save Changes</span>
                                    </div>
                                )}
                            </PrimaryButton>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}