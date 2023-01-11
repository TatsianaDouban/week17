
// let now = new Date();

// console.log(now);

// function formatDate(date){
//     if(now.getDate > )

// }



function formatDate(date) {
    let difference = new Date() - date;
    if (difference < 1000) {
      return "прямо сейчас";
    }
    let seconds = Math.floor(difference / 1000);
    if (seconds < 60) {
      return seconds + " сек.назад";
    }
    let min = Math.floor(seconds / 60);
    if (min < 60) {
      return min + " мин.назад";
    }
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    if (day < 10) {
      day = "0" + day;
    }
    if (month < 10) {
      month = "0" + month;
    }
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    return `${day}.${month}.${year} ${hours}:${minutes}`;
  }






// console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

// console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

// console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// // вчерашняя дата вроде 31.12.2016, 20:00
// console.log( formatDate(new Date(new Date - 86400* 4 * 1000)) );