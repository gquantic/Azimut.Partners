<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Revshare\PercentController;
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
        if (!empty($this->data['referral']) && $this->data['referral'] !== '') {
            if (count(Player::query()->where('cpa_id', $this->data['referral'])->first()->referrals()->get()) >= 2) {
                return ApiController::returnError(409, 'Already exists 2 referrals.');
            }
        }

        if (empty($this->checkPlayer())) {
            // Если всё норм, то сохраняем пользователя
            $this->savePlayerHandler($this->data);

            // И пересчитываем процент самому верхнему
            if ($this->data['referral'] !== null) {
                $referralController = new ReferralController();
                $refsTree = $referralController->checkHandles($this->data['player']);

                $percentController = new PercentController($refsTree);
                $percentToSet = $percentController->calcPercent();

                $thisPlayer = Player::query()->where('cpa_id', $this->data['player'])->first();
                $topPlayer = $referralController->gotTop($thisPlayer);

                var_dump($percentToSet);

                Player::query()->where('id', $topPlayer)->update([
                    'pay_percent' => $percentToSet < 10 ? 10 : $percentToSet
                ]);
            }

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
