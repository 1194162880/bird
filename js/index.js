// $(".left-btn").on('click',function() {
//     $(".shadow").animate({left:'-1500px'},1000);
//     $(".nav-box li").removeClass("nav");
//     $("#nav2").addClass("nav");
// })
// $(".right-btn").on('click',function() {
//     $(".shadow").animate({left:'0px'},1000);
//     $(".nav-box li").removeClass("nav");
//     $("#nav1").addClass("nav");
// })
$(".slidepage").on("mouseenter",function() {
    $(".left-btn").animate({left:'0px'});
    $(".slidepage").on("mouseleave",function() {
        $(".left-btn").animate({left:'-79px'});
    })
})