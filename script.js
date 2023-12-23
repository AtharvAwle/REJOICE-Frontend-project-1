function cursorFollow(){
    let page1Content = document.querySelector(".page1-content")
let cursor = document.querySelector(".cursor")

page1Content.addEventListener("mousemove", function(dets){
    gsap.to(cursor,{
       x: dets.x,
       y: dets.y
    })
})

page1Content.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale:1
    })
})

page1Content.addEventListener("mouseleave", function(){
    gsap.to(cursor,{
        scale:0
    })
})
}
cursorFollow()



  function swiperKaKamal(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
          }
      });
  }
  swiperKaKamal()