<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="token" content="{{ Session::token() }}">
    <meta content="utf-8" http-equiv="encoding">
    <title>@section('title')@show</title>
    @section('css')
    {{ HTML::style('css/bootstrap.min.css'); }}
    {{ HTML::style('css/custom.css'); }}
    {{ HTML::style('//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css'); }}
    @show

    @section('js')

    {{ HTML::script('//ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js'); }}
    {{ HTML::script('js/bootstrap.min.js'); }}

    <script type="text/javascript" src="//use.typekit.net/uco1lgt.js"></script>
    <script type="text/javascript">try{Typekit.load();}catch(e){}</script>

    {{ HTML::script('js/tracking.js'); }}
    @show

    @section('append_header')@show
</head>
<body>
<div class="page-wrap">
@section('outside_container')@show



@include('nav')
<div class="container">
    @yield('content')
</div>



</div>
<div class="site-footer">
    <div class="container">
        <br>
        <div class="row">
            <div class="col-lg-6">
                <p style="color: white">Copyright &copy; Nicky Semenza 2014</p>
                <p>nicky@nickysemenza.com</p>
            </div>
            <div class="col-lg-3"></div>
            <div class="col-lg-3">
                <a class="icon" href="http://youtube.com/14nicholasse"><i class="fa fa-youtube fa-2x"></i></a>
                <a class="icon" href="http://linkedin.com/in/nickysemenza"><i class="fa fa-linkedin fa-2x"></i></a>
                <a class="icon" href="http://github.com/nickysemenza"><i class="fa fa-github-alt fa-2x"></i></a>
                <a class="icon" href="http://lastfm.com/14nicholasse"><i class="fa fa-lastfm-square fa-2x"></i></a>
                <a class="icon" href="mailto:nicky@nickysemenza.com"><i class="fa fa-send-o fa-2x"></i></a>
            </div>
        </div>
    </div>
</div>


@section('bottom_js')
@show
</body>
</html>