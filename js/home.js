/*Created by Administrator on 2016/9/28.*/
/*�����л�*/
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
/*����ͼ���л���������*/
$(document).ready(function(){
   $("#product").hover(function(){
      /*���������*/
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


