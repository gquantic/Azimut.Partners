@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-12">
{{--            <div class="card">--}}
{{--                <div class="card-body card-body-light">--}}
                    <canvas id="mainChart"></canvas>
{{--                </div>--}}
{{--            </div>--}}
        </div>
    </div>

    <div class="row">
        <div class="col-md-12">
            <div style="height: 200px;width: 100%;background: rgba(0,0,0,.2);display: flex;justify-content: center;flex-direction: row;
            align-items: center;justify-content: center;">
                <a href="" class="text-decoration-none">
                    <button class="btn-warning mr-4" style="width: 160px;font-size: 15px;transform: translateY(5px);">
                        Leaderboard
                    </button>
                </a>
                <img src="{{ asset('img/azimut.svg') }}" alt="" width="100px" style="width: 100px !important;">
                <button type="button" data-toggle="modal" data-target="#howToStartEarningModal" class="btn-warning ml-4" style="width: 160px;font-size: 15px;transform: translateY(5px);">
                    Start earn now
                </button>
            </div>
        </div>
    </div>

    <!-- FIRST BLOCK -->
    <div class="row mt-3">
        <div class="col-xl-9">
            <div class="row">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-body card-body-light">
                            <h5>Balance</h5>
                            <p class="mb-2 mt-2 title-big color-gold">{{ \Illuminate\Support\Facades\Auth::user()->balance }}$</p>
                            <span>15% more than last month</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-body card-body-light">
                            <h5>Hold</h5>
                            <p class="mb-2 mt-2 title-big color-gold">0$</p>
                            <span>2% less than last month</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body card-body-light">
                            <h5>Transactions in this month</h5>
                            <p class="mb-2 mt-2 title-big color-gold">
                                {{ \App\Models\Transaction::query()->where('user_id', \Illuminate\Support\Facades\Auth::id())
                                    ->count() }}
                            </p>
                            <span>15% more than last month</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body card-body-light">
                            <h5>Total cashout</h5>
                            <p class="mb-2 mt-2 title-big color-gold">{{ \App\Models\Transaction::query()->where('user_id', \Illuminate\Support\Facades\Auth::id())
                                    ->sum('amount') }}$</p>
                            <span>2% less than last month</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body card-body-light">
                            <h5>Total link views</h5>
                            <p class="mb-2 mt-2 title-big color-gold">0</p>
                            <span>8% less than last month</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body card-body-light">
                            <h5>Registers</h5>
                            <p class="mb-2 mt-2 title-big color-gold">
                                {{ \App\Models\Player::query()->where('user_id', \Illuminate\Support\Facades\Auth::id())
                                    ->count() }}
                            </p>
                            <span>8% less than last month</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body card-body-light">
                            <h5>Registers ratio</h5>
                            <p class="mb-2 mt-2 title-big color-gold">0</p>
                            <span>8% less than last month</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body card-body-light">
                            <h5>Deposits ratio</h5>
                            <p class="mb-2 mt-2 title-big color-gold">0</p>
                            <span>8% less than last month</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body card-body-light">
                            <h5>New accounts with deposit</h5>
                            <p class="mb-2 mt-2 title-big color-gold">0</p>
                            <span>8% less than last month</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body card-body-light">
                            <h5>CPA</h5>
                            <p class="mb-2 mt-2 title-big color-gold">
                                {{ \App\Models\Conversion::query()->where('user_id', \Illuminate\Support\Facades\Auth::id())
                                    ->count() }}
                            </p>
                            <span>8% less than last month</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body card-body-light">
                            <h5>RevShare</h5>
                            <p class="mb-2 mt-2 title-big color-gold">
                                {{ \App\Models\Conversion::query()->where('user_id', \Illuminate\Support\Facades\Auth::id())
                                    ->count() }}
                            </p>
                            <span>8% less than last month</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-3">
            <div class="card manager-block">
                <div class="card-body card-body-light">
                    <h5 class="color-gold">Your personal manager</h5>
                    <p style="font-weight: 600;font-size: 15px;margin-bottom: 5px;">Denis</p>
                    <p>Hello! I am Denis, and I your personal manager.
                        I will help you solve any question on weekdays since 11:00 to 20:000. Type in telegram.</p>
                    <a href="https://t.me/playtime_777" target="_blank">Telegram</a>
                </div>
            </div>
        </div>
        <!-- END -->
    </div>
    <div class="row">
        <div class="col-md-12">
            <div class="row mt-5">
                <div class="col-md-6 mb-2">
                    <div class="title-medium color-white">
                        Last conversions
                    </div>
                </div>
                <div class="col-md-6 d-flex justify-content-end">
                    <a href="{{ route('players.index') }}" class="btn btn-warning text-black">Invited players</a>
                </div>
            </div>
            <div class="row mt-3">
                <table class="table">
                    <thead>
                    <tr>
                        <th>Payed amount</th>
                        <th>Source</th>
                        <th>Deposit date</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    @foreach($conversions as $conversion)
                        <tr>
                            <td>$ {{ $conversion->price }}</td>
                            <td>{{ $conversion->source }}</td>
                            <td>{{ \Carbon\Carbon::createFromTimeString($conversion->created_at)->format('d.m.Y h:m') }}</td>
                            <td>{{ $conversion->status }}</td>
                        </tr>
                    @endforeach
                    </tbody>
                </table>
            </div>
        </div>
{{--        <div class="col-md-3" style="margin-top:100px;">--}}
{{--            <div class="card">--}}
{{--                <div class="card-body">--}}
{{--                    <h5 class="text-white">News</h5>--}}
{{--                    <p>We don't have news now. Please see later.</p>--}}
{{--                </div>--}}
{{--            </div>--}}
{{--        </div>--}}
    </div>
</div>

<script>
    const ctx = document.getElementById('mainChart');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [
                {
                    label: 'Earned',
                    data: [
                        @foreach($earnedChart as $item)
                        '{{ $item }}',
                        @endforeach
                    ],
                    borderWidth: 1
                },
                {
                    label: 'Players invited',
                    data: [
                        @foreach($playersInvited as $item)
                            '{{ $item }}',
                        @endforeach
                    ],
                    borderWidth: 1
                }
            ]
        },
        options: {
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
</script>

    <style>
        #mainChart {
            height: 250px !important;
            margin-bottom: 50px;
            margin-top: 30px;
            color: #fff;
        }
    </style>
@endsection


@section('scripts')

@endsection
