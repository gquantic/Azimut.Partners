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
        'offer_id',
        'referral_id',
        'name',
        'type',
        'pay_percent',
        'sub_id',
    ];

    public function agent(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function conversions(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Conversion::class, 'player_id');
    }

    public function referrals(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Player::class, 'referral_id', 'id');
    }

    public function refer(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Player::class, 'referral_id', 'id');
    }
}
