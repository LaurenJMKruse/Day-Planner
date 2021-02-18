// *************************************************
// I. jQuery ready() method ensures HTML document loads prior to execution of JavaScript
$(document).ready(function() {

    // *************************************************
    // II. Global variables
    const fullPage = $('body');
    fullPage.addClass('full-page');
    const calendarSpace = $('.container');
    let dayName = moment().day(String);
    let monthName = moment().month(String);
    let currentDay = moment().date(Number);
    let year = moment().year(Number);
    let datePlaceholder = $('#currentDay');
    datePlaceholder.css({marginTop: '50px', fontFamily: 'Eagle Lake', fontSize: '30px'}).text('Thursday, 18 February 2021');
    console.log(dayName);
    // datePlaceholder.text(`${dayName}, ${currentDay} ${monthName} ${year}`);
    let userName = '';

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
            userName = 'Suzette';
            let personalizedHeader = $('.display-3');
            if (userName === '') {
                personalizedHeader.text('Day Planner');
            } else {
                personalizedHeader.text(`${userName}'s Day Planner`);
            }
            // let userName = ''; //prompt('Please enter your name (up to 12 characters): ');
            
            
            buildTimeBlocks();
        };

        function buildTimeBlocks() {
            console.log('Creating time blocks!');
                calendarSpace.css('padding', '0');
                let calendarPlaceholder = $('<div>').addClass('schedule-details');
                calendarSpace.append(calendarPlaceholder);

                let schedulePlaceholder = $('<div>').addClass('hour-details');
                calendarPlaceholder.append(schedulePlaceholder);

            $.each(hoursArray, function (index, hourNumber)
            {
                let hourBeingBuilt = hourNumber;
                let hourSequence = index;
                console.log('Hour number ' + hourSequence + ' is ' + hourBeingBuilt + ':00');

                let timeBlock = $('<div>');
                timeBlock.addClass('time-block row');
                schedulePlaceholder.append(timeBlock);
                
                let hourColumn = $('<div>');
                hourColumn.css('width', '15%');
                hourColumn.css('marginBottom', '0');
                let hourPlaceholder = $('<p>');
                hourPlaceholder.addClass('hour').val(hourNumber).text(hourNumber + ':00');
                hourColumn.append(hourPlaceholder);
                timeBlock.append(hourColumn);
                console.log('The value of this hour is ' + hourNumber);

                let descriptionColumn = $('<div>');
                descriptionColumn.css({width: '75%', borderWidth: '6px', borderLeftStyle: 'double', borderColor: 'black'});
                let descriptionPlaceholder = $('<textarea>');
                descriptionPlaceholder.addClass('description');
                descriptionColumn.append(descriptionPlaceholder);
                timeBlock.append(descriptionColumn);

                let buttonColumn = $('<div>');
                buttonColumn.css('width', '10%');
                let saveButton = $('<button>');
                saveButton.addClass('saveBtn fa fa-save i:hover');
                buttonColumn.append(saveButton);              
                timeBlock.append(buttonColumn);
            });

            schedulePlaceholder.on('click', function(event){
                let currentButton = $(event.target);
                let editedHour = currentButton.val();
                console.log(`currentButton has value of ${editedHour}`);    
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
