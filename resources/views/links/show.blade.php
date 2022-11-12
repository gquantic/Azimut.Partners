@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12 mb-3">
                <a href="{{ route('offers.index') }}" class="btn btn-warning text-black" style="width: 144px;">← Go back</a>
            </div>
            <div class="col-md-12 mb-4">
                <div class="card">
                    <div class="card-body card-body-light d-flex justify-content-between">
                        <h5 style="margin-bottom: -5px;">
                            {{ $link->title }}
                        </h5>
                        <a href="{{ route('offers.show', $link->offer_id) }}" class="text-decoration-none">
                            Connected offer: <span class="color-gold ml-1">{{ $link->offer->title }}</span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body card-body-light">
                        <h5 class="mb-3">Link details</h5>
                        <dl class="text-white">
                            <dt>Title:</dt>
                            <dd>{{ $link->title }}</dd>
                        </dl>
                        <dl class="text-white mb-3">
                            <dt>Comment:</dt>
                            <dd>{{ $link->comment }}</dd>
                        </dl>
                        <dl class="text-white mb-3">
                            <dt>Type:</dt>
                            <dd>{{ $link->type }}</dd>
                        </dl>
                        <dl class="text-white mb-2">
                            <dt>Host:</dt>
                            <dd>{{ $link->host }}</dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
