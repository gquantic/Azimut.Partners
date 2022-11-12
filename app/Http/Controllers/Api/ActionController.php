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

    public function register()
    {
        $playerController = new PlayerController($this->data);
        return $playerController->savePlayer();
    }

    public function deposit()
    {
        $depositController = new DepositController($this->data);
        return $depositController->makeDeposit();
    }

    public function lose()
    {
        $depositController = new LoseController($this->data);
        return $depositController->makeDeposit();
    }

    public function conversion()
    {

    }
}
