@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row mt-5">
            <div class="col-md-6 mb-2">
                <div class="title-medium color-white">
                    Invited players and their referrals
                </div>
            </div>
        </div>
        <div class="row mt-3">
            @foreach($players as $player)
                <div class="col-md-3 d-flex flex-column align-items-center">
                    <div class="card w-100">
                        <div class="card-body-light pt-2 pb-2">
                            <div class="text-white color-gold" style="width: fit-content;margin: 0 auto;">[{{ $player->id }}]</div>
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
                </div>
            @endforeach
        </div>
    </div>
@endsection
