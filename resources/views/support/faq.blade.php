@extends('layouts.app')

@section('content')
    <section class="container mt-5">
        <h4>What is CPA?</h4>
        <p>CPA - Cost Per Action — type of payment for a specific action. In our case - a deposit at the casino. <br>
            Bring a person to the link and you will get money for a deposit.</p>

        <hr>

        <h4>What is RevShare?</h4>
        <p class="mb-0">You get a percentage from each loss of the player and the players attracted by him (pyramid).</p>
        <p>See the pyramid below.</p>

        <hr>

        <h4>Referrals system</h4>
        <p>The system has a very powerful five-level referral system</p>

        <img src="{{ asset('img/faq/unfilled-triangle.png') }}" width="800px" alt="">

        <p class="mt-4">This is what an unfilled pyramid looks like. Interest is credited only for the topmost player.</p>

        <img src="{{ asset('img/faq/gold-triangle.png') }}" width="800px" alt="">

        <p class="mt-4">This is the golden triangle. <br>
            The referral invited the right and left hand. The rate has been increased by 1.2 times</p>
    </section>

    <style>
        hr {
            color: #fff;
        }
    </style>
@endsection
