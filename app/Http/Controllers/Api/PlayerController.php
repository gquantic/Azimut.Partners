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
    protected mixed $linkData;

    public function __construct($data)
    {
        $this->data = $data;
        $this->linkData = LinkController::getLinkInfo($data['link_id']);
    }

    public function checkPlayer()
    {
        try {
            return Player::query()
                    ->where('cpa_id', $this->data['player'])
                    ->where('offer_id', $this->linkData->offer_id)
                    ->first();
        } catch (\Exception $e) {
            return "false";
        }
    }

    public function savePlayer()
    {
        if ($this->checkTopType() !== true)
            return ApiController::returnError(409, 'Only CPA player can have referrals.');

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
                'user_id' => $this->linkData->user_id,
                'offer_id' => (int) $this->linkData->offer_id,
                'referral_id' => $this->getReferral() ?? null,
                'name' => $data['name'] ?? '',
                'type' => $this->linkData->type ?? 'cpa',
            ]);

            return ApiController::returnSuccess('Player saved.');
        } catch (\Exception) {
            return ApiController::returnError(404, 'Agent not found.');
        }
    }

    private function getReferral()
    {
        if ($this->data['referral'] != '')
            return Player::query()->where('cpa_id', $this->data['referral'])->where('offer_id', $this->linkData->offer_id)->first()->id;
        else
            return null;
    }

    private function checkTopType()
    {
        // Если указан реферал, то проверяем, какого он типа (Не забываем, что мы работает по cpa_id)
        if ($this->data['referral'] !== null && $this->data['referral'] !== '') {
            // Получаем самого верхнего
            if (Player::query()->where('cpa_id', $this->data['referral'])->first()->type == 'cpa') {
                return false;
            } else {
                return true;
            }
        } else return true;
    }
}
