<?php

namespace Tests\Http\Controllers\Api;

use App\Http\Controllers\Api\ReferralController;
use Tests\TestCase;

class ReferralControllerTest extends TestCase
{
    public function testCheckHandles()
    {
        $referralController = new ReferralController();
        dd($referralController->checkHandles(1));
    }
}
