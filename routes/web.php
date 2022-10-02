<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/go/{user}/{offer}/cpa', function ($user, $offer) {
    return "Would be possible redirect to the project, but site has not yet been configured. <br> Offer: $offer, User: $user";
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Auth::routes();



Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::middleware('auth')->group(function () {
    Route::resources([
        'offers' => \App\Http\Controllers\OfferController::class
    ]);
});


Route::prefix('profile')->middleware('auth')->group(function () {
    /**
     * MODERATION PAGE
     */
    Route::get('moderation', function () {
        if (\Illuminate\Support\Facades\Auth::user()->moderated !== false)
            return redirect()->route('home');

        return view('profile.moderation');
    })->name('profile.moderation');
});
