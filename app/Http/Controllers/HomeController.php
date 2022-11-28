<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Charts\EarnedController;
use App\Http\Controllers\Charts\PlayersInvitedController;
use App\Models\Conversion;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use LaravelDaily\LaravelCharts\Classes\LaravelChart;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('moderated');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $date = Carbon::yesterday()->format('Y-m-d');

//        dd($date, $conversionsToday, $conversionsYesterday, $conversions2d, $conversions3d, $conversions4d, $conversions5d);

        $chart = 0;

        return view('home', [
            'conversions' => Conversion::query()->where('user_id', Auth::id())->with('offer')->orderByDesc('id')->get(),
            'earnedChart' => EarnedController::get(),
            'playersInvited' => PlayersInvitedController::get(),
        ]);
    }
}
