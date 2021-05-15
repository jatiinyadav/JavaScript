// https://stanford.edu/~cpiech/karel/ide.html

// 1st

function main() {
  putBeeper();
  beeperr();
  beeperr();
  beeperr();
  beeperr();
}

function beeperr() {
  move();
  turnLeft();
  move();
  putBeeper();
  turnRight();
}

// 2nd

function main() {
  putBeeper();
  beeperr1();
  beeperr1();
  beeperr2();
  beeperr1();
  beeperr3();
  beeperr1();
  beeperr1();
  beeperr2();
  beeperr1();
  beeperr3();
  beeperr1();
  beeperr1();
}

function beeperr1() {
  move();
  move();
  putBeeper();
}

function beeperr2() {
  turnLeft();
  move();
  turnLeft();
  move();
  putBeeper();
}

function beeperr3() {
  move();
  turnRight();
  move();
  putBeeper();
  turnRight();
}
