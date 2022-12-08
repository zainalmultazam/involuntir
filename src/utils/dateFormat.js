function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}

/**
 * Get today's date in yyyy-mm-dd format
 */
function formatDate(date) {
    return [
        date.getFullYear(),
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate())
    ].join('-');
}

/**
 * time format to hh:mm:ss
 */
function formatTime(time) {
    return [
        padTo2Digits(time.getHours()),
        padTo2Digits(time.getMinutes()),
        padTo2Digits(time.getSeconds())
    ].join(':');
}

function dateTimeFormat (date) {
    let dateNow = formatDate(date);
    let timeNow = formatTime(date);

    return dateNow + " " + timeNow;
}

// function dateTextFormat (date) {

// }

module.exports = { dateTimeFormat }