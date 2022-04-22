function stockItems(item_id, item_name, price, quantity = 0, total = 0) {
    this.item_id = item_id;
    this.item_name = item_name;
    this.price = price;
    this.quantity = quantity;
    this.total = total;
}

var stock = [];
var cart = [];
var orders = [];
var totalOrderAmt = 0;

var englishBreakfast = new stockItems(1, "englishBreakfast", 75.00);
var croissants = new stockItems(2, "croissants", 46.00);
var pinewoodBurger = new stockItems(3, "pinewoodBurger", 38.00);
var tramezzini = new stockItems(4, "tramezzini", 41.00);
var heroRolls = new stockItems(5, "heroRolls", 33.00);
var chickenPasta = new stockItems(6, "chickenPasta", 50.00);
var napolitanaPasta = new stockItems(7, "napolitanaPasta", 40.00);
var margherittaPizza = new stockItems(8, "margherittaPizza", 62.00);
var coffee = new stockItems(9, "coffee", 30.00);
var giantMuffin = new stockItems(10, "giantMuffin", 24.00);
stock.push(englishBreakfast, croissants, pinewoodBurger, tramezzini, heroRolls, chickenPasta, napolitanaPasta, margherittaPizza, coffee, giantMuffin);


function add_selection(x) {
    document.getElementById("total").innerHTML = "";
    stock[x].quantity = stock[x].quantity + 1;
    stock[x].total = stock[x].price * stock[x].quantity;
    totalOrderAmt += stock[x].price;
    cart = [];
    for (var i in stock) {
        if (stock[i].quantity > 0) {
            cart.push(stock[i])
        }
    }
    display_all();
}


function subtract_selection(x) {
    if (stock[x].quantity > 0) {
        stock[x].quantity = stock[x].quantity - 1;
        stock[x].total = stock[x].price * stock[x].quantity;
        totalOrderAmt -= stock[x].price;
    }
    cart = [];
    for (var i in stock) {
        if (stock[i].quantity > 0) {
            cart.push(stock[i])
        }
    }
    display_all();

}


var order_number = 1;
var orders = [];
var checkout_list = [];

function displayTotal() {
    for (i in cart){
        checkout_list.push("<br>" + cart[i].quantity + "x " + cart[i].item_name + "\t")
    }
    document.getElementById("total").innerHTML = "ORDER NUMBER: " + order_number + 
    "<br>Items:" + checkout_list + "<br/>Total order amount is R" + totalOrderAmt.toFixed(2);
    orders.push("ORDER NO.: " + order_number + " " + checkout_list + "<br> Total: " + totalOrderAmt + "<br><br>");
    checkout_list = [];
    order_number += 1;
    cart = [];
    for (i in stock) {
        stock[i].quantity = 0;
        stock[i].total = 0;
        totalOrderAmt = 0;
    }
    display_all();
}



function order_history() {
    // for (var i in orders) {
    document.getElementById("total").innerHTML = orders;
// }
}

function display_all() {

    var myTable = "<table><th style='width: 100px; color: red; text-align: right;'>Num</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Item</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Price</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Quantity</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Total</th>";
    myTable += "<th style='width: 100px; color: orange; text-align: right;'>Add</th>";
    myTable += "<th style='width: 100px; color: orange; text-align: right;'>Remove</th>";

    for (i = 0; i < stock.length; i++) {
        myTable += "<tr><td style='width: 100px; text-align: right;'>" + stock[i].item_id + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + stock[i].item_name + "</td><";
        myTable += "<td style='width: 100px; text-align: right;'>" + stock[i].price + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + stock[i].quantity + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + stock[i].total + "</td>";
        myTable += "<td><button onclick='add_selection(" + i + ")'>Add</button></td>";
        myTable += "<td><button onclick='subtract_selection(" + i + ")'>Remove</button></td>";
    }

    myTable += "</table>";
    myTable += "<br/><br/>Your Shopping Cart Contains: <br/>";
    for (var i in cart) {
        myTable += cart[i].quantity + " x " + cart[i].item_name + "<br>";
    }
    myTable += "<br/><br/><p>Total: " + totalOrderAmt + "</p>";
    myTable += "<br/><br/><td><button onclick='displayTotal()'> CHECKOUT </button></td>";
    myTable += "\t<td><button onclick='order_history()'>ORDERS HISTORY</button></td>";

    document.getElementById("demo").innerHTML = myTable;
}