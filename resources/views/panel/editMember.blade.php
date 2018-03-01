@extends('panel.layout.app')

@section('title')

    ویرایش عضو تیم

@endsection

@section('specials')

    <script src="{{asset('js/plugin/dropzone.js')}}"></script>

    <script>

        $(window).on("load",function() {
            $(".dropzoneCont").dropzone({
                url: "{{route('uploadVideo')}}",
                success: function (file, response) {
                    $("#videoPreview").attr("src", "{{url('/')}}" + "/"+response);
                    this.removeFile(file);
                },
                acceptedFiles:"video/*"
            });
        })

    </script>

    <link href="{{asset('css/plugin/dropzone.css')}}" rel="stylesheet" />

    <style>
        #videoPreview {
            width: 100%;
            height: 200px;
        }
    </style>

	<script>

        function edit(id) {
            if (!checkValidation(3, $("body"))) {
                showLoading();
                $.post('{{route("editMemberAction")}}', {
                    '_token': '{{csrf_token()}}',
                    'id':id,
                    'name': $('#name').val(),
                    'position':$("#position").val(),
                    'linkedin': $('#linkedin').val(),
                    'email': $('#email').val(),
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
                            showPropMsg('right', 'top', 'fadeInUp', 'عضو مورد نظر ویرایش شد', 'success');

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

@endsection

@section('content')

    <div class="row pmd-z-depth cont">

        <div class="row animateSp fadeUpIn">
            <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                <div class="form-group pmd-textfield pmd-textfield-floating-label">
                    <label class="control-label">
                        نام و نام خانوادگی
                    </label>
                    <input value="{{$data->full_name}}" data-required="required" id="name" type="text" class="form-control">
                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                <div class="form-group pmd-textfield pmd-textfield-floating-label">
                    <label class="control-label">
موقعیت:
                    </label>
                    <input value="{{$data->position}}" data-required="required" id="position" type="text" class="form-control">
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

                <video controls src="{{$data->video_link}}" id="videoPreview"></video>

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
                    <input value="{{$data->linkedin_link}}" data-required="required" id="linkedin" type="url" class="form-control">
                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                <div class="form-group pmd-textfield pmd-textfield-floating-label">
                    <label class="control-label">
                        email
                    </label>
                    <input value="{{$data->email}}" data-required="required" id="email" type="email" class="form-control">
                </div>
            </div>
        </div>

        <div class="row animateSp fadeUpIn">
            <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                <div class="form-group pmd-textfield pmd-textfield-floating-label">
                    <label class="control-label">
                        personal site
                    </label>
                    <input value="{{$data->site}}" id="site" type="url" class="form-control">
                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                <div class="form-group pmd-textfield pmd-textfield-floating-label">
                    <label class="control-label">
                        skype
                    </label>
                    <input value="{{$data->skype}}" id="skype" type="text" class="form-control">
                </div>
            </div>
        </div>

        <div class="row animateSp fadeUpIn">
            <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                <div class="form-group pmd-textfield pmd-textfield-floating-label">
                    <label class="control-label">
                        dribble
                    </label>
                    <input value="{{$data->dribble}}" id="dribble" type="text" class="form-control">
                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                <div class="form-group pmd-textfield pmd-textfield-floating-label">
                    <label class="control-label">
                        twitter
                    </label>
                    <input value="{{$data->twitter}}" id="twitter" type="text" class="form-control">
                </div>
            </div>
        </div>

        <div class="row animateSp fadeUpIn">
            <button onclick="edit({{$data->id}})" type="button" class="btn pmd-btn-raised pmd-ripple-effect btn-primary">ویرایش</button>
        </div>

    </div>

@endsection