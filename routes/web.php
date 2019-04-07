<?php

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
Auth::routes();
Route::get('/home', 'HomeController@index')->name('home');

Route::prefix('admin')->middleware('auth')->group(function () {
	Route::get('products/index', 'ProductController@viewIndex')->name('products.view');
	Route::get('products/create', 'ProductController@create')->name('products.create');
	Route::get('products/edit/{id}', 'ProductController@edit')->name('products.edit');
});
