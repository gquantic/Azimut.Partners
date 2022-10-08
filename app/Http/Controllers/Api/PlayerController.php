<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Player;
use App\Models\User;
use Illuminate\Http\Request;
use JetBrains\PhpStorm\ArrayShape;

class PlayerController extends Controller
{
    private $data;

    public function __construct($data)
    {
        $this->data = $data;
    }

    public function checkPlayer()
    {
        try {
            return Player::query()->where('cpa_id', $this->data['player'])->first();
        } catch (\Exception $e) {
            return "false";
        }
    }

    public function savePlayer()
    {
        if (empty($this->checkPlayer($this->data))) {
            // Если всё норм, то сохраняем пользователя
            $this->savePlayerHandler($this->data);
            return ApiController::returnSuccess('Player saved.');
        } else {
            // Если пользователь уже существует
            return ApiController::returnError(409, 'Player already exists.');
        }
    }

    private function savePlayerHandler($data)
    {
        try {
            Player::create([
                'cpa_id' => $data['player'],
                'user_id' => User::where('cpa_id', $data['agent'])->first()->id,
                'name' => $data['player_name'] ?? '',
                'type' => $data['partner_type'] ?? 'cpa',
            ]);

            return ApiController::returnSuccess('Player saved.');
        } catch (\Exception) {
            return ApiController::returnError(404, 'Agent not found.');
        }
    }
}
