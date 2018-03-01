@extends('panel.layout.app')

@section('title')

    صفحه اصلی

    @endsection
@section('specials')
	<script>

        function edit() {
            if (!checkValidation(2, $("body"))) {
                showLoading();
                $.post('', {
                    '_token': '{{csrf_token()}}',
                    'shortDesc':$('#shortDesc').val()
                }, function (result) {
//                    result = JSON.parse(result);
                    switch (result.status) {
                        case 1:
                            showLoading();
                            showPropMsg('right', 'top', 'fadeInUp', 'توضیحات مورد نظر ویرایش شد', 'success');

                            setTimeout(function () {
                                window.location.assign();//todo
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

    <div class="row cont pmd-z-depth animateSp fadeUpIn">

        <h2 class=" animateSp fadeUpIn">
            مشخصات عمومی
        </h2>

        <div class="row  animateSp fadeUpIn">
            <div class="form-group pmd-textfield">
                <label class="control-label">توضیحات کوتاه</label>
                <textarea id="shortDesc" required class="form-control">{{trim($data[0]->value)}}</textarea>
            </div>
        </div>

        <div class="row  animateSp fadeUpIn">
            <button type="button" onclick='edit()' class="btn pmd-btn-raised pmd-ripple-effect btn-primary">ذخیره تغییرات</button>
        </div>

    </div>

    @endsection