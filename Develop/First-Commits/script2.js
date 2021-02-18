// *************************************************
// I. jQuery ready() method ensures HTML document loads prior to execution of JavaScript
$(document).ready(function() {

    // *************************************************
    // II. Global variables
    const fullPage = $('body');
    fullPage.addClass('full-page');
    const calendarSpace = $('.container');

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
            let userName = 'Arabella'; //prompt('Please enter your name (up to 12 characters): ');
            personalizedHeader.text(`${userName}'s Day Planner`);
            buildTimeBlocks();
        };

        function buildTimeBlocks() {
            console.log('Creating time blocks!');
                calendarSpace.css('padding', '0');
                let calendarPlaceholder = $('<div>').addClass('schedule-details');
                calendarSpace.append(calendarPlaceholder);

                let imageSpace = $('<div>');
                imageSpace.css({position: 'absolute', zIndex: '2', maxWidth: '100%', height: 'auto', overflow: 'hidden'});
                let imagePlaceholder = $('<img>').attr({src: '../Assets/Ducks-And-Lotus-30Transparency.jpg', alt: 'Chinese Painting of Ducks and Lotus Flowers'}).css({maxWidth: '100%', height: 'auto', overflow: 'hidden'});
                imageSpace.append(imagePlaceholder);
                calendarPlaceholder.append(imageSpace);
                
                let schedulePlaceholder = $('<div>').addClass('hour-details').css({position: 'relative', zIndex: '2'});
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
                hourColumn.css('width', '10%');
                hourColumn.css('margin-bottom', '0');
                let hourPlaceholder = $('<p>');
                hourPlaceholder.addClass('hour').val(hourNumber).text(hourNumber + ':00');
                hourColumn.append(hourPlaceholder);
                timeBlock.append(hourColumn);
                console.log('The value of this hour is ' + hourNumber);

                let descriptionColumn = $('<div>');
                descriptionColumn.css('width', '80%');
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
