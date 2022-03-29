/*1. A stack can be used to ensure that an arithmetic expression has balanced parentheses.
Write a function that takes an arithmetic expression as an argument and
returns the position in the expression where a parenthesis is missing. An example
of an arithmetic expression with unbalanced parentheses is 2.3 + 23 / 12 + (3.14159
* .24.*/

function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
    }

    function push(element) {
        this.dataStore[this.top++] = element;
        }

        function peek() {
        return this.dataStore[this.top-1];
        }

        function pop() {
        return this.dataStore[--this.top];
        }

        function clear() {
        this.top = 0;
        }

        function length() {
        return this.top;
        }
var newExpression;
newExpression = (2.3 + 23 / 12 + (3.14159 * .24))

/*2. A postfix expression evaluator works on arithmetic expressions taking the following
form:
op1 op2 operator
Using two stacks—one for the operands and one for the operators—design and
implement a JavaScript function that converts infix expressions to postfix expressions,
and then use the stacks to evaluate the expression.*/



/*3. An example of a real-world stack is a Pez dispenser. Imagine that your virtual Pez
dispenser is filled with red, yellow, and white colors and you don’t like the yellow
ones. Write a program that uses a stack (and maybe more than one) to remove the
yellow ones without changing the order of the other candies in the dispenser.*/