// removes all content style attributes and removes children till only header remains as the sole children
const render = function(){
    const content = document.querySelector('#content');
    content.style="";
    while(content.children.length > 1){
        content.children[1].remove();
    }
}

export default render;
