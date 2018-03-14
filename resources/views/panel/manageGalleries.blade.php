@extends('panel.layout.app')

@section('title')

    مدیریت گالری ها

@endsection
@section('specials')
    <script>
        function deleteItem(id){
            $.post('{{route("deleteGalleryAction")}}',{
                "_token":"{{csrf_token()}}",
                'id': id
            },function (result) {
                showLoading();
                switch (result.status) {
                    case 1:
                        showLoading();
                        showPropMsg('right', 'top', 'fadeInUp', 'گالری مورد نظر با موفقیت حذف شد...', 'success');

                        setTimeout(function () {
                            window.location.reload();//todo
                        }, 1500)
                        break;
                    case -1:
                        showLoading();
                        showPropMsg('right', 'top', 'fadeInUp', 'خطایی رخ داد...', 'error');
                        break;
                    default:
                        showLoading();
                        showPropMsg('right', 'top', 'fadeInUp', 'مشکلی رخ داد...', 'error');
                        break;
                }
            });
        }
    </script>
@endsection
@section('content')

    <div class="pmd-card pmd-z-depth row animateSp fadeUpIn">
        <div class="table-responsive">
            <table class="table pmd-table table-hover table-center table-fix">

                <thead>
                <tr>
                    <th>
                        #
                    </th>
                    <th>
                        عنوان
                    </th>
                    <th>
                        مربوط به
                    </th>

                    <th>

                    </th>
                </tr>
                </thead>

                <tbody>

                <?php $length = count($data); ?>
                @for($i=0;$i<$length;$i++)

                    <tr>
                        <td>
                            {{$i+1}}
                        </td>
                        <td>
                            {{$data[$i]->name}}
                        </td>
                        <td>
                            {{$data[$i]->part->name}}
                        </td>
                        <td><a href="{{route('editGallery',$data[$i]->id)}}"><i data-toggle="tooltip" data-placement="top" title="ویرایش" class="material-icons md-dark pmd-sm">more_vert</i></a><a onclick="deleteItem({{$data[$i]->id}})" href="javascript:void(0);"><i data-toggle="tooltip" data-placement="top" title="حذف" class="material-icons md-dark pmd-sm">delete</i></a></td>
                    </tr>

                @endfor
                </tbody>

            </table>
        </div>
    </div>
    <div class="paginationCont animateSp fadeUpIn">
        {{ $data->links() }}
    </div>

@endsection