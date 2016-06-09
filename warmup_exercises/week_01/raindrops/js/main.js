var raindrops = function(num) {
    var result = "";

    // REQUIREMENT: If the number contains 3 as a prime factor, output 'Pling'.
    if (num % 3 === 0) {
        result += "Pling";
    }

    // REQUIREMENT: If the number contains 5 as a prime factor, output 'Plang'.
    // NOTE: we don't want to use 'else if', since we want to test each condition.
    if (num % 5 === 0) {
        result += "Plang";
    }

    // REQUIREMENT: If the number contains 7 as a prime factor, output 'Plong'.
    if (num % 7 === 0) {
        result += "Plong";
    }

    // REQUIREMENT If the number does not contain 3, 5, or 7 as a prime factor, just pass the number's digits straight through.
    // NOTE: As with everything, there are a bunch of ways we could have done this. Below we've used the String.length method. We also could have simply compared the result with the initial value of result (which we declared as "" - ie, our conditional would be (result === "")).
    if (result.length === 0) {
        result = num.toString();
    }

    console.log(result);
    // NOTE: I'm also logging the type of the result, just to make sure I'm outputting a string.
    console.log(typeof(result));
};

raindrops(1755);
