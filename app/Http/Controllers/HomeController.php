<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $posts = Post::with('user')->where('is_active', true)->orderByDesc('created_at')->get();
        if (!$user) {
            return redirect()->route('login')->with('error', 'You need to log in first.');
        }
        return Inertia::render('Home', [
            'user' => $user,
            'posts' => $posts
        ]);
    }
}
