<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SpellsController;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/add', [SpellsController::class, 'store'])->name('add_spell');
Route::post('/show', [SpellsController::class, 'show'])->name('show_spell');
Route::get('/all', [SpellsController::class, 'index'])->name('all_spell');
Route::post('/remove', [SpellsController::class, 'destro'])->name('remove_spell');
