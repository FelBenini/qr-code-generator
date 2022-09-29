$(document).ready(function () {
        $("#generate_qrcode").on("click", function () {
        let size = $("#size").val();
        let url = $("#URL").val();
        
        $("#qr_code").html('<img src="https://chart.googleapis.com/chart?chs='+size+'x'+size+'&cht=qr&chl='+url+'" alt="qr code image">');
    });
});
