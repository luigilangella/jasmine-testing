function whatCanIDrink(age) {
    if (typeof(age) == "number") {

    

        if (age < 0) {
            return  "Sorry. I can’t tell what drink because that age is incorrect!";
        }
        else if ((age > 0) && (age < 14)) {
            return "Drink Toddy!";
        }
        else if ((age > 14) && (age < 18)) {
            return  "Drink Coke!";
        }
        else if ((age > 18) && (age < 21)) {
            return  "Drink Beer!";
        }
        else if ((age > 21) && (age < 130)) {
            return  "Drink Whisky";
        }
        else { return  "Sorry. I can’t tell what drink because that age is incorrect!" }
    }
    else {
        alert("Error you must input a number!");
    }

}
