// resources/js/Pages/EditArticle.jsx
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, useForm } from '@inertiajs/react'
import { Button, Input, Textarea } from '@nextui-org/react'

export default function EditArticle({ auth, article }) {
    // Initialize useForm with current article data and a placeholder for the new image
    const { data, setData, patch, processing, errors } = useForm({
        title: article.title,
        body: article.body,
        article_image: null, // This will hold the new File object if uploaded
        _method: 'patch' // Crucial for Laravel to recognize this as a PATCH request
    })

    // Function to handle form submission
    const submit = e => {
        e.preventDefault()
        // Send a PATCH request to the articles.update route with the article's ID
        patch(route('articles.update', article.id))
    }

    // Function to handle image file selection
    const handleImageChange = e => {
        setData('article_image', e.target.files[0])
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Edit Article: {article.title}
                </h2>
            }
        >
            <Head title={`Edit Article: ${article.title}`} />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white p-6 shadow-sm sm:rounded-lg">
                        <form onSubmit={submit}>
                            <div className="mb-4">
                                <Input
                                    label="Title"
                                    placeholder="Enter article title"
                                    value={data.title}
                                    onChange={e =>
                                        setData('title', e.target.value)
                                    }
                                    isInvalid={!!errors.title}
                                    errorMessage={errors.title}
                                />
                            </div>
                            <div className="mb-4">
                                <Textarea
                                    label="Content"
                                    placeholder="Write your article content here..."
                                    value={data.body}
                                    onChange={e =>
                                        setData('body', e.target.value)
                                    }
                                    isInvalid={!!errors.body}
                                    errorMessage={errors.body}
                                    className="min-h-[200px]" // Make the textarea taller
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="article_image"
                                    className="mb-1 block text-sm font-medium text-gray-700"
                                >
                                    Article Image
                                </label>
                                <Input
                                    type="file"
                                    id="article_image"
                                    onChange={handleImageChange}
                                    isInvalid={!!errors.article_image}
                                    errorMessage={errors.article_image}
                                    className="mt-1"
                                />
                                {article.article_image && (
                                    <p className="mt-2 text-sm text-gray-500">
                                        Current image:{' '}
                                        <a
                                            href={`${article.article_image}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-500 hover:underline"
                                        >
                                            View Current Image
                                        </a>
                                    </p>
                                )}
                            </div>
                            <Button
                                type="submit"
                                color="primary"
                                isLoading={processing}
                            >
                                Update Article
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
