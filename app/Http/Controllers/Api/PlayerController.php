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
            $this->savePlayerHandler($this->data);
        } else {
            return ApiController::returnError(401, 'Player already exists.');
        }
    }

    private function savePlayerHandler($data): void
    {
        try {
            Player::create([
                'id' => $data['player_id'],
                'user_id' => $data['agent'],
                'name' => $data['player_name'] ?? '',
                'type' => $data['partner_type'] ?? 'cpa',
            ]);

            ApiController::returnSuccess('Player registered.');
        } catch (\Exception) {
            ApiController::returnError(404, 'Agent not found.');
        }
    }
}