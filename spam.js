let comments = [];

loadComments();

let button = document.querySelector("button").onclick = function(){
    let inputName = document.querySelector(".nameinput");
    let textareaComments = document.querySelector(".comment");
    let inputavatar = document.querySelector(".avatar")
 

    let comment = {
        name : inputName.value,
        body : textareaComments.value,
        avatar : inputavatar.value,
    }   
    inputName.value = ' ';
    textareaComments.value = ' ';
    inputavatar.value = '';

    comments.push(comment);
    saveComments();
    showComments(); 
}

function saveComments(){
    localStorage.setItem('comments',JSON.stringify(comments));
    
}

function loadComments() {
    if(localStorage.getItem('comments')) comments = JSON.parse(localStorage.getItem('comments'));
    showComments();
}


function showComments() {
    let resultNode = document.querySelector(".result");
    let out = '';
    comments.forEach(function(item){        
        out += `Имя: ${item.name} <br>`;
        out += `коммент: ${item.body}<br>`;
        out += `avatar; ${item.avatar}`;
       
    });

resultNode.innerHTML = out.replaceAll("viagra",'***').replaceAll('xxx','***');

}









































