$(function() {
  $(".right-btn").click(function() {
    $(".qrchange").css("display","inline-block");
    $(".change").hide(1000);
    $(".brand").hide(1000);
    $(".left-btn").css("border","none");
    $(this).css("border-bottom","2px solid blue");
  })
});
$(function() {
  $(".left-btn").click(function() {
    $(".qrchange").hide(1000);
    $(".change").show(1000);
    $(".brand").show(1000);
    $(".left-btn").css("border","");
    $(".right-btn").css("border","none");
  
  })
});

  $(".sc").click(function() {
    $(".qrchange").css("display","inline-block");
    $(".change").hide(1000);
    $(".brand").hide(1000);
    $(".left-btn").css("border","none");
    $(".right-btn").css("border-bottom","2px solid blue");
  });

