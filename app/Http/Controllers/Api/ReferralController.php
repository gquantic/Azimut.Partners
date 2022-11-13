<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Player;
use Illuminate\Http\Request;

/**
 * Отсюда мы будем брать текущего реферала, проходиться по верхнему и заново вниз по всем приглашенным.
 * Тем самым будем извлекать количество рефералов, закрытых треугольников.
 */

class ReferralController extends Controller
{
    public array $firstLevel;
    public array $secondLevel;
    public array $thirdLevel;
    public array $fourthLevel;
    public array $fiveLevel;
    public array $sixLevel;

    protected array $requires = [
        1 => 3,
        2 => 6,
        3 => 16,
        4 => 32,
        5 => 64,
    ];

    protected array $percents = [
        1 => 2.5,
        2 => 3.2,
        3 => 5,
        4 => 10,
        5 => 15,
    ];

    /**
     * Массив самих рефералов
     *
     * @var array
     */
    public array $referrals;

    /**
     * Сколько рефералов в общем у первого
     *
     * @var int
     */
    public int $referralsCount;

    /**
     * Какие треугольники закрыты
     *
     * @var bool
     */
    public bool $gold = false;
    public bool $platinum = false;

    /**
     * @param Request $request
     */
//    public function __construct(Request $request)
//    {
//        $request->headers->set('Accept', 'application/json');
//    }

    /**
     * Проверяем ветку по ID игрока.
     *
     * @param $referId
     * @param bool $isCpaId
     * @return \Illuminate\Database\Eloquent\HigherOrderBuilderProxy|\Illuminate\Support\HigherOrderCollectionProxy|mixed
     */
    public function checkHandles($referId, bool $isCpaId = true)
    {
        $player = Player::query()->where('cpa_id', $referId)->with('refer', 'referrals')->first();
        $top = $this->gotTop($player);
        $this->firstLevel = $this->goDown([$top]);
        $this->secondLevel = $this->goDown($this->firstLevel);
        $this->thirdLevel = $this->goDown($this->secondLevel);
        $this->fourthLevel = $this->goDown($this->thirdLevel);
        $this->fiveLevel = $this->goDown($this->fourthLevel);
        $this->sixLevel = $this->goDown($this->fiveLevel);
        return [
            $this->firstLevel,
            $this->secondLevel,
            $this->thirdLevel,
            $this->fourthLevel,
            $this->fiveLevel,
        ];
    }

    /**
     * Поднимаемся, до главного реферала.
     *
     * @param $referralId
     * @return \Illuminate\Database\Eloquent\HigherOrderBuilderProxy|\Illuminate\Support\HigherOrderCollectionProxy|mixed
     */
    public function gotTop($player)
    {
        $referralId = $player->referral_id;
        while ($referralId != null) {
            $refer = Player::query()->find($referralId)->first();
            $referralId = $refer->referral_id;
        }

        if (!empty($refer))
            return $refer->id;
        else
            return $player->id;
    }

    /**
     * Спускаемся по рефералам
     *
     * @param array $referrals
     * @param array $pastTo
     * @return \Illuminate\Database\Eloquent\Builder[]|\Illuminate\Database\Eloquent\Collection
     */
    public function goDown(array $referrals)
    {
        $referralsReturn = [];

        /** Это будет какой-то уровень **/
        foreach ($referrals as $referral) {
            $referral = Player::query()->where('referral_id', $referral);
            if (!empty($referral)) {
                foreach ($referral->get() as $referralObject) {
                    $referralsReturn[] = $referralObject->id;
                }
            }
        }

        return $referralsReturn;
    }

    public function userPercent($cpaId)
    {
        $level = $this->inWhichBranchIsPerson($cpaId);
        $gold = $this->isGoldTriangle($cpaId);
        $platinum = $this->isPlatinumTriangle($cpaId);

//        return dd($gold, $platinum, $level);

        if ($platinum) {
            return $this->percents[$level] * 1.5;
        } elseif ($gold) {
            return $this->percents[$level] * 1.2;
        } else {
            return $this->percents[$level];
        }
    }

    /**
     * @param int $cpaId
     * @return int
     */
    public function inWhichBranchIsPerson($cpaId)
    {
        $player = Player::query()->where('cpa_id', $cpaId)->first();
        $referralId = $player->referral_id;
        $level = 1;


        // Идём вверх
        while ($referralId != null) {
            $refer = Player::query()->where('id', $referralId)->first();
            $referralId = $refer->referral_id;

            $level += 1;
        }

        return $level;
    }

    public function isGoldTriangle($cpaId)
    {
        // Идём к верхнему
        $current = Player::query()->where('cpa_id', $cpaId)->with('refer')->first();

        if (count($current->refer->referrals()->get()) > 1) {
            return true;
        } else {
            return false;
        }
    }

    public function isPlatinumTriangle($cpaId)
    {
        $level = $this->inWhichBranchIsPerson($cpaId);
        $count = $this->referralsNumber($cpaId);

        if ($count < $this->requires[$level]) {
            return false;
        } else {
            return true;
        }
    }

    public function referralsNumber($cpaId)
    {
        // Получаем общую ветку
        $triangle = $this->checkHandles($cpaId);
        $refsCount = 0;

        foreach ($triangle as $bottTriangle) {
            $refsCount += count($bottTriangle);
        }

        return $refsCount;
    }
}
