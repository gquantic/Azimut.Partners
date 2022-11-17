<?php

namespace App\Http\Controllers\Revshare;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PercentController extends Controller
{
    /*
     * 1 = 2 -> +5% => +5%
     * 2 = 4 -> +5% => + 10%
     * 3 = 8 -> +2% => +15%
     * 4 = 16 -> +1% => +15%
     * 5 = 32 -> +1% => +20%
     * Макс процент: 65%
     */

    /**
     * Tree array
     * @var array
     */
    protected array $tree;

    /**
     * Total percent
     * @var int
     */
    public int $percent = 0;

    /**
     * Closed gold triangles
     * @var int
     */
    public int $goldTriangles = 0;

    /**
     * Closed platinum triangles
     * @var int
     */
    public int $platinumTriangles = 0;

    /**
     * @param $tree : ReferralController tree array
     */
    public function __construct($tree)
    {
        $this->tree = $tree;
    }

    /**
     * @return int
     */
    public function calcPercent(): int
    {
        $this->calcTree();
        return $this->percent;
    }

    /**
     * Подсчет числа рефералов на уровень ниже
     *
     * @return void
     */
    public function calcTree()
    {
        // Считаем рефералов на 1 уровне
        if (count($this->tree[0]) == 2) {
            $this->percent += 5;
        }

        // 2
        if (isset($this->tree[1]) && count($this->tree[1]) == 4) {
            $this->percent += 10;
        } elseif (isset($this->tree[1]) && count($this->tree[1]) >= 2) {
            $this->percent += floor((count($this->tree[1]) / 2)) * 5;
        }

        // 3
        if (isset($this->tree[2]) && count($this->tree[2]) == 8) {
            $this->percent += 15;
        } elseif (isset($this->tree[2]) && count($this->tree[2]) >= 2) {
            $this->percent += floor((count($this->tree[2]) / 2)) * 2;
        }

        // 4
        if (isset($this->tree[3]) && count($this->tree[3]) == 16) {
            $this->percent += 15;
        } elseif (isset($this->tree[3]) && count($this->tree[3]) >= 2) {
            $this->percent += floor((count($this->tree[3]) / 2));
        }

        // 5
        if (isset($this->tree[4]) && count($this->tree[4]) == 32) {
            $this->percent += 20;
        } elseif (isset($this->tree[4]) && count($this->tree[4]) >= 2) {
            $this->percent += floor((count($this->tree[4]) / 2));
        }
    }
}
