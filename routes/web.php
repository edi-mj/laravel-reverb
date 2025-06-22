<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\DeleteArticleRequestController;
use App\Http\Controllers\ProfileController;
use App\Models\Article;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    $articles = Article::simplePaginate(10);
    return Inertia::render('Dashboard', ['articles' => $articles]);
})->middleware(['auth', 'verified', 'check.port.role'])->name('dashboard');

Route::middleware(['auth', 'check.port.role'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::post('delete-article-request', DeleteArticleRequestController::class);
    Route::delete('/article', [ArticleController::class, 'destroy'])->name('article.destroy');

    // --- New Routes for Article Editing ---
    // Route to show the edit form for a specific article
    Route::get('/articles/{article}/edit', [ArticleController::class, 'edit'])->name('articles.edit');

    // Route to handle the update request for a specific article
    // We'll use PATCH for updating as it's semantically correct for partial updates,
    // though PUT is also commonly used for complete replacements.
    Route::patch('/articles/{article}', [ArticleController::class, 'update'])->name('articles.update');
    // --- End New Routes ---
});

// Route::middleware('role:editor')->group(function () {
//     Route::get('/dashboard:8001', function () {
//         $articles = Article::simplePaginate(10);
//         return Inertia::render('Dashboard', ['articles' => $articles]);
//     })->middleware(['auth', 'verified'])->name('dashboard');
// });

require __DIR__ . '/auth.php';
