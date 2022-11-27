<?php

namespace App\Http\Controllers\Referrals;

use App\Http\Controllers\Controller;
use App\Models\Player;
use Illuminate\Http\Request;

class DisplayController extends Controller
{
    public array $tree;

    public function __construct($tree)
    {
        $this->tree = $tree;
    }

    public function display($level, $number)
    {
        if (isset($this->tree[$level][$number]) && $this->tree[$level][$number] !== false) {
            $player = $this->tree[$level][$number];
            $classNames = $this->getClassNames($player);

            ?>
            <div class="people people-default filled <?= $this->getClassNames($player) ?>">
                <div class="info">
                    <p class="mb-0">ID: <?= $player['data']['cpa_id'] ?></p>
                    <p class="mb-0">Conversions: <?= $player['data']['conversions'] ?></p>
                    <p class="mb-0">Earn amount: <?= $player['data']['conversions_price'] ?></p>
                </div>
            </div>
            <?php

        } else {

            ?>
            <div class="people people-default">
                <div class="info">
                    <span>Not found referral in current cel</span>
                </div>
            </div>
            <?php

        }
    }

    public function isGold()
    {

    }

    private function getClassNames(array $player)
    {
        $classNames = '';

        if ($this->isGoldTriangle($player)) {
            $classNames .= 'people-gold';
        }

        if ($this->isPlatinumTriangle($player)) {
            $classNames .= 'people-platinum';
        }

        return $classNames;
    }

    private function isGoldTriangle($player)
    {
        if (count(Player::query()->find($player['id'])->referrals) > 1) {
            return true;
        }
    }

    private function isPlatinumTriangle()
    {
        return false;
    }
}
