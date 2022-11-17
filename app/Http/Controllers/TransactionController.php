<?php

namespace App\Http\Controllers;

use App\Events\UserSendTransaction;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request)
    {
        // Если проблемы с балансом
        if ($request->post('amount') > Auth::user()->balance) {
            return redirect()->back();
        } elseif ($request->post('amount') < 10) {
            return redirect()->back();
        }

        $transaction = Transaction::query()->create([
            'user_id' => Auth::id(),
            'amount' => $request->post('amount'),
            'requisite' => $request->post('requisite'),
            'type' => 'payout',
            'to' => $request->post('to'),
        ]);

        // Уменьшаем баланс
        User::query()->find(Auth::id())->decrement('balance', $request->post('amount'));

        event(new UserSendTransaction($transaction));
        return redirect()->back();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
    public function update(Request $request)
    {
        Transaction::query()->find($request->post('id'))->update([
            'status' => $request->post('status'),
        ]);
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
