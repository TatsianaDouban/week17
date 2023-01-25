
const form = document.querySelector('form');
let resutl = document.querySelector(".result")
class Person {
    constructor(info) {
    this.firstname = info.get("firstname")
    this.lastname = info.get("lastname");
    this.days =  info.get("days");
    this.rate = info.get("rate");
    }

getsalary() {  
    resutl.innerHTML = (`Сотрудник: ${this.firstname}  ${this.lastname} Получит зп:  ${this.days * this.rate} $`);
 }
}

form.addEventListener("submit",(evt) =>{
    evt.preventDefault();
    let Allstr = new FormData(form);

   let person = new Person(Allstr);
   person.getsalary();

});

