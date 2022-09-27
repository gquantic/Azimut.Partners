<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.bunny.net/css?family=Nunito" rel="stylesheet">

    <!-- Scripts -->
    @vite(['resources/sass/app.scss', 'resources/sass/styles.scss', 'resources/js/app.js', 'resources/js/scripts.js'])
</head>
<body>
    <div id="app">
        <nav class="navbar navbar-expand-md navbar-light bg-dark shadow-sm">
            <div class="container">
                <a class="navbar-brand" href="{{ url('/') }}">
                    {{ config('app.name', 'Azimut.Partners') }}
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse d-xl-flex justify-content-between" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <div></div>

                    <div class="header-links">
                        <a href="{{ route('home') }}" class="menu-link">Dashboard</a>
                        <a href="/main" class="menu-link">Offers</a>
                        <a href="/news" class="menu-link">My profile</a>
                        <a href="" class="menu-link">Wallet</a>
                    </div>

                    <div class="d-flex align-items-center">
                        <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.5 0.583374C6.37776 0.583374 0.583344 6.37779 0.583344 13.5V18.8514C0.583344 20.1741 1.74197 21.25 3.16668 21.25H4.45834C4.80092 21.25 5.12946 21.114 5.37169 20.8717C5.61392 20.6295 5.75001 20.3009 5.75001 19.9584V13.3153C5.75001 12.9728 5.61392 12.6442 5.37169 12.402C5.12946 12.1598 4.80092 12.0237 4.45834 12.0237H3.28551C4.00368 7.02492 8.30493 3.16671 13.5 3.16671C18.6951 3.16671 22.9963 7.02492 23.7145 12.0237H22.5417C22.1991 12.0237 21.8706 12.1598 21.6283 12.402C21.3861 12.6442 21.25 12.9728 21.25 13.3153V21.25C21.25 22.6748 20.0914 23.8334 18.6667 23.8334H16.0833V22.5417H10.9167V26.4167H18.6667C21.5161 26.4167 23.8333 24.0995 23.8333 21.25C25.2581 21.25 26.4167 20.1741 26.4167 18.8514V13.5C26.4167 6.37779 20.6223 0.583374 13.5 0.583374Z" fill="white"/>
                        </svg>
                        <div class="d-flex flex-column m-2 mt-0 mb-0">
                            <p class="mb-0 pb-0">Your support</p>
                            <a href="" class="" style="margin-top: -10px;font-size: 18px;color:#FFB800 !important;text-decoration: none;">Denis</a>
                        </div>
                    </div>

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

        <main class="py-4">
            @yield('content')
        </main>
    </div>
</body>
</html>
