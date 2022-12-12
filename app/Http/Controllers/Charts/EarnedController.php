<?php

namespace App\Http\Controllers\Charts;

use App\Http\Controllers\Controller;
use App\Models\Conversion;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class EarnedController extends Controller
{
    public static function get()
    {
        return [
            // start
            Conversion::query()->where('user_id', Auth::id())
                ->where('created_at', Carbon::yesterday()->subDay(2)->format('Y-m-d'). '%')
                ->sum('price'),

            Conversion::query()->where('user_id', Auth::id())
                ->where('created_at', Carbon::yesterday()->subDay(3)->format('Y-m-d'). '%')
                ->sum('price'),

            Conversion::query()->where('user_id', Auth::id())
                ->where('created_at', Carbon::yesterday()->subDay(3)->format('Y-m-d'). '%')
                ->sum('price'),

            Conversion::query()->where('user_id', Auth::id())
                ->where('created_at',  'LIKE', Carbon::yesterday()->subDay(1)->format('Y-m-d'). '%')
                ->sum('price'),

            Conversion::query()->where('user_id', Auth::id())
                ->where('created_at', 'LIKE', Carbon::yesterday()->format('Y-m-d'). '%')
                ->sum('price'),

            Conversion::query()->where('user_id', Auth::id())
                ->where('created_at', 'LIKE', Carbon::now()->format('Y-m-d') . '%')
                ->sum('price'),
        ];
    }
}
