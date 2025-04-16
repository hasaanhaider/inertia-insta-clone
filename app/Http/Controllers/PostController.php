<?php

namespace App\Http\Controllers;

use App\Services\PostService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{
    protected $postService;

    public function __construct(PostService $postService)
    {
        $this->postService = $postService;
    }

    public function store(Request $request)
    {
        try {
            $this->postService->store($request);
            return back()->with('success', 'Post created successfully.');
        } catch (\Exception $e) {
            return back()->with('error', 'Something went wrong. Please try again.');
        }
    }

    public function likePost(Request $request, $id)
    {
        try {
            $liked = $this->postService->likePost($request, $id);

            if (!$liked) {
                return back()->with('error', 'Post not found or already liked.');
            }

            return Inertia::location(route('home'));
        } catch (\Exception $e) {
            return back()->with('error', 'Something went wrong. Please try again.');
        }
    }
}
