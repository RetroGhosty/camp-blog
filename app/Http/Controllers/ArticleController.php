<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Contracts\Session\Session;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $payload = [
            'articles' => Article::orderBy('created_at','desc')->get()
        ];

        return Inertia::render('Article/ViewAllArticles', $payload);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        return Inertia::render('Article/CreateArticle');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title'=> 'required|min:5',
            'body'=> 'required|min:10',
            'recommended' => 'required',
            'thumbnail'=> 'required',
            'photos'=> 'required',
        ]);
        
        $article = Article::create([
            'title'=> $validated['title'],
            'recommended' => $validated['recommended'],
            'body'=> $validated['body'],
        ]);

        $article->addMedia($validated['thumbnail'])->toMediaCollection('thumbnail');

        for ($i=0; $i < sizeof($validated['photos']); $i++) { 
            $article->addMedia($validated['photos'][$i])->toMediaCollection('sub_photos');
        }

        $article->save();

        return to_route('article.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, Article $article)
    {
        //
        $article = Article::find($request->get('id'));
        if (!$article) {
            return abort(404);
        }
        $payload = [
            'article' => $article,
        ];

        return Inertia::render('Article/ViewArticle', $payload);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, Article $article)
    {
        $article = Article::find($request->get('id'));
        if ($article == null){
            return abort(404);
        }

        $payload = [
            'article' => $article,
        ];

        return Inertia::render('Article/EditArticle', $payload);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        //
        $validated = $request->validate([
            'id' => 'required',
            'title'=> 'required|min:5',
            'body'=> 'required|min:10',
            'recommended' => 'required',
            'thumbnail'=> 'nullable',
            'photos'=> 'nullable',
        ]);

        $article = Article::find($validated['id']);
        $article->update([
            'title'=> $validated['title'],
            'body'=> $validated['body'],
        ]);

        if ($validated['thumbnail'] !== null){
            $article->addMedia($validated['thumbnail'])->toMediaCollection('thumbnail');
        }

        if ($validated['photos'] !== null){
            for ($i=0; $i < sizeof($validated['photos']); $i++) { 
                $article->addMedia($validated['photos'][$i])->toMediaCollection('sub_photos');
            }
        }

        $article->save();
        return to_route('article.show', ['id'=>$article->id]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, $id)
    {
        $article = Article::find($id);
        $article->delete();
        return to_route('article.index');
    }

    public function destroyImage(Request $request ){

        $article = Article::find($request->articleId);
        $article->deleteMedia($request->imageId);
        
        return back()->with('success','Deleted successfully');
    }
}
