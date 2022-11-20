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
                        <div class="d-flex justify-content-between">
                            <h5 style="margin-bottom: -5px;">
                                {{ $offer->title }}
                            </h5>
                            <a href="{{ $offer->host }}" target="_blank">
                                <button class="btn btn-warning" style="height: 35px;">
                                    <img src="{{ asset('img/eye-svgrepo-com.svg') }}" alt="" style="width: 30px !important;">
                                </button>
                            </a>
                        </div>
                        <span style="font-size: 11px;color:rgba(250,250,250,.2) !important;margin-top: -30px;">Offer id: {{ $offer->id }}</span>

{{--                        <p class="mb-2 mt-2 title-medium">--}}
{{--                            <span class="color-gold">{{ $offer->award }}$ for CPA</span> or--}}
{{--                            <span class="color-gold">{{ $offer->percent_award }}% for revshare</span>--}}
{{--                        </p>--}}
                        <p style="margin-top: 5px;">
                            {!! $offer->description !!}
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body card-body-light">
                        <h5>Create link</h5>
                        <form action="{{ route('links.store') }}" method="post">
                            @csrf
                            <input type="text" name="offer_id" value="{{ $offer->id }}" hidden>
                            <div class="form-group mt-3">
                                <label for="">Link title</label>
                                <input type="text" name="title" placeholder="New link" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="">Connection type</label>
                                <select name="type" id="" class="form-control mb-2">
                                    <option value="cpa">CPA</option>
                                    <option value="revshare">RevShare</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="">Link host</label>
                                <select name="host" id="" class="form-control mb-2">
                                    <option value="urltrack.net">urltrack.net</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="">Comment</label>
                                <textarea name="comment" id="" cols="30" rows="4" placeholder="Comment" class="form-control mb-2"></textarea>
                            </div>
                            <div class="d-flex justify-content-start">
                                <input type="submit" value="Create" class="btn btn-warning text-black mt-2 mb-2">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
