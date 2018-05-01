<html>

<head>

    <title>
        {{$title}}
    </title>

    <style>

        #wrapper{
            width: 100%;
            position: absolute;
            top: 0px;
            left: 0px;
            bottom: 0px;
        }

        iframe{
            width: 100%;
            height: 100%;
            outline: none;
            border: none;
        }

    </style>

</head>

<body>

<div id="wrapper">
    <iframe src="{{$url}}">



    </iframe>
</div>

</body>

</html>