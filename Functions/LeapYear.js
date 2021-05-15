var entyear = prompt("Enter year: ");

function isLeap(Year) {
  if (entyear % 4 === 0) {
    if (entyear % 100 === 0) {
      if (entyear % 400 === 0) {
        alert(entyear + " is a leap year");
      } else {
        alert(entyear + " is not a leap year");
      }
    } else {
      alert(entyear + " is a leap year");
    }
  } else {
    alert(entyear + " is not a leap year");
  }
}

isLeap(entyear);
