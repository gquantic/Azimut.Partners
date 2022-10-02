<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use JetBrains\PhpStorm\ArrayShape;
use Symfony\Component\HttpFoundation\Response;

class ApiController extends Controller
{
    public array $data;

    public function __construct(Request $request)
    {
        // Middleware for requests
        $this->middleware('api.key');

        $request->headers->set('Accept', 'application/json');
        $this->data = $request->all();
    }

    /**
     * @param $statusCode
     * @param $message
     * @return array
     */
    public static function returnError($statusCode, $message): array
    {
        http_response_code($statusCode);

        return [
            'status' => 'error',
            'message' => $message ?? 'Error',
        ];
    }

    /**
     * @param Request $request
     * @param $message
     * @return array
     */
    public static function returnSuccess($message): array
    {
        http_response_code(200);
        return [
            'status' => 'success',
            'message' => $message ?? 'Success',
        ];
    }
}
