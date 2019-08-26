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