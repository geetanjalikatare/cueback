
export const dateConverter = (str) =>{

var timeInMiliseconds = new Date(str * 1000);
const dateTime= timeInMiliseconds.toUTCString();
const dateTimeArray = dateTime.split(" ");
const timeArray = dateTimeArray[4].split(":");
    const obj={
      date:dateTimeArray[1],
      month:dateTimeArray[2],
      year:dateTimeArray[3],
      hours:timeArray[0],
      minutes:timeArray[1]
    }
    return obj;     
  }

  