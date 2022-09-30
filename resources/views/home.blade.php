@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
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
                    <h5>Your monthly earnings</h5>
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
    <div class="row mt-5">
        <div class="col-md-12 mb-2">
            <div class="title-medium color-white">
                Last conversions
            </div>
        </div>
        <div class="col-md-12">
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
</div>
@endsection
