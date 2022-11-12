<?php

namespace App\Listeners;

use App\Models\Link;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Http;

class CreateLinkInService
{
    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle($event)
    {
        $request = Http::post('https://urltrack.net/system/create', ['url' => "{$event->link->offer->host}/affiliate?linkId={$event->link->id}"])
                    ->body();
        $request = json_decode($request, true);

        $event->link->update([
            'link' => $request['link']
        ]);
    }
}
