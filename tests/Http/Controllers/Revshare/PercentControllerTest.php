<?php

namespace Tests\Http\Controllers\Revshare;

use App\Http\Controllers\Revshare\PercentController;
use Tests\TestCase;

class PercentControllerTest extends TestCase
{

    public function testCalcPercent()
    {
        $controller = new PercentController([
            [
                1, 2
            ],
            [
                3, 4, 5, 6
            ],
            [
                1, 2, 3, 4, 5, 6, 7, 8
            ],
            [
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16
            ],
            [
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32
            ],
        ]);

        $total = $controller->calcPercent();

        var_dump(
            $total
        );

        $this->assertEquals(
            65, // Исходя из заполнения, должно получится 65%
            $total
        );
    }
}
