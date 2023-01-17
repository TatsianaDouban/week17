let comments = [];


loadComments();

let button = document.querySelector("button").onclick = function(){
    let inputName = document.querySelector(".nameinput");
    let textareaComments = document.querySelector(".comment");

    let comment = {
        name : inputName.value,
        body : textareaComments.value,
    }   
    inputName.value = ' ';
    textareaComments.value = ' ';
    comments.push(comment);
    showComments();
    showComments(); 
    checkspam(); 
}

function showComments(){
    localStorage.setItem('comments',JSON.stringify(comments));
}
function loadComments() {
    if(localStorage.getItem('comments')) comments = JSON.parse(localStorage.getItem('comments'));
    showComments();
}

function checkspam(){
    if(comments.value.uncludes("xxx")||
    comments.value.uncludes("viagra")
    ){
        comments.replace("***");
    }
}

function showComments() {
    let resultNode = document.querySelector(".result");
    let out = '';
    comments.forEach(function(item){        
        out += `Имя: ${item.name} <br>`;
        out += `коммент: ${item.body}<br>`;
       
    });


resultNode.innerHTML = out;

}







































