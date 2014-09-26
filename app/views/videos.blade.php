@extends('layout')

@section('content')


<div class="row">

    <div class="col-lg-12">
        <h1 class="page-header headertext">Video Portfolio
            <small>Projects ranging from documentary, action, and montages.</small>
        </h1>
    </div>

</div>

@foreach($videos as $eachvideo)

<div class="row">

    <div class="col-lg-7 col-md-7">
        <div class="video-container">
            <iframe width="1280" height="720" src="//www.youtube.com/v/{{$eachvideo['ytid']}}" frameborder="0" allowfullscreen></iframe>
        </div>
    </div>

    <div class="col-lg-5 col-md-5">
        <h3 class="headertext">{{$eachvideo['title']}}</h3>
        <h4 class="headertext">{{$eachvideo['subtitle']}}</h4>
        <p>{{$eachvideo['description']}}</p>
    </div>

</div>
<br>
<hr>

@endforeach

@stop