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
        return [
            $this->firstLevel,
            $this->secondLevel,
            $this->thirdLevel,
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
}
