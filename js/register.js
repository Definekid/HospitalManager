window.onload = function () {

    var loc = location.href;
    var type = loc.split("?")[1].split("=")[1];

    var toLogin = $(".login>span")[0];
    console.log(toLogin);
    //点击跳转到登录界面
    toLogin.addEventListener("click", function () {
        window.location.href = "login.html?index=" + type;
    })


    var btn = $(".item>button")[0];
    btn.addEventListener("click", function () {
        //跳转到对应界面
        if (type == 0) {
            //患者界面
            window.location.href = "patient.html";
        } else if (type == 1) {
            //医生界面
            window.location.href = "doctor.html";
        } else if (type == 2) {
            //商城界面
            window.location.href = "shopping.html";
        } else if (type == 3) {
            //管理员界面
            window.location.href = "houtai.html";
        }
    })

}