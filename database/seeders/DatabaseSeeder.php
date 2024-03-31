<?php

namespace Database\Seeders;

use App\Models\Article;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $articles = Article::factory(20)->create();
        $imageUrl = fake()->imageUrl(640, 480, null, true);

        foreach($articles as $article){
            $article->addMediaFromUrl($imageUrl)->toMediaCollection('thumbnail');

        }
    }
}
