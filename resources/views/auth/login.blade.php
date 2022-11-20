@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
{{--                <div class="card-header" style="font-size: 20px;font-weight: 600;text-align: center;">{{ __('Login') }}</div>--}}

                <div class="card-body">
                    <form method="POST" action="{{ route('login') }}">
                        @csrf
                        <div class="row mt-5 mb-2">
                            <div class="col-12 text-center">
{{--                                <img src="https://генератор.дыма.рф/images_hanhi/77.gif"--}}
{{--                                     style="position:absolute;width:50px !important;margin-top: -118px;margin-left:-10px;transform: rotateX(15deg) rotateZ(-25deg)"--}}
{{--                                     alt="">--}}
                                <img src="{{ asset('img/azimut.svg') }}" alt="" style="width: 250px !important;margin-top: -60px;">
                                <p style="margin-top: 7px;">AFFILIATE NETWORK</p>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="email" class="col-md-4 col-form-label text-md-end">{{ __('Email Address') }}</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="password" class="col-md-4 col-form-label text-md-end">{{ __('Password') }}</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="col-md-6 offset-md-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>

                                    <label class="form-check-label" for="remember">
                                        {{ __('Remember Me') }}
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <div class="row">
                                    <div class="col-xl-3 col-md-12">
                                        <button type="submit" class="btn btn-warning">
                                            {{ __('Login') }}
                                        </button>
                                    </div>
                                    <div class="col-xl-8 col-md-12 pt-md-5 pt-xl-1">
                                        @if (Route::has('password.request'))
                                            <a class="btn btn-link" href="{{ route('password.request') }}">
                                                {{ __('Forgot Your Password?') }}
                                            </a>
                                        @endif
                                            <a class="btn btn-link" href="{{ route('register') }}">
                                                Create account
                                            </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

<style>
    body {
        background: url('/img/main-bg-lines.png') no-repeat left top/100%, url('/img/main-bg.jpg');
        background-repeat: repeat;
    }

    nav, .card, .card-body, .card-header {
        background: rgba(0,0,0,0) !important;
    }

    input[type="text"], input[type="password"], input[type="email"] {
        color: #fff !important;
        background: rgba(0,0,0,0) !important;
        border: 1px solid rgba(250,250,250,.2) !important;
    }
</style>
