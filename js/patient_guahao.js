window.onload = function () {
    var chuzhen = $(".chuzhen")[0];
    var fuzhen = $(".fuzhen")[0];
    var lastchoice = $(".wrap>.top")[0];

    chuzhen.onclick = function () {
        // 去掉类名y
        this.classList.add("y")
        fuzhen.classList.remove("y");
        lastchoice.style.display = "none";
    }

    fuzhen.onclick = function () {
        this.classList.add("y")
        chuzhen.classList.remove("y");
        lastchoice.style.display = "flex";

        // 在数据库中获取上次就诊信息
    }

    var choice = $(".card-body>p:last-child")[0];
    choice.onclick = function () {
        alert("挂号成功，请在规定时间内就诊");
    }

}