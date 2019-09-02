;(function(){
  var api = "http://210.12.220.75:10036/Vegetables"
  $.ajax({
    type:'GET',
    url:api+"/info/getPccode.action",
    datatype:'json',
    success:(res)=>{
        getBatch(res.Back);
    }
  })
  function getBatch(pc){
       for(var i=0;i<pc.length;i++){
         var opt=new Option(pc[i]);
         $('select').append(opt);
       }
  }
})()
var api = "http://210.12.220.75:10036/Vegetables"


//查询按钮 
$('.chax').click(function(){
  var selLen=$('select').length;
  for(var i=0;i<selLen;i++){
     if($('select')[i].value!=='批次号'){
       var index=i
        $.ajax({
            type:'get',
            url:api+'/info/pnumber.action',
            dataType:'json',
            data:{
              'pnumber':$('select')[i].value,
                        
            },
            
            success:function(res){         
              $('.line1 td')[index+1].innerText=res.Back.tem;
              $('.line2 td')[index+1].innerText=res.Back.ambient;
              $('.line3 td')[index+1].innerText=res.Back.wet;
              $('.line4 td')[index+1].innerText=res.Back.dew;
              $('.line1 td')[index+1].title=res.Back.tem;
              $('.line2 td')[index+1].title=res.Back.ambient;
              $('.line3 td')[index+1].title=res.Back.wet;
              $('.line4 td')[index+1].title=res.Back.dew;
            }
            
          })
     }
  }
  
  
})
