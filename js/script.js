



function clickBtn1(){
    console.group('aaa');
    const p1 = document.getElementById("headerNav");
    const p2 = document.getElementById("hero_main");
    const open = document.getElementById("openBtn");
    const close = document.getElementById("closeBtn");
    p1.style.display = 'block';
    p2.style.display = 'none';
    open.style.display = 'none';
    close.style.display ='block';
}
function clickBtn2(){
    const p1 = document.getElementById("headerNav");
    const p2 = document.getElementById("hero_main");
    const open = document.getElementById("openBtn");
    const close = document.getElementById("closeBtn");
    p1.style.display = 'none';
    p2.style.display = 'block';
    open.style.display = 'block';
    close.style.display ='none';

}

