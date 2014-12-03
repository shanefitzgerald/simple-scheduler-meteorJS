if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    instructorOneSchedules: [
      { instructor: "Shane",
        date: "Monday December 8th",
        blockOne: "7:00-7:30",
        blockTwo: "7:30-8:00",
        blockThree: "8:00-8:30",
        blockFour: "8:30-9:00"  
      },
      { instructor: "Shane",
        date: "Thursday December 9th",
        blockOne: "7:00-7:30",
        blockTwo: "7:30-8:00",
        blockThree: "8:00-8:30",
        blockFour: "8:30-9:00"  
      }
    ],
    instructorTwoSchedules: [
      { instructor: "Kameron",
        date: "Tuesday December 9th",
        blockOne: "7:00-7:30",
        blockTwo: "7:30-8:00",
        blockThree: "8:00-8:30",
        blockFour: "8:30-9:00"  
      },
      { instructor: "Kameron",
        date: "Friday December 9th",
        blockOne: "7:00-7:30",
        blockTwo: "7:30-8:00",
        blockThree: "8:00-8:30",
        blockFour: "8:30-9:00"  
      }
    ]
  });
  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });
}
