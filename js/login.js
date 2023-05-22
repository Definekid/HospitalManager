window.onload = function () {
    
    var loc = location.href;
    /**
     * 获得所选的首页卡片 
     * 0：患者
     * 1：医生
     * 2：商城
     * 3：管理员
     */
    var type = loc.split("?")[1].split("=")[1];

    var toRegister = $(".register>span")[0];

    toRegister.addEventListener("click", function () {
        window.location.href = "register.html?index=" + type;
    })

    // 获取button按钮响应事件
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