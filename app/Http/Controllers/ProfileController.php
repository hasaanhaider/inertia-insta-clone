<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProfileController extends Controller
{
    public function index($username)
    {
        // Fetch the user by username
        $user = User::where('username', $username)->first();

        // Render the 'Profile/Profile' Inertia component and pass the user data
        return Inertia::render('Profile/Profile', [
            'user' => $user, // Pass user data as props to the component
        ]);
    }
}

