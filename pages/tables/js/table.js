;(function(){
    // 添加入库表单
        // 主页盒子
        var div = document.getElementsByClassName("content-wrapper")[0]
        // 添加入库按钮
        var btn = document.getElementById("addbtn")
        // 添加入库表单
        var add = document.getElementById("content_rop")
        btn.onclick = ()=>{
            div.style.display = "none"
            add.style.display = "block"
        }
    // 添加出库按钮
    var chu = document.getElementById("chu")
    // 添加出库表单
    var chuinp = document.getElementById("chu_rop")
    chu.onclick=()=>{
        div.style.display = "none"
        chuinp.style.display = "block"
    }
    var close = document.getElementsByClassName("close");
       close[0].onclick = ()=>{
        layer.open({
            title:"提示",
            content: '确定要退出吗？'
            ,btn: ['确定', '取消'],
            shadeClose:true
            ,yes: function(index, layero){
              //按钮【确定】的回调
              div.style.display="block"
              add.style.display = "none"
              layer.close(index);
            }
            ,btn2: function(index, layero){
              //按钮【取消】的回调
              
              //return false 开启该代码可禁止点击该按钮关闭
            },cancel: function(){ 
                 //右上角关闭回调
              
              //return false 开启该代码可禁止点击该按钮关闭
            }
        })
       }
       close[1].onclick = ()=>{
        layer.open({
            title:"提示",
            content: '确定要退出吗？'
            ,btn: ['确定', '取消'],
            shadeClose:true
            ,yes: function(index, layero){
              //按钮【确定】的回调
              div.style.display="block"
              chuinp.style.display = "none"
              layer.close(index);
            }
            ,btn2: function(index, layero){
              //按钮【取消】的回调
              
              //return false 开启该代码可禁止点击该按钮关闭
            },cancel: function(){ 
                 //右上角关闭回调
              
              //return false 开启该代码可禁止点击该按钮关闭
            }
        })
       }
    //    添加入库数据获取
    var api = "http://210.12.220.75:10036/Vegetables"
    // 得到table
    var tbody = document.getElementById("t_body")
    var p=""
    $.ajax({
        url:api+"/stock/list.action",
        type:"get",
        async: true,  
        datatype:"json",
        data:{
            "pageNum":1
        },
        success:(res)=>{
            p = res.pageNum
            context(res.list)
        }
    })
    function context(data){
        for(var i=0;i<data.length;i++){
            var o = data[i]
            var tr = document.createElement("tr")
            tr.innerHTML = `
            <td>${i+1}.</td>
            <td>${o.tyep}</td>
            <td>${o.createtime}</td>
            <td>${o.weight}kg</td>
            `
            tbody.appendChild(tr)
        }
    }
    var chu_rop = document.getElementById("ck_rop")
        // 请求出库信息列表
        $.ajax({
            url:api+"/retrieval/list.action",
            type:"get",
            // async: true,  
            datatype:"json",
            data:{
                "pageNum":1
            },
            success:(res)=>{
                ck(res)
            }
        })
        function ck(chu){
            for(var i=0;i<chu.length;i++){
                var y = chu[i]
                var tr = document.createElement("tr")
                tr.innerHTML = `<td>${i+1}.</td>
                                <td>${y.type}</td>
                                <td>${y.createtime}</td>
                                <td>${y.weight}kg</td>`
                chu_rop.appendChild(tr)
            }
        }
        // 获取库存信息列表
        var kc_rop = document.getElementById("kcxx")
        $.ajax({
            url:api+"/kcxx/list.action",
            type:"get",
            datatype:"json",
            data:{
                "pageNum":1
            },
            success:(res)=>{
                console.log(res)
                kcxx(res)
            }
        })
        function  kcxx(kc){
            for(var i=0;i<kc.length;i++){
                var y = kc[i]
                var tr = document.createElement("tr")
                tr.innerHTML = `<td>${i+1}.</td>
                                <td>${y.operator}</td>
                                <td>${y.createtime}</td>
                                <td>${y.type}</td>
                                <td>${y.remarks}</td>
                                <td><button class="btn btn-default">修改</button></td>
                                `
                        kc_rop.appendChild(tr)
            }
        }
        // 批次号
        // $.ajax({
        //     url:api+"/retrieval/getNumber.action",
        //     type:"get",
        //     // async: true,  
        //     datatype:"json",
        //     success:(res)=>{
        //         console.log(res)
        //     }
        // })
})()
