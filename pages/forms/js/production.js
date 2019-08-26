;(function(){
    click()
   function  click(){
    $(".buttonArea li").click(function() {
        $(".buttonArea li").removeClass("buttonSelect")
        $(this).toggleClass("buttonSelect");
        $(".selectOption").css("display","none")
        $(".selectOption").eq($(this).index()).css("display","block");
    });
   }
    // 下拉框
    var lower = document.getElementById("lower")
     // 获取原料种类显示框
     var type = document.getElementById("type")
     var zl = document.getElementById("zl")
     var api = "http://210.12.220.75:10036/Vegetables"
    // 出库的批次号
    // $.ajax({
    //     url:api+"/retrieval/getNumber.action",
    //     type:"get",
    //     datatype:"json",
    //     success:res=>{
    //         console.log(res)
    //     }
    // })

          // 获取url传过来的参数
    // 生产的批次号
    $.ajax({
        url:api+"/info/getPccode.action",
        type:"get",
        async:false,
        datatype:"json",
        success:res=>{
            // console.log(res)
            display(res.Back)
        }
    })
    function display(data){
        for(var i=0;i<data.length;i++){
                var n = data[i]
                var option = document.createElement("option")
                option.value = n
                option.innerHTML = n
                lower.appendChild(option)
        }
    }
    var id = window.location.search.split("=")
    var option = lower.children
    if(id){
        // lower.value = id[1]
     for(var i=0;i<option.length;i++){
        if(id[1]==option[i].innerHTML){
            lower.value = option[i].innerHTML
            break;
        }
     }  
            change()
    }
    // 一进来判断是否有值 如果没有则禁用li的事件
    if(lower.value =="0"){
        // $(".buttonArea li").unbind();
        type.innerHTML= "请选择批次"
        zl.innerHTML= "请选择批次"  
    }
    function change(){
        if(lower.value=="0"){
            toastr.info("请选择批次");   
            return
        }
    // 根据批次号 得到蔬菜
    $.ajax({
        url:api+"/product/getVegetables.action",
        type:"get",
        async:false,
        datatype:"json",
        data:{
            "pccode":lower.value
        },
        success:res=>{
            type.innerHTML = res.Back.replace(/\[|]/g,'')
            zl.innerHTML = res.Back.replace(/\[|]/g,'')
            // replace(/\[|]/g,'') 替换中括号
        }
    })
}

// select发生改变时 请求
    lower.onchange = ()=>{
        type.innerHTML= "请选择批次"
        zl.innerHTML= "请选择批次"
            change()
            // 获取蔬菜设备
            // $.ajax({
            //     url:api+"/product/getProduct.action",
            //     datatype:"json",
            //     type:"get",
            //     async:false,
            //     data:{
            //         "pccode":lower.value,
            //         "scname":type.innerHTML
            //     },
            //     success:res=>{
            //         console.log(res)
            //     }
            // })
    }
    var li  = document.querySelector(".listArea").children
    var div = document.getElementsByClassName("selectOption")
    $(".que").on("click",function(){
        if(lower.value=="0"){
            toastr.info("请选择批次");
            return
        }
        for(var i=0;i<li.length;i++){
            if(li[i].innerHTML ==$("#type").text()){
                li[i].classList.add("buttonSelect")
                div[i].style.display = "block"
                // 删除所有li的事件处理程序
                // $(".buttonArea li").unbind();
            }
            else{
                li[i].classList.remove("buttonSelect")
                div[i].style.display = "none"
            }
        }
        lower.disabled = true
        this.disabled = true
        $(".reset").show(300)
    })
    $(".reset").on("click",function(){
        lower.disabled = false
        document.querySelector(".que").disabled = false
        $(".reset").hide(300)
        for(var i=0;i<li.length;i++){
            li[i].classList.remove("buttonSelect")
            div[i].style.display = "none"
        }
        li[0].classList.add("buttonSelect")
        click()
    })
})()