<?php

namespace App\Http\Controllers;

use App\Events\ArticleDeleted;
use App\Models\Article;
use Illuminate\Http\Request;
use Inertia\Inertia; // Don't forget to import Inertia

class ArticleController extends Controller
{
    /**
     * Display the specified article's edit form.
     */
    public function edit(Article $article)
    {
        // You might want to add authorization here, e.g., using Laravel Policies
        // For example: $this->authorize('update', $article);
        // This ensures only authorized users (like the article's author or a chief editor)
        // can access the edit form.

        return Inertia::render('EditArticle', [ // This will render your new React component
            'article' => $article, // Pass the article data to the frontend
        ]);
    }

    /**
     * Update the specified article in storage.
     */
    public function update(Request $request, Article $article)
    {
        // Again, consider authorization here: $this->authorize('update', $article);

        // Validate the incoming request data
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'body' => 'required|string',
            // 'article_image' is nullable because the user might not upload a new image
            'article_image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048', // Max 2MB
        ]);

        // Handle image upload if a new one is provided
        if ($request->hasFile('article_image')) {
            // Optional: Delete the old image from storage to save space
            // if ($article->article_image && Storage::disk('public')->exists($article->article_image)) {
            //     Storage::disk('public')->delete($article->article_image);
            // }

            $imagePath = $request->file('article_image')->store('article_images', 'public');
            $article->article_image = $imagePath;
        }

        // Update the article's title and body
        $article->title = $validatedData['title'];
        $article->body = $validatedData['body'];
        $article->save(); // Save the updated article, including the new image path if any

        // Redirect back to the dashboard with a success message
        return redirect()->route('dashboard')->with('success', 'Article updated successfully!');
    }


    public function destroy(Request $request)
    {
        $article = Article::findOrFail($request->id);
        $article_data = $article->toArray();
        $article_user = $article->user;

        $article->delete();

        broadcast(new ArticleDeleted($article_data, $article_user));
    }
}
