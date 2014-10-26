@extends('layout')

@section('content')

<div class="row">

    <div class="col-lg-12">
        <h1 class="page-header headertext">Software Projects
            <small>a collection of various software projects I have worked on</small>
        </h1>
        <h3>My latest projects can be found at <a href="https://github.com/nickysemenza">github.com/nickysemenza</a></h3>
    </div>

</div>

@foreach($projects as $eachproject)
<hr>

<div class="row">

    <div class="col-lg-5 col-md-4">
        <div class="video-container">
            <img style="width:96%; height: 96%;" src="{{$eachproject['image']}}">
        </div>
    </div>

    <div class="col-lg-7 col-md-7">
        <div class="row">
            <div class="col-lg-6">
            <h3 class="headertext">{{$eachproject['title']}}</h3>
            </div>
            <div class="col-lg-6">
            <h3 class="headertext" style="text-align: right">{{$eachproject['time']}}</h3>
            </div>

        </div>

        <h4><a href="http://{{$eachproject['url']}}">{{$eachproject['url']}}</a> </h4>
        <p>Built with: {{$eachproject['tech']}}</p>
        <p>{{$eachproject['description']}}</p>
    </div>

</div>
<br>


@endforeach
@stop