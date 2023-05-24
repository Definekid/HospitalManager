window.onload = function () {
  
    //获取所有的详情按钮
    var detailsBtns = Array.from($(".item .detail"));

    detailsBtns.forEach(element => {
        element.addEventListener("click", function () {
            window.location.href = "patient_his_detail.html?type=1";
        })
    })

    
    var addBtn = document.querySelector("#add");
    addBtn.addEventListener("click", function () {
        window.location.href = "doctor_zddan.html";
    })


}