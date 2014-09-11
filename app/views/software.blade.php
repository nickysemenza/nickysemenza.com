@extends('layout')

@section('content')

<div class="row">

    <div class="col-lg-12">
        <h1 class="page-header">Software Projects
            <small>miscellaneous small coding projects</small>
        </h1>
        <h5>my latest projects can be found at <a href="https://github.com/nickysemenza">github.com/nickysemenza</a></h5>
    </div>

</div>

@foreach($projects as $eachproject)

<div class="row">

    <div class="col-lg-5 col-md-5">
        <div class="video-container">
            <img style="height:auto; width:auto; max-width:500px;" src="{{$eachproject['image']}}">
        </div>
    </div>

    <div class="col-lg-7 col-md-7">
        <h3>{{$eachproject['title']}}</h3>
        <h4><a href="http://{{$eachproject['url']}}">{{$eachproject['url']}}</a> </h4>
        <h5>Built with: {{$eachproject['tech']}}</h5>
        <p>{{$eachproject['description']}}</p>
    </div>

</div>
<br>
<hr>

@endforeach
@stop