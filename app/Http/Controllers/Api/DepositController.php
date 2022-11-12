<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Conversion;
use App\Models\Player;
use App\Models\User;
use Illuminate\Http\Request;

class DepositController extends Controller
{
    public array $data;
    protected mixed $player;
    protected mixed $agent;

    public function __construct($data)
    {
        $this->data = $data;
    }

    public function makeDeposit()
    {
        if ($this->setPlayer() === false)
            return ApiController::returnError(404, "Player {$this->data['player']} not found.");

        // Тут мы должны проверить, какого типа игрок
        if ($this->player->type == 'revshare') {
            return ApiController::returnError('409', 'Only CPA players can pay deposit.');
        }
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

    private function cpaConversion()
    {
        // Если он CPA, то сначала проверяем, были ли зачисления. Если нет, то начисляем.
        if (count($this->player->conversions) > 0) // Если конверсия уже была, то возвращаем сразу ошибку
            return ApiController::returnError('409', 'Player already payed balance.');

        // Если же нет, то смотрим на сумму
        if ($this->data['amount'] < 20) // если она меньше 20, то выкидываем с ошибкой
            return ApiController::returnError('409', 'Minimal amount: 20$');

        ConversionController::makeConversion($this->data, $this->agent->id, 10);
        AgentController::payAgentBalance($this->agent->id, 10);
        return ApiController::returnSuccess("Conversion created for agent {$this->agent->id}.");
    }
}
