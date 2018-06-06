$( window ).load(function() {
    wordsToMinutes();
});

$(document).ready(function() {
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

    $('#range').slider({
        formatter: function(value) {
            return 'Words per minute: ' + value;
        }
    });

    $('#word_count').on('keyup', function() {
        var words = this.value.match(/\S+/g);
        $('#display_count').text(words ? words.length : 0);

        wordsToMinutes();
    });

    $('#wordsCount').on('keyup', function() {
        wordsToMinutes();
    });

    $('#range').on('change', function() {
        wordsToMinutes();
    });
});

function wordsToMinutes() {
    var wordsCountFromInput = parseFloat($('#wordsCount').val());
    var wordsCountFromTextArea = $('#display_count').text();
    var range = $('#range').val();

    var timeToRead = wordsCountFromInput / range;
    var hours = Math.floor(timeToRead / 60);
    var minutes = timeToRead % 60;
    var seconds = ((minutes * 60 ) % 60).toFixed(0);

    var timeToRead2 = wordsCountFromTextArea / range;
    var hours2 = Math.floor(timeToRead2 / 60);
    var minutes2 = timeToRead2 % 60;
    var seconds2 = ((minutes2 * 60 ) % 60).toFixed(0);

    var hoursStr = '';
    var minutesStr = '';
    var secondsStr = '';
    var hoursStr2 = '';
    var minutesStr2 = '';
    var secondsStr2 = '';

    // results for readTime1
    if (hours == 1 || hours == 0) {
        hoursStr = ' hour ';
    } else {
        hoursStr = ' hours ';
    }

    if (minutes == 1 || minutes == 0) {
        minutesStr = ' minute ';
    } else {
        minutesStr = ' minutes ';
    }

    if (seconds == 1 || seconds == 0) {
        secondsStr = ' second ';
    } else {
        secondsStr = ' seconds ';
    }

    // results for readTime2
    if (hours2 == 1 || hours2 == 0) {
        hoursStr2 = ' hour ';
    } else {
        hoursStr2 = ' hours ';
    }

    if (minutes2 == 1 || minutes2 == 0) {
        minutesStr2 = ' minute ';
    } else {
        minutesStr2 = ' minutes ';
    }

    if (seconds2 == 1 || seconds2 == 0) {
        secondsStr2 = ' second ';
    } else {
        secondsStr2 = ' seconds ';
    }

    $('#readTime1').html('<span class="label label-warning">' +  hours + '</span>' +  hoursStr + '<span class="label label-primary">' +  Math.floor(minutes) + '</span>' +  minutesStr + '<span class="label label-info">' +  seconds + '</span>' + secondsStr);
    $('#readTime2').html('<span class="label label-warning">' + hours2 + '</span>' + hoursStr2 + '<span class="label label-primary">' + Math.floor(minutes2) + '</span>' + minutesStr2 + '<span class="label label-info">' + seconds2 + '</span>' + secondsStr2);
}
