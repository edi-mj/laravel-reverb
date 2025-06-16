import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document.getElementById('screenshot-container')?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document.getElementById('docs-card-content')?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="BlogMaster - Sistem Manajemen Artikel" />
            <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 text-gray-800 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 dark:text-white">
                <div className="absolute inset-0"></div>
                
                <div className="relative min-h-screen flex flex-col items-center justify-center selection:bg-indigo-500 selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <header className="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3">
                            <div className="flex lg:justify-center lg:col-start-2">
                                <div className="flex items-center space-x-3">
                                    <div className="bg-indigo-600 p-3 rounded-xl shadow-lg">
                                        <svg
                                            className="h-8 w-8 text-white"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">BlogERA</h1>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">Sistem Manajemen Artikel</p>
                                    </div>
                                </div>
                            </div>
                            <nav className="-mx-3 flex flex-1 justify-end">
                                {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="rounded-lg px-4 py-2 bg-indigo-600 text-white font-medium transition hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 shadow-md"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="rounded-lg px-4 py-2 text-gray-700 border border-gray-300 font-medium transition hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-800"
                                        >
                                            Masuk
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="ml-3 rounded-lg px-4 py-2 bg-indigo-600 text-white font-medium transition hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 shadow-md"
                                        >
                                            Daftar
                                        </Link>
                                    </>
                                )}
                            </nav>
                        </header>

                        {/* Hero Section */}
                        <div className="text-center py-16 mb-12">
                            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
                                Kelola Artikel Anda dengan <span className="text-indigo-600 dark:text-indigo-400">Mudah</span>
                            </h2>
                            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                                Platform terpadu untuk membuat, mengedit, dan mempublikasikan artikel blog Anda. 
                                Dilengkapi dengan fitur-fitur canggih untuk manajemen konten yang efisien.
                            </p>
                            {!auth.user && (
                                <Link
                                    href={route('register')}
                                    className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
                                >
                                    Mulai Sekarang
                                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </Link>
                            )}
                        </div>

                        <main className="mt-6">
                            <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
                                <div
                                    id="docs-card"
                                    className="flex flex-col items-start gap-6 overflow-hidden rounded-xl bg-white p-8 shadow-xl ring-1 ring-gray-200 transition duration-300 hover:shadow-2xl hover:ring-indigo-300 md:row-span-3 lg:p-12 dark:bg-gray-800 dark:ring-gray-700 dark:hover:ring-indigo-500"
                                >
                                    <div
                                        id="screenshot-container"
                                        className="relative flex w-full flex-1 items-stretch"
                                    >
                                        <div className="aspect-video h-full w-full flex-1 rounded-xl bg-gradient-to-br from-indigo-400 to-purple-600 flex items-center justify-center">
                                            <div className="text-center text-white">
                                                <svg className="w-24 h-24 mx-auto mb-4 opacity-80" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                                                    <polyline points="14,2 14,8 20,8"/>
                                                    <line x1="16" y1="13" x2="8" y2="13"/>
                                                    <line x1="16" y1="17" x2="8" y2="17"/>
                                                    <polyline points="10,9 9,9 8,9"/>
                                                </svg>
                                                <h3 className="text-xl font-semibold">Editor Artikel</h3>
                                                <p className="text-sm opacity-90">WYSIWYG Editor</p>
                                            </div>
                                        </div>
                                        <div className="absolute -bottom-16 -left-16 h-40 w-[calc(100%+8rem)] bg-gradient-to-b from-transparent via-white to-white dark:via-gray-800 dark:to-gray-800"></div>
                                    </div>

                                    <div className="relative flex items-center gap-6 lg:items-end">
                                        <div id="docs-card-content" className="flex items-start gap-6 lg:flex-col">
                                            <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-indigo-100 sm:size-16 dark:bg-indigo-900">
                                                <svg
                                                    className="size-6 sm:size-8 text-indigo-600 dark:text-indigo-400"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                                                    <polyline points="14,2 14,8 20,8"/>
                                                    <line x1="16" y1="13" x2="8" y2="13"/>
                                                    <line x1="16" y1="17" x2="8" y2="17"/>
                                                    <polyline points="10,9 9,9 8,9"/>
                                                </svg>
                                            </div>

                                            <div className="pt-3 sm:pt-5 lg:pt-0">
                                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                                                    Editor Canggih
                                                </h2>

                                                <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                                                    Dilengkapi dengan editor WYSIWYG yang intuitif, fitur drag-and-drop, 
                                                    preview real-time, dan tools formatting lengkap untuk membuat artikel 
                                                    yang menarik dan profesional.
                                                </p>
                                            </div>
                                        </div>

                                        <svg
                                            className="size-6 shrink-0 stroke-indigo-600 dark:stroke-indigo-400"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                                            />
                                        </svg>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 rounded-xl bg-white p-6 shadow-xl ring-1 ring-gray-200 transition duration-300 hover:shadow-2xl hover:ring-indigo-300 lg:pb-10 dark:bg-gray-800 dark:ring-gray-700 dark:hover:ring-indigo-500">
                                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-green-100 sm:size-16 dark:bg-green-900">
                                        <svg
                                            className="size-6 sm:size-8 text-green-600 dark:text-green-400"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                        </svg>
                                    </div>

                                    <div className="pt-3 sm:pt-5">
                                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Kategori & Tag</h2>

                                        <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                                            Organisir artikel Anda dengan sistem kategori dan tag yang fleksibel. 
                                            Memudahkan pembaca menemukan konten yang relevan dan meningkatkan 
                                            engagement blog Anda.
                                        </p>
                                    </div>

                                    <svg
                                        className="size-6 shrink-0 self-center stroke-green-600 dark:stroke-green-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                                        />
                                    </svg>
                                </div>

                                <div className="flex items-start gap-4 rounded-xl bg-white p-6 shadow-xl ring-1 ring-gray-200 transition duration-300 hover:shadow-2xl hover:ring-indigo-300 lg:pb-10 dark:bg-gray-800 dark:ring-gray-700 dark:hover:ring-indigo-500">
                                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-blue-100 sm:size-16 dark:bg-blue-900">
                                        <svg
                                            className="size-6 sm:size-8 text-blue-600 dark:text-blue-400"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
                                        </svg>
                                    </div>

                                    <div className="pt-3 sm:pt-5">
                                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                                            Analytics & Statistik
                                        </h2>

                                        <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                                            Pantau performa artikel Anda dengan dashboard analytics yang komprehensif. 
                                            Lihat jumlah views, engagement rate, dan insights lainnya untuk 
                                            mengoptimalkan konten Anda.
                                        </p>
                                    </div>

                                    <svg
                                        className="size-6 shrink-0 self-center stroke-blue-600 dark:stroke-blue-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                                        />
                                    </svg>
                                </div>

                                <div className="flex items-start gap-4 rounded-xl bg-white p-6 shadow-xl ring-1 ring-gray-200 lg:pb-10 dark:bg-gray-800 dark:ring-gray-700">
                                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-purple-100 sm:size-16 dark:bg-purple-900">
                                        <svg
                                            className="size-6 sm:size-8 text-purple-600 dark:text-purple-400"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                        </svg>
                                    </div>

                                    <div className="pt-3 sm:pt-5">
                                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                                            Fitur Lengkap
                                        </h2>

                                        <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                                            Nikmati berbagai fitur canggih seperti penjadwalan publikasi, 
                                            manajemen komentar, SEO optimization, backup otomatis, dan 
                                            integrasi media sosial untuk memaksimalkan jangkauan artikel Anda.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </main>

                        <footer className="py-16 text-center text-sm text-gray-500 dark:text-gray-400">
                            <div className="flex justify-center items-center space-x-2 mb-4">
                                <div className="bg-indigo-600 p-2 rounded-lg">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                                    </svg>
                                </div>
                                <span className="font-medium">BlogMaster v1.0</span>
                            </div>
                            <p>Sistem Manajemen Artikel Professional | Powered by Laravel v{laravelVersion} (PHP v{phpVersion})</p>
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
}