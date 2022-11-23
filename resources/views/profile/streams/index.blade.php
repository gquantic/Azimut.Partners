@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="row mt-5">
                    <div class="col-md-6 mb-2">
                        <div class="title-medium color-white">
                            Streams
                        </div>
                    </div>
                    <div class="col-md-6 d-flex justify-content-end">
                        <a href="{{ route('streams.create') }}" class="btn btn-warning text-black">Create stream</a>
                    </div>
                </div>
            </div>
            {{--            @foreach($offers as $offer)--}}
            {{--                <div class="col-md-4 mb-4">--}}
            {{--                    <div class="card">--}}
            {{--                        <div class="card-body card-body-light">--}}
            {{--                            <h5>{{ $offer->title }}</h5>--}}
            {{--                            <p class="mb-2 mt-2 title-medium"><span class="color-gold">{{ $offer->award }}</span> or <span class="color-gold">{{ $offer->percent_award }}%</span></p>--}}
            {{--                            <div class="d-flex justify-content-end">--}}
            {{--                                <a class="btn btn-dark color-white text-black m-2 mt-0 mb-0">Fast link copy</a>--}}
            {{--                                <a href="{{ route('offers.show', $offer->id) }}" class="btn btn-warning text-black">Go to offer</a>--}}
            {{--                            </div>--}}
            {{--                        </div>--}}
            {{--                    </div>--}}
            {{--                </div>--}}
            {{--            @endforeach--}}
            <div class="col-md-12">
                <table class="table">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Source</th>
                        <th>Description</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    @foreach($streams as $stream)
                        <tr>
                            <td><a href="{{ route('streams.show', $stream->id) }}">{{ $stream->title }}</a></td>
                            <td>{{ $stream->source }}</td>
                            <td>{{ $stream->description }}</td>
                            <td><a class="color-gold text-decoration-none" href="{{ route('streams.show', $stream->id) }}">Go to stream</a></td>
                        </tr>
                    @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
@endsection
