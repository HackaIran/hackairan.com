$(function () {
    $("#loading").fadeOut(500);
})

function hideLoading() {
    $("#ajaxLoading").fadeIn(500);
}

function showLoading() {
    $("#ajaxLoading").fadeOut(500);
}

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