$(function() {
    $("#loading").fadeOut(500);
})

function hideLoading() {
    $("#ajaxLoading").fadeIn(500);
}

function showLoading() {
    $("#ajaxLoading").fadeOut(500);
}
//resize elems on resize and load
$(window).on("load resize", function () {
    resizeElems();

    doResponsive();//for responsive
})


//validation
function checkValidation(type, parent) {

    errorInput = false;

    if (type == 1) { //withoutIcon
        $(parent).find("[data-required]").each(function () {
            if ($(this).val() == "" || $(this).val() == null) {

                $(this).parent().removeClass("has-success").addClass("has-error");
                $(this).next().show();

                errorInput = true;

            } else {
                $(this).parent().addClass("has-success").removeClass("has-error");
                $(this).next().hide();
            }
        })
    } else if (type == 2) {//with icon
        $(parent).find("[data-required]").each(function () {
            if ($(this).val() == "" || $(this).val() == null) {

                $(this).parent().parent().removeClass("has-success").addClass("has-error");
                $(this).next().next().show();

                errorInput = true;

            } else {
                $(this).parent().parent().addClass("has-success").removeClass("has-error");
                $(this).next().next().hide();
            }
        })


    } else if (type == 3) {//without float without icon
        $(parent).find("[data-required]").each(function () {
            if ($(this).val() == "" || $(this).val() == null) {

                $(this).parent().removeClass("has-success").addClass("has-error");
                $(this).next().next().show();

                errorInput = true;

            } else {
                $(this).parent().addClass("has-success").removeClass("has-error");
                $(this).next().next().hide();
            }
        })
    }

    return errorInput;
}
//sidebar functions
$(function () {
    $("[title]").tooltip();
    //widering sidebar
    //mouseover
    $("#mainSideBar").mouseenter(function () {
        if ($(this).attr("data-collapse") == "false") {
            $("#mainSideBar").css({ "width": "280px", "transitionDuration": "0.5s" });
            $("#mainSideBarSlide>ul>li>a>div").delay(500).fadeIn(500);
        }
    })
    //mouseleave
    $("#mainSideBar").mouseleave(function () {
        if ($(this).attr("data-collapse") == "false") {
            $("#mainSideBarSlide>ul>li>a>div").fadeOut(0);
            $("#mainSideBar").css({ "width": "65px", "transitionDuration": "0.3s" });
            $("#mainSideBarSlide").css({ "transform": "translateX(0px)", "transition-duration": "0.5s" });
            $("[data-aside-slide]").css({ "transform": "translate(0px)", "transition-duration": "0s" });
        }
    })
    //collapsing the sidebar 
    $("#mainSideBar [data-collapsable]").click(function () {
        //sliding current one
        if ($(this).parent().parent().attr("id") == "mainSideBarSlide") {
            $(this).parent().parent().css({ "transform": "translateX(280px)", "transition-duration": "0.5s" })
        } else {
            $(this).parent().parent().css({ "transform": "translateX(560px)", "transition-duration": "0.5s" })
        }
        //sliding next one
        var target = $(this).attr("data-href");
        $("[data-aside-slide][data-id=" + target + "]").css({ "transform": "translateX(280px)","transition-duration":"0.5s" }).find("ul>li>a>div").delay(500).fadeIn(500);
    })
    //back btn
    $(".backWardSlide").click(function () {
        //sliding the back one
        if ($("[data-href=" + $(this).parent().parent().attr("data-id") + "]").parent().parent().attr("id") == "mainSideBarSlide") {
            $("[data-href=" + $(this).parent().parent().attr("data-id") + "]").parent().parent().css({ "transform": "translateX(0px)", "transition-duration": "0.5s" })
        } else {
            $("[data-href=" + $(this).parent().parent().attr("data-id") + "]").parent().parent().css({ "transform": "translateX(280px)", "transition-duration": "0.5s" })
        }
        // fading out current one
        $(this).parent().parent().find("ul>li>a>div").fadeOut();
        //sliding current one
        $(this).parent().parent().css({ "transform": "translateX(0px)","transition-duration":"0.5s" });
    })



    //screen toggler

    $("#screenToggler").click(function() {
        if ((document.fullScreenElement && document.fullScreenElement !== null) ||
            (!document.mozFullScreen && !document.webkitIsFullScreen)) {
            if (document.documentElement.requestFullScreen) {
                document.documentElement.requestFullScreen();
                $(this).html("fullscreen_exit");
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
                $(this).html("fullscreen_exit");
            } else if (document.documentElement.webkitRequestFullScreen) {
                document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
                $(this).html("fullscreen_exit");
            }
        } else {
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
                $(this).html("fullscreen");
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
                $(this).html("fullscreen");
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
                $(this).html("fullscreen");
            }
        }
    })


    $("#navBarCollapser").click(function () {
        if ($("#mainSideBar").attr("data-collapse") == "false") {
            $("#mainSideBar").attr("data-collapse", "true");
            $("#mainSideBar").css({ "width": "280px", "transitionDuration": "0.5s" });
            $("#mainSideBarSlide>ul>li>a>div").delay(500).fadeIn(500);
        } else {
            $("#mainSideBar").attr("data-collapse", "false");
            $("#mainSideBarSlide>ul>li>a>div").fadeOut(0);
            $("#mainSideBar").css({ "width": "65px", "transitionDuration": "0.3s" });
            $("#mainSideBarSlide").css({ "transform": "translateX(0px)", "transition-duration": "0.5s" });
            $("[data-aside-slide]").css({ "transform": "translate(0px)", "transition-duration": "0s" });
        }
        resizeElems();
    })


    //header showable events

    $(document).click(function() {
        $(".showable").fadeOut(500);
    })

    $(".showable,#ltHeader>ul>li").click(function (event) {
        event.stopPropagation();
    })

    $("#ltHeader>ul>li").eq(0).click(function () {
        $("#headerUserShowable").fadeOut(500);
        $(".headerShowable").eq(0).fadeToggle(500);
    })

    $("#ltHeader>ul>li").eq(1).click(function (event) {
        $(".headerShowable").eq(0).fadeOut(500);
        $("#headerUserShowable").fadeToggle(500);
    })


    //animation counter

    $('.count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    //seprate thousands on window load

        seprate();
    


})

function resizeElems() {
    if ($("#mainSideBar").attr("data-collapse") == "false") {
        $("#mainCont").width($(window).width()-65-20+"px");
    } else {
        $("#mainCont").width($(window).width() - 280-20 + "px");
    }
}
function doResponsive() {
    if ($(window).width() <= 550) {
        $("#mainSideBar").attr("data-collapse", "false");
        $("#mainSideBarSlide>ul>li>a>div").fadeOut(0);
        $("#mainSideBar").css({ "width": "65px", "transitionDuration": "0.3s" });
        $("#mainSideBarSlide").css({ "transform": "translateX(0px)", "transition-duration": "0.5s" });
        $("[data-aside-slide]").css({ "transform": "translate(0px)", "transition-duration": "0s" });
        resizeElems();c
    }
}
//seprate thousands functions
function seprate() {
    $(".numberSeprate").each(function () {
        $(this).text(seprateThousands($(this).attr("data-value")));
    });
}
function seprateThousands(number) {
    number = number.split("").reverse().join("");
    var seprats = Array();
    var newNumber = "";
    var tedad = 0;
    if (parseInt((number.length / 3)) == number.length / 3) {
        tedad = number.length / 3;
    } else {
        tedad = parseInt((number.length / 3)) + 1;
    }

    for (i = 0; i < tedad; i++) {
        seprats[i] = number.substr(i * 3, 3);
    }
    for (i = 0; i < tedad ; i++) {
        newNumber = newNumber + seprats[i] + ",";
    }
    newNumber = newNumber.split("").reverse().join("");
    if (newNumber[0] == ",") {
        newNumber = newNumber.substr(1, newNumber.length);
    }
    return newNumber;
}

function addErrors(result){
    result = JSON.parse(result['responseText']);
    $("#errorBox ul").empty();
    $("input[data-required]").parent().addClass("has-success").removeClass("has-error");
    $("input[data-required]").next().next().hide();
    $("#errorBox").show();
    for (var key in result) {
        // skip loop if the property is from prototype
        if (!result.hasOwnProperty(key)) continue;
        $("#"+key).parent().removeClass("has-success").addClass("has-error");

        var obj = result[key];
        for (var prop in obj) {
            // skip loop if the property is from prototype
            if(!obj.hasOwnProperty(prop)) continue;

            // your code
            $("#errorBox ul").append("<li class='text-danger'>"+obj[prop]+"</li>");

        }
    }

    showPropMsg("right","top","fadeInUp","مشکلاتی در انجام درخواست شما رخ داد.","error");

    $('html, body').animate({ scrollTop: 0 }, 'fast');
}

function removeErrorBox(){
    $("#errorBox ul").empty();
    $("#errorBox").slideUp(500);
}