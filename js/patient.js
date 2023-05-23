window.onload = function () {
    var history = $(".rukou_history")[0];
    var guahao = $(".rukou_guahao")[0];
    var quyaojiaofei = $(".rukou_quyaojiaofei")[0];
    var keshi = $(".rukou_keshi")[0];

    history.addEventListener("click", function () {
        window.location.href = "patient_history.html";
    })
    guahao.addEventListener("click", function () {
        window.location.href = "patient_guahao.html";
    })
    quyaojiaofei.addEventListener("click", function () {
        window.location.href = "patient_quyaojiaofei.html";
    }
    )
    keshi.addEventListener("click", function () {
        window.location.href = "patient_keshi.html";
    })
}