<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Player extends Model
{
    use HasFactory;

    protected $fillable = [
        'cpa_id',
        'user_id',
        'referral_id',
        'name',
        'type',
    ];

    public function agent(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function conversions(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Conversion::class, 'player_id');
    }
}
