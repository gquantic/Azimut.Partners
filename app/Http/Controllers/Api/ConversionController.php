<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Conversion;
use App\Models\Player;
use App\Models\User;
use Illuminate\Http\Request;

class ConversionController extends Controller
{
    public static function makeConversion(array $data, int $agent, int $price)
    {
        Conversion::query()->create([
            'offer_id' => 1,
            'user_id' => User::where('id', $agent)->first()->id,
            'player_id' => Player::where('cpa_id', $data['player'])->first()->id,
            'price' => $price,
            'status' => 'approved',
            'more' => [],
        ]);
    }
}
