window.addEventListener('scroll', function(){
    let area=document.getElementById('home');
    let posicionHome=area.getBoundingClientRect().top;
    console.log(posicionHome);
    if(posicionHome<=0 && posicionHome>=-946.66){
        this.document.querySelector('.link1').classList.add("active")
    }else{
        this.document.querySelector('.link1').classList.remove("active")
    }
})
window.addEventListener('scroll', function(){
    let area=document.getElementById('about');
    let posicionAbout=area.getBoundingClientRect().top;
    console.log(posicionAbout);
    if(posicionAbout<=1 && posicionAbout>=-1410){
        this.document.querySelector('.link2').classList.add("active")
    }else{
        this.document.querySelector('.link2').classList.remove("active")
    }
})
window.addEventListener('scroll', function(){
    let area=document.getElementById('services');
    let posicionServices=area.getBoundingClientRect().top;
    //console.log(posicionServices);
    if(posicionServices<=1 && posicionServices>=-811){
        this.document.querySelector('.link3').classList.add("active")
    }else{
        this.document.querySelector('.link3').classList.remove("active")
    }
})
window.addEventListener('scroll', function(){
    let area=document.getElementById('portofolio');
    let posicionPortofolio=area.getBoundingClientRect().top;
    //console.log(posicionPortofolio);
    if(posicionPortofolio<=135 && posicionPortofolio>=-598){
        this.document.querySelector('.link4').classList.add("active")
    }else{
        this.document.querySelector('.link4').classList.remove("active")
    }
})
window.addEventListener('scroll', function(){
    let area=document.getElementById('contact');
    let posicionContact=area.getBoundingClientRect().top;
    //console.log(posicionContact);
    if(posicionContact<=343 && posicionContact>=-940){
        this.document.querySelector('.link5').classList.add("active")
    }else{
        this.document.querySelector('.link5').classList.remove("active")
    }
    
})
