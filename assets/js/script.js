// Moment.js
var currentDate = moment().format('dddd') + " " + moment().format("Do MMM YYYY h:mm:ss A");
$("#currentDay").text(currentDate);



var current_task_color = '#ff6961';
var future_task_color = '#77dd77';


var tasks = JSON.parse(localStorage.getItem("tasks"));
var workDo = $(".time-go").toArray();
function setTimeWorkDo() {
    
    var currentHour = parseInt(moment().format('kk')); //current hour as a military time 
    
    
    // for each time block
    for (var i = 0; i < workDo.length; i++) {
        var timeBlockHour = parseInt(workDo[i].id)
        // if the timeblock matches the current hour
        if (timeBlockHour === currentHour) {
            // change that elements stype to red
            workDo[i].style.backgroundColor = current_task_color;
        } else if (timeBlockHour > currentHour) { // if timeblock is n the future
            // change that element style to green
            workDo[i].style.backgroundColor = future_task_color;
        }
    }
}

setTimeWorkDo();


function getStoredTasks() {
    if (localStorage.getItem("tasks") === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }
}
var inputGroup;
var textHour;
// on click of the save button
// Buttons (save to Local Storage)
$(".saveBtn").on("click", function(){
    // reach into the html
    inputGroup = $(this).siblings(".form-control").val().trim();
    console.log(inputGroup);
    // get the value of the text box that matches the button
    textHour = $(this).siblings(".input-group-prepend").text().trim();
    console.log( textHour );
    // store that in local storage
    localStorage.setItem( textHour , JSON.stringify(inputGroup));

  })
// Button for clear the schedule
$("#clschedule").on("click", function(){
    localStorage.clear();
    location.reload();
  }) 

