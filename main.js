var tl = anime.timeline({}); 

anime.stagger(100, {from: 'center'})

tl.add({
    targets: '.marianita',
    delay: 100,
    opacity: [0, 1],
    easing: 'easeInOutExpo',
});

tl.add({
    targets: '.title',
    delay: 150,
    opacity: [0, 1],
    easing: 'easeInOutExpo',
    });

    // let animation = anime({
    //     targets: '.info',
    //     translateX: 500,
    //     duration: 1000,
    //     delay: anime.stagger(10, {from: 'info'}),
    //     autoplay: false,
    // });

    // let animationDone = document.querySelector('.info');

    // Scroll Animation 
    // let animateOnScroll = function(div, speed = 250, offset = 0){
    //     let scrollPercent = window.pageYOffset - div.offsetTop;
    //     return (scrollPercent + offset) / speed;
    // };

    // Scroll Listener
    // window.onscroll = function(){
    //     animation.seek(animateOnScroll(animationDone, 1000, 200) * animation.duration);
    // }