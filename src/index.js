// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    if (currency <= 0) {
        return {};
    }

    if (currency> 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"}
    }

    var h = Math.trunc(currency / 50);  
    currency = currency % 50;

    var q = Math.trunc(currency / 25);  
    currency = currency % 25;

    var d = Math.trunc(currency / 10);  
    currency = currency % 10;

    var n = Math.trunc(currency / 5);  
    var p = currency % 5;

    var res = new Object();
    if (h > 0) {
        res.H = h;
    }

    if (q > 0) {
        res.Q = q;
    }

    if (d > 0) {
        res.D = d;
    }

    if (n > 0) {
        res.N = n;
    }

    if (p > 0) {
        res.P = p;
    }

    return res;
}
