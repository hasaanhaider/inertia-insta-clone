<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
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


Route::group(['middleware' => 'auth'], function () {

    Route::controller(HomeController::class)->group(function () {
        Route::get('/',  'index')->name('home');
    });

    Route::controller(ProfileController::class)->group(function () {
        Route::prefix('profile')->group(function () {
            Route::get('/{username}/{type?}', 'index')->name('profile');
        });
    });



    Route::controller(App\Http\Controllers\PostController::class)->group(function () {
        Route::prefix('post')->group(function () {
            Route::post('/store', 'store')->name('post.store');
        });
    });
});
