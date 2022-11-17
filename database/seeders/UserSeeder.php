<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::query()->create([
            'id' => 1,
            'cpa_id' => '58ae295e00499bf43e53f6db03b7e26bbf91a144',
            'name' => 'Murad',
            'email' => 'gapurovich05@mail.ru',
            'password' => '$2y$10$13qDQprNzutx6GKRVm0l6e3XqDIfCVrvk4JYCtLSc5q6o1V/oqC6m',
            'moderated' => 1,
        ]);
    }
}
