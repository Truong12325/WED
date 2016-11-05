$(function(){
	/*
	 function KTTen() {
        if ($("#txthoten").val().trim().length == 0) {
            $("#hoten").html("<b>ban chua nhap ten</b>");
               return false;
        }
            $("#hoten").html("*");
              return true;
     }
      //gán sự kiện
       $("#txthoten").on("blur", KTTen);
	*/
	function kiemTraHoTen(){
		var re=/^\D{2,}$/;
		if(re.test($("#txtHoTen").val())){
			$("#txtHoTen_fe").html("");
			return true;
		}
		else{
			$("#txtHoTen_fe").html("*Họ phải bắt đầu bằng chữ in hoa!");
			return false;
		}
	}
	
	$("#txtHoTen").on("blur", kiemTraHoTen);
	
	function kiemTraMSSV(){
		var re2=/^\d{2,}$/;
		if(re2.test($("#txtmssv").val())){
			$("#txtmssv_fe").html("");
			return true;
		}
		else{
			$("#txtmssv_fe").html("*Mã số sinh viên phải là số!");
			return false;
		}
	}
	
	$("#txtmssv").on("blur", kiemTraMSSV);
	
	function kiemTraLop(){
		if($("#txtlop").val().trim().length>0){
			$("#txtlop_fe").html("");
			return true;
		}
		else{
			$("#txtlop_fe").html("*Không để trống!");
			return false;
		}
	}
	
	$("#txtlop").on("blur", kiemTraLop);
	
	/*
	function KTEmail() {
         var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (re.test($("#txtemail").val()) == false) {
            $("#email").html("ban chua nhap dung email");
            return false;
        }
        $("#email").html("");
         return true;
     }
    //gán sự kiện
     $("#txtemail").on("blur", KTEmail);	
	*/
	function kiemTraEmail(){
		var re6 = /^\w{3,}[@]\w{4,8}\.((\w{2,6})||(\w{3,6}\.\w{2,6}))$/;
		if(re6.test($("#txtemail").val())){
			$("#txtemail_fe").html("");
			return true;
		}
		else{
			$("#txtemail_fe").html("*Đây không phải là Email!");
			return false;
		}
	}
	
	$("#txtemail").on("blur", kiemTraEmail);
	
	function kiemTraSoDienThoai(){
		var re6 = /^\d{10,15}$/;
		if(re6.test($("#txtsdt").val())){
			$("#txtsdt_fe").html("");
			return true;
		}
		else{
			$("#txtsdt_fe").html("*Số điện thoại không đúng!");
			return false;
		}
	}
	
	$("#txtsdt").on("blur", kiemTraSoDienThoai);
	
	function kiemTraNoiDung(){
		if(($("#txtnoidung").val().trim().length)>0){
			$("#txtnoidung_fe").html("");
			return true;
		}
		else{
			$("#txtnoidung_fe").html("*Không để trống!");
			return false;
		}
	}
	
	$("#txtnoidung").on("blur", kiemTraNoiDung);
	
	$("#form-contact").on("submit", function(){
		if(kiemTraHoTen()==false || kiemTraMSSV()==false || kiemTraLop()==false || kiemTraEmail()==false || kiemTraSoDienThoai()==false|| kiemTraNoiDung()==false){
			alert("Bạn đã nhập sai thông tin đăng ký!");
			return false;
		}
		else{
			alert("Đăng ký thành công!");
			return true;
		}
	})
})