<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Image\Enums\Fit;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class Article extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;

    protected $fillable = [
        'title',
        'body'
    ];

    protected $appends = [
        'thumbnail' => 'thumbnail'
    ];

    protected $hidden = [
        'media'
    ];

    public function getThumbnailAttribute(){
        $mediaItems = $this->getMedia('thumbnail');
        return $mediaItems[0]->getUrl();
    }


    public function registerMediaConversions(?Media $media = null): void
    {
        $this->addMediaConversion('thumbnail')
            ->width(600)
            ->height(600)
            ->sharpen(10)
            ->nonOptimized();


        $this->addMediaConversion('sub_photos')
            ->sharpen(10)
            ->nonOptimized();
    }
}
