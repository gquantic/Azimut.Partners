<?php

namespace Tests\Http\Controllers\Api;

use App\Http\Controllers\Api\ReferralController;
use App\Models\Offer;
use Tests\TestCase;

class ReferralControllerTest extends TestCase
{
    public function testCheckHandles()
    {
        $offer = Offer::query()->first();

        $request = $this->post(route('api.conversion'), [
            'token' => env('API_TOKEN'),
            'action' => 'register',
            'player' => '2',
            'referral' => 1,
            'agent' => 1,
            'offer_id' => $offer->id,
            'offer_token' => $offer->token,
        ]);
        $response = json_decode($request->getContent(), true);

        $this->assertEquals('success', $response['status']);
    }
}
