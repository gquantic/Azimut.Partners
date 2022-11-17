@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            @foreach($offers as $offer)
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <div class="card-body card-body-light">
                            <h5>{{ $offer->title }}</h5>
                            <p class="mb-2 mt-2 title-medium"><span class="color-gold">{{ $offer->award }}</span> or <span class="color-gold">{{ $offer->percent_award }}%</span></p>
                            <div class="d-flex justify-content-end">
{{--                                <a class="btn btn-dark color-white text-black m-2 mt-0 mb-0">Fast link copy</a>--}}
                                <a href="{{ route('offers.show', $offer->id) }}" class="btn btn-warning text-black">Go to offer</a>
                            </div>
                        </div>
                    </div>
                </div>
            @endforeach
        </div>
    </div>
@endsection
