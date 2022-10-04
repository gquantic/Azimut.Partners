<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Player;
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
            return Player::query()->findOrFail($this->data['player_id'])->first();
        } catch (\Exception $e) {
            return false;
        }
    }

    public function savePlayer()
    {
        if ($this->checkPlayer($this->data) === false) {
            // Если всё норм, то сохраняем пользователя
            $this->savePlayerHandler($this->data);
        } else {
            // Если пользователь уже существует
            return ApiController::returnError(409, 'Player already exists.');
        }
    }

    private function savePlayerHandler($data)
    {
        try {
            Player::create([
                'id' => $data['player'],
                'user_id' => $data['agent'],
                'name' => $data['player_name'] ?? '',
                'type' => $data['partner_type'] ?? 'cpa',
            ]);

            return ApiController::returnSuccess('Player saved.');
        } catch (\Exception) {
            return ApiController::returnError(404, 'Agent not found.');
        }
    }
}
