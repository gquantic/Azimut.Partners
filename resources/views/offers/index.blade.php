@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
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
            <table class="table">
                <thead>
                    <tr>
                        <th>Offer</th>
                        <th>CPA</th>
                        <th>REVSHARE</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($offers as $offer)
                        <tr>
                            <td style="display: flex;align-items: center;">
                                <a href="{{ route('offers.show', $offer->id) }}">
                                    @if ($offer->img != '')
                                        <img src="{{ $offer->img }}" style="width: 30px !important;" class="mr-2" alt="">
                                    @endif

                                        {{ $offer->title }}
                                </a>
                            </td>
                            <td>10$</td>
                            <td>10% - 50% - ?</td>
                            <td><a class="color-gold text-decoration-none" href="{{ route('offers.show', $offer->id) }}">Go to offer</a></td>
                        </tr>
                    @endforeach
                    <tr>
                        <td colspan="4" class="color-gold">
                            At this moment for you available just one offer, to get more offers contact your manager.
                        </td>
                   </tr>
                </tbody>
            </table>
        </div>
    </div>
@endsection
