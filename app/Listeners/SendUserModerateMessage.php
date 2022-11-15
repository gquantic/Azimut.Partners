<?php

namespace App\Listeners;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Http;

class SendUserModerateMessage
{
    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle($event)
    {
        $request = Http::post('https://slotsmakers.net/api/affiliate/user', [
            'userId' => $event->user->id,
            'name' => $event->user->name,
            'email' => $event->user->email,
        ]);
    }
}
