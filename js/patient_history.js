window.onload = function () {
  
    //获取所有的修改按钮
    var detailsBtns = Array.from($(".item .detail"));

    detailsBtns.forEach(element => {
        element.addEventListener("click", function () {
            window.location.href = "patient_his_detail.html";
        })
    })

}