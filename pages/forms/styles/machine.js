/*清空页面*/
function clearMachine() {
    var divContent = $(".mind").html();
    if (divContent != null || divContent.length != 0){
        $(".mind").empty();
    }
}
function btnclick(off){
    $(".card-body button").click(function(){
        if(off){
            // $(this).removeClass("btn-danger")
            $(this).addClass("btn-danger")
            $(this).text("停止")
            $(".state_rop").text("当前状态：启动")
            off= false
        }else{
            $(this).removeClass("btn-danger")
            $(this).text("启动")
            $(".state_rop").text("当前状态：停止")
            off= true
        }
     })
}
/*拣选机*/
function pickingMachine() {
    var addContent =  "<div>" +
        "<div class=\"mid_1\" style=\"float: left;width:60%;border-radius:6px; overflow:hidden; box-shadow:0 4px 8px #6E6E6E; margin-top: 22px;margin-bottom: 15px;\">" +
        "<img src=\"./styles/machinePhoto4.png\" alt=\"生产流程\" style=\"height: 100%;width: 100%;\">" + "</div>" +
        "<div class=\"mid_2\" style=\"font-size: 0.7em;float: right; width:40%;\">" +
        "<div class=\"card-body box-profile\">" + "<div class=\"card card-primary\">" + "<div class=\"card-header\"><h4> 拣选机参数设置</h4></div>" +
        "<div style=\"font-size:0.8em;\" class=\"card-body\">" +
        "<div class=\"card-body box-profile btn_rop\">" +
        "<ul class=\"list-group list-group-unbordered mb-3\">" +
        "<li class=\"list-group-item state\">" + " <b class=\"state_rop\">当前状态：关闭</b>" +
        "<li class=\"list-group-item\">" + " <b>产品重量：</b>" +
        "<span class=\"num float-right\">1000KG</span>" +
        "<li class=\"list-group-item\">\n" +
        "<b>进料带运行速率</b>\n" +
        "<input type='text' class='inp1 float-right' placeholder='请设置' />" +
        "</li>" +
        "<li class=\"list-group-item\">\n" +
        "<b>产品带运行速率</b>\n" +
        "<input type='text' class='inp1 float-right' placeholder='请设置' />" +
        "</li>\n" +
        "</ul>" +
        "<button type='button' class=\"btn btn-primary btn-block\" >启动</button>\n" +
        "</div>\n" +
        "</div>\n" +
        "</div>\n" +
        "</div>\n" +
        "</div>\n" +
        "</div>";
    var divContent = $(".mind").html();
    if (divContent == null || divContent.length == 0){
        $(".mind").append(addContent)
    } else {
        $(".mind").empty();
        $(".mind").append(addContent)
    }
    var off = false
   
    btnclick(off)
}
// function qi(){
//     event.target.className = "btn btn-danger btn-block"
//     event.target.innerHTML = "停止"
// }
/*削皮机*/
function xiaopi() {
    var addContent =  "<div>" +
        "<div class=\"mid_1\" style=\"float: left;width:60%;border-radius:6px; overflow:hidden; box-shadow:0 4px 8px #6E6E6E; margin-top: 22px;margin-bottom: 15px;\">" +
        "<img src=\"./styles/machinePhoto4.png\" alt=\"生产流程\" style=\"height: 100%;width: 100%;\">" + "</div>" +
        "<div class=\"mid_2\" style=\"font-size: 0.7em;float: right; width:40%;\">" +
        "<div class=\"card-body box-profile\">" + "<div class=\"card card-primary\">" + "<div class=\"card-header\"><h4> 削皮机参数设置</h4></div>" +
        "<div style=\"font-size:0.8em;\" class=\"card-body\">" +
        "<div class=\"card-body box-profile\">" +
        "<ul class=\"list-group list-group-unbordered mb-3\">" +
        "<li class=\"list-group-item state\">" + " <b class=\"state_rop\">当前状态：关闭</b>" +
        "<li class=\"list-group-item\">" + " <b>产品重量：</b>" +
        "<span class=\"num float-right\">1000KG</span>" +
        "<li class=\"list-group-item\">\n" +
        "<b>进料带运行速率</b>\n" +
        "<input type='text' class='inp1 float-right' placeholder='请设置' />" +
        "</li>" +
        "<li class=\"list-group-item\">\n" +
        "<b>产品带运行速率</b>\n" +
        "<input type='text' class='inp1 float-right' placeholder='请设置' />" +
        "</li>\n" +
        "</ul>" +
        "<button type='button' class=\"btn btn-primary btn-block\"><b>启动</b></button>\n" +
        "</div>\n" +
        "</div>\n" +
        "</div>\n" +
        "</div>\n" +
        "</div>\n" +
        "</div>";
    var divContent = $(".mind").html();
    if (divContent == null || divContent.length == 0){
        $(".mind").append(addContent)
    } else {
        $(".mind").empty();
        $(".mind").append(addContent)
    }
    btnclick()
}
/*切菜机*/
function cutVegetablesMachine() {
    var addContent = "<div>\n" +
        "             <div class=\"mid_1\" style=\"float: left;width:60%;border-radius:6px; overflow:hidden; box-shadow:0 4px 8px #6E6E6E; margin-top: 22px;margin-bottom: 15px;\">\n" +
        "               <img src=\"./styles/machinePhoto3.png\" alt=\"生产流程\" style=\"height: 100%;width: 100%;\">\n" +
        "             </div>\n" +
        "             <div class=\"mid_2\" style=\"font-size: 0.7em;float: right; width:40%;\">\n" +
        "               <div class=\"card-body box-profile\">\n" +
        "                 <div class=\"card card-primary\">\n" +
        "                   <div class=\"card-header\">\n" +
        "                     <h4> 切菜机参数设置</h4>\n" +
        "                   </div>\n" +
        "                   <div style=\"font-size:0.8em;\" class=\"card-body\">\n" +
        "                     <div  class=\"card-body box-profile\">\n" +
        "                       <ul class=\"list-group list-group-unbordered mb-3\">\n" +
        "                         <li class=\"list-group-item state\">\n" +
        "                           <b class=\"state_rop\">当前状态：关闭</b>"+
        "                         </li>\n" +
        "                         <li class=\"list-group-item\">\n" +
        "                           <b>运行时间</b>\n" +
        "                               <span class=\"num float-right\">20min</span>"+
        "                         </li>\n" +
        "                         <li class=\"list-group-item\">\n" +
        "                           <b>产品重量</b>\n" +
        "                           <span class=\"num float-right\">20min</span>"+
        "                         </li>\n" +
        "<li class=\"list-group-item\">\n" +
        "<b>刀头的转速</b>\n" +
        "<input type='text' class='inp1 float-right' placeholder='请设置' />" +
        "</li>" +
        "<li class=\"list-group-item\">\n" +
        "<b>刀头的型号</b>\n" +
        "                           <select class=\"float-right sel\" name=\"刀头型号\">\n" +
        "                             <option>10</option>\n" +
        "                             <option>20</option>\n" +
        "                             <option>43</option>\n" +
        "                             <option>34</option>\n" +
        "                             <option>34</option>\n" +
        "                           </select>\n" +
        "</li>" +
        "<li class=\"list-group-item\">\n" +
        "<b>进料带的速率</b>\n" +
        "<input type='text' class='inp1 float-right' placeholder='请设置' />" +
        "</li>" +
        "                       </ul>\n" +
        "                       <button type=\"button\" class=\"btn btn-primary btn-block\"><b>启动</b></button>\n" +
        "                     </div>\n" +
        "                   </div>\n" +
        "                 </div>\n" +
        "               </div>\n" +
        "             </div>\n" +
        "           </div>";
    var divContent = $(".mind").html();
    if (divContent == null || divContent.length == 0){
        $(".mind").append(addContent)
    } else {
        $(".mind").empty();
        $(".mind").append(addContent)
    }
    btnclick()
}

/*色选机*/
function selectMachine() {
    var addContent = "<div>\n" +
        "             <div class=\"mid_1\" style=\"float: left;width:60%;border-radius:6px; overflow:hidden; box-shadow:0 4px 8px #6E6E6E; margin-top: 22px;margin-bottom: 15px;\">\n" +
        "               <img src=\"./styles/machinePhoto2.jpg\" alt=\"生产流程\" style=\"height: 100%;width: 100%;\">\n" +
        "             </div>\n" +
        "             <div class=\"mid_2\" style=\"font-size: 0.7em;float: right; width:40%;\">\n" +
        "               <div class=\"card-body box-profile\">\n" +
        "                 <div class=\"card card-primary\">\n" +
        "                   <div class=\"card-header\">\n" +
        "                     <h4> 色选机参数设置</h4>\n" +
        "                   </div>\n" +
        "                   <div style=\"font-size:0.8em;\" class=\"card-body\">\n" +
        "                     <div  class=\"card-body box-profile\">\n" +
        "                       <ul class=\"list-group list-group-unbordered mb-3\">\n" +
        "                         <li class=\"list-group-item\">\n" +
        "                           <b>设备类型</b>\n" +
        "                           <select class=\"float-right\" name=\"设备类型\">\n" +
        "                             <option>CCD技术色选机</option>\n" +
        "                             <option>红外技术色选机</option>\n" +
        "                             <option>LED光源色选机</option>\n" +
        "                             <option>传统光电技术色选机</option>\n" +
        "                             <option>日光灯管光源色选机</option>\n" +
        "                           </select>\n" +
        "                         </li>\n" +
        "                       </ul>\n" +
        "                       <button type=\"button\" class=\"btn btn-primary btn-block\"><b>启动</b></button>\n" +
        "                     </div>\n" +
        "                   </div>\n" +
        "                 </div>\n" +
        "               </div>\n" +
        "             </div>\n" +
        "           </div>";
    var divContent = $(".mind").html();
    if (divContent == null || divContent.length == 0){
        $(".mind").append(addContent)
    } else {
        $(".mind").empty();
        $(".mind").append(addContent)
    }
    btnclick()
}
/*鼓泡机*/
function bubbleMachine() {
    var addContent = "<div>\n" +
        "             <div class=\"mid_1\" style=\"float: left;width:60%;border-radius:6px; overflow:hidden; box-shadow:0 4px 8px #6E6E6E; margin-top: 22px;margin-bottom: 15px;\">\n" +
        "               <img src=\"./styles/machinePhoto1.jpg\" alt=\"生产流程\" style=\"height: 100%;width: 100%;\">\n" +
        "             </div>\n" +
        "             <div class=\"mid_2\" style=\"font-size: 0.7em;float: right; width:40%;\">\n" +
        "               <div class=\"card-body box-profile\">\n" +
        "                 <div class=\"card card-primary\">\n" +
        "                   <div class=\"card-header\">\n" +
        "                     <h4> 鼓泡机参数设置</h4>\n" +
        "                   </div>\n" +
        "                   <div style=\"font-size:0.8em;\" class=\"card-body\">\n" +
        "                     <div  class=\"card-body box-profile\">\n" +
        "                       <button type=\"button\" class=\"btn btn-primary btn-block\"><b>启动</b></button>\n" +
        "                     </div>\n" +
        "                   </div>\n" +
        "                 </div>\n" +
        "               </div>\n" +
        "             </div>\n" +
        "           </div>";
    var divContent = $(".mind").html();
    if (divContent == null || divContent.length == 0){
        $(".mind").append(addContent)
    } else {
        $(".mind").empty();
        $(".mind").append(addContent)
    }
    btnclick()
}
/*喷淋机*/
function sprayMachine() {
    var addContent = "<div>\n" +
        "             <div class=\"mid_1\" style=\"float: left;width:60%;border-radius:6px; overflow:hidden; box-shadow:0 4px 8px #6E6E6E; margin-top: 22px;margin-bottom: 15px;\">\n" +
        "               <img src=\"./styles/machinePhoto1.jpg\" alt=\"生产流程\" style=\"height: 100%;width: 100%;\">\n" +
        "             </div>\n" +
        "             <div class=\"mid_2\" style=\"font-size: 0.7em;float: right; width:40%;\">\n" +
        "               <div class=\"card-body box-profile\">\n" +
        "                 <div class=\"card card-primary\">\n" +
        "                   <div class=\"card-header\">\n" +
        "                     <h4> 喷淋机参数设置</h4>\n" +
        "                   </div>\n" +
        "                   <div style=\"font-size:0.8em;\" class=\"card-body\">\n" +
        "                     <div  class=\"card-body box-profile\">\n" +
        "                       <ul class=\"list-group list-group-unbordered mb-3\">\n" +
        "                         <li class=\"list-group-item\">\n" +
        "                           <b>传输速度级别(级)</b>\n" +
        "                           <select class=\"float-right\" name=\"传输速度级别\">\n" +
        "                             <option>1</option>\n" +
        "                             <option>2</option>\n" +
        "                             <option>3</option>\n" +
        "                             <option>4</option>\n" +
        "                             <option>5</option>\n" +
        "                           </select>\n" +
        "                         </li>\n" +
        "                         <li class=\"list-group-item\">\n" +
        "                           <b>设备功率(KW)</b>\n" +
        "                           <select class=\"float-right\" name=\"设备功率\">\n" +
        "                             <option>1.5</option>\n" +
        "                             <option>2.5</option>\n" +
        "                             <option>3.5</option>\n" +
        "                             <option>4.5</option>\n" +
        "                             <option>5.5</option>\n" +
        "                           </select>\n" +
        "                         </li>\n" +
        "                         <li class=\"list-group-item\">\n" +
        "                           <b>换水时间间隔(min)</b>\n" +
        "                           <select class=\"float-right\" name=\"换水时间间隔\">\n" +
        "                             <option>30</option>\n" +
        "                             <option>60</option>\n" +
        "                             <option>90</option>\n" +
        "                             <option>120</option>\n" +
        "                             <option>150</option>\n" +
        "                           </select>\n" +
        "                         </li>\n" +
        "                       </ul>\n" +
        "                       <button type=\"button\" class=\"btn btn-primary btn-block\"><b>启动</b></button>\n" +
        "                     </div>\n" +
        "                   </div>\n" +
        "                 </div>\n" +
        "               </div>\n" +
        "             </div>\n" +
        "           </div>";
    var divContent = $(".mind").html();
    if (divContent == null || divContent.length == 0){
        $(".mind").append(addContent)
    } else {
        $(".mind").empty();
        $(".mind").append(addContent)
    }
    btnclick()
}
/*涡流机*/
function vortexMachine() {
    var addContent = "<div>\n" +
        "             <div class=\"mid_1\" style=\"float: left;width:60%;border-radius:6px; overflow:hidden; box-shadow:0 4px 8px #6E6E6E; margin-top: 22px;margin-bottom: 15px;\">\n" +
        "               <img src=\"./styles/machinePhoto3.png\" alt=\"生产流程\" style=\"height: 100%;width: 100%;\">\n" +
        "             </div>\n" +
        "             <div class=\"mid_2\" style=\"font-size: 0.7em;float: right; width:40%;\">\n" +
        "               <div class=\"card-body box-profile\">\n" +
        "                 <div class=\"card card-primary\">\n" +
        "                   <div class=\"card-header\">\n" +
        "                     <h4> 涡流机参数设置</h4>\n" +
        "                   </div>\n" +
        "                   <div style=\"font-size:0.8em;\" class=\"card-body\">\n" +
        "                     <div  class=\"card-body box-profile\">\n" +
        "                       <button type=\"button\" class=\"btn btn-primary btn-block\"><b>启动</b></button>\n" +
        "                     </div>\n" +
        "                   </div>\n" +
        "                 </div>\n" +
        "               </div>\n" +
        "             </div>\n" +
        "           </div>";
    var divContent = $(".mind").html();
    if (divContent == null || divContent.length == 0){
        $(".mind").append(addContent)
    } else {
        $(".mind").empty();
        $(".mind").append(addContent)
    }
    btnclick()
}
/*振动脱水*/
function vibrationDehydration() {
    var addContent = "<div>\n" +
        "             <div class=\"mid_1\" style=\"float: left;width:60%;border-radius:6px; overflow:hidden; box-shadow:0 4px 8px #6E6E6E; margin-top: 22px;margin-bottom: 15px;\">\n" +
        "               <img src=\"./styles/machinePhoto4.png\" alt=\"生产流程\" style=\"height: 100%;width: 100%;\">\n" +
        "             </div>\n" +
        "             <div class=\"mid_2\" style=\"font-size: 0.7em;float: right; width:40%;\">\n" +
        "               <div class=\"card-body box-profile\">\n" +
        "                 <div class=\"card card-primary\">\n" +
        "                   <div class=\"card-header\">\n" +
        "                     <h4> 振动脱水机参数设置</h4>\n" +
        "                   </div>\n" +
        "                   <div style=\"font-size:0.8em;\" class=\"card-body\">\n" +
        "                     <div  class=\"card-body box-profile\">\n" +
        "                       <button type=\"button\" class=\"btn btn-primary btn-block\"><b>启动</b></button>\n" +
        "                     </div>\n" +
        "                   </div>\n" +
        "                 </div>\n" +
        "               </div>\n" +
        "             </div>\n" +
        "           </div>";
    var divContent = $(".mind").html();
    if (divContent == null || divContent.length == 0){
        $(".mind").append(addContent)
    } else {
        $(".mind").empty();
        $(".mind").append(addContent)
    }
    btnclick()
}
/*真空包装*/
function vacuumPackaging() {
    var addContent = "<div>\n" +
        "             <div class=\"mid_1\" style=\"float: left;width:60%;border-radius:6px; overflow:hidden; box-shadow:0 4px 8px #6E6E6E; margin-top: 22px;margin-bottom: 15px;\">\n" +
        "               <img src=\"./styles/machinePhoto1.jpg\" alt=\"生产流程\" style=\"height: 100%;width: 100%;\">\n" +
        "             </div>\n" +
        "             <div class=\"mid_2\" style=\"font-size: 0.7em;float: right; width:40%;\">\n" +
        "               <div class=\"card-body box-profile\">\n" +
        "                 <div class=\"card card-primary\">\n" +
        "                   <div class=\"card-header\">\n" +
        "                     <h4> 真空包装机参数设置</h4>\n" +
        "                   </div>\n" +
        "                   <div style=\"font-size:0.8em;\" class=\"card-body\">\n" +
        "                     <div  class=\"card-body box-profile\">\n" +
        "                       <button type=\"button\" class=\"btn btn-primary btn-block\"><b>启动</b></button>\n" +
        "                     </div>\n" +
        "                   </div>\n" +
        "                 </div>\n" +
        "               </div>\n" +
        "             </div>\n" +
        "           </div>";
    var divContent = $(".mind").html();
    if (divContent == null || divContent.length == 0){
        $(".mind").append(addContent)
    } else {
        $(".mind").empty();
        $(".mind").append(addContent)
    }
    btnclick()
}
/*金属检测*/
function metalDetection() {
    var addContent = "<div>\n" +
        "             <div class=\"mid_1\" style=\"float: left;width:60%;border-radius:6px; overflow:hidden; box-shadow:0 4px 8px #6E6E6E; margin-top: 22px;margin-bottom: 15px;\">\n" +
        "               <img src=\"./styles/machinePhoto1.jpg\" alt=\"生产流程\" style=\"height: 100%;width: 100%;\">\n" +
        "             </div>\n" +
        "             <div class=\"mid_2\" style=\"font-size: 0.7em;float: right; width:40%;\">\n" +
        "               <div class=\"card-body box-profile\">\n" +
        "                 <div class=\"card card-primary\">\n" +
        "                   <div class=\"card-header\">\n" +
        "                     <h4> 金属检测机参数设置</h4>\n" +
        "                   </div>\n" +
        "                   <div style=\"font-size:0.8em;\" class=\"card-body\">\n" +
        "                     <div  class=\"card-body box-profile\">\n" +
        "                       <button type=\"button\" class=\"btn btn-primary btn-block\"><b>启动</b></button>\n" +
        "                     </div>\n" +
        "                   </div>\n" +
        "                 </div>\n" +
        "               </div>\n" +
        "             </div>\n" +
        "           </div>";
    var divContent = $(".mind").html();
    if (divContent == null || divContent.length == 0){
        $(".mind").append(addContent)
    } else {
        $(".mind").empty();
        $(".mind").append(addContent)
    }
    btnclick()
}
/*打码机*/
function barCodeMachine() {
    var addContent = "<div>\n" +
        "             <div class=\"mid_1\" style=\"float: left;width:60%;border-radius:6px; overflow:hidden; box-shadow:0 4px 8px #6E6E6E; margin-top: 22px;margin-bottom: 15px;\">\n" +
        "               <img src=\"./styles/machinePhoto1.jpg\" alt=\"生产流程\" style=\"height: 100%;width: 100%;\">\n" +
        "             </div>\n" +
        "             <div class=\"mid_2\" style=\"font-size: 0.7em;float: right; width:40%;\">\n" +
        "               <div class=\"card-body box-profile\">\n" +
        "                 <div class=\"card card-primary\">\n" +
        "                   <div class=\"card-header\">\n" +
        "                     <h4> 打码机参数设置</h4>\n" +
        "                   </div>\n" +
        "                   <div style=\"font-size:0.8em;\" class=\"card-body\">\n" +
        "                     <div  class=\"card-body box-profile\">\n" +
        "                       <button type=\"button\" class=\"btn btn-primary btn-block\"><b>启动</b></button>\n" +
        "                     </div>\n" +
        "                   </div>\n" +
        "                 </div>\n" +
        "               </div>\n" +
        "             </div>\n" +
        "           </div>";
    var divContent = $(".mind").html();
    if (divContent == null || divContent.length == 0){
        $(".mind").append(addContent)
    } else {
        $(".mind").empty();
        $(".mind").append(addContent)
    }
    btnclick()
}
/*风冷脱水*/
function airCooled() {
    var addContent = "<div>\n" +
        "             <div class=\"mid_1\" style=\"float: left;width:60%;border-radius:6px; overflow:hidden; box-shadow:0 4px 8px #6E6E6E; margin-top: 22px;margin-bottom: 15px;\">\n" +
        "               <img src=\"./styles/machinePhoto4.png\" alt=\"生产流程\" style=\"height: 100%;width: 100%;\">\n" +
        "             </div>\n" +
        "             <div class=\"mid_2\" style=\"font-size: 0.7em;float: right; width:40%;\">\n" +
        "               <div class=\"card-body box-profile\">\n" +
        "                 <div class=\"card card-primary\">\n" +
        "                   <div class=\"card-header\">\n" +
        "                     <h4> 风冷脱水机参数设置</h4>\n" +
        "                   </div>\n" +
        "                   <div style=\"font-size:0.8em;\" class=\"card-body\">\n" +
        "                     <div  class=\"card-body box-profile\">\n" +
        "                       <button type=\"button\" class=\"btn btn-primary btn-block\"><b>启动</b></button>\n" +
        "                     </div>\n" +
        "                   </div>\n" +
        "                 </div>\n" +
        "               </div>\n" +
        "             </div>\n" +
        "           </div>";
    var divContent = $(".mind").html();
    if (divContent == null || divContent.length == 0){
        $(".mind").append(addContent)
    } else {
        $(".mind").empty();
        $(".mind").append(addContent)
    }
    btnclick()
}
/*气调包装*/
function modifiedAtmospherePackaging() {
    var addContent = "<div>\n" +
        "             <div class=\"mid_1\" style=\"float: left;width:60%;border-radius:6px; overflow:hidden; box-shadow:0 4px 8px #6E6E6E; margin-top: 22px;margin-bottom: 15px;\">\n" +
        "               <img src=\"./styles/machinePhoto1.jpg\" alt=\"生产流程\" style=\"height: 100%;width: 100%;\">\n" +
        "             </div>\n" +
        "             <div class=\"mid_2\" style=\"font-size: 0.7em;float: right; width:40%;\">\n" +
        "               <div class=\"card-body box-profile\">\n" +
        "                 <div class=\"card card-primary\">\n" +
        "                   <div class=\"card-header\">\n" +
        "                     <h4> 气调包装机参数设置</h4>\n" +
        "                   </div>\n" +
        "                   <div style=\"font-size:0.8em;\" class=\"card-body\">\n" +
        "                     <div  class=\"card-body box-profile\">\n" +
        "<ul class=\"list-group list-group-unbordered mb-3\">" +
        "<li class=\"list-group-item state\">" + " <b>当前状态：关闭</b>" +
        "<li class=\"list-group-item\">" + " <b>产品重量：</b>" +
        "<span class=\"num float-right\">1000KG</span>" +
        "<li class=\"list-group-item\">\n" +
        "<b>工作时真空度</b>\n" +
        "<input type='text' class='inp1 float-right' placeholder='请设置' />" +
        "</li>" +
        "<li class=\"list-group-item\">\n" +
        "<b>充气压力</b>\n" +
        "<input type='text' class='inp1 float-right' placeholder='请设置' />" +
        "</li>\n" +
        "<li class=\"list-group-item\">\n" +
        "<b>覆膜温度</b>\n" +
        "<input type='text' class='inp1 float-right' placeholder='请设置' />" +
        "</li>\n" +
        "<li class=\"list-group-item\">\n" +
        "<b>覆膜时间</b>\n" +
        "<input type='text' class='inp1 float-right' placeholder='请设置' />" +
        "</li>\n" +
        "<li class=\"list-group-item\">\n" +
        "<b>运行时间</b>\n" +
        "<input type='text' class='inp1 float-right' placeholder='请设置' />" +
        "</li>\n" +
        "<li class=\"list-group-item\">\n" +
        "<b>包装数量</b>\n" +
        "<input type='text' class='inp1 float-right' placeholder='请设置' />" +
        "</li>\n" +
        "<li class=\"list-group-item\">\n" +
        "<b>包装数量</b>\n" +
        "<input type='text' class='inp1 float-right' placeholder='请设置' />" +
        "</li>\n" +
        "<li class=\"list-group-item\">\n" +
        "<b>包装数量</b>\n" +
        "<input type='text' class='inp1 float-right' placeholder='请设置' />" +
        "</li>\n" +
        "<li class=\"list-group-item\">\n" +
        "<b>氮气含量</b>\n" +
        "<input type='text' class='inp1 float-right' placeholder='请设置' />" +
        "</li>\n" +
        "<li class=\"list-group-item\">\n" +
        "<b>氧气含量</b>\n" +
        "<input type='text' class='inp1 float-right' placeholder='请设置' />" +
        "</li>\n" +
        "<li class=\"list-group-item\">\n" +
        "<b>二氧化碳含量</b>\n" +
        "<input type='text' class='inp1 float-right' placeholder='请设置' />" +
        "</li>\n" +
        "<li class=\"list-group-item\">\n" +
        "<b>系统设置</b>\n" +
        "<input type='text' class='inp1 float-right' placeholder='请设置' />" +
        "</li>\n" +
        "<li class=\"list-group-item\">\n" +
        "<b>报警设置</b>\n" +
        "<input type='text' class='inp1 float-right' placeholder='请设置' />" +
        "</li>\n" +
        "<li class=\"list-group-item\">\n" +
        "<b>监控加热温度</b>\n" +
        "<input type='text' class='inp1 float-right' placeholder='请设置' />" +
        "</li>\n" +
        "<li class=\"list-group-item\">\n" +
        "<b>监控气体压力</b>\n" +
        "<input type='text' class='inp1 float-right' placeholder='请设置' />" +
        "</li>\n" +
        "</ul>" +
        "                       <button type=\"button\" class=\"btn btn-primary btn-block\"><b>启动</b></button>\n" +
        "                     </div>\n" +
        "                   </div>\n" +
        "                 </div>\n" +
        "               </div>\n" +
        "             </div>\n" +
        "           </div>";
    var divContent = $(".mind").html();
    if (divContent == null || divContent.length == 0){
        $(".mind").append(addContent)
    } else {
        $(".mind").empty();
        $(".mind").append(addContent)
    }
    btnclick()
}
/*气调脱水*/
function pneumaticDehydration() {
    var addContent = "<div>\n" +
        "             <div class=\"mid_1\" style=\"float: left;width:60%;border-radius:6px; overflow:hidden; box-shadow:0 4px 8px #6E6E6E; margin-top: 22px;margin-bottom: 15px;\">\n" +
        "               <img src=\"./styles/machinePhoto4.png\" alt=\"生产流程\" style=\"height: 100%;width: 100%;\">\n" +
        "             </div>\n" +
        "             <div class=\"mid_2\" style=\"font-size: 0.7em;float: right; width:40%;\">\n" +
        "               <div class=\"card-body box-profile\">\n" +
        "                 <div class=\"card card-primary\">\n" +
        "                   <div class=\"card-header\">\n" +
        "                     <h4> 气调脱水机参数设置</h4>\n" +
        "                   </div>\n" +
        "                   <div style=\"font-size:0.8em;\" class=\"card-body\">\n" +
        "                     <div  class=\"card-body box-profile\">\n" +
        "                       <button type=\"button\" class=\"btn btn-primary btn-block\"><b>启动</b></button>\n" +
        "                     </div>\n" +
        "                   </div>\n" +
        "                 </div>\n" +
        "               </div>\n" +
        "             </div>\n" +
        "           </div>";
    var divContent = $(".mind").html();
    if (divContent == null || divContent.length == 0){
        $(".mind").append(addContent)
    } else {
        $(".mind").empty();
        $(".mind").append(addContent)
    }
    btnclick()
}
/*水触媒*/
function waterCatalyst() {
    var addContent = "<div>\n" +
        "             <div class=\"mid_1\" style=\"float: left;width:60%;border-radius:6px; overflow:hidden; box-shadow:0 4px 8px #6E6E6E; margin-top: 22px;margin-bottom: 15px;\">\n" +
        "               <img src=\"./styles/machinePhoto2.jpg\" alt=\"生产流程\" style=\"height: 100%;width: 100%;\">\n" +
        "             </div>\n" +
        "             <div class=\"mid_2\" style=\"font-size: 0.7em;float: right; width:40%;\">\n" +
        "               <div class=\"card-body box-profile\">\n" +
        "                 <div class=\"card card-primary\">\n" +
        "                   <div class=\"card-header\">\n" +
        "                     <h4> 水触媒参数设置</h4>\n" +
        "                   </div>\n" +
        "                   <div style=\"font-size:0.8em;\" class=\"card-body\">\n" +
        "                     <div  class=\"card-body box-profile\">\n" +
        "                       <button type=\"button\" class=\"btn btn-primary btn-block\"><b>启动</b></button>\n" +
        "                     </div>\n" +
        "                   </div>\n" +
        "                 </div>\n" +
        "               </div>\n" +
        "             </div>\n" +
        "           </div>";
    var divContent = $(".mind").html();
    if (divContent == null || divContent.length == 0){
        $(".mind").append(addContent)
    } else {
        $(".mind").empty();
        $(".mind").append(addContent)
    }
    btnclick()
}
/*离心脱水*/
function centrifugeDehydration() {
    var addContent = "<div>\n" +
        "             <div class=\"mid_1\" style=\"float: left;width:60%;border-radius:6px; overflow:hidden; box-shadow:0 4px 8px #6E6E6E; margin-top: 22px;margin-bottom: 15px;\">\n" +
        "               <img src=\"./styles/machinePhoto4.png\" alt=\"生产流程\" style=\"height: 100%;width: 100%;\">\n" +
        "             </div>\n" +
        "             <div class=\"mid_2\" style=\"font-size: 0.7em;float: right; width:40%;\">\n" +
        "               <div class=\"card-body box-profile\">\n" +
        "                 <div class=\"card card-primary\">\n" +
        "                   <div class=\"card-header\">\n" +
        "                     <h4> 离心脱水机参数设置</h4>\n" +
        "                   </div>\n" +
        "                   <div style=\"font-size:0.8em;\" class=\"card-body\">\n" +
        "                     <div  class=\"card-body box-profile\">\n" +
        "                       <button type=\"button\" class=\"btn btn-primary btn-block\"><b>启动</b></button>\n" +
        "                     </div>\n" +
        "                   </div>\n" +
        "                 </div>\n" +
        "               </div>\n" +
        "             </div>\n" +
        "           </div>";
    var divContent = $(".mind").html();
    if (divContent == null || divContent.length == 0){
        $(".mind").append(addContent)
    } else {
        $(".mind").empty();
        $(".mind").append(addContent)
    }
    btnclick()
}
/*自动包装*/
function automaticPackaging() {
    var addContent = "<div>\n" +
        "             <div class=\"mid_1\" style=\"float: left;width:60%;border-radius:6px; overflow:hidden; box-shadow:0 4px 8px #6E6E6E; margin-top: 22px;margin-bottom: 15px;\">\n" +
        "               <img src=\"./styles/machinePhoto1.jpg\" alt=\"生产流程\" style=\"height: 100%;width: 100%;\">\n" +
        "             </div>\n" +
        "             <div class=\"mid_2\" style=\"font-size: 0.7em;float: right; width:40%;\">\n" +
        "               <div class=\"card-body box-profile\">\n" +
        "                 <div class=\"card card-primary\">\n" +
        "                   <div class=\"card-header\">\n" +
        "                     <h4> 自动包装机参数设置</h4>\n" +
        "                   </div>\n" +
        "                   <div style=\"font-size:0.8em;\" class=\"card-body\">\n" +
        "                     <div  class=\"card-body box-profile\">\n" +
        "                       <button type=\"button\" class=\"btn btn-primary btn-block\"><b>启动</b></button>\n" +
        "                     </div>\n" +
        "                   </div>\n" +
        "                 </div>\n" +
        "               </div>\n" +
        "             </div>\n" +
        "           </div>";
    var divContent = $(".mind").html();
    if (divContent == null || divContent.length == 0){
        $(".mind").append(addContent)
    } else {
        $(".mind").empty();
        $(".mind").append(addContent)
    }
    btnclick()
}
/*脉冲强光*/
function pulsedStrongLight() {
    var addContent = "<div>\n" +
        "             <div class=\"mid_1\" style=\"float: left;width:60%;border-radius:6px; overflow:hidden; box-shadow:0 4px 8px #6E6E6E; margin-top: 22px;margin-bottom: 15px;\">\n" +
        "               <img src=\"./styles/machinePhoto2.jpg\" alt=\"生产流程\" style=\"height: 100%;width: 100%;\">\n" +
        "             </div>\n" +
        "             <div class=\"mid_2\" style=\"font-size: 0.7em;float: right; width:40%;\">\n" +
        "               <div class=\"card-body box-profile\">\n" +
        "                 <div class=\"card card-primary\">\n" +
        "                   <div class=\"card-header\">\n" +
        "                     <h4> 脉冲强光参数设置</h4>\n" +
        "                   </div>\n" +
        "                   <div style=\"font-size:0.8em;\" class=\"card-body\">\n" +
        "                     <div  class=\"card-body box-profile\">\n" +
        "                       <button type=\"button\" class=\"btn btn-primary btn-block\"><b>启动</b></button>\n" +
        "                     </div>\n" +
        "                   </div>\n" +
        "                 </div>\n" +
        "               </div>\n" +
        "             </div>\n" +
        "           </div>";
    var divContent = $(".mind").html();
    if (divContent == null || divContent.length == 0){
        $(".mind").append(addContent)
    } else {
        $(".mind").empty();
        $(".mind").append(addContent)
    }
    btnclick()
}