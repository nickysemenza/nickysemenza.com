@extends('layout')

@section('content')
<div class="row">
    <div class="col-md-8">
        <h2 class="featurette-heading headertext">About Nicky<span class="text-muted"> | Autobiography</span></h2>
        <p class="lead">Nicky is a hacker, coder, photographer, and videographer. He is a freshman at Purdue University majoring in Computer Science
            <br>
            <a href="/static/files/nickysemenza_resume.pdf">Resume</a>
        </p>

        <a class="btn" href="#"><i class="fa fa-youtube fa-2x"></i></a>
        <a class="btn" href="#"><i class="fa fa-flickr fa-2x"></i></a>

    </div>
    <div class="col-md-2">
        <h2 class="headertext">me!</h2>
        <img src="http://res.cloudinary.com/nickysemenza/image/upload/c_scale,w_800/v1409605832/me.jpg" width="400">
    </div>
</div>
@stop