@extends('panel.layout.app')

@section('title')

    ویرایش گالری

@endsection

@section('specials')

    <script src="{{asset('js/plugin/dropzone.js')}}"></script>

    <script>

        function addImage(url) {
            $("#galleryImagesCont").prepend("<div class='galleryImage'><i onclick='removeImage(event)' title='Remove' data-toggle='tooltip' data-placement='top' class='material-icons'>close</i> <img src='" + url + "'/></div>")
        }

        function removeImage(e) {
            $(e.target).parent().remove();
        }

        function getImages() {
            let images = [];
            $(".galleryImage").each(function () {
                images.push($(this).find("img").attr("src"));
            })
            return images;
        }

        $(window).on("load", function () {
            $(".dropzoneCont").dropzone({
                url: "{{route('uploadImage')}}",
                success: function (file, response) {
                    addImage("{{url('/')}}" + "/" + response);
                    this.removeFile(file);
                },
                acceptedFiles: "image/*"
            });
        })

    </script>

    <script>

        function edit(id) {
            if (!checkValidation(3, $("body"))) {
                showLoading();
                $.post('{{route("editGalleryAction")}}', {
                    '_token': '{{csrf_token()}}',
                    "id":id,
                    'name': $('#name').val(),
                    'images': JSON.stringify(getImages()),
                    'type': $("#part").val()
                }, function (result) {
                    switch (result.status) {
                        case 1:
                            showLoading();
                            showPropMsg('right', 'top', 'fadeInUp', 'گالری مورد نظر ویرایش شد', 'success');

                            setTimeout(function () {
                                window.location.assign('{{route("manageGalleries")}}');
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
        .galleryImage {
            width: 150px;
            height: 150px;
            padding: 5px;
            position: relative;
            background-color: whitesmoke;
            float: right;
        }

        .galleryImage > i {
            display: block;
            position: absolute;
            top: 2px;
            right: 2px;
            width: 30px;
            height: 30px;
            text-align: center;
            line-height: 30px;
            color: red;
            cursor: pointer;
            user-select: none;
        }

        .galleryImage > img {
            width: 100%;
            height: 100%;
        }
    </style>


@endsection

@section('content')

    <div class="row pmd-z-depth cont">

        <div class="row animateSp fadeUpIn">
            <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                <div class="form-group pmd-textfield pmd-textfield-floating-label">
                    <label class="control-label">
                        نام گالری
                    </label>
                    <input value="{{$data->name}}" data-required="required" id="name" type="text" class="form-control">
                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                <div class="form-group pmd-textfield">
                    <label class="control-label">
                        بخش گالری
                    </label>
                    <select id="part" required="required" class="form-control">
                        @foreach($parts as $part)
                            <option @if($data->type == $part->id) selected @endif value="{{$part->id}}">
                                {{$part->name}}
                            </option>
                        @endforeach
                    </select>
                </div>
            </div>
        </div>

        <div class="row animateSp fadeUpIn">

            <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">

                <div class="dropzoneCont">
                    <div class="dz-default dz-message">
                        تصاویر گالری
                    </div>
                </div>

            </div>

            <div id="galleryImagesCont" class="col-lg-6 col-md-6 col-xs-12 col-sm-12">

                @foreach($data->images as $image)

                    <div class='galleryImage'>
                        <i onclick='removeImage(event)' title='Remove' data-toggle='tooltip' data-placement='top' class='material-icons'>close</i>
                        <img src="{{$image->image_address}}"/>
                    </div>

                @endforeach

            </div>

        </div>

        <div class="row animateSp fadeUpIn">
            <button type="button" onclick='edit({{$id}})' class="btn pmd-btn-raised pmd-ripple-effect btn-primary">ویرایش
            </button>
        </div>

    </div>

@endsection