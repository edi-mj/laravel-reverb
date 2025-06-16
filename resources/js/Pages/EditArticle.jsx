import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import InputLabel from '@/Components/InputLabel'
import { Head, useForm } from '@inertiajs/react'
import { Button, Input, Textarea } from '@nextui-org/react'
import React from 'react';

export default function EditArticle({ auth, article }) {
    // Hook useForm dari Inertia untuk mengelola state formulir.
    // Nilai awal diambil dari prop 'article'.
    // const { data, setData, post, processing, errors } = useForm({
    //     title: article.title || '',
    //     body: article.body || '',
    // });

    const { data, setData, processing, errors } = useForm({
        title: article.title,
        body: article.body,
        article_image: null, // This will hold the new File object if uploaded
        _method: 'patch' // Crucial for Laravel to recognize this as a PATCH request
    })

    // Fungsi yang akan dipanggil saat formulir disubmit.
    const submit = (e) => {
        e.preventDefault();
        // Mengirim data formulir ke rute 'articles.update' dengan metode POST.
        // Inertia secara otomatis akan menangani ini sebagai permintaan PUT/PATCH di backend.
        post(route('articles.update', article.id));
    };

    // Mock 'route' function for preview purposes if it's not globally available
    const handleImageChange = e => {
        setData('article_image', e.target.files[0])
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Edit Artikel: {article.title}
                </h2>
            }
        >
            <Head title={`Edit Artikel: ${article.title}`} />

            {/* Kontainer utama untuk konsistensi tata letak */}
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                           <div>
                                <section>
                                    <header>
                                        <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                                            Perbarui Artikel Anda
                                        </h2>
                                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                            Ubah judul atau isi artikel Anda dan simpan perubahannya.
                                        </p>
                                    </header>

                                    <form onSubmit={submit} className="mt-6 space-y-6">
                                        <div>
                                            <Input
                                                label="Judul"
                                                placeholder="Masukkan Judul Artikel"
                                                value={data.title}
                                                onChange={e =>
                                                    setData('title', e.target.value)
                                                }
                                                isInvalid={!!errors.title}
                                                errorMessage={errors.title}
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <InputLabel htmlFor="body" value="Isi Artikel" />
                                            <Textarea
                                                label="Konten"
                                                placeholder="Tuliskan konten artikelmu disini..."
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
                                                Gambar Artikel
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
                                                    Gambar saat ini:{' '}
                                                    <a
                                                        href={`${article.article_image}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className=" hover:underline text-indigo-600"
                                                    >
                                                        Lihat gambar saat ini
                                                    </a>
                                                </p>
                                            )}
                                        </div>

                                        <div className="flex items-center gap-4 ">
                                            <Button className=" bg-indigo-600 text-indigo-50"
                                                type="submit"
                                                isLoading={processing}
                                            >
                                                Simpan Perubahan
                                            </Button>
                                        </div>
                                    </form>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
