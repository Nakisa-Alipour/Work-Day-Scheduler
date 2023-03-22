
// The following will execute when DOM is fully rendered
$(document).ready(function() {
  //Display the current day at the top of the calender
  var currentDate = dayjs().format("dddd, MMMM D");
  $('#currentDay').text(currentDate);
  console.log(currentDate);
})

// Create time blocks for standard business hours
var startHour = 9;
var endHour = 21;


// Loop through each hour of the day
for (var hour=startHour; hour<= endHour; hour++) {
  // Create a time block container
  var $timeBlock = $("<div>").addClass("row timeblock");

  // Add an element to display the current hour
  var $hour = $("<div>").addClass("col-2 col-md-1 hour text-center py-3")
    $hour.text(hour)   
    $timeBlock.append($hour);

  // Add a text area to allow the user to input an event description
  var $description = $("<textarea>").addClass("col-8 col-md-10 description row-3");;
    $description.attr("id", "event-" + hour);

   // Check if there is a saved event for this hour and display it
   var savedEvent = localStorage.getItem("event-" + hour);
   if (savedEvent !== null) {
     $description.val(savedEvent);
   }
 
   $timeBlock.append($description);
  

  // Add a save button to save the user's event description
  var $saveBtn = $("<button>").addClass("btn saveBtn col-2 col-md-1");
  $saveBtn.attr("data-hour", hour);
  

  // Add an icon to the save button
  var $icon = $("<i>").addClass("fas fa-save").attr("aria-hidden", true);
  $saveBtn.append($icon);
  $timeBlock.append($saveBtn);

  // Add the time block to the planner container
  $("#planner").append($timeBlock);

  // Add Classes to timeBlock: Past, Present, Future
    var currentHour = dayjs().hour();
      if (hour < currentHour) {
        $timeBlock.addClass("past");
      } else if (hour === currentHour) {
        $timeBlock.addClass("present");
      } else {
        $timeBlock.addClass("future");
      }
    };  


// Listen for click events on the save button and save the user's event description
$(".saveBtn").on("click", function(event) {
  event.preventDefault();
  var hour = $(this).data("hour");
  var eventText = $("#event-" + hour).val().trim();
  localStorage.setItem("event-" + hour, eventText);
});



