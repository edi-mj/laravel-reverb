import DeleteIcon from '@/Components/DeleteIcon'
import Notification from '@/Components/Notification'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, router } from '@inertiajs/react' // Import router from Inertia
import {
    Card,
    CardHeader,
    CardBody,
    Image,
    Link,
    CardFooter,
    Button
} from '@nextui-org/react'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

export default function Dashboard({ auth, articles }) {
    const [articleList, setArticleList] = useState(articles)
    const [notifications, setNotifications] = useState([])

    const notifAnimation = {
        hidden: { opacity: 0, x: '100%' },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: '100%' }
    }

    const notifCardAnimation = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.8 }
    }

    const handleDelete = article => {
        router.post(
            'delete-article-request',
            {
                id: article.id,
                user_id: auth.user.id
            },
            {
                preserveScroll: true
            }
        )

        setNotifications(prevNotifs => [...prevNotifs, article])
    }

    // New: handleEdit function
    const handleEdit = articleId => {
        router.get(route('articles.edit', articleId)) // Assuming a route named 'articles.edit'
    }

    // Handle the simple pagination navigation.
    const handlePageChange = url => {
        if (url) {
            router.get(url)
        }
    }

    const handleCloseNotif = article => {
        setNotifications(prevNotifs =>
            prevNotifs.filter(notif => notif.id !== article.id)
        )
    }

    const handleRemoveArticle = id => {
        setArticleList(prevArticleList => ({
            ...prevArticleList,
            data: prevArticleList.data.filter(item => item.id !== id)
        }))
    }

    return (
        <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 min-h-screen dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
            <AuthenticatedLayout
                user={auth.user}
                header={
                    <div className="flex items-center space-x-4">
                        <div className="bg-indigo-600 p-3 rounded-xl shadow-lg">
                            <svg
                                className="h-6 w-6 text-white"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                            </svg>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                                {auth.user.role === 'chief-editor'
                                    ? 'Dashboard Chief Editor'
                                    : 'Dashboard Editor'}
                            </h2>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                {auth.user.role === 'chief-editor'
                                    ? 'Kelola semua artikel dan penulis'
                                    : 'Kelola artikel Anda dengan mudah'}
                            </p>
                        </div>
                    </div>
                }
                removeArticle={handleRemoveArticle}
            >
                <Head title="Dashboard" />

                <div className="py-12">
                    <ul className="fixed right-6 top-6 z-20 flex flex-col gap-2">
                        <AnimatePresence>
                            {notifications.map(article => (
                                <motion.li
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    variants={notifAnimation}
                                    transition={{ duration: 0.5 }}
                                    key={article.id}
                                >
                                    <motion.div
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        variants={notifAnimation}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <Notification
                                            article={article}
                                            closeNotif={() =>
                                                handleCloseNotif(article)
                                            }
                                        />
                                    </motion.div>
                                </motion.li>
                            ))}
                        </AnimatePresence>
                    </ul>
                    
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        {auth.user.role === 'editor' && (
                            <>
                                {/* Header Section */}
                                <div className="text-center mb-12">
                                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                                        Artikel <span className="text-indigo-600 dark:text-indigo-400">Anda</span>
                                    </h1>
                                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                                        Kelola, edit, dan publikasikan artikel Anda dengan mudah
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                    <AnimatePresence>
                                        {articleList.data.map(article => (
                                            <motion.div
                                                initial="hidden"
                                                animate="visible"
                                                exit="exit"
                                                variants={notifCardAnimation}
                                                transition={{ duration: 0.5 }}
                                                key={article.id}
                                            >
                                                <Card
                                                    className="bg-white shadow-xl ring-1 ring-gray-200 transition duration-300 hover:shadow-2xl hover:ring-indigo-300 dark:bg-gray-800 dark:ring-gray-700 dark:hover:ring-indigo-500 overflow-hidden"
                                                    shadow="none"
                                                >
                                                    <CardHeader className="flex-col items-start px-6 pb-4 pt-6 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-gray-700 dark:to-gray-800">
                                                        <div className="flex items-center space-x-2 mb-2">
                                                            <div className="bg-indigo-100 p-1 rounded-lg dark:bg-indigo-900">
                                                                <svg className="w-4 h-4 text-indigo-600 dark:text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                                                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                                                                    <polyline points="14,2 14,8 20,8"/>
                                                                </svg>
                                                            </div>
                                                            <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide">
                                                                BlogERA
                                                            </p>
                                                        </div>
                                                        <small className="text-gray-500 dark:text-gray-400 mb-2">
                                                            {article.created_at}
                                                        </small>
                                                        <h4 className="text-lg font-bold text-gray-900 dark:text-white line-clamp-2">
                                                            <Link
                                                                href="#"
                                                                color="foreground"
                                                                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                                                            >
                                                                {article.title}
                                                            </Link>
                                                        </h4>
                                                    </CardHeader>
                                                    <CardBody className="px-6 py-4">
                                                        <div className="aspect-video w-full rounded-xl overflow-hidden bg-gradient-to-br from-indigo-100 to-blue-100 dark:from-gray-600 dark:to-gray-700">
                                                            <Image
                                                                isBlurred
                                                                alt="Article image"
                                                                className="h-full w-full object-cover"
                                                                src={article.article_image}
                                                                width={'full'}
                                                                removeWrapper
                                                                loading="lazy"
                                                            />
                                                        </div>
                                                    </CardBody>
                                                    <CardFooter className="px-6 pb-6 pt-4 flex justify-between items-center">
                                                        <Button
                                                            variant="flat"
                                                            color="primary"
                                                            className="bg-indigo-50 text-indigo-600 hover:bg-indigo-100 font-semibold dark:bg-indigo-900 dark:text-indigo-300 dark:hover:bg-indigo-800 transition-colors"
                                                            onPress={() => handleEdit(article.id)}
                                                            startContent={
                                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                                </svg>
                                                            }
                                                        >
                                                            Edit
                                                        </Button>
                                                        <Button
                                                            isIconOnly
                                                            variant="flat"
                                                            color="danger"
                                                            className="bg-red-50 text-red-600 hover:bg-red-100 dark:bg-red-900 dark:text-red-300 dark:hover:bg-red-800 transition-colors"
                                                            onClick={event => handleDelete(article)}
                                                        >
                                                            <DeleteIcon />
                                                        </Button>
                                                    </CardFooter>
                                                </Card>
                                            </motion.div>
                                        ))}
                                    </AnimatePresence>
                                </div>

                                {/* Pagination */}
                                <div className="mt-12 flex justify-center gap-4">
                                    <Button
                                        className="bg-white text-indigo-600 border-2 border-indigo-600 font-semibold hover:bg-indigo-600 hover:text-white shadow-lg transition-all duration-300 dark:bg-gray-800 dark:text-indigo-400 dark:border-indigo-400 dark:hover:bg-indigo-600 dark:hover:text-white"
                                        size="lg"
                                        variant="bordered"
                                        isDisabled={!articles.prev_page_url}
                                        onPress={() => handlePageChange(articles.prev_page_url)}
                                        startContent={
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                            </svg>
                                        }
                                    >
                                        Sebelumnya
                                    </Button>
                                    <Button
                                        className="bg-white text-indigo-600 border-2 border-indigo-600 font-semibold hover:bg-indigo-600 hover:text-white shadow-lg transition-all duration-300 dark:bg-gray-800 dark:text-indigo-400 dark:border-indigo-400 dark:hover:bg-indigo-600 dark:hover:text-white"
                                        size="lg"
                                        variant="bordered"
                                        isDisabled={!articles.next_page_url}
                                        onPress={() => handlePageChange(articles.next_page_url)}
                                        endContent={
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        }
                                    >
                                        Selanjutnya
                                    </Button>
                                </div>
                            </>
                        )}

                        {auth.user.role === 'chief-editor' && (
                            <div className="bg-white shadow-xl ring-1 ring-gray-200 transition duration-300 hover:shadow-2xl hover:ring-indigo-300 dark:bg-gray-800 dark:ring-gray-700 dark:hover:ring-indigo-500 p-12 rounded-xl">
                                <div className="text-center max-w-2xl mx-auto">
                                    <div className="bg-indigo-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 dark:bg-indigo-900">
                                        <svg className="w-12 h-12 text-indigo-600 dark:text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                        </svg>
                                    </div>
                                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                        Selamat datang, Chief Editor! 👑
                                    </h2>
                                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                                        Anda memiliki akses penuh untuk mengelola semua artikel dan mengawasi performa tim editor. 
                                        Dashboard khusus untuk chief editor sedang dalam pengembangan.
                                    </p>
                                    <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-xl">
                                        <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                                            Fitur yang akan datang:
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-300">
                                            <div className="flex items-center space-x-2">
                                                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                                </svg>
                                                <span>Analytics Dashboard</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                                </svg>
                                                <span>User Management</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                                </svg>
                                                <span>Content Moderation</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                                </svg>
                                                <span>System Reports</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </AuthenticatedLayout>
        </div>
    )
}