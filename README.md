Quick start:

```
$ npm install
$ npm start
````
#HTML

##Explanation of the HTML document
The HTML document creates a web page with a header, body, and script. It contains links to external stylesheets and 
defines the content of the web page, which includes a heading, buttons, and a paragraph. The behavior of the web page is 
defined in a JavaScript file.
Explanation
The HTML document creates a web page with a header, body, and script. The head section contains links to external 
stylesheets and other metadata. In this case, there are two links to stylesheets. The first link points to a 
stylesheet that normalizes the default styles across different browsers, while the second link points to a custom 
stylesheet that defines styles for the page.
The body section contains the content of the web page. It includes a heading, buttons, and a paragraph. The heading 
displays the current count of people entered, which is initially set to 0. There are two buttons: one that increments 
the count of people entered when clicked and another that saves the current count of people entered when clicked. 
There is also a paragraph that displays the previous entries of people entered.
The script tag at the end of the body links to a JavaScript file that defines the behavior of the web page. The 
JavaScript file likely contains functions that are called when the buttons are clicked to update the count of people 
entered and display the previous entries.
Possible bugs

If the links to the external stylesheets are incorrect or broken, the styles may not be applied correctly.
If the JavaScript file is missing or contains errors, the behavior of the web page may not work as intended.

###Possible improvements

Add input validation to ensure that the count of people entered is a valid number.
Use a database to store the previous entries of people entered instead of storing them in memory.
Add error handling to the JavaScript functions to handle cases where the count of people entered cannot be incremented 
or saved.

###References
HTML Introduction

#JavaScript

##Explanation of the code
The code defines two functions, increment and save, that updates the value of a counter and display it on a web page. 
The increment function increments the counter by 1 and updates the counter display. The save function saves the current 
counter value to a list and resets the counter to 0.
Explanation
The code defines three variables, saveEl, countEl, and count. saveEl and countEl are assigned to HTML elements 
with the IDs "save-el" and "count-el", respectively, using the document.getElementById method. count is initialized to 0.
The increment function increments the value of count by 1 and updates the text content of countEl to display the new 
value of count.
The save function creates a new string that consists of the current value of count and a dash separator. The new string 
is appended to the text content of saveEl. The text content of countEl is then set to 0, and the value of count is 
reset to 0.
The code is designed to work with an HTML file that has elements with the IDs "save-el" and "count-el". The countEl element 
displays the current value of the counter, and the saveEl element displays a list of saved counter values.
Possible bugs

If the HTML file does not have elements with the IDs "save-el" and "count-el", the code will throw an error.
If the count variable is not a number, the code will throw an error.
If the saveEl element contains other text content besides the saved counter values, the save function will append 
the new counter value to the end of the existing text content.

Possible improvements

Add input validation to ensure that the saveEl and countEl elements exist before attempting to assign them to 
variables.
Use a data structure like an array to store the saved counter values instead of concatenating them to a string.
Add a feature to allow the user to delete saved counter values.

References

Document.getElementById() method
textContent property

