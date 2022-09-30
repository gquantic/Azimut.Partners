<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Offer extends Model
{
    use HasFactory;

    public function conversions(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Conversion::class, 'offer_id');
    }
}
