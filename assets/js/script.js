// Moment.js
var currentDate = moment().format('dddd') + " " + moment().format("Do MMM YYYY h:mm:ss A");
$("#currentDay").text(currentDate);



var current_task_color = '#ff6961';
var future_task_color = '#77dd77';
var userInput;
var hourSpan;
// on click of the save button
// Buttons (save to Local Storage)
$(".saveBtn").on("click", function(){
    // reach into the html
    userInput = $(this).siblings(".form-control").val().trim();
    console.log(userInput);
    // get the value of the text box that matches the button
    hourSpan = $(this).siblings(".input-group-prepend").text().trim();
    console.log(hourSpan);
    // store that in local storage
    localStorage.setItem(hourSpan, JSON.stringify(userInput));

  })



var workDo = $(".time-go").toArray();
function setTimeWorkDo() {
    var currentHour = parseInt(moment().format('kk')); //current hour as a military time 
    console.log(currentHour, workDo);
    
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

