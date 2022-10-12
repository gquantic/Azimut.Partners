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
            return Player::query()
                    ->where('cpa_id', $this->data['player'])
                    ->where('offer_id', $this->data['offer_id'])
                    ->first();
        } catch (\Exception $e) {
            return "false";
        }
    }

    public function savePlayer()
    {
        if (empty($this->checkPlayer())) {
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
                'user_id' => User::query()->find($data['agent'])->first()->id,
                'offer_id' => (int) $data['offer_id'],
                'referral_id' => $this->getReferral() ?? null,
                'name' => $data['name'] ?? '',
                'type' => $data['partner_type'] ?? 'cpa',
            ]);

            return ApiController::returnSuccess('Player saved.');
        } catch (\Exception) {
            return ApiController::returnError(404, 'Agent not found.');
        }
    }

    private function getReferral()
    {
        if ($this->data['referral'] != '')
            return Player::query()->where('cpa_id', $this->data['referral'])->where('offer_id', $this->data['offer_id'])->first()->id;
        else
            return null;
    }
}
