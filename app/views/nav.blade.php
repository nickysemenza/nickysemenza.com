<div class="navbar navbar-custom navbar-fixed-top" role="navigation">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/">Nicky Semenza</a>
        </div>
        <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
                <li class="{{Request::path() == 'software' ? 'active' : '';}}"><a href="/software">Software Projects</a></li>
                <li class="{{Request::path() == 'videos' ? 'active' : '';}}"><a href="/videos">Videos</a></li>
                <li class="{{Request::path() == 'photos' ? 'active' : '';}}"><a href="/photos">Photos</a></li>
                <li class="{{Request::path() == 'about' ? 'active' : '';}}"><a href="/about">About</a></li>
            </ul>
        </div><!--/.nav-collapse -->
    </div>
</div>