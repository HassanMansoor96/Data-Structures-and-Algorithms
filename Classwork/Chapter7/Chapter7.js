//The Dictionary Class



/*class Dictionary {
    constructor() {
        this.datastore = new Array();
    }
}

function add(key, value) {
    this.datastore[key] = value;
}

function find(key) {
    return this.datastore[key];
}

function remove(key) {
    delete this.datastore[key];
}

function showAll() {
    for(var key in Object.keys(this.datastore)) {
        console.log(key + " -> " + this.datastore[key]);
    }
}
*/

//Example7-1

class Dictionary {
    constructor() {
        this.add = add;
        this.datastore = new Array();
        this.find = find;
        this.remove = remove;
        this.showAll = showAll;
    }
}

function add(key, value) {
    this.datastore[key] = value;
}
function find(key) {
    return this.datastore[key];
}
function remove(key) {
    delete this.datastore[key];
}

function showAll() {
    for (var key in Object.keys(this.datastore)) {
        console.log(key + " -> " + this.datastore[key]);
    }
}

//Example 7-2

//load("Dictionary.js");

var pbook = new Dictionary();

pbook.add("Mike", "123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");

console.log("David's extension: " + pbook.find("David"));

pbook.remove("David");

pbook.showAll();



//Auxiliary Functions for the Dictionary Class

function count() {
    var n = 0;
    for (var key in Object.keys(this.datastore)) {
        ++n;
    }
    return n;
}

var nums = new Array();
nums[0] = 1;
nums[1] = 2;
console.log(nums.length); // displays 2



function clear() {
    for (var key in Object.keys(this.datastore)) {
        delete this.datastore[key];
    }
}

//Example7-3

class Dictionary {
    constructor() {
        this.add = add;
        this.datastore = new Array();
        this.find = find;
        this.remove = remove;
        this.showAll = showAll;
        this.count = count;
        this.clear = clear;
    }
}

function add(key, value) {
    this.datastore[key] = value;
}

function find(key) {
    return this.datastore[key];
}

function remove(key) {
    delete this.datastore[key];
}

function showAll() {
    for (var key in Object.keys(this.datastore)) {
        console.log(key + " -> " + this.datastore[key]);
    }
}

function count() {
    var n = 0;
    for (var key in Object.keys(this.datastore)) {
        ++n;
    }
    return n;
}

function clear() {
    for (var key in Object.keys(this.datastore)) {
        delete this.datastore[key];
    }
}

//Example 7-4

//load("Chapter7.js");

var pbook = new Dictionary();

pbook.add("Raymond", "123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");

console.log("Number of entries: " + pbook.count());

console.log("David's extension: " + pbook.find("David"));

pbook.showAll();

pbook.clear();

console.log("Number of entries: " + pbook.count());
