<?php

namespace Database\Seeders;

use App\Models\Offer;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class OfferSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Offer::query()->create([
            'id' => 1,
            'token' => 'gHsrOjzhke5qJUEwPvWbCEGDLf94kUpH2veebJXdYuq1206yv5DzDtziVxmfymUzv3becudmGsFKtDdLCmrO7iMloEBuewMO8lm0ji933mK7ZuTgJeaj20FLcBJIQ172AWbMkOpvw4lvBF8u8B9cUeBkInYlfTQ6EAzlElJ5P0zlsCmq44TNakPkk3PBEAA2mI8kjxFCPAVps8qJwklxECkA99tYPTlf0x4qzdQMIqY3nDy9PNRKqLYTERWoSlzp',
            'title' => 'Webstore [BOT]',
            'host' => 'https://azimut777.net',
            'description' => '',
        ]);
    }
}
