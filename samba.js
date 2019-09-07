window.addEventListener("keydown", handleKeydown);
window.addEventListener("keyup", handleKeyup);
var sambaNow = false;
var enterFlg = false;
var ctrFlg = false;
function handleKeydown(event){
    if(event.key === 'Enter'){
        enterFlg = true;
    }else if(event.key === 'Control'){
        ctrFlg = true;
    }
    if(!enterFlg || !ctrFlg) return;
    if(sambaNow){
        stop();
    }else{
        start();
    }
    sambaNow = !sambaNow;
}

function handleKeyup(event){
    if(event.key === 'Enter'){
        enterFlg = false;
    }else if(event.key === 'Control'){
        ctrFlg = false;
    }
}

function start(){
    var tateList1 = document.getElementsByClassName("left");
    for(var i = 0; i < tateList1.length; i++) {
        tateList1[i].classList.add('hurueruLeft');
    }
    var tateList2 = document.getElementsByClassName("face");
    for(var i = 0; i < tateList2.length; i++) {
        tateList2[i].classList.add('hurueru');
    }
    var tateList3 = document.getElementsByClassName("right");
    for(var i = 0; i < tateList1.length; i++) {
        tateList3[i].classList.add('hurueruRight');
    }
    var rowDiv1 = document.getElementById("Row1");
    rowDiv1.classList.add('yure1');
    var rowDiv2 = document.getElementById("Row2");
    rowDiv2.classList.add('yure2');
    var rowDiv3 = document.getElementById("Row3");
    rowDiv3.classList.add('yure1');
    var all1 = document.getElementById("all1");
    all1.classList.remove('all');
    all1.classList.add('all2');
    document.getElementById("haka").classList.add('hurueru');
    document.getElementById("message").classList.remove('msg');
    document.getElementById("message").classList.add('msg07');
}

function stop(){
    var tateList1 = document.getElementsByClassName("left");
    for(var i = 0; i < tateList1.length; i++) {
        tateList1[i].classList.remove('hurueruLeft');
    }
    var tateList2 = document.getElementsByClassName("face");
    for(var i = 0; i < tateList2.length; i++) {
        tateList2[i].classList.remove('hurueru');
    }
    var tateList3 = document.getElementsByClassName("right");
    for(var i = 0; i < tateList1.length; i++) {
        tateList3[i].classList.remove('hurueruRight');
    }
    var rowDiv1 = document.getElementById("Row1");
    rowDiv1.classList.remove('yure1');
    rowDiv1.classList.add('yurezu');
    var rowDiv2 = document.getElementById("Row2");
    rowDiv2.classList.remove('yure2');
    rowDiv2.classList.add('yurezu');
    var rowDiv3 = document.getElementById("Row3");
    rowDiv3.classList.remove('yure1');
    rowDiv3.classList.add('yurezu');
    var all1 = document.getElementById("all1");
    all1.classList.remove('all2');
    all1.classList.add('all');
    document.getElementById("haka").classList.remove('hurueru');
    document.getElementById("message").classList.add('msg');
    document.getElementById("message").classList.remove('msg07');
}