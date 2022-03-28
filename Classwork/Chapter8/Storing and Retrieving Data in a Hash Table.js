





function put(key, data) {
    var pos = this.betterHash(key);
    this.table[pos] = data;
    }

    function get(key) {
        return this.table[this.betterHash(key)];
        }

        var pnumbers = new HashTable();
var names, number;
for (var i = 0; i < 3; i++) {
putstr("Enter a name (space to quit): ");
names = readline();
putstr("Enter a number: ");
number = readline();
}
names = "";
putstr("Name for number (Enter quit to stop): ");
while (names != "quit") {
names = readline();
if (names == "quit") {
break;
}
console.log(names + "'s number is " + pnumbers.get(names));
putstr("Name for number (Enter quit to stop): ");
}