; (function () {
    var api = "http://210.12.220.75:10036/Vegetables"
    // 查询库存信息
    auto()
    function auto() {
        var news = document.getElementById("news")
        $.ajax({
            url: api + "/kcxx/list.action",
            datatype: "json",
            type: "get",
            data: { "pageNum": 1 },
            success: (res) => {
                console.log(res)
                show(res, news)
            }
        })
    }
    function show(data, obj) {
        for (var i = 0; i < data.length; i++) {
            var o = data[i];
            var tr = document.createElement('tr');
            tr.innerHTML = `<td>${i + 1}</td>
                        <td>${o.type}</td>
                        <td>${o.zl}kg</td>
                        <td>${o.place}</td>
                        <td>出入库信息完整，采用的自定义鲜切菜，节水率提升</td>
            `
            obj.appendChild(tr)
        }
    }
    // 获取所有的input的name
    var obj = $("#inp_rop").serializeArray()
    var inp = $("#inp_rop input")
    var sel = $("#inp_rop select")
    var reNumber = /^\d+$/
    // 失焦验证

    function yz1() {
        if (sel[0].value == "0") {
            toastr.warning("请选择蔬菜");
            return true;
        }
    }
    function yz() {
        if (inp[0].value == "") {
            toastr.warning("重量不能为空");
            return true;
        } else if (!reNumber.test(inp[0].value)) {
            toastr.warning("请输入数字");
            return true
        }
    }
    var repeat = document.getElementById("repeat")
    var add = document.getElementById("add")
    repeat.onclick = function () {
        sel[0].value = "0"
        inp[0].value = ""
        inp[1].value = ""
    }
    // 添加批次
    // 获取时间
    var date = new Date()
    // 获取年
    var year = date.getFullYear()
    // 获取月
    var month = date.getMonth() + 1 > 10 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1)
    // 获取日
    var day = date.getDate()  > 10 ? date.getDate() : "0" + date.getDate()
    // 获取小时
    var hous = date.getHours() > 10 ? date.getHours() : "0" + date.getHours()
    // 获取分
    var minu = date.getMinutes() >10 ? date.getMinutes() : "0" + date.getMinutes()
    var week = year + "." +month +"." + day + " " + hous + ":" + minu
    // 获取表格
    var pc_tab = document.getElementById("pc_table")
    for(var i=0;i<5;i++){
        var tr = document.createElement("tr")
        tr.className = "text-center"
        tr.innerHTML = `<td>111</td>
                        <td>白菜</td>
                        <td>重量</td>
                        <td>北京</td>
                        <td>${week}</td>
                        <td>
                            <span class="operate edit" onclick="production('214')" >生产</span>
                            <span class="operate  remove">删除</span>
                        </td>`
                        pc_tab.appendChild(tr)
    }
    // 点击提交按钮
    add.onclick = function () {
        console.log(week)
        var arr = null
        if (yz1() || yz()) {
            return
        } else {
            // 判断是否有这个批次 有则return 没有就添加
            $.ajax({
                url: api + "/info/getPccode.action",
                async: false,
                type: "get",
                datatype: "json",
                success: res => {
                    arr = res.Back
                }
            })
            for (var i = 0; i < arr.length; i++) {
                if (inp[1].value == arr[i]) {
                    toastr.warning("该批次已经存在");
                    return
                }
            }
            $.ajax({
                url: api + "/product/addpc.action",
                datatype: "json",
                type: "get",
                data: {
                    "pccode": inp[1].value, "scname": sel[0].value, "weight": inp[0].value,
                    "time":week
                },
                success: (res) => {
                    console.log(res)
                    if (res.Back == "true") {
                        $(".show").eq(1).hide(500)
                        $(".modal-dialog").hide(500)
                        toastr.success("添加批次成功");
                    }
                }
            })
        }
    }
})()
function production(pccode){
    // console.log(id)
      window.location.href="pages/forms/advanced.html?pccode="+pccode
       
}