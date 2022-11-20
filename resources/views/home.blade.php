@extends('layouts.app')

@section('content')
<div class="container">
    <!-- FIRST BLOCK -->
    <div class="row">
        <div class="col-xl-9">
            <div class="row">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-body card-body-light">
                            <h5>Balance</h5>
                            <p class="mb-2 mt-2 title-big color-gold">0</p>
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
                            <p class="mb-2 mt-2 title-big color-gold">0</p>
                            <span>15% more than last month</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body card-body-light">
                            <h5>Total cashout</h5>
                            <p class="mb-2 mt-2 title-big color-gold">0$</p>
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
                            <p class="mb-2 mt-2 title-big color-gold">0</p>
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
                            <p class="mb-2 mt-2 title-big color-gold">0</p>
                            <span>8% less than last month</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body card-body-light">
                            <h5>RevShare</h5>
                            <p class="mb-2 mt-2 title-big color-gold">0</p>
                            <span>8% less than last month</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-3">
            <div class="card">
                <div class="card-body card-body-light">
                    <h5>Your personal manager</h5>
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
@endsection
