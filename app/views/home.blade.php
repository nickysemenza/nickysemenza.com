@extends('layout')


@section('outside_container')
<div id="myCarousel" class="carousel slide">
    <!-- Indicators -->
    <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
    </ol>

    <!-- Wrapper for slides -->
    <div class="carousel-inner">
        <div class="item active">
            <div class="fill" style="background-image:url('http://res.cloudinary.com/nickysemenza/image/upload/frontpage_1.jpg');"></div>
            <div class="carousel-caption">
                <h1></h1>
            </div>
        </div>
        <div class="item">
            <div class="fill" style="background-image:url('http://res.cloudinary.com/nickysemenza/image/upload/frontpage_2.jpg');"></div>
            <div class="carousel-caption">
                <h1></h1>
            </div>
        </div>
    </div>

    <!-- Controls -->
    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
        <span class="icon-prev"></span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
        <span class="icon-next"></span>
    </a>
</div>


@stop
@section('content')


test

@stop