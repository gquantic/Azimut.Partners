<?php

namespace App\Listeners;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Http;

class SendTransactionToManager
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle($event)
    {
        $request = Http::post('https://slotsmakers.net/affiliate/cashout', [
            'cashout_id' => $event->transaction->id,
            'userId' => $event->transaction->user_id,
            'name' => $event->transaction->user->name,
            'email' => $event->transaction->user->email,
            'cashout_type' => $event->transaction->type,
            'cashout_wallet' => $event->transaction->requisite,
            'cashout_amount' => $event->transaction->amount,
        ]);
    }
}
