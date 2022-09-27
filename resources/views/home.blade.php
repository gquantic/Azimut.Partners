@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-4">
            <div class="card">
                <div class="card-body card-body-light">
                    <h5>Transactions in this month</h5>
                    <p class="mb-2 mt-2 title-big color-gold">155</p>
                    <span>15% more than last month</span>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card">
                <div class="card-body card-body-light">
                    <h5>Your monthly earnings</h5>
                    <p class="mb-2 mt-2 title-big color-gold">7 000$</p>
                    <span>2% less than last month</span>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card">
                <div class="card-body card-body-light">
                    <h5>Total link views</h5>
                    <p class="mb-2 mt-2 title-big color-gold">96 839</p>
                    <span>8% less than last month</span>
                </div>
            </div>
        </div>
    </div>
    <div class="row mt-5">
        <div class="col-md-12 mb-2">
            <div class="title-medium color-white">
                Last transactions
            </div>
        </div>
        <div class="col-md-12">
            <table class="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Payed amount</th>
                        <th>Deposit date</th>
                        <th>Source</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Sivesto Longrini</td>
                        <td>$ 90</td>
                        <td>02.02.2022</td>
                        <td>facebook.com</td>
                        <td>Moderation</td>
                    </tr>
                    <tr>
                        <td>Sivesto Longrini</td>
                        <td>$ 90</td>
                        <td>02.02.2022</td>
                        <td>facebook.com</td>
                        <td>Moderation</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
@endsection
