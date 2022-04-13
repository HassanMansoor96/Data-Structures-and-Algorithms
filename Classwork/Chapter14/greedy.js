function makeChange(origAmt, coins) {
    var remainAmt = 0;
    if (origAmt % .25 < origAmt) {
        coins[3] = parseInt(origAmt / .25);
        remainAmt = origAmt % .25;
        origAmt = remainAmt;
    }
    document.write("We are checking how many 25c coins are needed to get to 63c, so we divide 63c with 25c to determine how may quaters i will recieve " + "<br>"+ "<br>")
    document.write("We have recied " + coins[3] +" quaters but still short of " + remainAmt + "c change" + "<br>" + "<br>")
    if (origAmt % .1 < origAmt) {
        coins[2] = parseInt(origAmt / .1);
        remainAmt = origAmt % .1;
        origAmt = remainAmt;
    }
    document.write("We are now checking how many 10c coins are need to get the rest of the chnage, so we divide 13c with 10c to determine how many dimes i will recieve " + "<br>"+ "<br>")
    document.write("We have now recieved "+ coins[2] +" dime, but still short " + remainAmt + "c of change" + "<br>"+ "<br>")
    if (origAmt % .05 < origAmt) {
        coins[1] = parseInt(origAmt / .05);
        remainAmt = origAmt % .05;
        origAmt = remainAmt;
    }
    coins[0] = parseInt(origAmt / .01);
    document.write("We still dont have all our chnage we are short by 3c, we now divide 3c with 1c to determine how many pennies i will recieve" + "<br>"+ "<br>")
    document.write("We have recieved the last "+coins[0]+" pennies, all change has been recieved" + "<br>"+ "<br>")
}
    
function showChange(coins) {
    if (coins[3] > 0) {
        document.write("Number of quarters(25c) - " + coins[3] + " - " + coins[3] * .25 + "<br>");
    }
    if (coins[2] > 0) {
        document.write("Number of dimes(10c) - " + coins[2] + " - " + coins[2] * .10 + "<br>");
    }
    if (coins[1] > 0) {
        document.write("Number of nickels(5c) - " + coins[1] + " - " + coins[1] * .05 + "<br>");
    }
    if (coins[0] > 0) {
        document.write("Number of pennies(1c) - " + coins[0] + " - " + coins[0] * .01 + "<br>");
    }
}
function run() {
    var origAmt = .63;
    document.write("The amount of change we need is " + origAmt + "<br>"+ "<br>"); 
    var coins = [];
    makeChange(origAmt, coins);
    showChange(coins);
}

