function generate(){
    return Math.ceil(Math.random() * 10);
}
function generateArray(){
    let arrey = [];
    for(let i = 0; i < 10; i++){
        let number = generate();
        arrey.push(number);  
    }
   
}



