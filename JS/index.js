$(document).ready(function() {
    var i = 1; 
    $("#btn2").click(function(){
$("#myModal").modal();

    });

    function kiemTraSDT() {
        var i = 1;
        let mauKT = /([A-Z]{3}\-[A-Z]{3}\d{2}-\d{4}$)/;
        if ($("#Ma").val() == "") {
            $("#tbMa").html("Không để trống");
            return false;
        }
        if (!mauKT.test($("#Ma").val())) {
            $("#tbMa").html("Mã nhập theo mẫu: XXX-XXX-00-0000");
            return true;
        }
        $("#tbMa").html("*");
        return true;
    }
    $("#Ma").blur(kiemTraMa);


    function KiemTraNgay(){
        if($("#NTT").val()==""){
            $("#tbNTT").html("Không để trống");
            return false;
        }
        var day = new Date($("#NTT").val());
        var today = new Date();
        today.setDate(today.getDate()+ 30);
        if(day < today){
            $("#tbNTT").html("Nhap sai");
            return false;
        }
        $("#tbNTT").html("*");
        return true;
    }

    $("#save").click(function() {
        {
            row = "<tr>";
            row += "<th>" + (i++) + "</th>";
            row += "<th>" + $("#Name").val() + "</th>";
            row += "<th>" + $("#SoAo").val() + "</th>";
            row += "<th>" + $("#CLB").val() + "</th>";
            row += "<th>" + $("#NTT").val() + "</th>";
            row += "<th>" + $("#SDT").val() + "</th>";
            row += "<th>" + $("#ADD").val() + "</th>";
            $("#danhSach").append(row);
            $("#myModal").modal("hide");
        }
    })    
})