<?php

namespace App\Http\Middleware;

use App\Http\Controllers\Api\ApiController;
use App\Http\Controllers\Api\Security\OfferCheckController;
use App\Models\Offer;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Psy\Util\Json;

class OfferRequest
{
    /**
     * Handle an incoming request.
     *
     * @param Request $request
     * @param Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return boolean
     */
    public function handle(Request $request, Closure $next)
    {
        $offerCheckController = new OfferCheckController();
        if ($offerCheckController->check($request) === false) {
            http_response_code(401);
            exit(Json::encode([
                'status' => 'error',
                'error' => 'Not authorized.',
            ]));
        }

        return $next($request);
    }
}
