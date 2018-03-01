$(window).on("scroll load",function () {
    
    /* Every time the window is scrolled ... */

    /* Check the location of each desired element */
    $('.animateSp').each(function (i) {

        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height()+200;
        var top_of_window = $(window).scrollTop()-200;
        /* If the object is completely visible in the window, fade it it */
        if (bottom_of_window > bottom_of_object && top_of_window < bottom_of_object) {
            
                
            
            if ($(this).attr("data-display") != "block") {
                display = $(this).attr("data-display");
            } else {
                display = "block";
            }
            if ($(this).hasClass("scale")) {
                $(this).animate({ 'opacity': '1' }, '1000').css({ "display": display }).css({ transitionDuration: "1s", transform: "scale(1)" }).removeClass("animateSp");
                
            }else if($(this).hasClass("type")){
                if ($(this).is("[data-string]")) {
                    $(this).removeClass("animate");
                    $(this).typed({
                        strings: [$(this).attr("data-string")],
                        typeSpeed: 100,
                        startDelay: 2000
                    })
                }
            }

            else {
                $(this).animate({ 'opacity': '1' }, '1000').css({ transitionDuration: "1s", transform: "translate(0px)" }).css({ "display": display }).removeClass("animateSp");
            }

            
        }

    });

    
    
})