<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.bunny.net/css?family=Nunito" rel="stylesheet">

    <!-- Scripts -->
    @vite(['resources/sass/app.scss', 'resources/sass/styles.scss', 'resources/js/app.js', 'resources/js/scripts.js'])
</head>
<body>
    <div id="app">
        <nav class="navbar navbar-expand-md navbar-light shadow-sm">
            <div class="container">
                <a class="navbar-brand" href="{{ url('/') }}">
                    <img src="{{ asset('img/azimut.svg') }}" alt="" width="100px" style="width: 100px !important;">
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse d-xl-flex justify-content-between" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <div></div>

                    @if (\Illuminate\Support\Facades\Auth::check())
                        <div>
                            <span class="badge bg-success p-3 pt-2 pb-2 mr-2 fs-5">0$ <a href="">?</a></span>
                            <span class="badge bg-warning p-3 pt-2 pb-2 fs-5">0$ <a href="">?</a></span>
                        </div>
                    @else
                        <div class="header-links">
                            <a href="{{ route('home') }}" class="menu-link">Dashboard</a>
                            <a href="{{ route('offers.index') }}" class="menu-link">Offers</a>
                            <a href="{{ route('links.index') }}" class="menu-link">Links</a>
                            {{--                        <a href="/news" class="menu-link">My profile</a>--}}
                            <a href="/wallet" class="menu-link">Wallet</a>
                        </div>
                    @endif

                    @if(\Illuminate\Support\Facades\Auth::check())
                        <div class="d-flex align-items-center">
                            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.5 0.583374C6.37776 0.583374 0.583344 6.37779 0.583344 13.5V18.8514C0.583344 20.1741 1.74197 21.25 3.16668 21.25H4.45834C4.80092 21.25 5.12946 21.114 5.37169 20.8717C5.61392 20.6295 5.75001 20.3009 5.75001 19.9584V13.3153C5.75001 12.9728 5.61392 12.6442 5.37169 12.402C5.12946 12.1598 4.80092 12.0237 4.45834 12.0237H3.28551C4.00368 7.02492 8.30493 3.16671 13.5 3.16671C18.6951 3.16671 22.9963 7.02492 23.7145 12.0237H22.5417C22.1991 12.0237 21.8706 12.1598 21.6283 12.402C21.3861 12.6442 21.25 12.9728 21.25 13.3153V21.25C21.25 22.6748 20.0914 23.8334 18.6667 23.8334H16.0833V22.5417H10.9167V26.4167H18.6667C21.5161 26.4167 23.8333 24.0995 23.8333 21.25C25.2581 21.25 26.4167 20.1741 26.4167 18.8514V13.5C26.4167 6.37779 20.6223 0.583374 13.5 0.583374Z" fill="white"/>
                            </svg>
                            <div class="d-flex flex-column m-2 mt-0 mb-0">
                                <p class="mb-0 mt-1 pb-0">Your support</p>
                                <a type="button" data-toggle="modal" data-target="#supportModal" style="margin-top: -10px;font-size: 18px;color:#FFB800 !important;text-decoration: none;">Denis</a>
                            </div>
                        </div>
                    @endif

                    <!-- Right Side Of Navbar -->
{{--                    <ul class="navbar-nav ms-auto">--}}
{{--                        <!-- Authentication Links -->--}}
{{--                        @guest--}}
{{--                            @if (Route::has('login'))--}}
{{--                                <li class="nav-item">--}}
{{--                                    <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>--}}
{{--                                </li>--}}
{{--                            @endif--}}

{{--                            @if (Route::has('register'))--}}
{{--                                <li class="nav-item">--}}
{{--                                    <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>--}}
{{--                                </li>--}}
{{--                            @endif--}}
{{--                        @else--}}
{{--                            <li class="nav-item dropdown">--}}
{{--                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>--}}
{{--                                    {{ Auth::user()->name }}--}}
{{--                                </a>--}}

{{--                                <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">--}}
{{--                                    <a class="dropdown-item" href="{{ route('logout') }}"--}}
{{--                                       onclick="event.preventDefault();--}}
{{--                                                     document.getElementById('logout-form').submit();">--}}
{{--                                        {{ __('Logout') }}--}}
{{--                                    </a>--}}

{{--                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">--}}
{{--                                        @csrf--}}
{{--                                    </form>--}}
{{--                                </div>--}}
{{--                            </li>--}}
{{--                        @endguest--}}
{{--                    </ul>--}}
                </div>
            </div>
        </nav>
        @if(\Illuminate\Support\Facades\Auth::check())
            <nav class="navbar navbar-expand-md navbar-light shadow-sm" style="background: rgba(0,0,0,.08);">
                <div class="container">
                    <div class="row" style="margin: 0 auto;">
                        <div class="header-links text-center">
                            <a href="{{ route('home') }}" class="menu-link">Dashboard</a>
                            <a href="{{ route('offers.index') }}" class="menu-link">Offers</a>
                            <a href="{{ route('links.index') }}" class="menu-link">Links</a>
                            {{--                        <a href="/news" class="menu-link">My profile</a>--}}
                            <a href="/wallet" class="menu-link">Wallet</a>
                        </div>
                    </div>
                </div>
            </nav>
        @endif

        <main class="py-4">
            @yield('content')
        </main>
    </div>

    <div class="modal fade" id="supportModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Your support</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="title-medium color-white">Denis</div>
                    <p class="mb-2 mt-1 text-muted">Contact with:</p>
                    <a href="https://t.me/playtime_777" target="_blank">Telegram</a>
{{--                    <a href="">WhatsApp</a>--}}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-warning" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
