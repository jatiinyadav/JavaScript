let myTodos = {
  day: "Monday",
  meetings: 0,
  doneMeetings: 0,

  addMeeting: function (meet = 0) {
    return `Your meeting: ${(this.meetings += meet)}`;
  },

  doneMeeting: function (meet = 0) {
    return `Your done meeting: ${(this.doneMeetings -= meet)}`;
  },

  summaryDay: function () {
    let meetLeft = this.meetings + this.doneMeetings;
    console.log(`Your meetings left: ${meetLeft}`);
  },

  resetDay: function () {
    this.meetings = 0;
    this.doneMeetings = 0;
    console.log(`After reset Your meetings : ${this.meetings}`);
  },
};

myTodos.addMeeting(2);

myTodos.addMeeting(4);

myTodos.doneMeeting(2);

myTodos.summaryDay();

myTodos.resetDay();

//---------------------
