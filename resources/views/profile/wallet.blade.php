@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-body card-body-light">
                        <h5>Your balance:</h5>
                        <p class="mb-2 mt-2 title-big color-gold">{{ \Illuminate\Support\Facades\Auth::user()->balance }}$</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card">
                    <div class="card-body card-body-light">
                        <h5>Hold</h5>
                        <p class="mb-2 mt-2 title-big color-gold">0$</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-md-12">
                <form method="post" action="{{ route('transactions.store') }}">
                    <div class="card">
                        <div class="card-body form-body pt-4 pb-4">
                                @csrf
                                <div class="row mb-3">
                                    <div class="col-md-12">
                                        <p class="title-big">Withdraw money</p>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-md-12">
                                        <select name="to" id="" class="form-control form-select" style="background: #0E0E2A;color:#fff;border: 1px solid rgba(250,250,250,.2);">
                                            <option value="card">Card</option>
                                            <option value="phone">Phone</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <div class="col-md-12">
                                        <input id="name" type="text" placeholder="Type requisite" class="form-control" name="requisite" required="" autocomplete="name" autofocus="">
                                    </div>
                                </div>

                                <div class="row mb-4">
                                    <div class="col-md-12">
                                        <input id="name" type="text" placeholder="Type amount in $" class="form-control" name="amount" required="" autocomplete="name" autofocus="">
                                    </div>
                                </div>

                                <div class="row mb-0 mt-3">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div></div>
                                        <input type="submit" class="btn btn-warning" value="Send request">
                                    </div>
                                </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-md-12 mb-3 mt-3">
                <div class="title-medium text-white">
                    History
                </div>
            </div>
            <div class="col-md-12">
                <table class="table">
                    <thead>
                    <tr>
                        <th>Amount</th>
                        <th>Withdraw to</th>
                        <th>Requisites</th>
                        <th>Status</th>
                        <th>Send date</th>
                    </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
@endsection
