@extends('panel.layout.app')

@section('title')

    افزودن بخش به هاکا

@endsection

@section('specials')

    <script src="{{asset('js/plugin/dropzone.js')}}"></script>

    <script>

        $(window).on("load", function () {
            $(".dropzoneCont").eq(0).dropzone({
                url: "{{route('uploadImage')}}",
                success: function (file, response) {
                    $("#headerImage").attr("src", "{{url('/')}}" + "/" + response);
                    this.removeFile(file);
                },
                acceptedFiles: "image/*"
            });
            $(".dropzoneCont").eq(1).dropzone({
                url: "{{route('uploadImage')}}",
                success: function (file, response) {
                    $("#logoImage").attr("src", "{{url('/')}}" + "/" + response);
                    this.removeFile(file);
                },
                acceptedFiles: "image/*"
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
                    'address': $("#address").val(),
                    'description': $('#description').val(),
                    'short_description': $('#shortDescription').val(),
                    'keywords':$("#keywords").val(),
                    'logo_image': $('#logoImage').attr('src'),
                    'header_image': $('#headerImage').attr("src")
                }, function (result) {
//                    result = JSON.parse(result);
                    switch (result.status) {
                        case 1:
                            showLoading();
                            showPropMsg('right', 'top', 'fadeInUp', 'بخش مورد نظر افزوده شد', 'success');

                            setTimeout(function () {
                                window.location.assign('{{route("manageHackaParts")}}');
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


    <link href="{{asset('css/plugin/dropzone.css')}}" rel="stylesheet"/>

    <style>
        #logoImage,#headerImage {
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
                        نام بخش
                    </label>
                    <input data-required="required" id="name" type="text" class="form-control">
                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                <div class="form-group pmd-textfield pmd-textfield-floating-label">
                    <label class="control-label">
                        آدرس
                    </label>
                    <input data-required="required" id="address" type="text" class="form-control">
                </div>
            </div>
        </div>

        <div class="row animateSp fadeUpIn">
            <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                <div class="form-group pmd-textfield pmd-textfield-floating-label">
                    <label class="control-label">
                        توضیحات کوتاه
                    </label>
                    <input data-required="required" id="shortDescription" type="text" class="form-control">
                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                <div class="form-group pmd-textfield pmd-textfield-floating-label">
                    <label class="control-label">
                        کلیدواژه ها
                    </label>
                    <input data-required="required" id="keywords" type="text" class="form-control">
                </div>
            </div>
        </div>

        <div class="row animateSp fadeUpIn">
            <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                <div class="form-group pmd-textfield pmd-textfield-floating-label">
                    <label class="control-label">
                        توضیحات بخش
                    </label>
                    <textarea data-required="required" id="description" class="form-control">

                    </textarea>
                </div>
            </div>
        </div>

        <div class="row animateSp fadeUpIn">

            <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">

                <div class="dropzoneCont">
                    <div class="dz-default dz-message">
                        عکس هدر بخش
                    </div>
                </div>

            </div>

            <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">

                <img alt="headerImage" src="" id="headerImage" />

            </div>

        </div>

        <div class="row animateSp fadeUpIn">

            <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">

                <div class="dropzoneCont">
                    <div class="dz-default dz-message">
                        لوگو
                    </div>
                </div>

            </div>

            <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">

                <img alt="logoImage" src="" id="logoImage" />

            </div>

        </div>

        <div class="row animateSp fadeUpIn">
            <button type="button" onclick='add()' class="btn pmd-btn-raised pmd-ripple-effect btn-primary">افزودن
            </button>
        </div>

    </div>

@endsection