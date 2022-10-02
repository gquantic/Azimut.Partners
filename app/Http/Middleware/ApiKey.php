<?php

namespace App\Http\Middleware;

use Closure;
use http\Client\Response;
use Illuminate\Http\Request;

class ApiKey
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return int
     */
    public function handle(Request $request, Closure $next)
    {
        $data = $request->all();
        if (!isset($data['token']) || $data['token'] != 123) {
            http_response_code(403);
            exit('Токен неверен.');
        }

        return $next($request);
    }
}
