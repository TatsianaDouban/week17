let addmessage = document.querySelector(".message"),
    addbutton = document.querySelector(".add"),
    todo = document.querySelector(".todo")

    let todoList =[]; 

    if(localStorage.getItem('save')){
        todoList = JSON.parse(localStorage.getItem('save'));
        showmessages();
    }

addbutton.addEventListener('click',function(){
   
    let newTode = {
        todo: addmessage.value,
        checked: false,
        impotant: false
};

todoList.push(newTode);
showmessages();
localStorage.setItem("save",JSON.stringify(todoList));


});    

function showmessages(){
    let showmessages = '';

    todoList.forEach(function(item, i){
     showmessages += `
        <li>
        <input type='checkbox' id='item_${i}' ${item.checked ? 'checked' : ''}>
        <label for = 'item_${i}'>${item.todo}</label>
        </li>
        `;
        todo.innerHTML = showmessages;
        
    });
}

