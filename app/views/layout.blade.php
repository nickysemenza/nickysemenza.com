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
    {{ HTML::style('//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css'); }}
    @show

    @section('js')

    {{ HTML::script('//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js'); }}
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
<!--    <h1 id="heading">@section('append_heading')@show</h1>-->
    @yield('content')
</div>



</div>
<div class="site-footer">
    <div class="container">
        <br>
        <div class="row">
            <div class="col-lg-12">
                <p style="color: white">Copyright &copy; Nicky Semenza 2014</p>
            </div>
        </div>
    </div>
</div>


@section('bottom_js')
@show
</body>
</html>