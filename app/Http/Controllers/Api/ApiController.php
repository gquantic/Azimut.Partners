<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use JetBrains\PhpStorm\ArrayShape;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Foundation\Exceptions\Handler;

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
     * @return JsonResponse
     */
    public static function returnError($statusCode, $message)
    {
        return response()->json([
            'status' => 'error',
            'message' => $message ?? 'Error',
        ], $statusCode);
    }

    /**
     * @param $message
     * @return JsonResponse
     */
    public static function returnSuccess($message)
    {
        return response()->json([
            'status' => 'success',
            'message' => $message ?? 'Success',
        ], 200);
    }
}
