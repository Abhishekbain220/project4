function page1(){
    gsap.from(".page1 nav",{
        y:-100,
        opacity:0,
        duration:1
    })
    let tl = gsap.timeline()
    tl.from(".mid .image,i",{
        scale:0,
        duration:1,
        opacity:0
    })
    tl.from(".mid h1",{
        opacity:0,
        scale:0,
    
    })
    tl.from(".mid .textrock>h2",{
        opacity:0,
        y:-200,
        stagger:0.5,
        
    })
    let menu=document.querySelector(".ri-menu-line")
    let image=document.querySelector(".image")
    menu.addEventListener("click",()=>{
        gsap.to(".menu",{
            top:0
        })
    })
    image.addEventListener("click",()=>{
        gsap.to(".menu",{
            top:"-100%"
        })
    })
}
page1()




function page2(){
    gsap.from(".page2_top_left_box",{
        x:"100%",
        opacity:0,
        scrollTrigger:{
            trigger:".page2_top_left_box",
            scroller:"body",
            // markers:true,
            start:"top 60%",
            end:"top 40%",
            scrub:2
    
    
        }
    })
    gsap.from(".page2_top_right_box",{
        y:"100%",
        opacity:0,
        scrollTrigger:{
            trigger:".page2_top_left_box",
            scroller:"body",
            // markers:true,
            start:"top 60%",
            end:"top 40%",
            scrub:2
    
    
        }
    })
    gsap.from(".bottom_text",{
        y:"-100%",
        opacity:0,
        scrollTrigger:{
            trigger:".page2_top_left_box",
            scroller:"body",
            // markers:true,
            start:"top 30%",
            end:"top 10%",
            scrub:2
    
    
        }
    })
    gsap.from(".bottom_right",{
        x:"-100%",
        opacity:0,
        scrollTrigger:{
            trigger:".page2_top_left_box",
            scroller:"body",
            // markers:true,
            start:"top 30%",
            end:"top 10%",
            scrub:2
    
    
        }
    })
}
page2()

function page3(){
    tl3=gsap.timeline()
tl3.from(".page3_top_right",{
    opacity:0,
    y:100,
    scrollTrigger:{
        trigger:".page3_top_right",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 40%",
        scrub:3
    }
})
tl3.from(".page3_bottom_left",{
    opacity:0,
    y:100,
    scrollTrigger:{
        trigger:".page3_bottom_left",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 60%",
        scrub:3
    }
},"one")
tl3.from(".page3_bottom_right",{
    opacity:0,
    y:100,
    scrollTrigger:{
        trigger:".page3_bottom_right",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 60%",
        scrub:3
    }
},"one")
}
page3()