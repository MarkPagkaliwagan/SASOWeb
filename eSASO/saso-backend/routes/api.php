<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;

// Public Routes (Stateless)
Route::post('/admin/login', [AdminController::class, 'login']);
Route::post('/admin/forgot-password', [AdminController::class, 'forgotPassword']);
Route::post('/admin/reset-password', [AdminController::class, 'resetPassword']);

// Protected Routes (Stateless Sanctum)
Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('/admin/logout', [AdminController::class, 'logout']);
    Route::post('/admin/change-password', [AdminController::class, 'changePassword']);
    Route::get('/admin/me', [AdminController::class, 'me']);
});