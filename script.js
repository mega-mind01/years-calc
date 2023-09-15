let check = document.getElementById("check")

check.addEventListener("click", checker);

// alert("oya na senior man");

function checker() {
    let age_y = parseInt(document.getElementById("yrs").value);
    let age_w = parseInt(document.getElementById("wks").value);
    let age_d = parseInt(document.getElementById("days").value);

    // year of interest in days
    const TARGET_YRS = 90 * 365;

    if (isNaN(age_y) || isNaN(age_w) || isNaN(age_d)) {
        let age = 90 - age_y;
        age = age * 365;
        let a_months = parseInt(age / 30.4);
        let a_week = parseInt((age - (a_months * 30.4)) / 7);
        let a_day = parseInt(age - (a_months * 30.4) - (a_week * 7));
        document.getElementById("ageDisplay").innerHTML = "You have " + a_months + " months, " + a_week + " weeks, and " + a_day + " days left until you turn 90 years old";
    } else {
        age_y = age_y * 365;
        age_w = age_w * 7;
        let age_in_days = age_y + age_w + age_d;
        let days_left = TARGET_YRS - age_in_days;

        let in_month = parseInt(days_left / 30.4);
        let in_week = parseInt((days_left - (in_month * 30.4)) / 7);
        let in_day = parseInt(days_left - (in_month * 30.4) - (in_week * 7));

        if (days_left < 0) {
            document.getElementById("ageDisplay").innerHTML = "Shey you dey whine me?";
        } else {
            document.getElementById("ageDisplay").innerHTML = "You have " + in_month + " months, " + in_week + " weeks, and " + in_day + " days left until you turn 90 years old";
        }
    }
}
