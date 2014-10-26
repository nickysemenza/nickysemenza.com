@extends('layout')


@section('append_header')

    {{ HTML::script('owl-carousel/owl.carousel.js'); }}
    {{ HTML::style('owl-carousel/owl.theme.css'); }}
    {{ HTML::style('owl-carousel/owl.carousel.css'); }}

<script>
$(document).ready(function() {

  $("#owl-demo").owlCarousel({

      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true

      // "singleItem:true" is a shortcut for:
      // items : 1,
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false

  });

});
</script>
<style>
#owl-demo .item img{
    display: block;
    width: 100%;
    height: auto;
}
</style>
@stop
@section('content')

<h1 class="headertext">Photography</h1>
<p>You can view my full gallery and archives at <a href="https://photos.nickysemenza.com">photos.nickysemenza.com</a></p>

<hr>


 <div id="owl-demo">

          {{--<div class="item"><img src="http://res.cloudinary.com/nickysemenza/image/upload/c_limit,h_1600,w_1800/v1409606444/frontpage_2.jpg" alt="Owl Image"><p style="text-align: center;">CAPTION</p></div>--}}
          <div class="item"><img src="http://res.cloudinary.com/nickysemenza/image/upload/c_limit,h_1800,w_1600/v1413262534/DSC_9350_zlfann.jpg"></div>
           <div class="item"><img src="http://cdn.nickysemenza.com/assets/portfolio_images/img_1.jpg"></div>
           <div class="item"><img src="http://cdn.nickysemenza.com/assets/portfolio_images/img_2.jpg"></div>
           <div class="item"><img src="http://cdn.nickysemenza.com/assets/portfolio_images/img_3.jpg"></div>
           <div class="item"><img src="http://cdn.nickysemenza.com/assets/portfolio_images/img_4.jpg"></div>
           <div class="item"><img src="http://cdn.nickysemenza.com/assets/portfolio_images/img_5.jpg"></div>
           <div class="item"><img src="http://cdn.nickysemenza.com/assets/portfolio_images/img_6.jpg"></div>
           <div class="item"><img src="http://cdn.nickysemenza.com/assets/portfolio_images/img_7.jpg"></div>
           <div class="item"><img src="http://cdn.nickysemenza.com/assets/portfolio_images/img_8.jpg"></div>
           <div class="item"><img src="http://cdn.nickysemenza.com/assets/portfolio_images/img_9.jpg"></div>
           <div class="item"><img src="http://cdn.nickysemenza.com/assets/portfolio_images/img_10.jpg"></div>
           <div class="item"><img src="http://cdn.nickysemenza.com/assets/portfolio_images/img_11.jpg"></div>
           <div class="item"><img src="http://cdn.nickysemenza.com/assets/portfolio_images/img_12.jpg"></div>
           <div class="item"><img src="http://cdn.nickysemenza.com/assets/portfolio_images/img_13.jpg"></div>
           <div class="item"><img src="http://cdn.nickysemenza.com/assets/portfolio_images/img_14.jpg"></div>
           <div class="item"><img src="http://cdn.nickysemenza.com/assets/portfolio_images/img_15.jpg"></div>
           <div class="item"><img src="http://cdn.nickysemenza.com/assets/portfolio_images/img_16.jpg"></div>
           <div class="item"><img src="http://cdn.nickysemenza.com/assets/portfolio_images/img_17.jpg"></div>
           <div class="item"><img src="http://cdn.nickysemenza.com/assets/portfolio_images/img_18.jpg"></div>
           <div class="item"><img src="http://cdn.nickysemenza.com/assets/portfolio_images/img_19.jpg"></div>
           <div class="item"><img src="http://cdn.nickysemenza.com/assets/portfolio_images/img_20.jpg"></div>
           <div class="item"><img src="http://cdn.nickysemenza.com/assets/portfolio_images/img_21.jpg"></div>
           <div class="item"><img src="http://cdn.nickysemenza.com/assets/portfolio_images/img_22.jpg"></div>

        </div>




<h3 class="headertext">Some of my favorite pictures</h3>
<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="800" height="800" id="ssidx"><param name="movie" value="http://cdn.smugmug.com/ria/ShizamSlides-2013072402.swf" /><param name="flashVars" value="AlbumID=44382840&AlbumKey=wXtF6f&transparent=true&bgColor=&borderThickness=&borderColor=&useInside=&endPoint=&mainHost=cdn.smugmug.com&VersionNos=2013072402&width=800&height=800&clickToImage=true&captions=true&showThumbs=true&autoStart=true&showSpeed=true&pageStyle=white&showButtons=true&randomStart=false&randomize=true&splash=http%3A%2F%2Fwww.smugmug.com%2Fimg%2Fria%2FShizamSlides%2Fsmugmug_black.png&splashDelay=0&crossFadeSpeed=350" /><param name="wmode" value="transparent" /><param name="allowNetworking" value="all" /><param name="allowScriptAccess" value="always" /><embed src="http://cdn.smugmug.com/ria/ShizamSlides-2013072402.swf" flashVars="AlbumID=44382840&AlbumKey=wXtF6f&transparent=true&bgColor=&borderThickness=&borderColor=&useInside=&endPoint=&mainHost=cdn.smugmug.com&VersionNos=2013072402&width=800&height=800&clickToImage=true&captions=true&showThumbs=true&autoStart=true&showSpeed=true&pageStyle=white&showButtons=true&randomStart=false&randomize=true&splash=http%3A%2F%2Fwww.smugmug.com%2Fimg%2Fria%2FShizamSlides%2Fsmugmug_black.png&splashDelay=0&crossFadeSpeed=350" width="800" height="800" wmode="transparent" type="application/x-shockwave-flash" allowScriptAccess="always" allowNetworking="all" ></embed></object>
<hr>





@stop