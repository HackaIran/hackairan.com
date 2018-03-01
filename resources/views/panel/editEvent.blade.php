@extends('panel.layout.app')

@section('title')

    ویرایش رویداد

@endsection

@section('specials')

    <script src="{{asset('plugins/ckpro/ckeditor.js')}}"></script>

    <script src="{{asset('js/plugin/persian-date.js')}}"></script>

    <script src="{{asset('js/plugin/persian-datepicker-0.4.5.min.js')}}"></script>

    <script>

        window.onload = () => {
            CKEDITOR.replace('fullDesc');
            $("#date").persianDatepicker({
                format: 'YYYY/MM/DD'
            });
            $("#to,#from").persianDatepicker({
                format: 'HH:mm',
                onlyTimePicker: true
            });

            <?php

            $date = explode("/",$data->time["jalali"]);

            $from = explode(":",$data->from);

            $to = explode(":",$data->to);

            ?>

            $('#date').pDatepicker("setDate", [{{$date[0]}},{{$date[1]}},{{$date[2]}},00,00,00]);

            $('#from').pDatepicker("setDate", [1391,01,07,{{$from[0]}},{{$from[1]}},00]);

            $('#to').pDatepicker("setDate", [1391,01,07,{{$to[0]}},{{$to[1]}},00]);

        }

    </script>

	<script>

        function edit(id) {
            if (!checkValidation(3, $("body"))) {
                showLoading();
                $.post('{{route("editEventAction")}}', {
                    '_token': '{{csrf_token()}}',
                    'id': id,
                    'title': $('#title').val(),
                    'shortDesc': $('#shortDesc').val(),
                    'fullDesc': CKEDITOR.instances.fullDesc.getData(),
                    'registerLink': $('#registerLink').val(),
                    'location': $('#location').val(),
                    'date': $('#date').val(),
                    'from': $('#from').val(),
                    'to': $('#to').val()
                }, function (result) {
//                    result = JSON.parse(result);
                    switch (result.status) {
                        case 1:
                            showLoading();
                            showPropMsg('right', 'top', 'fadeInUp', 'رویداد مورد نظر ویرایش شد', 'success');

                            setTimeout(function () {
                                window.location.assign('{{route("manageEvents")}}');//todo
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
	
    <link href="{{asset('css/plugin/persian-datepicker.css')}}" rel="stylesheet" />

@endsection

@section('content')

    <div class="cont row pmd-z-depth">

        <h2 class=" animateSp fadeUpIn">
            مشخصات رویداد
        </h2>

        <div class="row animateSp fadeUpIn">
            <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                <div class="form-group pmd-textfield pmd-textfield-floating-label">
                    <label class="control-label">
                        عنوان رویداد
                    </label>
                    <input value="{{$data->title}}" data-required="required" id="title" type="text" class="form-control">
                </div>
            </div>
        </div>

        <div class="row animateSp fadeUpIn">
            <div class="form-group pmd-textfield">
                <label class="control-label">توضیحات کوتاه</label>
                <textarea id="shortDesc" required class="form-control">{{$data->short_description}}</textarea>
            </div>
        </div>

        <div class="row animateSp fadeUpIn">
            <div class="form-group pmd-textfield">
                <label class="control-label">توضیحات کامل</label>
                <textarea id="fullDesc" required class="form-control">{{$data->description}}</textarea>
            </div>
        </div>

        <hr class="divider"/>

        <h2 class=" animateSp fadeUpIn">
            مشخصات ثبت نام
        </h2>

        <div class="row animateSp fadeUpIn">
            <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                <div class="form-group pmd-textfield pmd-textfield-floating-label">
                    <label class="control-label">
                        لینک ثبت نام
                    </label>
                    <input value="{{$data->register_link}}" data-required="required" id="registerLink" type="url" class="form-control">
                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                <div class="form-group pmd-textfield pmd-textfield-floating-label">
                    <label class="control-label">
                        مکان
                    </label>
                    <input value="{{$data->location}}" data-required="required" id="location" type="text" class="form-control">
                </div>
            </div>
        </div>

        <hr class="divider" />

        <h2 class=" animateSp fadeUpIn">
            مشخصات زمانی
        </h2>

        <div class="row animateSp fadeUpIn">
            <div class="col-lg-4 col-md-4 col-xs-12 col-sm-12">
                <div class="form-group pmd-textfield pmd-textfield-floating-label">
                    <label class="control-label">
                        تاریخ
                    </label>
                    <input data-required="required" id="date" type="text" class="form-control">
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-xs-12 col-sm-6">
                <div class="form-group pmd-textfield pmd-textfield-floating-label">
                    <label class="control-label">
                        از
                    </label>
                    <input data-required="required" id="from" type="text" class="form-control">
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-xs-12 col-sm-6">
                <div class="form-group pmd-textfield pmd-textfield-floating-label">
                    <label class="control-label">
                        تا
                    </label>
                    <input data-required="required" id="to" type="text" class="form-control">
                </div>
            </div>
        </div>

        <div class="row animateSp fadeUpIn">
            <button onclick="edit({{$data->id}})" type="button" class="btn pmd-btn-raised pmd-ripple-effect btn-primary">ویرایش</button>
        </div>

    </div>

@endsection