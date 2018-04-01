@extends('panel.layout.app')

@section('title')

    افزودن عضو تیم

@endsection

@section('specials')

    <script src="{{asset('js/plugin/dropzone.js')}}"></script>

    <script>

        $(window).on("load",function() {
            $(".dropzoneCont").dropzone({
                url: "{{route('uploadVideo')}}",
                success: function (file, response) {
                    $("#videoPreview").attr("src", "{{url('/')}}"+"/" + response);
                    this.removeFile(file);
                },
                acceptedFiles:"video/*"
            });
        })

    </script>

    <script>

    function add() {
        if (!checkValidation(3, $("body"))) {
            showLoading();
            $.post('', {
                '_token': '{{csrf_token()}}',
                'name': $('#name').val(),
                'position':$("#position").val(),
                'email':$("#email").val(),
                'linkedin': $('#linkedin').val(),
                'dribble': $('#dribble').val(),
                'site': $('#site').val(),
                'skype': $('#skype').val(),
                'twitter': $('#twitter').val(),
                'vid': $('#videoPreview').attr('src')
            }, function (result) {
//                    result = JSON.parse(result);
                switch (result.status) {
                    case 1:
                        showLoading();
                        showPropMsg('right', 'top', 'fadeInUp', 'عضو مورد نظر افزوده شد', 'success');

                        setTimeout(function () {
                            window.location.assign('{{route("manageMembers")}}');
                        }, 1500)
                        break;
                    case -1:
                        showLoading();
                        showPropMsg('right', 'top', 'fadeInUp', 'مشکلی رخ داد...', 'error');
                        break;
                    default:
                        showLoading();
                        showPropMsg('right', 'top', 'fadeInUp', 'مشکلی رخ داد...', 'error');
                        break;

                }
            }).fail(function (result) {
                $('#password').val('');
                showLoading();
                showPropMsg("right", "top", "fadeInUp", "مشکلی رخ داد...", "error");
            });
        } else {
            showPropMsg("right", "top", "fadeInUp", "بعضی از فیلدها خالی هستند.", "error");
        }
    }
    </script>


    <link href="{{asset('css/plugin/dropzone.css')}}" rel="stylesheet" />

    <style>
        #videoPreview {
            width: 100%;
            height: 200px;
        }
    </style>


@endsection

@section('content')

    <div class="row pmd-z-depth cont">

        <div class="row animateSp fadeUpIn">
            <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                <div class="form-group pmd-textfield pmd-textfield-floating-label">
                    <label class="control-label">
                        نام و نام خانوادگی
                    </label>
                    <input data-required="required" id="name" type="text" class="form-control">
                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                <div class="form-group pmd-textfield pmd-textfield-floating-label">
                    <label class="control-label">
موقعیت:
                    </label>
                    <input data-required="required" id="position" type="text" class="form-control">
                </div>
            </div>
        </div>

        <div class="row animateSp fadeUpIn">

            <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">

                <div class="dropzoneCont">
                    <div class="dz-default dz-message">
                        فیلمو بتخ اینجا
                    </div>
                </div>

            </div>

            <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">

                <video controls src="" id="videoPreview"></video>

            </div>

        </div>



        <hr class="divider" />

        <h2 class=" animateSp fadeUpIn">
            صفحات اجتماعی
        </h2>

        <div class="row animateSp fadeUpIn">
            <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                <div class="form-group pmd-textfield pmd-textfield-floating-label">
                    <label class="control-label">
                        LinkedIn
                    </label>
                    <input data-required="required" id="linkedin" type="url" class="form-control">
                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                <div class="form-group pmd-textfield pmd-textfield-floating-label">
                    <label class="control-label">
                        email
                    </label>
                    <input data-required="required" id="email" type="email" class="form-control">
                </div>
            </div>
        </div>

        <div class="row animateSp fadeUpIn">
            <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                <div class="form-group pmd-textfield pmd-textfield-floating-label">
                    <label class="control-label">
                        personal site
                    </label>
                    <input id="site" type="url" class="form-control">
                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                <div class="form-group pmd-textfield pmd-textfield-floating-label">
                    <label class="control-label">
                        skype
                    </label>
                    <input id="skype" type="text" class="form-control">
                </div>
            </div>
        </div>

        <div class="row animateSp fadeUpIn">
            <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                <div class="form-group pmd-textfield pmd-textfield-floating-label">
                    <label class="control-label">
                        dribble
                    </label>
                    <input id="dribble" type="text" class="form-control">
                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                <div class="form-group pmd-textfield pmd-textfield-floating-label">
                    <label class="control-label">
                        twitter
                    </label>
                    <input id="twitter" type="text" class="form-control">
                </div>
            </div>
        </div>

        <div class="row animateSp fadeUpIn">
            <button type="button" onclick='add()' class="btn pmd-btn-raised pmd-ripple-effect btn-primary">افزودن</button>
        </div>

    </div>

@endsection