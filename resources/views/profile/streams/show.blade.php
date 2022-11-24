@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12 mb-3">
                <a href="{{ route('streams.index') }}" class="btn btn-warning text-black" style="width: 144px;">← Go back</a>
            </div>
            <div class="col-md-12 mb-4">
                <div class="card">
                    <div class="card-body card-body-light d-flex justify-content-between">
                        <h5 style="margin-bottom: -5px;">
                            {{ $stream->title }}
                        </h5>
                    </div>
                </div>
            </div>
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body card-body-light">
                        <h5 class="mb-3">Stream details</h5>
                        <dl class="text-white">
                            <dt>Title:</dt>
                            <dd>{{ $stream->title }}</dd>
                        </dl>
                        <dl class="text-white mb-3">
                            <dt>Description:</dt>
                            <dd>{{ $stream->description }}</dd>
                        </dl>
                        <dl class="text-white mb-2">
                            <dt>Source:</dt>
                            <dd><a href="{{ $stream->source }}" target="_blank" class="color-gold">{{ $stream->source }}</a></dd>
                        </dl>
                    </div>
                </div>
            </div>
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body card-body-light">
                        <h5 class="mb-3">Links</h5>

                        @foreach($stream->links->get() as $link)
                            
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
