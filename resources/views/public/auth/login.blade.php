<!DOCTYPE html>
<html>
<head>
    <title>ورود | {{$_ENV["APP_FA_NAME"]}}</title>
    
    <!-- css -->
    
    <link href="{{asset('css/global/fonts.css')}}" rel="stylesheet" />

    <link href="{{asset('css/global/global.css')}}" rel="stylesheet" />

    <link href="{{asset('css/global/generalStyles.css')}}" rel="stylesheet" />

    <link href="{{asset('css/plugin/material-icons.css')}}" rel="stylesheet" />

    <link href="{{asset('css/plugin/bootstrap.min.css')}}" rel="stylesheet" />

    <link href="{{asset('css/plugin/bootstrap.rtl.min.css')}}" rel="stylesheet" />
    
    <link href="{{asset('css/plugin/material.min.css')}}" rel="stylesheet" />

    <link href="{{asset('css/plugin/propeller.min.css')}}" rel="stylesheet" />

    <!-- js -->

    <script src="{{asset('js/plugin/jquery-1.12.1.js')}}"></script>
    
    <script src="{{asset('js/global/animations.js')}}"></script>

    <script src="{{asset('js/global/global.js')}}"></script>

    <script src="{{asset('js/plugin/bootstrap.min.js')}}"></script>

    <script src="{{asset('js/plugin/material.min.js')}}"></script>

    <script src="{{asset('js/plugin/propeller.js')}}"></script>
    
    <meta charset="utf-8" />
    
    <!-- specials -->
    
    <script>
        function login() {
            if (!checkValidation(2, $("#mainCont"))) {
                showLoading();
                $.post('',{
                    '_token': '{{csrf_token()}}',
                    'username': $('#username').val(),
                    'password': $('#password').val()
                },function (result) {
//                    result = JSON.parse(result);
                    switch (result.status){
                        case 1:
                            showLoading();
                            showPropMsg('right','top','fadeInUp','شما با موفقیت وارد شدید...','success');

                            setTimeout(function(){
                                window.location.reload();
                            },1500)
                            break;
                        case -1:
                            showLoading();
                            showPropMsg('right','top','fadeInUp','نام کاربری یا کلمه عبور اشتباه است.','error');
                            break;

                    }
                }).fail(function(result){
                    $('#password').val('');
                    showLoading();
                    showPropMsg("right","top","fadeInUp","مشکلی رخ داد...","error");
                });
            } else {
                showPropMsg("right","top","fadeInUp","بعضی از فیلدها خالی هستند.","error");
            }
        }
    </script>

</head>
<body>

<div id="wrapper">
    <div id="rtSide" class="pmd-z-depth">
        <header>
            <h1 class="primaryColor"> ورود کاربران</h1>
        </header>
        <section>
            
            <div id="mainCont">
                
                <div class="form-group pmd-textfield pmd-textfield-floating-label">
                    <label class="control-label pmd-input-group-label">نام کاربری</label>
                    <div class="input-group">
                        <div class="input-group-addon"><i class="material-icons md-dark pmd-sm">perm_identity</i></div>
                        <input id="username" data-required type="text" class="form-control">
                        <p style="display: none;" class="control-label">پر کردن این فیلد ضروری می باشد.</p>
                    </div>
                </div>

            
                <div class="form-group pmd-textfield pmd-textfield-floating-label">
                    <label class="control-label pmd-input-group-label">رمزعبور</label>
                    <div class="input-group">
                        <div class="input-group-addon"><i class="material-icons md-dark pmd-sm">https</i></div>
                        <input data-required id="password" type="password" class="form-control">
                        <p style="display: none;" class="control-label">پر کردن این فیلد ضروری می باشد.</p>
                    </div>
                </div>
                
                <button onclick="login()" type="button" class="btn pmd-btn-raised pmd-ripple-effect btn-primary">ورود</button>

            </div>
            
            {{--<div class="infoBox">--}}
                {{--<p>--}}
                    {{--حساب کاربری ندارید؟ <a href="#" class="btn pmd-btn-flat pmd-ripple-effect btn-info">ثبت‌نام</a> کنید.--}}
                {{--</p>--}}
            {{--</div>--}}
            {{--<div class="infoBox">--}}
                {{--<p>--}}
                    {{--رمزعبور خود را فراموشی کرده‌اید؟ <a href="#" class="btn pmd-btn-flat pmd-ripple-effect btn-info">بازیابی</a> کنید.--}}
                {{--</p>--}}
            {{--</div>--}}

        </section>
        <footer>
            تمامی حقوق برای <a href="#" class="btn pmd-btn-flat pmd-ripple-effect btn-primary">{{$_ENV['APP_FA_NAME']}}</a> محفوظ می‌باشد.
        </footer>
    </div>
    <div id="ltSide">
        
    </div>
</div>
    
    <!-- showables -->
    
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