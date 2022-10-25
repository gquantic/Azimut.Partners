<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\PlayerController;
use App\Http\Controllers\Controller;
use App\Http\Requests\ApiActionRequest;
use Illuminate\Http\Request;
use Illuminate\Foundation\Exceptions\Handler;

/**
 *  @OA\Post(
 *     path="/api/action",
 *
 *     @OA\Parameter (
 *          name="action",
 *          description="register / deposit",
 *          in="query",
 *          required=true,
 *          @OA\Schema (
 *              type="string"
 *          )
 *     ),
 *
 *     @OA\Parameter (
 *          name="player",
 *          description="Player ID on project",
 *          in="query",
 *          required=true,
 *          @OA\Schema (
 *              type="int"
 *          )
 *     ),
 *
 *     @OA\Parameter (
 *          name="token",
 *          description="Partner site token",
 *          in="query",
 *          required=true,
 *          @OA\Schema (
 *              type="string"
 *          )
 *     ),
 *
 *     @OA\Parameter (
 *          name="agent",
 *          description="Agent ID",
 *          in="query",
 *          required=true,
 *          @OA\Schema (
 *              type="int"
 *          )
 *     ),
 *
 *     @OA\Parameter (
 *          name="offer_id",
 *          description="Offer ID",
 *          in="query",
 *          required=true,
 *          @OA\Schema (
 *              type="int"
 *          )
 *     ),
 *
 *     @OA\Parameter (
 *          name="offer_token",
 *          description="Offer token",
 *          in="query",
 *          required=true,
 *          @OA\Schema (
 *              type="string"
 *          )
 *     ),
 *
 *     @OA\Parameter (
 *          name="referral",
 *          description="Referral ID (if provided)",
 *          in="query",
 *          required=false,
 *          @OA\Schema (
 *              type="id"
 *          )
 *     ),
 *
 *     @OA\Response(response="200", description="Успешное событие")
 * )
 */
class ActionController extends ApiController
{
    /**
     * @return array
     */
    public function getData()
    {
        return $this->data;
    }

    public function init(ApiActionRequest $request)
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
