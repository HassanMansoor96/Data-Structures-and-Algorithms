function mySet() {
    this.collection = [];
    this.has = has;
    this.add = add;
    this.remove = remove;
    this.size = size;
    this.union = union;
    this.intersection = intersection;
    this.difference = difference;
    this.subset = subset;
    this.values = values;
};

function add(element) {
    if (!this.has(element)) {
        this.collection.push(element);
        return true;
    }
    return false;
};

function remove(element) {
    if (this.has(element)) {
        index = collection.indexOf(element);
        this.collection.splice(index, 1);
        return true;
    }
    return false;
};

function size() {
    return this.collection.length;
};

function union(otherSet) {
    var unionSet = new mySet();
    var firstSet = this.values();
    var secondSet = otherSet.values();
    firstSet.forEach(function (e) {
        unionSet.add(e);
    });

    secondSet.forEach(function (e) {
        unionSet.add(e);
    });

    return unionSet;
};

function intersection(otherSet) {
    var intersectionSet = new mySet();
    var firstSet = this.values();
    firstSet.forEach(function (e) {
        if (otherSet.has(e)) {
            intersectionSet.add(e);
        }
    });

    return intersectionSet;
};

function difference(otherSet) {
    var differenceSet = new mySet();
    var firstSet = this.values();
    firstSet.forEach(function (e) {
        if (!otherSet.has(e)) {
            differenceSet.add(e);
        }
    });

    return differenceSet;
};

function subset(otherSet) {
    var firstSet = this.values();
    return firstSet.every(function (value) {
        return otherSet.has(value);
    });
};


function has(element) {
    return this.collection.indexOf(element) !== -1;
}


function values() {
    return this.collection;
}




var setA = new mySet();
var setB = new mySet();
setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());
console.log(setB.difference(setA).values());
console.log(setA.union(setB));

var setC = new Set();
var setD = new Set();
setC.add("a");
setD.add("b");
setD.add("c");
setD.add("a");
setD.add("d");
console.log(setD.values());
setD.delete("a");
console.log(setD.has("a"));
console.log(setD.add("d"));

