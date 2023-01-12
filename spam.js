
let button = document.querySelector("button")
let resultNode = document.querySelector("result");


function addtext() {
    let input = document.querySelector(".nameinput").value;
    let comment = document.querySelector(".comment").value;

    console.log(input + comment);
}
function sendText() {
   
    
}



 button.addEventListener("click", addtext);











// function checkSpam(str){
//     if (str == 'viagra' || str == 'xxx'){
//         return false;
//     }
//     else {
//         return true;
//     }
// }



// document.querySelector(".button").addEventListener("click", addCommentary);











// document.querySelector("#button").onclick = function () {
//     checkMessage();
//     checkSpam(str);
//   };
//   function sendMessage(author, comment) {
//     document.getElementById(
//       "out"
//     ).innerHTML += `<span class='name'>${author}:</span><span>${comment}</span><br>`;
//   }
//   function checkMessage() {
//     let author = document.getElementById("author").value;
//     let comment = document.getElementById("comment").value;
  
//     sendMessage(author, comment);
//   }
//   function checkSpam(comment) {
//     return comment.value.replace(/viagra|xxx/i, "***");
//   }