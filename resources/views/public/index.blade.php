<!DOCTYPE html>
<html lang="en">

<head>

    <title>Hacka{Iran} | The Largest Community of Developers in Iran</title>

    <!-- Meta Tags -->

    <meta charset="UTF-8">

    <meta name="Description" content="{{$description->value}}"/>

    <meta name="Keywords"
          content="Hacka, HackaIran, HackaGlobal, هاکا,هاکا ایران, مسابقه هاکا, HackaTeamup, Hackademy"/>

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <!-- Styles -->

    <link rel="stylesheet" href="{{asset('css/global/style.css')}}">

    <!-- Specially Fot This Page -->
    <style>
        #headerIntro{
            position: absolute;
        }
    </style>

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

        <video src="https://as1.cdn.asset.aparat.com/aparat-video/b906acebfc9fb2bdc122c4fe4d4c67079318264-144p__35098.mp4"
               autoplay
               loop>

        </video>

        <div id="videoOverlay">

        </div>

        <div id="headerIntro">
            <img src="{{asset("assets/images/hacka_white.png")}}" alt="Hacka Global" title="Hacka Global"/>
            <h1>
                Hacka
                <span class="highlight">{Iran}</span>
            </h1>
            <p class="text">
                {{$description->value}}
            </p>
        </div>

        <div class="arrow-down"></div>

    </header>

    <!-- Hacka Sections -->

    <section class="section" id="hackaSections">

        <div class="hackaSection" data-name="hackademy">

            <a href="hackademy" title="Hackademy">
                <img src="{{asset('assets/images/hackademy.png')}}" alt="Hackademy" title="Hackademy"/>

                <h2>
                    Hacka<span class="highlight">demy</span>
                </h2>
            </a>

        </div>

        <div class="hackaSection" data-name="hackateamup">

            <a href="hackateamup" title="Hackademy">
                <img src="{{asset('assets/images/teamup.png')}}" alt="HackaTeamUp" title="HackaTeamup"/>

                <h2>
                    Hacka<span class="highlight">Teamup</span>
                </h2>
            </a>

        </div>


    </section>

    <!-- Event Section -->

    <section class="section" id="eventSection">
        <div class="md-preloader" id="eventPreLoader">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="32" width="32" viewbox="0 0 75 75"><circle cx="37.5" cy="37.5" r="33.5" stroke-width="8"/></svg>
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

    <!-- Member's Section -->

    <section class="section" id="memberSection">

        <header class="sectionheader">
            <h2>
                People who truly believe in
                <span class="highlight">Hacka</span>
            </h2>
        </header>

        <div>
            @for($i=0;$i<count($teams);$i++)

                <div>

                    <video loop autoplay src="{{$teams[$i]->video_link}}"></video>

                    <h3>
                        {{$teams[$i]->full_name}}
                    </h3>

                    <span>
                        {{$teams[$i]->position}}
                    </span>

                    <ul class="socialIconCont">
                        @if(!is_null($teams[$i]->site))
                            <li>
                                <a href="{{$teams[$i]->site}}" target="_blank" title="Personal WebSite">
                                    <img alt="Personal WebSite" src="{{asset('assets/images/social/www.svg')}}"/>
                                </a>
                            </li>
                        @endif
                        @if(!is_null($teams[$i]->twitter))
                            <li>
                                <a href="{{$teams[$i]->twitter}}" target="_blank" title="Twitter">
                                    <img alt="Twitter" src="{{asset('assets/images/social/twitter.svg')}}"/>
                                </a>
                            </li>
                        @endif
                        @if(!is_null($teams[$i]->skype))
                            <li>
                                <a href="{{$teams[$i]->skype}}" target="_blank" title="Skype">
                                    <img alt="Skype" src="{{asset('assets/images/social/skype.svg')}}"/>
                                </a>
                            </li>
                        @endif
                        @if(!is_null($teams[$i]->linkedin_link))
                            <li>
                                <a href="{{$teams[$i]->linkedin_link}}" target="_blank" title="Linkedin">
                                    <img alt="Linkedin" src="{{asset('assets/images/social/linkedin.svg')}}"/>
                                </a>
                            </li>
                        @endif
                        @if(!is_null($teams[$i]->email))
                            <li>
                                <a href="mailto:{{$teams[$i]->email}}" target="_blank" title="Email">
                                    <img alt="Email" src="{{asset('assets/images/social/email.svg')}}"/>
                                </a>
                            </li>
                        @endif
                        @if(!is_null($teams[$i]->dribble))
                            <li>
                                <a href="{{$teams[$i]->dribble}}" target="_blank" title="Dribble">
                                    <img alt="Dribble" src="{{asset('assets/images/social/dribbble.svg')}}"/>
                                </a>
                            </li>
                        @endif
                    </ul>

                </div>

            @endfor
        </div>


    </section>

    <!-- Sponsor's Section -->

    <section class="section" id="sponsorsSection">

        <header class="sectionheader">

            <h2>

                Our Sponsors,
                <span class="highlight">Our Friends!</span>

            </h2>

        </header>

        <div>


            @for($i=0;$i<count($sponsors);$i++)
                <div>
                    <a href="{{$sponsors[$i]->link}}" target="_blank">
                        <img src="{{$sponsors[$i]->logo_link}}"/>
                    </a>
                </div>
            @endfor

        </div>

    </section>

</div>

<div class="modalWrapper">

    <i title="Close" class="closeModal" style="background-image: url({{asset('assets/images/icons/close.png')}});"></i>

    <div class="modalCont">

        <header>

            <img class="modalHeadImg" />

            <h2>

            </h2>

        </header>

        <!-- Content -->

        <main>



        </main>
    </div>

</div>

<!-- scripts -->

<script>
    window.type = 0;
</script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.20.1/moment.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.min.js"></script>

<script src="{{asset('js/app.js')}}"></script>

</body>

</html>