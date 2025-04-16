<?php

namespace App\Services;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PostService
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'post_image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'post_description' => 'nullable|max:1000'
        ]);

        $path = $request->file('post_image')->store('post_images', 'public');
        $fullUrl = Storage::url($path);

        Post::create([
            'user_id' => auth()->id(),
            'post_image' => url($fullUrl),
            'post_description' => $validated['post_description'] ?? null,
        ]);
    }

    public function likePost(Request $request, $id)
    {
        $post = Post::find($id);

        if (!$post) {
            return false;
        }

        // Optional: Prevent duplicate likes
        $alreadyLiked = $post->likes()->where('user_id', auth()->id())->exists();

        if ($alreadyLiked) {
            return false;
        }

        $post->likes()->create([
            'user_id' => auth()->id(),
        ]);

        return true;
    }
}
