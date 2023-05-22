window.onload = function () {

    var btns = $(".container>div");
    
    btns.click(function () {
        window.location.href = "login.html?index=" + $(this).index();
    })

}