<?php

namespace App\Http\Controllers;

use App\Http\Requests\StreamStoreRequest;
use App\Models\Stream;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class StreamController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function index()
    {
        return view('profile.streams.index', [
            'streams' => Stream::query()->where('user_id', Auth::id())->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function create()
    {
        return view('profile.streams.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param StreamStoreRequest $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(StreamStoreRequest $request)
    {
        Stream::query()->create([
            'user_id' => Auth::id(),
            'source' => $request->post('source'),
            'title' => $request->post('title'),
            'description' => $request->post('description'),
        ]);

        return redirect()->route('streams.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Stream  $stream
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function show(Stream $stream)
    {
        return view('profile.streams.show', compact('stream'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Stream  $stream
     * @return \Illuminate\Http\Response
     */
    public function edit(Stream $stream)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Stream  $stream
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Stream $stream)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Stream  $stream
     * @return \Illuminate\Http\Response
     */
    public function destroy(Stream $stream)
    {
        //
    }
}
