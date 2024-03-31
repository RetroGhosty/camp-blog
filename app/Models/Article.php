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
        'body',
        'recommended'
    ];

    protected $appends = [
        'thumbnail' => 'thumbnail',
        'photos' => 'photos'
    ];

    protected $casts = [
        'recommended' => 'boolean',
    ];


    protected $hidden = [
        'media'
    ];

    public function getThumbnailAttribute(){
        $mediaItems = $this->getMedia('thumbnail');
        if (sizeof($mediaItems) == 0){
            return null;
        }
        return [
            'id' => $mediaItems[0]->id ,
            'link' => $mediaItems[0]->getUrl()
        ];
    }

    public function getPhotosAttribute(){
        $mediaLinks = [];
        $mediaItems = $this->getMedia('sub_photos');
        for ($i=0; $i < sizeof($mediaItems); $i++) { 
            array_push($mediaLinks,[
                'id' => $mediaItems[$i]->id,
                'link' => $mediaItems[$i]->getUrl()
            ]);
        }
        return $mediaLinks;
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
