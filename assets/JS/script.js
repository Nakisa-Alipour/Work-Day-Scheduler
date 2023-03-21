// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

/* The following function wraps all of the code that interacts with the DOM, 
ensuring that it is executed only when the page has finished loading. */

$(document).ready(function() {
  //Display the current dau at the top of the calender
  var currentDate = dayjs().format("dddd, MMMM D");
  $('#currentDay').text(currentDate);
})

// Create time blocks for standard business hours
var startHour = 9;
var endHour = 17;

for (var hour=startHour; hour<= endHour; hour++) {
  var $timeBlock = $("div").addClass("row timeblock");
  var $hour = $("<div>");
    $hour.addClass("col-2 col-md-1 hour text-center py-3")
    $hour.text(dayjs({ hour }).format("hA"))
  var $description = $("<textarea>")
    $description.addClass("col-8 col-md-10 description");
    $description.attr("id", "event-" + hour);
  
}

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

