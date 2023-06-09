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
            var age = item.querySelector(".age");
            var phone = item.querySelector(".phone");

            //获取弹窗中的各项
            var yid = editView.querySelector("#yid");
            var yname = editView.querySelector("#yname");
            var ysex = editView.querySelector("#ysex");
            var yage = editView.querySelector("#yage");
            var yphone = editView.querySelector("#yphone");

            yid.value = id.innerHTML
            yname.value = name.innerHTML;
            ysex.value = sex.innerHTML;
            yage.value = age.innerHTML;
            yphone.value = phone.innerHTML;

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
                age.innerHTML = yage.value;
                phone.innerHTML = yphone.value;

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

    var addPatient = $(".addPatient")[0];
    addPatient.addEventListener("click", function () {
        //弹窗显示和修改
        mask.style.display = "block";
        editView.style.display = "block";

        //获取弹窗中的各项
        var yid = editView.querySelector("#yid");
        var yname = editView.querySelector("#yname");
        var ysex = editView.querySelector("#ysex");
        var yphone = editView.querySelector("#yphone");
        var yage = editView.querySelector("#yage")

        yid.value = "";
        yname.value = "";
        ysex.value= "";
        yphone.value = "";
        yage.value = "";

        yid.disabled = false;
        yid.style.background = 'transparent'
        //获取弹窗中的取消按钮
        var cancel = editView.querySelector(".cancel");
        cancel.addEventListener("click", function () {
            mask.style.display = "none";
            editView.style.display = "none";
        })

        //获取弹窗中的确定按钮
        var ok = editView.querySelector(".ok");
        ok.addEventListener("click", function () {

            //添加节点
            var doctor = $(".tableContainer>.item")[0];

            mask.style.display = "none";
            editView.style.display = "none";


            var id = doctor.querySelector(".idCard");
            var name = doctor.querySelector(".name");
            var sex = doctor.querySelector(".sex");
            var phone = doctor.querySelector(".phone");
            var age = doctor.querySelector(".age");

            id.innerHTML = yid.value;
            name.innerHTML = yname.value;
            sex.innerHTML = ysex.value;
            phone.innerHTML = yphone.value;
            age.innerHTML = yage.value;



            $('.tableContainer')[0].prepend(doctor);
            //数据库操作



        })

    })

}