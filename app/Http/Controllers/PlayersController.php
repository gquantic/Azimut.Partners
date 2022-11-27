<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Referrals\DisplayController;
use App\Http\Controllers\Referrals\GetController;
use App\Models\Player;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PlayersController extends Controller
{
    protected ?GetController $getController;

    public function __construct(GetController $getController)
    {
        $this->getController = new $getController;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function index()
    {
        return view('players.index', [
            'players' => Player::query()
                                ->where('user_id', Auth::id())
                                ->where('referral_id', '=', null)
                                ->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function show(Player $player)
    {
//        dd($this->getController->getPlayers($player));
        $displayController = new DisplayController($this->getController->getPlayers($player));

        return view('players.show', [
            'player' => $player,
            'players' => $player->referrals()->get(),
            'refer' => Player::query()->where('id', $player->referral_id)->first() ?? '',
            'displayController' => $displayController,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
