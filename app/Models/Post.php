<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Post extends Model
{
    protected $fillable = [
        'user_id',
        'post_image',
        'post_description',
    ];

    protected $appends = ['is_liked'];
    public function getIsLikedAttribute()
    {
        return $this->likes->contains('user_id', auth()->id());
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function likes(): HasMany
    {
        return $this->hasMany(PostLike::class);
    }
}
