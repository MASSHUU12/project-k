<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Results;

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


// Route for locale change
Route::get('language/{locale}', function ($locale) {
    app()->setLocale($locale);
    session()->put('locale', $locale);

    return redirect()->back();
});

//routes for all pages
Route::get('/', function () {
    return view('home');
})->name('home');

Route::get('/search', [Results::class, 'getResults'])->name('search');

Route::get('/search/{id}', [Results::class, 'singleResult'])->name('searchID');

Route::get('/searchquery', [Results::class, 'searchquery'])->name('searchquery');

Route::get('/about', function () {
    return view('about');
})->name('about');

Route::get('/cookies', function () {
    return view('cookies');
})->name('cookies');

Route::get('/privacy', function () {
    return view('privacy');
})->name('privacy');

Route::get('/maps', function () {
    return view('maps');
})->name('maps');

Route::get('/{url}', function () {
    return view('404');
})->name('404');
