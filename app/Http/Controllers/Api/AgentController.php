<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class AgentController extends Controller
{
    /**
     * @var mixed
     */
    public static mixed $user;

    public static function payAgentBalance($agentId, $amount)
    {
        self::$user = User::query()->where('id', $agentId);

        self::$user->update([
            'balance' => self::$user->first()->balance + $amount
        ]);
    }
}
