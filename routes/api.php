<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ReservationsController;


Route::get('/', function () {
    return view('welcome');
})->name('home');

Route::get('/test', [HomeController::class, 'test']);

//Auth routes
Route::get('/login', [AuthController::class, 'showLoginForm'])->name('login');
Route::post('/login', [AuthController::class, 'login']);
Route::get('/register', [AuthController::class, 'showRegistrationForm'])->name('register');
Route::post('/register', [AuthController::class, 'register']);
Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

//Profile page
Route::get('/profile',[HomeController::class, 'profile'])->name('profile');

//API routes for React frontend
Route::get('/api/user', [AuthController::class, 'getUser']);

//Routes for reservation system
//Create a session
Route::post('/create-session', [ReservationsController::class, 'createSession'])->name('createSession');
//reserve a session
Route::post('/reserve-session', [ReservationsController::class, 'reserveSession'])->name('reserveSession');
//cancel a reservation
Route::post('/cancel-reservation', [ReservationsController::class, 'cancelReservation'])->name('cancelReservation');
//view all sessions
Route::get('/sessions', [ReservationsController::class, 'viewSessions'])->name('viewSessions');
//view user reservations

