@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-body card-body-light">
                        <h5>Your balance:</h5>
                        <p class="mb-2 mt-2 title-big color-gold">0$</p>
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
                <form action="">
                    <div class="card">
                        <div class="card-body form-body pt-4 pb-4">
                            <form method="POST" action="">
                                <input type="hidden" name="_token" value="uZKLFUa2sawbWcCASYQIWGaVTKWYkUsX4jMpZY1n">
                                <div class="row mb-3">
                                    <div class="col-md-12">
                                        <p class="title-big">Withdraw money</p>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-md-12">
                                        <select name="" id="" class="form-control form-select" style="background: #0E0E2A;color:#fff;border: 1px solid rgba(250,250,250,.2);">
                                            <option value="">Card</option>
                                            <option value="">Phone</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="row mb-4">
                                    <div class="col-md-12">
                                        <input id="name" type="text" placeholder="Type requisite" class="form-control" name="name" required="" autocomplete="name" autofocus="">
                                    </div>
                                </div>

                                <div class="row mb-0 mt-3">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div></div>
                                        <button type="submit" class="btn btn-warning"> Send request </button>
                                    </div>
                                </div>
                            </form>
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
