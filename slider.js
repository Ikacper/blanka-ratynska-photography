function init() {
    const body = document.getElementsByTagName('body')[0];

    function changePicture (i) {
        
        body.style.background = `url(./assets/images/${i}.jpg) no-repeat center`;            
        body.style.backgroundSize = 'cover'; 
        body.style.transition = 'background 2s';
        body.style.transitionTimingFunction = 'ease-in-out';
    }
    let i = 1;
    setInterval( () => {changePicture(i++% 3+1)}, 5000);
}

window.addEventListener('DOMContentLoaded', init);