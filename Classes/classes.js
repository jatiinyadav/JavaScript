//Introduction to Classes

class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }
  get behavior() {
    return this._behavior;
  }

  incrementBehavior() {
    this._behavior++;
  }
}

const halley = new Dog("Halley");
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console
halley.incrementBehavior(); // Add one to behavior
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console

//--------------------------
//Constructor
class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }

  get department() {
    return this._department;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

const surgeonRomero = new Surgeon("Francisco Romero", "Cardiovascular");
const surgeonJackson = new Surgeon("Ruth Jackson", "Orthopedics");

console.log(surgeonRomero.name);
surgeonRomero.takeVacationDays(3);
console.log(surgeonRomero.remainingVacationDays);

//----------------------------------------------

class Student {
  constructor(name, rollno, section) {
    this._name = name;
    this._rollno = rollno;
    this._section = section;
  }

  get alldetails() {
    return `\nName: ${this._name} \nRoll No. : ${this._rollno} \nSection: ${this._section} \n`;
  }

  get sname() {
    return this._name;
  }

  get srollno() {
    return this._rollno;
  }

  get ssection() {
    return this._section;
  }
}

const StudentDetails1 = new Student("Chloe", 15, "A");
const StudentDetails2 = new Student("Lucifer", 20, "B");
const StudentDetails3 = new Student("Amenadiel", 25, "C");

console.log(StudentDetails1.alldetails);
console.log(StudentDetails2.alldetails);
console.log(StudentDetails3.alldetails);
