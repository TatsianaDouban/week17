
let button = document.querySelector('button');
button.onclick = letName;

function letName() {
    let cutfio = document.querySelector('.fio').value.split(" ");
    let firstName = cutfio[0];
    let surname = cutfio[1];
    let fathername = cutfio[2];
    
    function parseString(str){
    str = str.toLowerCase();
    str = str.replace(str[0], str[0].toUpperCase());
    return str;
    }
    
document.querySelector('.firstname').value = parseString(firstName);
document.querySelector('.surname').value = parseString(surname);
document.querySelector('.fathername').value = parseString(fathername);

}
