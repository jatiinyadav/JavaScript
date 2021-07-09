var score = Math.floor(Math.random() * 100) + 1;

if (score >= 70) {
  console.log("Your love score is: " + score + "% \nUnbelievable 😲");
}

if (score < 70 && score >= 40) {
  console.log("Your love score is: " + score + "% \nNice🤗 ");
}

if (score < 40) {
  console.log("Your love score is: " + score + "%\n*Sad Reacts*");
}
