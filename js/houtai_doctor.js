window.onload = function () {
    // 获取全选按钮
    var allCheck = $(".ally")[0];

    // 获取所有item
    var items = $(".item");


    //获取item所有的复选框
    var itemChecks = Array.from($(".item input[type='checkbox']"));
    console.log(itemChecks);


    //全选实现
    allCheck.addEventListener("change", function () {
        itemChecks.forEach(element => {
            element.checked = allCheck.checked;
        });
    })

    //单独按钮对全选按钮的控制
    itemChecks.forEach(element => {
        element.addEventListener("change", function () {
            allCheck.checked = itemChecks.every(x => x.checked);
        })
    })

    //获取所有的修改按钮
    var modifyBtns = Array.from($(".item .edi"));
    var mask = $(".mask")[0];
    var editView = $(".editView")[0];

    modifyBtns.forEach(element => {
        element.addEventListener("click", function () {
            //弹窗显示和修改
            mask.style.display = "block";
            editView.style.display = "block";
            //获取当前点击的item
            var item = element.parentNode;
            console.log(item);

            //获取要修改容器的各项
            var id = item.querySelector(".idCard");
            var name = item.querySelector(".name");
            var sex = item.querySelector(".sex");
            var phone = item.querySelector(".phone");
            var keshi = item.querySelector(".keshi");

            //获取弹窗中的各项
            var yid = editView.querySelector("#yid");
            var yname = editView.querySelector("#yname");
            var ysex = editView.querySelector("#ysex");
            var yage = editView.querySelector("#yage");
            var yphone = editView.querySelector("#yphone");
            var ypos = editView.querySelector("#ypos");

            yid.value = id.innerHTML
            yname.value = name.innerHTML;
            ysex.value = sex.innerHTML;
            yphone.value = phone.innerHTML;
            ypos.value = keshi.innerHTML;

            //获取弹窗中的取消按钮
            var cancel = editView.querySelector(".cancel");
            cancel.addEventListener("click", function () {
                mask.style.display = "none";
                editView.style.display = "none";
            })

            //获取弹窗中的确定按钮
            var ok = editView.querySelector(".ok");
            ok.addEventListener("click", function () {
                mask.style.display = "none";
                editView.style.display = "none";
                name.innerHTML = yname.value;
                sex.innerHTML = ysex.value;
                phone.innerHTML = yphone.value;
                keshi.innerHTML = ypos.value;

                //数据库操作
                
            })

        })
    })

    //获取所有的删除按钮
    var delBtns = Array.from($(".item .del"));
    delBtns.forEach(element => {
        element.addEventListener("click", function () {
            //获取当前点击的item
            var item = element.parentNode;
            item.parentNode.removeChild(item);
        })
    })

}