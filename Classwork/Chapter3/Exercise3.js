/*1. Write a function that inserts an element into a list only if the element to be inserted
is larger than any of the elements currently in the list. Larger can mean either greater
than when working with numeric values, or further down in the alphabet, when
working with textual values.*/

function List() {
    this.array = [1, 37, 8, 50, "a", "o", "ab"];
    this.add = add;
    this.check = check;
    this.display = display;
}

function display(data, description) {
    console.log(data, "---" + description + "---");
}

function add(data) {
    if (this.check(data)) {
        this.array.push(data);
        this.display(this.array, "succses")
    }
    else {
        this.display(this.array, "error")
    }
}

function check(data) {
    var arrayType = this.array.filter(function (number) {
        return typeof number == typeof data;
    });
    function bigger(number) {
        return data > number;
    }
    return arrayType.every(bigger);
}

var list = new List();
list.add(100); // Will add to the list and show succses
list.add("m") // Will not add to the list and show error




/*2. Write a function that inserts an element into a list only if the element to be inserted
is smaller than any of the elements currently in the list.*/

function List() {
    this.array = [1, 37, 8, 50, "a", "o", "ab"];
    this.add = add;
    this.check = check;
    this.display = display;
}

function display(data, description) {
    console.log(data, "---" + description + "---");
}

function add(data) {
    if (this.check(data)) {
        this.array.push(data);
        this.display(this.array, "succses")
    }
    else {
        this.display(this.array, "error")
    }
}

function check(data) {
    var arrayType = this.array.filter(function (number) {
        return typeof number == typeof data;
    });
    function smaller(number) {
        return data < number;
    }
    return arrayType.every(smaller);
}

var list = new List();
list.add(0); // Will add to the list and show succses
list.add("l") // Will not add to the list and show error




/*3. Create a Person class that stores a person’s name and their gender. Create a list of
at least 10 Person objects. Write a function that displays all the people in the list of
the same gender.*/

class Person {
    constructor(name, gender) {
      this.name = name;
      this.gender = gender;
    }
  }

  var list = [
	{"name": "Felix Wyatt", "gender": "M"},
	{"name": "Amethyst Lawrence", "gender": "F"},
	{"name": "Lael Buchanan", "gender": "M"	},
	{"name": "Oscar Mayo", "gender": "M"	},
	{"name": "Remedios Vega", "gender": "M"	},
    {"name": "Megan Fox", "gender": "F"	},
	{"name": "Jessy Right", "gender": "F"	},
	{"name": "Rebecca Wong", "gender": "F"	},
	{"name": "Rose Ryan", "gender": "F"},
	{"name": "Carlos Black", "gender": "M"}
];

console.log( list);


/*4. Modify the video-rental kiosk program so that when a movie is checked out it is
added to a list of rented movies. Display this list whenever a customer checks out
a movie.*/



/*5. Create a check-in function for the video-rental kiosk program so that a returned
movies is deleted from the rented movies list and is added back to the available
movies list.*/