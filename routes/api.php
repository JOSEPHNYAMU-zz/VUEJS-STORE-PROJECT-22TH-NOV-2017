<?php
Route::group(['middleware' => 'cors'], function () {
Route::post('/register', 'AuthController@register');
Route::post('/login', 'AuthController@login');
Route::post('/logout', 'AuthController@logout');
Route::resource('items', 'ItemsController');
});