
    var api = "http://210.12.220.75:10036/Vegetables"
    var obj = document.getElementById("table")
        // 当前页数\
        var t ="1"
        var dat
    // 添加设备
    var form = $("#inp_rop").serializeArray()
    var opp = {}
    for (let val of form) {
      opp[val.name] = val.value;
    }
    $("#add").on("click",function(){
        // 清除空格
      opp.sbname = $("input:eq(0)").val().replace(/\s+/g,"");
      opp.ip = $("input:eq(1)").val().replace(/\s+/g,"");
      opp.port = $("input:eq(2)").val().replace(/\s+/g,"");
      opp.address = $("input:eq(3)").val().replace(/\s+/g,"");
      opp.sbcode = $("input:eq(4)").val().replace(/\s+/g,"");
      if(opp.sbname==""){
            toastr.warning("请填写设备名称");
             return;
      }else if(opp.ip==""){
          toastr.warning("请填写设备ip");
          return;
      }else if(opp.port==""){
          toastr.warning("请填写设备端口");
          return;
      }else if(opp.address==""){
          toastr.warning("请填写设备地址");
          return;
      }else if(opp.sbcode==""){
          toastr.warning("请填写设备code");
          return;
      }
      $.ajax({
          url:api+"/sbxx/addSbxx.action",
          type:"get",
          data:opp,
          async:false,
          datatype:"json",
          success:(res)=>{
              if(res.Back=="true"){
                toastr.success("添加成功");
                  opp = {}
                  $(".show")[0].style.display = "none"
                  $(".show")[1].style.display = "none"
                  $.ajax({
                      url:api+"/sbxx/getSbxxlist.action",
                      type:"get",
                      async:false,
                      datatype:"json",
                      data:{
                          "pageNum":t
                      },
                      success:(res)=>{
                        $("#table").empty()
                        show(res)
                      }
                  })
                $("input:eq(0)").val("")
                $("input:eq(1)").val("")
                $("input:eq(2)").val("")
                $("input:eq(3)").val("")
                $("input:eq(4)").val("")  
              }
          }
      })
    })
// 重置按钮
    var repeat = document.getElementById("repeat")
    repeat.onclick = function(){
        var arr = $("#inp_rop input")
        for(var i=0;i<arr.length;i++){
                arr[i].value = ""
        }
    }

//   请求
    $.ajax({
        url:api+"/sbxx/getSbxxlist.action",
        type:"get",
        async:false,
        datatype:"json",
        data:{
            "pageNum":t
        },
        success:(res)=>{
            dat = res
        }
    })
    show(dat)
    function show(dat){
        for(var i=0;i<dat.list.length;i++){
            var o = dat.list[i];
            var tr = document.createElement('tr');
            tr.className = "text-center"
            tr.innerHTML = `    
                                <td> <span class="yuan"></span> 正常</td>
                                <td>${o.sbname}</td>
                                <td>${o.ip}</td>
                                <td>${o.port}</td>
                                <td>${o.address}</td>
                                <td>
                                <span class="operate edit" onclick="edit(${o.id})">编辑</span>
                                <span class="operate">参数设置</span>
                                <span class="operate  remove" onclick="remove(${o.id})">删除</span>
                                </td>
            `
           obj.appendChild(tr)
        }
    } 
    // 点击查看 编辑数据
    $("#close").on("click",()=>{
        $(".zzc_rop").hide(500)
        toastr.info("已取消修改");
    })
    // 点击编辑  查看数据
    function edit(id){
        $(".zzc_rop").show(500)
        $.ajax({
            url:api+"/sbxx/getDetail.action",
            tye:"get",
            datatype:"json",
            data:{
                "id":id
            },
            success:res=>{
                $("#inp_rop_edit input:eq(0)").val(res.Back.sbname)
                $("#inp_rop_edit input:eq(1)").val(res.Back.ip)
                $("#inp_rop_edit input:eq(2)").val(res.Back.port)
                $("#inp_rop_edit input:eq(3)").val(res.Back.address)
                $("#inp_rop_edit input:eq(4)").val(res.Back.sbcode)
                $("#inp_rop_edit input:eq(5)").val(res.Back.id)
            }
        })
    }
    // 编辑 保存
    var edit_form = $("#inp_rop_edit").serializeArray()
    var you = {}
    for (let val of edit_form) {
      you[val.name] = val.value;
    }
   function change(){
    you.sbname =  $("#inp_rop_edit input:eq(0)").val()
    you.ip = $("#inp_rop_edit input:eq(1)").val()
    you.port = $("#inp_rop_edit input:eq(2)").val()
    you.address = $("#inp_rop_edit input:eq(3)").val()
    you.sbcode = $("#inp_rop_edit input:eq(4)").val()
    you.id = $("#inp_rop_edit input:eq(5)").val()
    if(you.sbname==""){
        toastr.warning("请填写设备名称");
         return;
  }else if(you.ip==""){
      toastr.warning("请填写设备ip");
      return;
  }else if(you.port==""){
      toastr.warning("请填写设备端口");
      return;
  }else if(you.address==""){
      toastr.warning("请填写设备地址");
      return;
  }else if(you.sbcode==""){
      toastr.warning("请填写设备code");
      return;
  }
    $.ajax({
        url:api+"/sbxx/editSbxx.action",
        type:"get",
        datatype:"json",
        data:you,
        success:res=>{
            if(res.Back == "true"){
                $(".zzc_rop").hide(500)
                toastr.success("修改成功")
                $.ajax({
                    url:api+"/sbxx/getSbxxlist.action",
                    type:"get",
                    async:false,
                    datatype:"json",
                    data:{
                        "pageNum":t
                    },
                    success:(res)=>{
                        $("#table").empty()
                        dat=res
                        show(dat)
                    }
                })
            }else{
                toastr.error("修改失败")
            }
        }
    })
}
    // 分页列表
    var ul = document.getElementsByClassName("pagination")[0]
    for(var i =0;i<dat.totalPage;i++){
            var li = document.createElement("li")
            li.className = "page-item"
            li.innerHTML = `<a class=\"page-link\" href=\"#\">${i+1}</a>`
            ul.appendChild(li)
    }
//  上一页  下一页
        var upper = document.getElementById("upper");
        var next = document.getElementById("next")
        // 分页
        var  Allli = ul.children
    // 下一页
    next.onclick = (dat)=>{
             t++
            //  dele()
             $.ajax({
                url:api+"/sbxx/getSbxxlist.action",
                type:"get",
                async:false,
                datatype:"json",
                data:{
                    "pageNum":t
                },
                success:(res)=>{
                    $("#table").empty()
                    dat=res
                    show(dat)
                }
            })
       if(t >dat.totalPage){ 
           t =  dat.totalPage
           toastr.info("已经是最后一页了");
            return
       }
       for(var i=0;i<Allli.length;i++){
        Allli[i].index = i+1
        if( Allli[i].index == t){
         Allli[i].children[0].classList.add("active")
          }else{
             Allli[i].children[0].classList.remove("active")
          }
     }
          dat.pageNum=t
   }
//    上一页
upper.onclick = (dat)=>{
       if(t==1){
        toastr.info("已经是第一页了");
            return
       }
    t--
    // dele()
    $.ajax({
        url:api+"/sbxx/getSbxxlist.action",
        type:"get",
        async:true,
        datatype:"json",
        data:{
            "pageNum":t
        },
        success:(res)=>{
            $("#table").empty()
            dat = res
            show(dat)
        }
    })
    for(var i=0;i<Allli.length;i++){
        Allli[i].index = i+1
        if( Allli[i].index == t){
         Allli[i].children[0].classList.add("active")
          }else{
             Allli[i].children[0].classList.remove("active")
          }
     }
}
    // 分页
    for(var i=0;i<Allli.length;i++){
       Allli[i].index = i+1
       if( Allli[i].index == t){
        Allli[i].children[0].classList.add("active")
         }else{
            Allli[i].children[0].classList.remove("active")
         }
       Allli[i].onclick = function(){
        //    dele()
           t = this.index
           for(var j=0;j<Allli.length;j++){
                Allli[j].children[0].classList.remove("active")
                Allli[this.index-1].children[0].classList.add("active")
           }
        $.ajax({
            url:api+"/sbxx/getSbxxlist.action",
            type:"get",
            async:false,
            datatype:"json",
            data:{
                "pageNum":t
            },
            success:(res)=>{
                $("#table").empty()
                dat=res
                show(dat)
            }
        })
       }
    }      

    // 删除设备事件
function remove(id){
    layer.open({
        title:"提示",
        content: '确定要删除此设备吗？'
        ,btn: ['确定', '取消'],
        anim: 5,
        shadeClose:true
        ,yes: function(index, layero){
          $.ajax({
              url:api+"/sbxx/removeSbxx.action",
              datatype:"json",
              type:"get",
              data:{
                  "id":id
              },
              success:res=>{
                  if(res.Back=="true"){
                    $.ajax({
                        url:api+"/sbxx/getSbxxlist.action",
                        type:"get",
                        async:false,
                        datatype:"json",
                        data:{
                            "pageNum":t
                        },
                        success:(res)=>{
                            $("#table").empty()
                            dat=res
                            show(dat)
                        }
                    })
                    toastr.success("删除成功")
                  }
              }
          })
          //按钮【确定】的回调
          layer.close(index);
        }
    })
}
