<?php

namespace App\Http\Controllers\Referrals;

use App\Http\Controllers\Controller;
use App\Models\Player;
use Illuminate\Http\Request;

class GetController extends Controller
{
    public array $tree;

    /**
     * @param Player $mainPlayerId
     * @return array
     */
    public function getPlayers(Player $mainPlayerId): array
    {
        $this->tree['first'][] = [
            'id' => $mainPlayerId->id,
            'data' => $this->getPlayerInfo($mainPlayerId),
        ];

        // 2 level - 2 players
        foreach ($mainPlayerId->referrals as $referral) {
            $this->tree['second'][] = [
                'id' => $referral->id,
                'data' => $this->getPlayerInfo($referral),
            ];
        }

        // THIRD level - 2 players (2)
        foreach ($this->tree['second'] as $referral) {
            $count = count(Player::query()->where('referral_id', $referral['id'])->get());
            foreach (Player::query()->where('referral_id', $referral['id'])->get() as $referralDown) {
                $this->tree['third'][] = [
                    'id' => $referralDown->id,
                    'data' => $this->getPlayerInfo($referralDown),
                ];
            }

            if ($count < 2) {
                $this->tree['third'][] = false;
            }
        }

        // FOURTH level - 2 players (3)
        foreach ($this->tree['third'] as $referral) {
            if ($referral !== false) {
                $count = count(Player::query()->where('referral_id', $referral['id'])->get());
                foreach (Player::query()->where('referral_id', $referral['id'])->get() as $referralDown) {
                    $this->tree['fourth'][] = [
                        'id' => $referralDown->id,
                        'data' => $this->getPlayerInfo($referralDown),
                    ];
                }

                if ($count == 0) {
                    $this->tree['fourth'][] = false;
                    $this->tree['fourth'][] = false;
                } elseif ($count < 2) {
                    $this->tree['fourth'][] = false;
                }
            } else {
                $this->tree['fourth'][] = false;
                $this->tree['fourth'][] = false;
            }
        }

        // FIVE level - 2 players (3)
        foreach ($this->tree['fourth'] as $referral) {
            if ($referral !== false) {
                $count = count(Player::query()->where('referral_id', $referral['id'])->get());
                foreach (Player::query()->where('referral_id', $referral['id'])->get() as $referralDown) {
                    $this->tree['five'][] = [
                        'id' => $referralDown->id,
                        'data' => $this->getPlayerInfo($referralDown),
                    ];
                }

                if ($count == 0) {
                    $this->tree['five'][] = false;
                    $this->tree['five'][] = false;
                } elseif ($count < 2) {
                    $this->tree['five'][] = false;
                }
            } else {
                $this->tree['five'][] = false;
                $this->tree['five'][] = false;
            }
        }

        return $this->tree;
    }

    public function getPlayerInfo(Player $player)
    {
        return [
            'cpa_id' => $player->cpa_id,
            'conversions' => $player->conversions->count(),
            'conversions_price' => $player->conversions->sum('price'),
        ];
    }
}
