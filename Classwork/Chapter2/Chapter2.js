//Question 1
function Student() {
    this.grades = [];
    this.average = average;
    this.addGrades = addGrades;
  }
  
  function addGrades(gradeArgs) {
    this.grades.push(gradeArgs);
  };
  function average() {
    var total = 0;
    for(var i = 0; i < this.grades.length; i += 1){
      total += this.grades[i]; 
    }
    return total/this.grades.length;
  };
  
  var hassan = new Student();
  hassan.addGrades(60);hassan.addGrades(40);hassan.addGrades(60);
  console.log(hassan.average());

//Question 2
function concat(accumulatedString, item) {
    return accumulatedString + item;
    }
    var words = ["the ", "quick ","brown ", "fox "];
    var sentence = words.reduceRight(concat);
    console.log(sentence);

//Question 3
function weekTemps() {
    this.dataStore = [];
    this.add = add;
    this.averageWeek = calcAverageWeek;
    this.averageAllWeeks = calcAverageAllWeeks;
    this.averageMonthly = calcAverageMonthly;
    }

function add(temp) {
    this.dataStore.push(temp);
    }

function average() {
    var total = 0;
    for (var i = 0; i < this.dataStore.length; ++i) {
    total += this.dataStore[i];
    }
    return total / this.dataStore.length;
}

function calcAverageMonthly() {
    var avarages = this.averageAllWeeks().split(',');
    return avarages.reduce(sumNumberStr) / avarages.length;
}

function calcAverageWeek(weekNum) {
    var temps = this.dataStore[weekNum - 1];
    return temps.reduce(sum) / temps.length;
}

function calcAverageAllWeeks() {
    var avarageAllWeeks = this.dataStore.map(function (weekTemp) {
        return (weekTemp.reduce(sum) / weekTemp.length);
    });

    return avarageAllWeeks.join(',');
}

function sum(accSum, temp) {
    return accSum + temp;
}

function sumNumberStr(accSum, temp) {
    return eval(accSum) + eval(temp);
}


var temps = new weekTemps();

temps.add([52, 55, 61, 65, 55, 50, 52]);
temps.add([62, 63, 64, 65, 52, 55, 60]);
temps.add([60, 61, 52, 53, 60, 64, 55]);
temps.add([52, 53, 61, 64, 51, 57, 58]);


console.log(temps.averageWeek(1));

console.log(temps.averageAllWeeks());

console.log(temps.averageMonthly());

//Question 4
function Letters() {
    this.letterStore = ['e','v','e','r','y','t','h','i','n','g'];
    this.makeWord = function() {
        return this.letterStore.join('');
    }
}

var letters = new Letters();

console.log(letters.makeWord());