<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Player;
use Illuminate\Http\Request;

class LoseController extends Controller
{
    public array $data;
    protected mixed $player;
    protected mixed $agent;
    protected mixed $linkData;

    public function __construct($data)
    {
        $this->data = $data;
        $this->linkData = LinkController::getLinkInfo($data['link_id']);
    }

    public function makeDeposit()
    {
        if ($this->setPlayer() === false)
            return ApiController::returnError(404, "Player {$this->data['player']} not found.");

        // Тут мы должны проверить, какого типа игрок
        if ($this->player->type == 'cpa') {
            return ApiController::returnError('409', 'Only RevShare players can pay lose.');
        }

        $this->revshareConversion();
    }

    private function setPlayer()
    {
        try {
            $this->player = Player::query()->where('cpa_id', $this->data['player'])->with('agent', 'conversions')->first();
            $this->agent = $this->player->agent;
        } catch (\Exception $e) {
            return false;
        }
    }

    private function revshareConversion(): \Illuminate\Http\JsonResponse
    {
        $referralController = new ReferralController();

        // Если это ревшара, то проверяем, кто сделал конферсию -- Это пока нам не надо
//        if ($this->data['referral'] != null)
//            return ApiController::returnError('409', 'Only main player can pay agent balance.');

        // Тут мы должны вычесть процент по пользователю
        $payPercent = $referralController->userPercent($this->data['player']);

//        $topPlayer = $referralController->gotTop($this->data['player']);
//        $topPlayer = Player::query()->find($topPlayer)->

        // Если основной игрок, то начисляем процент
        $amount = round(($this->data['amount'] / 100) * $payPercent);

        ConversionController::makeConversion($this->data, $this->linkData->user_id, $amount);
        AgentController::payAgentBalance($this->linkData->user_id, $amount);
        return ApiController::returnSuccess("Conversion created for agent {$this->linkData->id} on sum {$amount}.");
    }
}
