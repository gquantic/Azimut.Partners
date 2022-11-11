<?php

namespace Http\Controllers\Api;

use App\Http\Controllers\Api\ReferralController;
use Tests\TestCase;

class ReferralControllerTest extends TestCase
{
    public function testInWhichBranchIsPerson()
    {
        $controller = new ReferralController();
        $person = $controller->inWhichBranchIsPerson(82203);
        var_dump($person);
        $this->assertEquals(true, true);
    }
}
