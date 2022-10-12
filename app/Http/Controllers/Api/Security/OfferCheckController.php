<?php

namespace App\Http\Controllers\Api\Security;

use App\Http\Controllers\Api\ApiController;
use App\Http\Controllers\Controller;
use App\Models\Offer;
use Illuminate\Http\Request;

class OfferCheckController extends Controller
{
    protected array $data;
    protected object $offer;

    public function check(Request $request)
    {
        $this->data = $request->all();
        $this->offer = Offer::query()->where('id', $this->data['offer_id'])->first();

        if ($this->offer->token == $this->data['offer_token'])
            return true;
        else
            return false;
    }
}
