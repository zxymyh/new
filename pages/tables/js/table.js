(function() {
  // 添加入库表单
  // 主页盒子
  var div = document.getElementsByClassName("content-wrapper")[0];
  // 添加入库按钮
  var btn = document.getElementById("addbtn");
  // 添加入库表单
  var add = document.getElementById("content_rop");
  btn.onclick = () => {
    div.style.display = "none";
    add.style.display = "block";
  };

  // 添加出库按钮
  var chu = document.getElementById("chu");
  // 添加出库表单
  var chuinp = document.getElementById("chu_rop");
  chu.onclick = () => {
    div.style.display = "none";
    chuinp.style.display = "block";
    $.ajax({
      type: "get",
      url: api + "/retrieval/getNumber.action",
      dataType: "json",
      success: function(res) {
        getBatch(res.Back);
      }
    });
    function getBatch(pc) {
      for (var i = 0; i < pc.length; i++) {
        var opt = new Option(pc[i]);
        $(".sel").after(opt);
      }
    }
  };
  var close = document.getElementsByClassName("close");
  close[0].onclick = () => {
    var inp = $("#content_rop input");
    quit(add, inp);
  };
  close[1].onclick = () => {
    var inp = $("#chu_rop input");
    quit(chuinp, inp);
  };
  //  退出按钮功能
  function quit(an, input) {
    layer.open({
      title: "提示",
      content: "确定要退出吗？",
      btn: ["确定", "取消"],
      shadeClose: true,
      yes: function(index, layero) {
        //按钮【确定】的回调
        an.style.display = "none";
        div.style.display = "block";
        layer.close(index);
        input.val("");
        $(".sel")[0].selected = true;
      },
      btn2: function(index, layero) {
        //按钮【取消】的回调
        //return false 开启该代码可禁止点击该按钮关闭
      },
      cancel: function() {
        //右上角关闭回调
        //return false 开启该代码可禁止点击该按钮关闭
      }
    });
  }
  //    添加入库数据获取
  var api = "http://210.12.220.75:10036/Vegetables";
  // 得到table
  var tbody = document.getElementById("t_body");
  $.ajax({
    url: api + "/stock/list.action",
    type: "get",
    // async: true,
    dataType: "json",
    data: {
      pageNum: 1
    },
    success: res => {
      var jk3='/stock/list.action';
      var jbq3=$("#t_body");
      context(res.list);
      toPage(res,test3,jk3,jbq3,context);
    }
  });
  var chu_rop = document.getElementById("ck_rop");
  // 请求出库信息列表
  $.ajax({
    url: api + "/retrieval/list.action",
    type: "get",
    // async: true,
    dataType: "json",
    data: {
      pageNum: 1
    },
    success: res => {
      var jk2='/retrieval/list.action';
      var jbq2=$("#ck_rop");
      ck(res.list);
      toPage(res,test2,jk2,jbq2,ck);
    }
  });
  // 获取库存信息列
  var kc_rop = document.getElementById("kcxx");
  $.ajax({
    url: api + "/kcxx/list.action",
    type: "get",
    dataType: "JSON",
    data: {
      'pageNum': 1
    },
    success: res => {
      var jk1='/kcxx/list.action';
      var jbq1=$("#kcxx");
      kcxx(res.list);
      toPage(res,test1,jk1,jbq1,kcxx);
    }
  });

})();
function toPage(data,aid,jk,jbq,fun,type){
  layui.use('laypage', function(){
    var laypage = layui.laypage;
    laypage.render({
      elem:aid,
      prev:"<<",
      next:">>",
      theme:"#007bff",
      layout: ['count', 'prev', 'page', 'next', 'skip'],
      count:data.totalRecord,
      curr:data.pageNum,
      limit:data.list.length,
      jump:function(obj,first){
        $.ajax({
          url: api + jk,
          type: "get",
          dataType: "JSON",
          data: {
            'pageNum': obj.curr,
            'type':type
          },
          success: res => {
            jbq.empty();
            fun(res.list);
          }
        });
        
        
      }
    });
  });
}

var api = "http://210.12.220.75:10036/Vegetables";
var tbody = document.getElementById("t_body");
var kc_rop = document.getElementById("kcxx");
var chu_rop = document.getElementById("ck_rop");
var revise_rop=document.getElementById("revise_rop");
var div = document.getElementsByClassName("content-wrapper")[0];
// 入库提交
$("#add").click(function() {
  if (
    $("#inp_rop input")[0].value.replace(" ", "") == "" &&
    $("#inp_rop input")[1].value.replace(" ", "") == ""
  ) {
    alert("种类重量不能为空");
  } else {
    $.ajax({
      type: "get",
      url: api + "/stock/add.action",
      dataType: "json",
      data: {
        type: $("#inp_rop input")[0].value,
        weight: $("#inp_rop input")[1].value,
        place:$("#inp_rop input")[2].value,
        source: $("#inp_rop input")[3].value,
        staple: $("#inp_rop input")[4].value,
        recovery: $("#inp_rop input")[5].value,
        keep: $("#inp_rop input")[6].value,
        access: $("#inp_rop input")[7].value,
        dew: $("#inp_rop input")[8].value,
        phyll: $("#inp_rop input")[9].value,
        vc: $("#inp_rop input")[10].value,
        fungus: $("#inp_rop input")[11].value,
        remarks: $("#inp_rop input")[12].value
      },
      success: function(res) {
        alert("提交成功");
        $("#content_rop")[0].style.display = "none";
        $(".content-wrapper")[0].style.display = "block";
        $("#content_rop input").val("");
        $.ajax({
          type: "get",
          url: api + "/stock/list.action",
          data: {
            pageNum: 1
          },
          dataType: "json",
          success: function(res) {
            $("#t_body").empty();
            context(res.list);
          }
        });
        $.ajax({
          type: "get",
          url: api + "/kcxx/list.action",
          data: {
            pageNum: 1
          },
          dataType: "json",
          success: function(res) {
            $("#kcxx").empty();
            kcxx(res.list);
          }
        });
      },
      error: function(err) {
        alert("系统错误,请稍后再试");
      }
    });
  }
});

function context(data) {
  for (var i = 0; i < data.length; i++) {
    var o = data[i];
    var tr = document.createElement("tr");
    tr.innerHTML = `
      <td title="${o.pccode}">${o.pccode}</td>
      <td title="${o.type}">${o.type}</td>
      <td title="${o.createtime}">${o.createtime}</td>
      <td title="${o.weight}">${o.weight}kg</td>
      `;
    tbody.appendChild(tr);
  }
}
function kcxx(kc) {
  for (var i = 0; i < kc.length; i++) {
    var y = kc[i];
    var tr = document.createElement("tr");
    tr.innerHTML = `<td title="${y.pccode}">${y.pccode}</td>
                              <td title="${y.type}">${y.type}</td>
                              <td title="${y.weight}">${y.weight}</td>
                              <td title="${y.place}">${y.place}</td>
                              <td title="${y.source}">${y.source}</td>
                              <td title="${y.staple}">${y.staple}</td>
                              <td title="${y.recovery}">${y.recovery}</td>
                              <td title="${y.keep}">${y.keep}</td>
                              <td title="${y.access}">${y.access}</td>
                              <td title="${y.dew}">${y.dew}</td>
                              <td title="${y.phyll}">${y.phyll}</td>
                              <td title="${y.vc}">${y.vc}</td>
                              <td title="${y.fungu}">${y.fungus}</td>
                              <td title="${y.remarks}">${y.remarks}</td>
                              <td><button class="btn btn-default" onclick="revise(${y.id})">修改</button></td>
                              `;
    kc_rop.appendChild(tr);
  }
}
function ck(chu) {
  for (var i = 0; i < chu.length; i++) {
    var y = chu[i];
    var tr = document.createElement("tr");
    tr.innerHTML = `<td title="${y.pccode}">${y.pccode}</td>
                              <td title="${y.type}">${y.type}</td>
                              <td title="${y.createtime}">${y.createtime}</td>
                              <td title="${y.weight}">${y.weight}kg</td>
                              <td title="${y.remarks}">${y.remarks}</td>
                              `;
    chu_rop.appendChild(tr);
  }
}

// 出库提交
$("#out").click(function() {
  if ($(".opt").val() == "--请选择--") {
    alert("请选择批次");
  } else if ($("#inp_rop1 input")[0].value.replace(" ", "") == "") {
    alert("重量不能为空");
  } else {
    $.ajax({
      type: "get",
      url: api + "/retrieval/add.action",
      dataType: "json",
      data: {
        pccode: $(".opt").val(),
        weight: $("#inp_rop1 input")[0].value,
        remarks: $("#inp_rop1 input")[1].value
      },
      success: function(res) {
        if (res.Back == "false") {
          alert("提交失败");
        } else {
          alert("提交成功");
          $("#chu_rop")[0].style.display = "none";
          $(".content-wrapper")[0].style.display = "block";
          $("#chu_rop input").val("");
          $(".sel")[0].selected = true;
          $.ajax({
            type: "get",
            url: api + "/retrieval/list.action",
            data: {
              pageNum: 1
            },
            dataType: "json",
            success: function(res) {
              $("#ck_rop").empty();
              ck(res.list);
            }
          });
          $.ajax({
            type: "get",
            url: api + "/kcxx/list.action",
            data: {
              pageNum: 1
            },
            dataType: "json",
            success: function(res) {
              $("#kcxx").empty();
              kcxx(res.list);
            }
          });
        }
      },
      error: function(err) {
        alert("系统错误,请稍后再试");
      }
    });
  }
});

// 库存信息搜索
$('.searchBtn').click(function(){
  var price=$('.searchInp').val();
  $.ajax({
    type:'get',
    url:api+'/kcxx/list.action',
    data:{
      pageNum:1,
      type:price,
    },
    dataType:'json',
    success:function(res){
      var jk1='/kcxx/list.action';
      var jbq1=$("#kcxx");
      $("#kcxx").empty();
      kcxx(res.list);
      toPage(res,test1,jk1,jbq1,kcxx,price);
    }
  })
})

// 库存信息修改
function revise(aid){
  div.style.display='none';
  revise_rop.style.display='block';
  // 修改模板获取显示数据
  $.ajax({
    type:'get',
    url:api+'/kcxx/detail.action',
    data:{
       'id':aid
    },
    dataType:'json',
    success:function(res){
      var res1=res.Back;
      $("#inp_rop2 input:eq(0)").attr('value',res1.id);
      $("#inp_rop2 input:eq(0)").val(res1.pccode);
      $("#inp_rop2 input:eq(1)").val(res1.type);
      $("#inp_rop2 input:eq(2)").val(res1.weight);
      $("#inp_rop2 input:eq(3)").val(res1.place);
      $("#inp_rop2 input:eq(4)").val(res1.source);
      $("#inp_rop2 input:eq(5)").val(res1.staple);
      $("#inp_rop2 input:eq(6)").val(res1.recovery);
      $("#inp_rop2 input:eq(7)").val(res1.keep);
      $("#inp_rop2 input:eq(8)").val(res1.access);
      $("#inp_rop2 input:eq(9)").val(res1.dew);
      $("#inp_rop2 input:eq(10)").val(res1.phyll);
      $("#inp_rop2 input:eq(11)").val(res1.vc);
      $("#inp_rop2 input:eq(12)").val(res1.fungus);
      $("#inp_rop2 input:eq(13)").val(res1.remarks);
    }
  })
}
// 修改库存关闭按钮
var close = document.getElementsByClassName("close");
close[2].onclick = () => {
  var inp = $("#revise_rop input");
  quit(revise_rop,inp);
};
function quit(an, input) {
  layer.open({
    title: "提示",
    content: "确定要退出吗？",
    btn: ["确定", "取消"],
    shadeClose: true,
    yes: function(index, layero) {
      //按钮【确定】的回调
      an.style.display = "none";
      div.style.display = "block";
      layer.close(index);
      input.val("");
      $(".sel")[0].selected = true;
    },
    btn2: function(index, layero) {
      //按钮【取消】的回调
      //return false 开启该代码可禁止点击该按钮关闭
    },
    cancel: function() {
      //右上角关闭回调
      //return false 开启该代码可禁止点击该按钮关闭
    }
  });
}

// 修改提交按钮
$('#rev').click(function(){
  console.log($("#inp_rop2 input:eq(3)").val());
  
  $.ajax({
    type:'get',
    url:api+'/kcxx/edit.action',
    dataType:'json',
    data:{
      'id':$("#inp_rop2 input:eq(0)").attr('value'),
      'pccode':$("#inp_rop2 input:eq(0)").val(),
      'type':$("#inp_rop2 input:eq(1)").val(),
      'weight':$("#inp_rop2 input:eq(2)").val(),
      'place':$("#inp_rop2 input:eq(3)").val(),
      'source':$("#inp_rop2 input:eq(4)").val(),
      'staple':$("#inp_rop2 input:eq(5)").val(),
      'recovery':$("#inp_rop2 input:eq(6)").val(),
      'keep':$("#inp_rop2 input:eq(7)").val(),
      'access':$("#inp_rop2 input:eq(8)").val(),
      'dew':$("#inp_rop2 input:eq(9)").val(),
      'phyll':$("#inp_rop2 input:eq(10)").val(),
      'vc':$("#inp_rop2 input:eq(11)").val(),
      'fungus':$("#inp_rop2 input:eq(12)").val(),
      'remarks':$("#inp_rop2 input:eq(13)").val(),
    },
    success:function(res){
      alert('修改成功');
      revise_rop.style.display = "none";
      div.style.display = "block";
      $.ajax({
        type: "get",
        url: api + "/kcxx/list.action",
        data: {
          pageNum: 1
        },
        dataType: "json",
        success: function(res) {
          $("#kcxx").empty();
          kcxx(res.list);
        }
      });
    },
    error: function(err) {
      alert("系统错误,请稍后再试");
    }
  })
})


//给所有的td加title


