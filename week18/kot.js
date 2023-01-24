
const form = document.querySelector('form');
class Cat {
   constructor(data) {
       this.name = data.get("name");
       this.age = data.get("age");
       this.half = data.get("half");
       this.gender = data.get("gender");
       this.food = data.get("food");
   }
   print(){
       console.log(this)
   }
}

form.addEventListener("submit",(evt) =>{
   evt.preventDefault();
   let Allstr = new FormData(form);

   let cat = new Cat(Allstr);
   cat.print();

});


//  let form = document.querySelector('form');

// form.addEventListener('submit',(evt) => {
//      evt.preventDefault();
//      let data = new FormData(form);

//      let name = data.get("name");
//      let age = data.get("age");
//      let half = data.get("half");
//      let gender = data.get("gender");
//      let food = data.get("food");

//     let cat = new Cat ({ name, age, half, gender, food});
// });

//  class Cat {
//     constructor({ name, age, half, gender, food}) {
//         this.name = name;
//         this.age = age;
//         this.half = half;
//         this.gender = gender;
//         this.food = food;
//     }
//     result(){
//         console.log(Cat)
//     }
//  }


