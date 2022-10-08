@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12 mb-3">
                <a href="{{ route('offers.index') }}" class="btn btn-warning text-black" style="width: 144px;">← Go back</a>
            </div>
            <div class="col-md-12 mb-4">
                <div class="card">
                    <div class="card-body card-body-light">
                        <h5 style="margin-bottom: -5px;">
                            {{ $offer->title }}
                        </h5>
                        <span style="font-size: 11px;color:rgba(250,250,250,.2) !important;margin-top: -30px;">Offer id: {{ $offer->id }}</span>

                        <p class="mb-2 mt-2 title-medium"><span class="color-gold">{{ $offer->award }}</span> or <span class="color-gold">{{ $offer->percent_award }}%</span></p>
                    </div>
                </div>
            </div>
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body card-body-light">
                        <div class="title-medium color-gold">Links</div>
                        <label for="link" class="mt-3">Your personal link:</label>
                        <input type="text" id="link" class="form-control" value="azimut777.net?partner={{ \Illuminate\Support\Facades\Auth::user()->cpa_id }}&type=cpa">
                        <label for="share_link" class="mt-4">For reshare:</label>
                        <input type="text" id="share_link" class="form-control" value=azimut777.net?partner={{ \Illuminate\Support\Facades\Auth::user()->cpa_id }}&type=revshare>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
