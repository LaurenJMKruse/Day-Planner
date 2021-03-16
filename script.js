// ready() prevents page from loading before jQuery is ready
$(document).ready(function() {

    // GLOBAL VARIABLES
    let datePlaceholder = $("#currentDay");
    let todaysDate = moment().format("dddd, Do MMMM YYYY");
    let currentHour;
    let hourBlock;
    let itemDescription;

    // Initial set-up

    function init() {
        // Display date
        datePlaceholder.text(todaysDate).css({fontFamily: 'Eagle Lake', fontSize: '30px', marginTop: '20px'});

        // Populate stored items
        renderStoredItems();        
    };

    // Event listener to detect save button clicks
    $(".saveBtn").on("click", function() {

        // Collect information entered by user
        hourBlock = $(this).parent().attr("id");
        itemDescription = $(this).siblings(".description").val();

        // Save user input to local storage
        localStorage.setItem(hourBlock, itemDescription);
    });


    // 
    function hourTracker() {
        // Obtain current hour
        currentHour = moment().hours();
        console.log(currentHour);

        // Determine timeblock colors
        $(".time-block").each(function() {
            let timeBlockHour = $(this).attr("id");
            console.log(`Hour: ${timeBlockHour}`);

            if (timeBlockHour < currentHour) {
                $(this).addClass("past");
            } else if (timeBlockHour == currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        });

    
    }

    function renderStoredItems() {
        $("#08 .description").val(localStorage.getItem("08"));
        $("#09 .description").val(localStorage.getItem("09"));
        $("#10 .description").val(localStorage.getItem("10"));
        $("#11 .description").val(localStorage.getItem("11"));
        $("#12 .description").val(localStorage.getItem("12"));
        $("#13 .description").val(localStorage.getItem("13"));
        $("#14 .description").val(localStorage.getItem("14"));
        $("#15 .description").val(localStorage.getItem("15"));
        $("#16 .description").val(localStorage.getItem("16"));
        $("#17 .description").val(localStorage.getItem("17"));
         
    };

    // Processes
    init();
    hourTracker();

});