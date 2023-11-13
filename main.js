setTimeout(()=>{
    gsap.from(".left, .middle, .right",{
        y:-30,
        opacity:0,
        duration:2,
        ease:Power4.easeOut,
        stagger:0.2,
    })  
    
}, 1000)



const timeline = gsap.timeline()


setTimeout(()=>{
    timeline.from("h1",{
        y:20,
        opacity:0,
        duration:1,
        ease:"Power4.easeout",
        stagger:0.2,
    })
},1500)
