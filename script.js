let check = document.getElementById("check")

check.addEventListener("click", checker);

function checker() {
    let age = parseInt(document.getElementById("yrs").value);

    const TARGET_YRS = 90;
    const DAYS_IN_YEAR = 365;
    const DAYS_IN_MONTH = 30.4;
    const DAYS_IN_WEEK = 7;

    if (age < 0) {
        document.getElementById("ageDisplay").innerHTML = "Shey you dey whine me?";
    } else if (age >= TARGET_YRS) {
        document.getElementById("ageDisplay").innerHTML = "You have already reached 90 years!";
    } else {
        let yearsLeft = TARGET_YRS - age;
        let daysLeft = yearsLeft * DAYS_IN_YEAR;
        let monthsLeft = parseInt(daysLeft / DAYS_IN_MONTH);
        let weeksLeft = parseInt(daysLeft / DAYS_IN_WEEK);

        document.getElementById("ageDisplay").innerHTML = "You have " + monthsLeft + " months, " + weeksLeft + " weeks, and " + daysLeft + " days left until you turn 90 years old";
    }
}
