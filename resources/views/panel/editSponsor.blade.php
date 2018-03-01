@extends('panel.layout.app')

@section('title')

    ویرایش اسپانسر

@endsection

@section('specials')

    <script src="{{asset('js/plugin/dropzone.js')}}"></script>

    <script>

        $(window).on("load", function () {
            $(".dropzoneCont").dropzone({
                url: "{{route('uploadImage')}}",
                success: function (file, response) {
                    $("#shakhesPreview").attr("src", "{{url('/')}}" +"/"+ response);
                    this.removeFile(file);
                },
                acceptedFiles:"image/*"
            });
        })

    </script>

    <link href="{{asset('css/plugin/dropzone.css')}}" rel="stylesheet"/>

    <style>
        #shakhesPreview {
            width: 100%;
            height: 200px;
        }
    </style>
	<script>


        function edit(id) {
            if (!checkValidation(3, $("body"))) {
                showLoading();
                $.post("{{url('/').'/'.$_ENV['APP_ADMIN_BASE']}}/editSponsor", {
                    '_token': '{{csrf_token()}}',
                    'id':id,
                    'name': $('#name').val(),
                    'link': $('#link').val(),
                    'img': $('#shakhesPreview').attr('src')
                }, function (result) {
//                    result = JSON.parse(result);
                    switch (result.status) {
                        case 1:
                            showLoading();
                            showPropMsg('right', 'top', 'fadeInUp', 'اسپانسر مورد نظر ویرایش شد', 'success');

                            setTimeout(function () {
                                window.location.assign('{{route("manageSponsors")}}');//todo
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

@endsection

@section('content')

    <div class="row pmd-z-depth cont">

        <div class="row animateSp fadeUpIn">
            <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                <div class="form-group pmd-textfield pmd-textfield-floating-label">
                    <label class="control-label">
                        نام مجموعه
                    </label>
                    <input value="{{$data->name}}" data-required="required" id="name" type="text" class="form-control">
                </div>
            </div>
        </div>

        <div class="row animateSp fadeUpIn">

            <div class="form-group pmd-textfield pmd-textfield-floating-label">
                <label class="control-label">
                    لینک مجموعه
                </label>
                <input value="{{$data->link}}" data-required="required" id="link" type="url" class="form-control">
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

                <img src="{{$data->logo_link}}" id="shakhesPreview"/>

            </div>

        </div>

        <div class="row animateSp fadeUpIn">
            <button onclick="edit({{$data->id}})" type="button" class="btn pmd-btn-raised pmd-ripple-effect btn-primary">ویرایش</button>
        </div>

    </div>

@endsection