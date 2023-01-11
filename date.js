
function formatDate(date) {
  let now = new Date() - date;
      // year = now.getFullYear();
      // month = now.getMonth();
      // date = now.getDate();
      // hours = now.getHours();
      // minutes = now.getMinutes();
      // seconds = now.getSeconds();

    if(now < 1000) {
      return "\"прямо сейчас\"";
    }
 
    seconds = Math.floor(now / 1000);

    if (seconds < 60) {
      return seconds + "\"секунд назад\""
    } 

     minutes = Math.floor(now / 60000);
    if (minutes < 60) {
        return minutes + "\"минут назад\"";
    }

 }
 console.log(formatDate(new Date(new Date - 1)));

 console.log(formatDate(new Date(new Date - 30 * 1000)));
 
 console.log(formatDate(new Date(new Date - 5 * 60 * 1000)));
 


