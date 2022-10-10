<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Player;
use Illuminate\Http\Request;

class ReferralController extends Controller
{
    public function checkHandles($referId)
    {
        return Player::query()->find($referId);
    }
}
