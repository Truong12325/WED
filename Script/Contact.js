// JavaScript source code
$(function () {
    function KtHOTEN() {
        var re = /([A-Z]\w+)+$/;
        if (re.test($("#txtHoTen").val()) == false) {
            $("#lblHoTen").html("Bạn đã nhập sai vui lòng nhập lại!");
            return false;
        }
        $("#lblHoTen").html("*");
        return true;
    }
    $("#txtHoTen").on("blur", KtHOTEN);

    function KtHoKhau() {
        var hk = $("#HoKhau").val();
        $("#lblHoKhau").val() = hk;
    }
    $("#HoKhau").on("blur", KtHoKhau);

    function CheckEmail() {
        var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (re.test($("input[name=txtEmail]").val()) == false) {
            $("#Email").html("Bạn đã nhập sai vui lòng nhập lại!")
            return false;
        }
        $("#Email").html("");
        return true;
    }
    $("#txtEmail").on("blur", CheckEmail);
})