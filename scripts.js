/* ***************************************** 
Method: Insert to textview

Accepts an object as a parameter
Grabs the value from the textview
Adds the object to the value of textview
To display onto the textview

Author: David Castellanos-Benito
***************************************** */
function insertNumber(num) {
  document.form.textview.value = document.form.textview.value + num;
}

/* *****************************************
Method: Evaluate Expression

Inatlizes variable "expression" with object from the form textview
If the variable is not empty, the JS built function eval will run
eval will evaluate the expression and return a new object
The new object will be set to the form textview value,
In result, displaying the answer onto the textview

Author: David Castellnos-Bentio
***************************************** */
function evaluateExpression() {
  var expression = document.form.textview.value;

  if (expression) {
    document.form.textview.value = eval(expression);
  }
}

/* *****************************************
Method: Clear Screen

Will clear the textview from any object in it

Author: David Castellanos-Benito
***************************************** */
function clearScreen() {
  document.form.textview.value = "";
}

/* *****************************************
Method: Delete Number

Inatlizes variable "expression" with object from the form textview
The object then creates a substring that captures the last object (number) inputed
(0, length of the object - 1)
Displays the textview as the new number without the recent deleted number
***************************************** */
function deleteNumber() {
  var expression = document.form.textview.value;

  document.form.textview.value = expression.substring(0, expression.length - 1);
}
