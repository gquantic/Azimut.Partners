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
                        <form action="">
                            <input type="text" name="title" placeholder="Link name" class="form-control mb-2">
                            <select name="type" id="" class="form-control mb-2">
                                <option value="cpa">CPA</option>
                                <option value="revshare">RevShare</option>
                            </select>
                            <select name="host" id="" class="form-control mb-2">
                                <option value="urltrack.net">urltrack.net</option>
                            </select>
                            <textarea name="comment" id="" cols="30" rows="4" placeholder="Comment" class="form-control mb-2"></textarea>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
