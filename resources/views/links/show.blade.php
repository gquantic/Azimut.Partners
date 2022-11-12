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
                            {{ $link->title }}
                        </h5>
                        <span style="font-size: 11px;color:rgba(250,250,250,.2) !important;margin-top: -30px;"></span>
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
