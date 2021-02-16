// *************************************************
// I. jQuery ready() method ensures HTML document loads prior to execution of JavaScript
$(document).ready(function() {

    // *************************************************
    // II. Global variables
    let calendarSpace = $('.container');

    // *************************************************
    // III. Array

    let hoursArray = ['8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18'];

    // *************************************************
    // IV. try...catch to log any errors that may occur
    try {

        // *************************************************
        // V. Functions

        // A. Begin or refresh application
        function initializePlanner() {
            let personalizedHeader = $('.display-3');
            let userName = prompt('Please enter your name (up to 12 characters): ');
            personalizedHeader.text(`${userName}'s Day Planner`);
            buildTimeBlocks();
        };

        function buildTimeBlocks() {
            alert('Creating time blocks!');
            $.each(hoursArray, function (index, hourNumber)
            {
                let hourBeingBuilt = hourNumber;
                console.log('The hour being built is ' + hourBeingBuilt + ':00');

                let timeBlock = $('<div>');
                timeBlock.addClass('time-block row');
                calendarSpace.append(timeBlock);
                
                let hourColumn = $('<div>');
                hourColumn.addClass('row');
                hourColumn.css('width', '10%');
                let hourPlaceholder = $('<p>');
                hourPlaceholder.addClass('hour').val(hourNumber).css('width', '100%');
                console.log('The value of this hour is ' + hourNumber);
                hourPlaceholder.text(hourNumber + ':00');
                hourColumn.append(hourPlaceholder);
                timeBlock.append(hourColumn);

                let descriptionColumn = $('<div>');
                //descriptionColumn.add(textArea);
                descriptionColumn.addClass('row');
                descriptionColumn.css('width', '80%');
                let descriptionPlaceholder = $('<textarea>');
                descriptionPlaceholder.addClass('description').text('Event description goes here').css('width', '100%');
                descriptionColumn.append(descriptionPlaceholder);
                timeBlock.append(descriptionColumn);

                let buttonColumn = $('<div>');
                buttonColumn.addClass('row');
                buttonColumn.css('width', '10%');
                let saveButton = $('<button>');
                saveButton.addClass('btn saveBtn').css('width', '100%');
                buttonColumn.append(saveButton);              
                timeBlock.append(buttonColumn);
                
                //timeBlock.css('background-color: pink, border: solid, border-color: blue');
            });
        };

        // *************************************************
        // VI. Initial process
        initializePlanner();

       // end of try...catch to log any errors that may occur 
    } catch (error) {
        console.log('The following error occured: ', error);
    }
});
