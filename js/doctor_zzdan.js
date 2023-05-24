window.onload = function () {
    var addyao = $(".chufang #add")[0];
    addyao.onclick = function () {
        
        var yao = $(".chufangContainer>.yao_item")[0];
        console.log(yao);
     
        var newyao = yao.cloneNode(true);
        console.log(newyao);
        $(".chufangContainer")[0].appendChild(newyao);
    }
}