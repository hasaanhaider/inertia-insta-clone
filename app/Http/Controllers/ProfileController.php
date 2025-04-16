<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProfileController extends Controller
{
    public function index($username, $type = null)
    {
        $user = User::where('username', $username)->first();
        if ($type == 'reels') {
            return Inertia::render('Profile/Reels', [
                'user' => $user
            ]);
        } else if ($type == 'saved') {
            return Inertia::render('Profile/Saved', [
                'user' => $user,
            ]);
        } else if ($type == 'tagged') {
            return Inertia::render('Profile/Tagged', [
                'user' => $user,
            ]);
        } else {
            $posts = Post::where('user_id', $user->id)->where('is_active', true)->orderByDesc('created_at')->get();
            return Inertia::render('Profile/Posts', [
                'user' => $user,
                'posts' => $posts
            ]);
        }
    }
}
