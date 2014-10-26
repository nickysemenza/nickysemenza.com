@extends('layout')
@section('title')
Nicky Semenza
@stop
@section('append_header')

    {{ HTML::script('owl-carousel/owl.carousel.js'); }}
    {{ HTML::style('owl-carousel/owl.theme.css'); }}

    {{ HTML::style('owl-carousel/owl.carousel.css'); }}

<script>
$(document).ready(function() {

  $("#owl-demo").owlCarousel({

      autoPlay: 3000, //Set AutoPlay to 3 seconds

      items : 4
  });

});
</script>

@stop


@section('outside_container')



<div id="mydiv" style="height: 400px;">
    <div class="container">


        <h1 style="text-align: center">Nicky Semenza</h1>
        <h2 style="text-align: center">photographer <a class="gold">|</a> software developer <a class="gold">|</a>  videographer</h2>
        <hr class="divider">


        <div id="owl-demo">

          <div class="item"><img src="http://res.cloudinary.com/nickysemenza/image/upload/c_limit,h_600,w_800/v1409606444/frontpage_2.jpg" alt="Owl Image"></div>
          <div class="item"><img src="http://res.cloudinary.com/nickysemenza/image/upload/c_limit,h_600,w_800/v1413262534/DSC_4555_jnjbl4.jpg" alt="Owl Image"></div>
          <div class="item"><img src="http://res.cloudinary.com/nickysemenza/image/upload/c_limit,h_800,w_600/v1413262534/DSC_9350_zlfann.jpg" alt="Owl Image"></div>
          <div class="item"><img src="http://res.cloudinary.com/nickysemenza/image/upload/c_scale,h_600,w_800/v1409606349/frontpage_1.jpg" alt="Owl Image"></div>


        </div>
    </div>

</div>
<div id="mydiv" style="height: 400px;">









    <div class="container">

    <div id="root">
           <div id="child1">
                <h2 class="headertext">Software Development</h2>
                 <p class="lead">I mainly build webapps, both on the job and for fun. You can check out some of my personal projects over <a href="projects">here.</a> </p>
           </div>
           <div id="child2">
                <h2 class="headertext">Photography/Videography</h2>
                <p class="lead">I am a freelance photographer and videographer, currently working for the <a href="http://purdueexponent.org" target="_blank">Purdue Exponent</a>.</p>
           </div>
    </div>


    </div>

</div>




@stop
@section('content')



@stop