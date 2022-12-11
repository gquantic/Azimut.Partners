@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12 mb-3">
                <a href="{{ route('streams.index') }}" class="btn btn-warning text-black" style="width: 144px;">← Go back</a>
            </div>
            <div class="col-md-12">
                <div class="card">
                    <form action="{{ route('streams.store') }}" method="post" class="form card-body card-body-light">
                        @csrf
                        <div class="form-group">
                            <label for="">Source</label>
                            <input type="text" class="form-control" name="source">
                        </div>
                        <div class="form-group mt-3">
                            <label for="">Title</label>
                            <input type="text" class="form-control" name="title">
                        </div>
                        <div class="form-group mt-3 mb-4">
                            <label for="">Description</label>
                            <input type="text" class="form-control" name="description">
                        </div>

                        <input type="submit" class="btn btn-warning mt-2" value="Add stream">
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
