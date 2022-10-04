<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\PlayerController;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Foundation\Exceptions\Handler;

class ActionController extends ApiController
{
    /**
     * @return array
     */
    public function getData()
    {
        return $this->data;
    }

    public function init(Request $request)
    {
        return $this->actionHandler();
    }

    private function actionHandler()
    {
        if ($this->data['action'] === 'register') {
            $playerController = new PlayerController($this->data);
            return $playerController->savePlayer();
        } elseif ($this->data['action'] === 'deposit') {
            $depositController = new DepositController($this->data);
            return $depositController->makeDeposit();
        }

        return ApiController::returnError(404, 'Bad method call.');
    }
}
