<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{

    public function store(Request $request)
    {
        $request->validate([
            'post_image' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);
    
        $post_image = $request->file('post_image');
        $path = $post_image->store('post_images', 'public');
    
        $post = Post::create([
            'user_id' => auth()->user()->id,
            'post_image' => $path,
            'post_description' => $request->post_description
        ]);
    
        return back()->with('success', 'Post created successfully.');
    }
    
}
