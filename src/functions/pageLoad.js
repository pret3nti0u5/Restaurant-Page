// initiates smoke animation on page change or load. Cycles through loadimg=no. which has different frame of smoke as backgroung and then adds class animated to change display to none
const pageLoad = function(){
    const pageLoad = document.querySelector(".pageLoad");
    for(let i=1; i<12; i++){
        load(i);
    }
    function load(i){
        setTimeout(function(){
            if(i<11){
                pageLoad.setAttribute("loadimg", i);
            }
            else{
                pageLoad.className="animated"
            }
        },i*70);
    }
}

export default pageLoad;