
<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/action/pay', function () {
    return "Success";
});

Route::post('/transaction/change', 'App\Http\Controllers\TransactionController@update')
    ->middleware('api.offer')
    ->name('api.transaction.change');

Route::post('/action/register', 'App\Http\Controllers\Api\ActionController@register')
    ->middleware('api.offer')
    ->name('api.register');

Route::post('/action/deposit', 'App\Http\Controllers\Api\ActionController@deposit')
    ->middleware('api.offer')
    ->name('api.deposit');

Route::post('/action/lose', 'App\Http\Controllers\Api\ActionController@lose')
    ->middleware('api.offer')
    ->name('api.deposit');

Route::get('/test/{id}', function ($id) {
    return dd(\App\Http\Controllers\Api\LinkController::getLinkInfo($id)->offer_id);
});


/**
 * Balance
 */

Route::post('/user/balance', function (Request $request) {
    $request->headers->set('Accept', 'application/json');

    $user = \App\Models\User::query()->find($request->post('userId'));

    if (!$user) {
        return \Psy\Util\Json::encode([
            'status' => 'error',
            'error' => 'User not found.',
        ]);
    }

    return \Psy\Util\Json::encode([
        'status' => 'success',
        'balance' => $user->balance,
    ]);
});

/**
 * Moderate user
 */

Route::post('/user/accept', function (Request $request) {
    $request->headers->set('Accept', 'application/json');

    $user = \App\Models\User::query()->find($request->post('userId'));

    if (!$user) {
        return \Psy\Util\Json::encode([
            'status' => 'error',
            'error' => 'User not found.',
        ]);
    }

    $user->moderated = 1;
    $user->save();

    return \Psy\Util\Json::encode([
        'status' => 'success',
    ]);
});
