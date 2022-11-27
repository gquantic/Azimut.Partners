@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row mt-5">
            <div class="col-md-12 mb-4">
                <div class="row">
                    <div class="col-md-2 d-flex flex-column align-items-center">
                        <a href="{{ route('players.show', ($refer->id ?? '')) }}" class="btn btn-warning text-black">
                            ← Go back
                        </a>
                    </div>
                </div>
            </div>
{{--            <div class="col-md-6 mb-2">--}}
{{--                <div class="title-medium color-white">--}}
{{--                    <span class="color-gold">[{{ $player->id }}]</span> player and his referrals--}}
{{--                </div>--}}
{{--            </div>--}}
        </div>
{{--        <div class="row mt-3">--}}
{{--            @foreach($players as $player)--}}
{{--                <div class="col-md-1 d-flex flex-column align-items-center">--}}
{{--                    <div class="card w-100">--}}
{{--                        <div class="card-body-light pt-2 pb-2">--}}
{{--                            <a href="{{ route('players.show', $player->id) }}" class="text-decoration-none">--}}
{{--                                    <div class="text-white color-white" style="width: fit-content;margin: 0 auto;">{{ $player->id }}</div>--}}
{{--                            </a>--}}
{{--                        </div>--}}
{{--                    </div>--}}
{{--                </div>--}}
{{--            @endforeach--}}
{{--        </div>--}}
        <div class="row">
            <h4 class="text-center">Branches details</h4>
        </div>
        <div class="row">
            <div class="first-level">
                {!! $displayController->display('first', 0) !!}
            </div>

            <!-- SECOND LEVEL -->
            <div class="second-level">
                {!! $displayController->display('second', 0) !!}
                {!! $displayController->display('second', 1) !!}
            </div>

            <!-- THIRD LEVEL -->
            <div class="third-level">
                <div class="group">
                    {!! $displayController->display('third', 0) !!}
                    {!! $displayController->display('third', 1) !!}
                </div>

                <div class="group">
                    {!! $displayController->display('third', 2) !!}
                    {!! $displayController->display('third', 3) !!}
                </div>
            </div>

            <!-- FOURTH LEVEL -->
            <div class="fourth-level">
                <div class="group">
                    {!! $displayController->display('fourth', 0) !!}
                    {!! $displayController->display('fourth', 1) !!}
                </div>

                <div class="group">
                    {!! $displayController->display('fourth', 2) !!}
                    {!! $displayController->display('fourth', 3) !!}
                </div>

                <div class="group">
                    {!! $displayController->display('fourth', 4) !!}
                    {!! $displayController->display('fourth', 5) !!}
                </div>

                <div class="group">
                    {!! $displayController->display('fourth', 6) !!}
                    {!! $displayController->display('fourth', 7) !!}
                </div>
            </div>

            <!-- FIVE LEVEL -->
            <div class="five-level">
                <div class="group">
                    {!! $displayController->display('five', 0) !!}
                    {!! $displayController->display('five', 1) !!}
                </div>

                <div class="group">
                    {!! $displayController->display('five', 2) !!}
                    {!! $displayController->display('five', 3) !!}
                </div>

                <div class="group">
                    {!! $displayController->display('five', 4) !!}
                    {!! $displayController->display('five', 5) !!}
                </div>

                <div class="group">
                    {!! $displayController->display('five', 6) !!}
                    {!! $displayController->display('five', 7) !!}
                </div>

                <div class="group">
                    {!! $displayController->display('five', 8) !!}
                    {!! $displayController->display('five', 9) !!}
                </div>

                <div class="group">
                    {!! $displayController->display('five', 10) !!}
                    {!! $displayController->display('five', 11) !!}
                </div>

                <div class="group">
                    {!! $displayController->display('five', 12) !!}
                    {!! $displayController->display('five', 13) !!}
                </div>

                <div class="group">
                    {!! $displayController->display('five', 14) !!}
                    {!! $displayController->display('five', 15) !!}
                </div>
            </div>
        </div>
    </div>


{{--    <component :is="'script'">--}}
{{--        $('.people').hover(function (element) {--}}
{{--            $(element).children('.info').addClass('show');--}}
{{--        });--}}
{{--    </component>--}}

@endsection
