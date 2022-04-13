var stock = [];
var cart = [];
var orders = [];
var stock_item = {"id" : stock_id, "name"  : stock_name,  "price" : price};
var cart_item = {"stock_id" : id, "quantity" : quantity};
var order_item = {"order_id" : order_id, "stock_id" : stock_id, "quantity" : quantity};

// 1. in the beginning, populate the stock array with 10 items

var stock = ["coke","water","juice","chocolate","gums","coffee","muffin","popcorn","ice-cream","lunch"];


// 2. display the stock array to the user

console.log(stock);

// 3. let the user select the item and quantity

// 4. do an insert into the cart array representing the selection

// 5. display the cart contents

// 6. is the user finished?

// 7. if yes, sheck out and store the cart selection in an order array and clear the cart

// 8. display all orders

// 9. display all the orders