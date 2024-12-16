<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Home');
// })->middleware('auth')->name('home');

Route::controller(App\Http\Controllers\AuthController::class)->group(function () {
    Route::group(['middleware' => 'guest'], function () {
        Route::get('login', 'login')->name('login');
        Route::get('/register', 'register')->name('register');
        Route::post('/register-user', 'register_store')->name('register-user');
        Route::post('/login-user', 'login_store')->name('login-user');
    });
});

Route::get('/',[ HomeController::class, 'index'])->name('home');
