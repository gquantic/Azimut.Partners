@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row mt-5">
            <div class="col-md-12 mb-4">
                <div class="row">
                    <div class="col-md-2 d-flex flex-column align-items-center">
                        <div class="card w-100">
                            <div class="card-body-light pt-2 pb-2">
                                <a href="{{ route('players.show', ($refer->id ?? '')) }}" class="text-decoration-none">
                                    <div class="text-white color-white" style="width: fit-content;margin: 0 auto;">< Go back</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 mb-2">
                <div class="title-medium color-white">
                    <span class="color-gold">[{{ $player->id }}]</span> player and his referrals
                </div>
            </div>
        </div>
        <div class="row mt-3">
            @foreach($players as $player)
                <div class="col-md-1 d-flex flex-column align-items-center">
                    <div class="card w-100">
                        <div class="card-body-light pt-2 pb-2">
                            <a href="{{ route('players.show', $player->id) }}" class="text-decoration-none">
                                <div class="text-white color-white" style="width: fit-content;margin: 0 auto;">{{ $player->id }}</div>
                            </a>
                        </div>
                    </div>
                </div>
            @endforeach
        </div>
        <div class="row">
            <h4 class="text-center">Branches details</h4>
        </div>
        <div class="row">
            <div>
                <div class="d-flex justify-content-center mb-2 mt-2 text-white">
                    Main player
                </div>
            </div>
            <div>
                @php
                    $referralController = new \App\Http\Controllers\Api\ReferralController();
                    $referrals = $referralController->checkHandles($player->cpa_id);

                    foreach ($referrals as $referral) {
                @endphp
                <div class="d-flex justify-content-center mb-2 mt-2">
                    @php
                        foreach ($referral as $referralBranch) {
                    @endphp
                    <div class="text-white color-gold ml-2 mr-2" style="width: fit-content;">[{{ $referralBranch }}]</div>
                    @php
                        }
                    @endphp
                </div>
                @php
                    }
                @endphp
            </div>
        </div>
    </div>
@endsection
