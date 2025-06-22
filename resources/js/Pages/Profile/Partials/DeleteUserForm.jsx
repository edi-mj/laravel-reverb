import { useRef, useState } from 'react';
import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';

export default function DeleteUserForm({ className = '' }) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef();

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
        password: '',
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser = (e) => {
        e.preventDefault();

        destroy(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);
        reset();
    };

    return (
        <section className={`${className}`}>
            <div className="bg-white shadow-xl ring-1 ring-gray-200 transition duration-300 hover:shadow-2xl hover:ring-red-300 dark:bg-gray-800 dark:ring-gray-700 dark:hover:ring-red-500 p-8 rounded-xl border-l-4 border-red-500">
                <header className="mb-8">
                    <div className="flex items-center space-x-4 mb-4">
                        <div className="bg-red-100 p-3 rounded-xl shadow-lg dark:bg-red-900">
                            <svg className="h-6 w-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.314 16.5c-.77.833.192 2.5 1.732 2.5z" />
                            </svg>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-red-600 dark:text-red-400">
                                Delete Account
                            </h2>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                Permanently remove your account and all associated data
                            </p>
                        </div>
                    </div>
                </header>

                <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-6 rounded-xl mb-6">
                    <div className="flex items-start space-x-3">
                        <div className="bg-red-100 p-2 rounded-lg dark:bg-red-900/50">
                            <svg className="h-5 w-5 text-red-600 dark:text-red-400" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold text-red-800 dark:text-red-300 mb-2">
                                ⚠️ Warning: This action cannot be undone
                            </h3>
                            <p className="text-sm text-red-700 dark:text-red-200">
                                Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                    <div className="flex items-center justify-between">
                        <div className="flex-1">
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                Ready to delete your account?
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                This will permanently delete your profile, articles, and all associated data.
                            </p>
                        </div>
                        <DangerButton 
                            onClick={confirmUserDeletion}
                            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 ml-6"
                        >
                            <div className="flex items-center space-x-2">
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                                <span>Delete Account</span>
                            </div>
                        </DangerButton>
                    </div>
                </div>
            </div>

            <Modal show={confirmingUserDeletion} onClose={closeModal}>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-md mx-auto">
                    <div className="p-8">
                        <div className="text-center mb-6">
                            <div className="bg-red-100 p-4 rounded-full w-20 h-20 mx-auto mb-4 dark:bg-red-900">
                                <svg className="w-12 h-12 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.314 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-2">
                                Delete Account Confirmation
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300">
                                Are you sure you want to delete your account?
                            </p>
                        </div>

                        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-xl mb-6">
                            <p className="text-sm text-red-700 dark:text-red-200">
                                Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account.
                            </p>
                        </div>

                        <form onSubmit={deleteUser} className="space-y-6">
                            <div>
                                <InputLabel 
                                    htmlFor="password" 
                                    value="Password" 
                                    className="text-gray-700 dark:text-gray-300 font-semibold mb-2"
                                />
                                <div className="relative">
                                    <TextInput
                                        id="password"
                                        type="password"
                                        name="password"
                                        ref={passwordInput}
                                        value={data.password}
                                        onChange={(e) => setData('password', e.target.value)}
                                        className="mt-1 block w-full bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 focus:border-red-500 focus:ring-red-500 rounded-xl px-4 py-3 text-gray-900 dark:text-white shadow-sm transition-all duration-300"
                                        isFocused
                                        placeholder="Enter your password to confirm"
                                    />
                                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    </div>
                                </div>
                                <InputError message={errors.password} className="mt-2 text-red-600 font-medium" />
                            </div>

                            <div className="flex justify-end space-x-4 pt-4">
                                <SecondaryButton 
                                    onClick={closeModal}
                                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-xl shadow-lg transition-all duration-300 dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                                >
                                    <div className="flex items-center space-x-2">
                                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                        <span>Cancel</span>
                                    </div>
                                </SecondaryButton>

                                <DangerButton 
                                    disabled={processing}
                                    className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:transform-none"
                                >
                                    {processing ? (
                                        <div className="flex items-center space-x-2">
                                            <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            <span>Deleting...</span>
                                        </div>
                                    ) : (
                                        <div className="flex items-center space-x-2">
                                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                            <span>Delete Account</span>
                                        </div>
                                    )}
                                </DangerButton>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>
        </section>
    );
}