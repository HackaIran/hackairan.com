<!DOCTYPE html>
<html lang="en">

<head>

    <title>{{$data->name}} | Hacka{Iran}</title>

    <!-- Meta Tags -->

    <meta charset="UTF-8">

    <meta name="Description" content="{{$data->short_description}}"/>

    <meta name="Keywords"
          content="Hacka, HackaIran, HackaGlobal, {{$data->keywords}}"/>

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <!-- Styles -->

    <link rel="stylesheet" href="{{asset('css/global/style.css')}}">

    <link rel="stylesheet" href="{{asset('css/global/responsive.css')}}">

    <!-- Fav Icon -->

    <link rel="icon" type="image/png" sizes="32x32" href="{{asset('assets/images/fav-icon.png')}}">

    <!-- Fonts -->

    <link rel="stylesheet" href="https://code.cdn.mozilla.net/fonts/fira.css">

</head>

<body>

<div id="wrapper">

    <!-- Let's Roll -->

    <header id="mainHeader">

        <img src="{{$data->header_image}}"/>

        <div id="videoOverlay">

        </div>

        <div id="headerIntro" class="hackaPart">
            <a href="{{url('/')}}">
                <img src="{{asset("assets/images/hacka_white.png")}}" alt="Hacka Global" title="Hacka Global"/>
            </a>
            <h4>
                <a href="{{url('/')}}">
                    Hacka
                    <span class="highlight">{Iran}</span>
                </a>
            </h4>
            <h1>
                @if($data->logo_address == null || $data->logo_address == "")
                    {{$data->description}}
                @else
                    <img src="{{$data->logo_address}}"/>
                @endif
            </h1>
            <p class="text">
                {{$data->description}}
            </p>
        </div>

    </header>

    <!-- Event Section -->

    <section class="section" id="eventSection">
        <div class="md-preloader" id="eventPreLoader">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="32" width="32" viewbox="0 0 75 75">
                <circle cx="37.5" cy="37.5" r="33.5" stroke-width="8"/>
            </svg>
        </div>
        <div id="noEventFound">
            <span>
                It seems that there’s no {{$data->name}} in the next 2 months!
            </span>
        </div>
        <div id="eventSectionWrapper">
            <div>

                <div id="eventDescriptionCont">

                    <a href="#" target="_blank" id="eventBtn" data-active="true">
                        Nothing To Register!
                    </a>

                    <h2>

                    </h2>

                    <h3>

                    </h3>

                    <time>

                    </time>

                    <p>

                        -

                    </p>

                </div>

                <div id="timeline">

                    <div id="now">

                    </div>

                </div>

            </div>

            <aside>
                <h2>
                    Upcoming events
                </h2>
                <ul>

                </ul>
            </aside>

        </div>

    </section>

@if(count($gallery) != 0)

    <!-- Gallery Section -->

        <section class="section" id="gallerySection">

            <header class="sectionheader">

                <h2>

                    Gallery,
                    <span class="highlight">Our Memories!</span>

                </h2>

            </header>

            <div id="galleryCont">
                <div id="rtArrow">
                    <i class="arrow-right"></i>
                </div>
                <div id="ltArrow">
                    <i class="arrow-left"></i>
                </div>
                <div id="galleryImagesCont">
                    @foreach($gallery->images as $image)
                        <div class="galleryImage">
                            <img src="{{$image->image_address}}"/>
                        </div>
                    @endforeach
                </div>
            </div>

        </section>

    @endif

</div>

<!-- scripts -->

<script>

    //specifing the id for getting timeline and galley

    window.type = {{$data->id}};

</script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.20.1/moment.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.min.js"></script>

<script src="{{asset('js/app.js')}}"></script>

</body>

</html>