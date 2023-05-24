window.onload = function () {
    
    var paibanbiao = $(".rukou_paibanbiao")[0];
    var zddan = $(".rukou_zddan")[0];

    paibanbiao.addEventListener("click", function () {
        window.location.href = "paibanbiao.html";
    })
    zddan.addEventListener("click", function () {
        window.location.href = "doctor_getpatienthis.html";
    })
   
}