window.addEventListener('load', ()=>{
    const btnPrev = document.querySelector('.btnPrev');
    const btnNext = document.querySelector('.btnNext');
    const imgs = document.querySelectorAll('.slider img');
    const slider = document.querySelectorAll('.slider');
    let i = 0;

    // console.log(btnPrev);
    // console.log(btnNext);
    // console.log(imgs);
    // console.log(slider);

    btnNext.addEventListener('click',()=>{
        imgs[i].style.display = 'none';
        i++;
        if(i >= imgs.length){
            i = 0;
        }
        imgs[i].style.display = 'block';
    });


    btnPrev.addEventListener('click', ()=>{
        imgs[i].style.display = 'none';
        i--;
        if (i < 0){
            i= imgs.length -1;
        }
        imgs[i].style.display = 'block';
    });



    function sliderNext() {
        imgs[i].style.display = 'none';
        i++;
        if(i >= imgs.length){
            i = 0;
        }
        imgs[i].style.display = 'block';
    }

setInterval(sliderNext,3000);

// function start(){
//     return int = setInterval(sliderNext, 2000);
// }
// start();
// function stop(){
//     clearInterval(int);
// }
// slider.addEventListener('mouseout', ()=>{
//     start();
// })
// slider.addEventListener('mouseover',()=>{
//     stop();
// });
});