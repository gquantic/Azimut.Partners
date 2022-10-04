<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Conversion;
use Illuminate\Http\Request;

class ConversionController extends Controller
{
    public static function makeConversion(array $data, int $agent, int $price)
    {
        Conversion::query()->create([
            'offer_id' => 1,
            'user_id' => $agent,
            'player_id' => $data['player'],
            'price' => $price,
            'status' => 'approved',
            'more' => [],
        ]);
    }
}
