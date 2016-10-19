/*Created by Administrator on 2016/9/28.*/
/*背景切换*/
$(document).ready(function(){
   $(".content1 ul").click(function(){
      var a=$(this).attr("type");
      $("#it,#data,#w").not("#"+a).css("display","none");
      $("#"+a).css("display","block");
      $(this).parent().children().children().children().removeClass("bg1");
      $(this).parent().children().children().children().addClass("bg2");
      $(this).children().children().removeClass("bg2");
      $(this).children().children().addClass("bg1");
   });
});
/*导航图标切换向上向下*/
$(document).ready(function(){
   $("#product").hover(function(){
      /*下拉框出现*/
      $(this).children("ul").show();
      $(this).find(".imgb").attr("src","../img/ol-1.png");

   }, function(){
      $(this).children("ul").hide();
      $(this).find(".imgb").attr("src","../img/ol.png");

   });
});
/*$(document).ready(function(){
 $("#product").hover(function(){
 $("#product").width($("#product").width()-2);

 },function(){
 $("#product").width($("#product").width()+2);
 });
 });*/


