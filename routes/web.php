<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\ProfileController;
use App\Http\Middleware\CheckIfAdmin;
use App\Models\Article;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    
    $recommended_article = [];
    for ($i=0; $i < count(DB::table('articles')->where('recommended', "=", true)->limit(3)->get('id')); $i++) { 
        array_push($recommended_article, Article::find(DB::table('articles')->where('recommended', "=", true)->limit(3)->get()[$i]->id));
    }


    return Inertia::render('Homepage', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'recommended_articles' => $recommended_article,
        // get the first 10 result
        'latest_articles' => Article::orderBy('created_at','desc')->limit(10)->get()
    ]);
})->name('home');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/articles', [ArticleController::class, 'index'])->name("article.index");
Route::get("/article", [ArticleController::class, "show"])->name("article.show");

Route::middleware([CheckIfAdmin::class])->group(function (){
    Route::get('/article/create', [ArticleController::class, 'create'])->name('article.create');
    Route::post('/article/create', [ArticleController::class, 'store'])->name('article.store');
    Route::get('/article/edit', [ArticleController::class, 'edit'])->name('article.edit');
    Route::post('/article/edit', [ArticleController::class,'update'])->name('article.update');
    Route::post('/article/image/delete', [ArticleController::class, 'destroyImage'])->name('article.deleteImage');
    Route::delete('/article/delete/{id}', [ArticleController::class,'destroy'])->name('article.destroy');
});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
