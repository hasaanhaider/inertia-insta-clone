<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Services\AuthService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class AuthController extends Controller
{
    protected $auth_service;
    public function __construct(AuthService $auth_service)
    {
        $this->auth_service = $auth_service;
    }
    public function login()
    {
        return Inertia::render('Auth/Login');
    }

    public function register()
    {
        return Inertia::render('Auth/Register');
    }

    public function register_store(Request $request)
    {
        $this->auth_service->validateRegistration($request);
        $this->auth_service->register($request->all());
        return redirect()->route('login')->with('success', 'User created successfully');
    }

    public function login_store(Request $request)
    {
        $this->auth_service->validationLogin($request);

        $isLoggedIn = $this->auth_service->login_store($request); 

        if ($isLoggedIn) {
            return redirect()->route('home');
        }

        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ]);
    }
}
