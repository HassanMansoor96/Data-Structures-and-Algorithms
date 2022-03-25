var dancers = [
    'F Allison McMillan',
'M Frank Opitz',
'M Mason McMillan',
'M Clayton Ruff',
'F Cheryl Ferenback',
'M Raymond Williams',
'F Jennifer Ingram',
'M Bryan Frazer',
'M David Durr',
'M Danny Martin',
'F Aurora Adney'
]


function Dancer(name, sex) {
    this.name = name;
    this.sex = sex;
}

function getDancers(males, females) {
    var names = read("dancers.txt").split("\n");
    for (var i = 0; i < names.length; ++i) {
        names[i] = names[i].trim();
    }
    for (var i = 0; i < names.length; ++i) {
        var dancer = names[i].split(" ");
        var sex = dancer[0];
        var name = dancer[1];
        if (sex == "F") {
            females.enqueue(new Dancer(name, sex));
        }
        else {
            males.enqueue(new Dancer(name, sex));
        }
    }
}

function dance(males, females) {
    console.log("The dance partners are: \n");
    while (!females.empty() && !males.empty()) {
        person = females.dequeue();
        putstr("Female dancer is: " + person.name);
        person = males.dequeue();
        console.log(" and the male dancer is: " + person.name);
    }
    console.log();
}