<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\JemaatController;
use App\Http\Controllers\LivestreamController;
use App\Http\Controllers\RenunganController;
use App\Http\Controllers\WartaController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group(['prefix' => 'auth', 'controller' => AuthController::class], function () {
  Route::post('/login', 'login');
  Route::post('/register', 'register');
  Route::get('/me', 'me')->middleware('auth');
  Route::post('/logout', 'logout')->middleware('auth');
});


Route::group(['prefix' => 'jemaat', 'controller' => JemaatController::class], function () {
  Route::get('/', 'index')->middleware('auth');
  Route::post('/', 'store');
  Route::get('/{jemaat}', 'show')->middleware('auth');
  Route::put('/{jemaat}', 'update')->middleware('auth');
  Route::delete('/{jemaat}', 'destroy')->middleware('auth');
});

Route::group(['prefix' => 'warta', 'controller' => WartaController::class], function () {
  Route::get('/', 'index');
  Route::post('/', 'store')->middleware('auth');
  Route::get('/{warta}', 'show')->middleware('auth');
  Route::put('/{warta}', 'update')->middleware('auth');
  Route::delete('/{warta}', 'destroy')->middleware('auth');
});

Route::group(['prefix' => 'livestream', 'controller' => LivestreamController::class], function () {
  Route::get('/', 'index');
  Route::post('/', 'store')->middleware('auth');
  Route::get('/{livestream}', 'show')->middleware('auth');
  Route::put('/{livestream}', 'update')->middleware('auth');
  Route::delete('/{livestream}', 'destroy')->middleware('auth');
});

Route::group(['prefix' => 'renungan', 'controller' => RenunganController::class], function () {
  Route::get('/', 'index');
  Route::post('/', 'store')->middleware('auth');
  Route::get('/{renungan}', 'show')->middleware('auth');
  Route::put('/{renungan}', 'update')->middleware('auth');
  Route::delete('/{renungan}', 'destroy')->middleware('auth');
});
