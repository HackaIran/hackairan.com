<!DOCTYPE html>
<html>
<head>
    <title>@yield('title') | {{$_ENV["APP_FA_NAME"]}}</title>

    <!-- css -->

    <link href="{{asset('css/global/fonts.css')}}" rel="stylesheet" />

    <link href="{{asset('css/global/animations.css')}}" rel="stylesheet" />

    <link href="{{asset('css/panel/panelGlobal.css')}}" rel="stylesheet" />

    <link href="{{asset('css/global/generalStyles.css')}}" rel="stylesheet" />

    <link href="{{asset('css/plugin/material-icons.css')}}" rel="stylesheet" />

    <link href="{{asset('css/plugin/bootstrap.min.css')}}" rel="stylesheet" />

    <link href="{{asset('css/plugin/material.min.css')}}" rel="stylesheet" />

    <link href="{{asset('css/plugin/bootstrap.rtl.min.css')}}" rel="stylesheet" />

    <link href="{{asset('css/plugin/propeller.min.css')}}" rel="stylesheet" />

    <link href="{{asset('css/panel/responsive.css')}}" rel="stylesheet" />

    <!-- js -->

    <script src="{{asset('js/plugin/jquery-1.12.1.js')}}"></script>

    <script src="{{asset('js/global/animations.js')}}"></script>

    <script src="{{asset('js/panel/panelGlobal.js')}}"></script>

    <script src="{{asset('js/plugin/bootstrap.min.js')}}"></script>

    <script src="{{asset('js/plugin/material.min.js')}}"></script>

    <script src="{{asset('js/plugin/propeller.js')}}"></script>

    <!-- Fav Icon -->

    <link rel="icon" type="image/png" sizes="32x32" href="{{asset('assets/images/fav-icon.png')}}">


    <meta charset="utf-8" />

    {{--speccials--}}

    @yield('specials')

</head>
<body>

<div id="wrapper">
    <!-- header -->
    <header class="primaryBackColor pmd-z-depth animateSp" id="mainHeader">

        <div id="headerBrand">
            <span>
                {{$_ENV["APP_FA_NAME"]}}
            </span>
        </div>

        <div id="rtHeader">
            <ul>
                <li class="pmd-ripple-effect">
                    <i id="navBarCollapser" class="material-icons">dehaze</i>
                </li>
                <li class="pmd-ripple-effect">
                    <i id="screenToggler" class="material-icons">fullscreen</i>
                </li>
            </ul>
        </div>

        <div id="ltHeader">
            <ul>
                <li class="pmd-ripple-effect">
                    <div class="material-icons mdl-badge mdl-badge--overlap" data-badge="1">warning</div>
                </li>
                <li class="pmd-ripple-effect">
                    <img src="{{asset('assets/images/default-user-image.png')}}" />
                </li>
            </ul>
        </div>

    </header>
    <!-- sidebar -->
    <aside data-collapse="false" id="mainSideBar" class="pmd-z-depth animateSp">
        <div id="mainSideBarCont">
            <div id="mainSideBarSlide">
                <ul>
                    <li class="activePage pmd-ripple-effect">
                        <a href="{{route('panelIndex')}}">
                            <i class="material-icons">dashboard</i>
                            <div>
                                <span>داشبورد</span>
                            </div>
                        </a>
                    </li>
                    <li class="pmd-ripple-effect" data-collapsable="true" data-href="eventCollapse">
                        <a>
                            <i class="material-icons">event</i>
                            <div>
                                <span>رویدادها</span>
                                <i class="material-icons">keyboard_arrow_left</i>
                            </div>
                        </a>
                    </li>
                    <li class="pmd-ripple-effect" data-collapsable="true" data-href="teamCollapse">
                        <a>
                            <i class="material-icons">people</i>
                            <div>
                                <span>اعضای تیم</span>
                                <i class="material-icons">keyboard_arrow_left</i>
                            </div>
                        </a>
                    </li>
                    <li class="pmd-ripple-effect" data-collapsable="true" data-href="sponsorCollapse">
                        <a>
                            <i class="material-icons">folder</i>
                            <div>
                                <span>اسپانسرها</span>
                                <i class="material-icons">keyboard_arrow_left</i>
                            </div>
                        </a>
                    </li>
                    <li class="pmd-ripple-effect" data-collapsable="true" data-href="HackaPartsCollapse">
                        <a>
                            <i class="material-icons">folder</i>
                            <div>
                                <span>بخش های هاکا</span>
                                <i class="material-icons">keyboard_arrow_left</i>
                            </div>
                        </a>
                    </li>
                    <li class="pmd-ripple-effect" data-collapsable="true" data-href="GalleriesCollapse">
                        <a>
                            <i class="material-icons">folder</i>
                            <div>
                                <span>گالری ها</span>
                                <i class="material-icons">keyboard_arrow_left</i>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            <!-- slides -->

            <div class="sideBarCollapseSlide" data-aside-slide="true" data-id="eventCollapse">
                <ul>
                    <li class="backWardSlide pmd-ripple-effect">
                        <a>
                            <div>
                                <i class="material-icons">keyboard_arrow_right</i>
                                <span>رویدادها</span>
                            </div>
                        </a>
                    </li>
                    <li class="pmd-ripple-effect">
                        <a href="{{route('addEvent')}}">
                            <i class="material-icons">add</i>
                            <div>
                                <span>افزودن</span>
                            </div>
                        </a>
                    </li>
                    <li class="pmd-ripple-effect">
                        <a href="{{route('manageEvents')}}">
                            <i class="material-icons">list</i>
                            <div>
                                <span>مدیریت</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>

            <div class="sideBarCollapseSlide" data-aside-slide="true" data-id="teamCollapse">
                <ul>
                    <li class="backWardSlide pmd-ripple-effect">
                        <a>
                            <div>
                                <i class="material-icons">keyboard_arrow_right</i>
                                <span>اعضای تیم</span>
                            </div>
                        </a>
                    </li>
                    <li class="pmd-ripple-effect">
                        <a href="{{route('addMember')}}">
                            <i class="material-icons">add</i>
                            <div>
                                <span>افزودن</span>
                            </div>
                        </a>
                    </li>
                    <li class="pmd-ripple-effect">
                        <a href="{{route('manageMembers')}}">
                            <i class="material-icons">list</i>
                            <div>
                                <span>مدیریت</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>

            <div class="sideBarCollapseSlide" data-aside-slide="true" data-id="sponsorCollapse">
                <ul>
                    <li class="backWardSlide pmd-ripple-effect">
                        <a>
                            <div>
                                <i class="material-icons">keyboard_arrow_right</i>
                                <span>اسپانسرها</span>
                            </div>
                        </a>
                    </li>
                    <li class="pmd-ripple-effect">
                        <a href="{{route('addSponsor')}}">
                            <i class="material-icons">add</i>
                            <div>
                                <span>افزودن</span>
                            </div>
                        </a>
                    </li>
                    <li class="pmd-ripple-effect">
                        <a href="{{route('manageSponsors')}}">
                            <i class="material-icons">list</i>
                            <div>
                                <span>مدیریت</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>

            <div class="sideBarCollapseSlide" data-aside-slide="true" data-id="HackaPartsCollapse">
                <ul>
                    <li class="backWardSlide pmd-ripple-effect">
                        <a>
                            <div>
                                <i class="material-icons">keyboard_arrow_right</i>
                                <span>بخش های هاکا</span>
                            </div>
                        </a>
                    </li>
                    <li class="pmd-ripple-effect">
                        <a href="{{route('addHackaPart')}}">
                            <i class="material-icons">add</i>
                            <div>
                                <span>افزودن</span>
                            </div>
                        </a>
                    </li>
                    <li class="pmd-ripple-effect">
                        <a href="{{route('manageHackaParts')}}">
                            <i class="material-icons">list</i>
                            <div>
                                <span>مدیریت</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>

            <div class="sideBarCollapseSlide" data-aside-slide="true" data-id="GalleriesCollapse">
                <ul>
                    <li class="backWardSlide pmd-ripple-effect">
                        <a>
                            <div>
                                <i class="material-icons">keyboard_arrow_right</i>
                                <span>گالری ها</span>
                            </div>
                        </a>
                    </li>
                    <li class="pmd-ripple-effect">
                        <a href="{{route('addGallery')}}">
                            <i class="material-icons">add</i>
                            <div>
                                <span>افزودن</span>
                            </div>
                        </a>
                    </li>
                    <li class="pmd-ripple-effect">
                        <a href="{{route('manageGalleries')}}">
                            <i class="material-icons">list</i>
                            <div>
                                <span>مدیریت</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>


        </div>



    </aside>


    <!-- main content of the page -->

    <section id="mainCont">

        <header class="mainTitle pmd-z-depth animateSp fadeUpIn">
            @yield('title')
        </header>

        <!-- changable content -->

        <div id="errorBox">
            <ul></ul>
        </div>

        @yield('content')

    </section>

</div>

<!-- showables -->

<!-- warnings -->

<div style="left: 10px;" class="headerShowable pmd-z-depth showable">
    <header>
        پیغام‌ها
        <div class="backColorSet1">
            3 جدید
        </div>
    </header>
    <div>
        <ul>

            <li class="showableAlertLi">
                <div>
                    <i class="material-icons backColorSet1">warning</i>
                    <div>
                        <header>عنوان</header>
                        <div>
                            متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن
                        </div>
                    </div>
                </div>
            </li>

            <li class="showableAlertLi">
                <div>
                    <i class="material-icons backColorSet1">warning</i>
                    <div>
                        <header>عنوان</header>
                        <div>
                            متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن
                        </div>
                    </div>
                </div>
            </li>

        </ul>
    </div>
</div>

<!-- user showable -->

<div class="showable pmd-z-depth" id="headerUserShowable">

    <ul>
        <li class="pmd-ripple-effect">
            <a href="#">
                <i class="material-icons">person</i>
                <span>پروفایل</span>
            </a>
        </li>
        <li class="pmd-ripple-effect">
            <a href="#">
                <i class="material-icons">settings</i>
                <span>تنظیمات</span>
            </a>
        </li>
        <li class="pmd-ripple-effect">
            <a href="#">
                <i class="material-icons">https</i>
                <span>قفل حساب</span>
            </a>
        </li>
        <li class="pmd-ripple-effect">
            <a href="{{route('logOut')}}">
                <i class="material-icons">power_settings_new</i>
                <span>خروج</span>
            </a>
        </li>
    </ul>

</div>

<!-- loadings -->

<div id="loading">
    <div>
        <div class="mdl-spinner mdl-js-spinner is-active"></div>
        <span>لطفا کمی شکیبا باشید...</span>
    </div>
</div>

<div id="ajaxLoading">
    <div>
        <div class="mdl-spinner mdl-js-spinner is-active"></div>
        <span>در حال پردازش...</span>
    </div>
</div>


</body>
</html>

<!-- Coded with love by Pouya MozaffarMagham -->