// getting days of current month
// Note: we can get the last date of previous month by accessing 0th day of next month

function getDaysInMonth(month,year){
    year = year || (new Date()).getFullYear();
    // incrementing month because we want the 0th day of next month which is nothing but last day of previous month
    return (new Date(year,month+1,0)).getDate();
}

// testing
const months = [
    'jan','feb','mar','apr','may','june','july','aug','sep','oct','nov','dec'
];

months.forEach( (month,i) => {
    console.log(`number of days in ${month} are ${getDaysInMonth(i)}`);
});