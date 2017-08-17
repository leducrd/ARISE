# Checklists in ARIS
### Documentation and Tutorial for use
By: Ryan LeDuc
Created:08/17/2017
Updated:08/17/2017
Languages: Javascript, HTML, CSS
Developed for the Act 4 Healthcare ARISE project, for use in ARISE simulation scenarios involving the need to keep track of a list of tasks.

## Features
Allows users to check or uncheck a checkbox to keep track of completion of a list of tasks.

## HTML
> `<input type="checkbox" id="chk1">`

There are two important attributes in this small bit of HTML code that are required for the checklist to work:
* **type** must be "checkbox", as this specifies the HTML element to render as a checkbox
* **id** each input MUST have a UNIQUE id. In this example we simply used "chk1", so that in other parts of the code (Css, JavaScript) it's obvious that we are working with a checkbox. The id can be whatever name you would like **as long the id is spelled and capitalized the same as an item in ARIS.** (more on this later)

### _Making a checklist_
There are many different ways to make a checklist. In ARISE we used tables due to design specifications. Using an HTML table to organize the list items and checkboxes we get an output that looks like this:  
![alt text](https://github.com/leducrd/ARISE/blob/master/ChecklistForARIS/checklistUnstyled.PNG?raw=true "Unstyled Checklist")

**And the full code for the table:**
```HTML
	<table>
        <thead>
          <tr>
            <th>Column Header</th>
            <th>Column Header</th> 
          </tr>
        <thead>
        <tbody>
          <tr>
            <td>Weight and BMI</td>
            <td><input type="checkbox" id="chk1"></td>
          </tr>
          <tr>
            <td>VS:  BP, temp, RR, HR, O2 sat</td>
            <td><input type="checkbox" id="chk2"></td> 
          </tr>
          <tr>
            <td>Health history</td>
            <td><input type="checkbox" id="chk3"></td> 
          </tr>
          <tr>
            <td>Medication Reconciliation</td>
            <td><input type="checkbox" id="chk4"></td> 
          </tr>
	  </tbody>
  </table>
```
* To make a larger or shorter checklist, add or delete a set of <tr></tr> tags and anything in between them.

## CSS
The default checkboxes are small and hard to tap. Using CSS we can center them and make them bigger and easier to tap:  
![alt text](https://github.com/leducrd/ARISE/blob/master/ChecklistForARIS/checklistBigbox.PNG?raw=true "Unstyled Checklist")
```css
<style>
    input[type='checkbox'] {
      display: block;
      width: 25px;
      height: 25px;
      margin: 0 auto;
    }
</style>
```
* The checkboxes can be made larger or smaller by changing the width and height in the css.
## Setting up your ARIS game
Frist, we need a way for the user to return to the checklist. This can be done by making the plaque a tab. As a tab, this will allow the user to leave and return to the plaque when needed, to check off items as they are completed.

ARIS does not save user changes to a plaque after the plaque has been left. This means that under normal circumstances, checkboxes do not remain checked  when a plaque is returned to. But we can get around this using JavaScript and the ARISJS API call that retrieves the amount of an item a user is carrying.

This means that we need to create as many "Player Attributes/Items" objects as we have checkboxes, and **each item name must match the captialization and spelling of each checkbox id we created eariler.** The matching names are how the JavaScript, HTML and ARISJS API work together to make the checklist functionality work.

**Example:**
> **HTML:** <input type="checkbox" id="chk1">
> **ARIS item name:** chk1
> **HTML:** <input type="checkbox" id="chk2">
> **ARIS item name:** chk2
> **Etc…**

_For those who aren't interested in the JavaScript and how it works, that's it!_ Once you copy the code into a plaque and make the necessary changes and ARIS game set up, your checklist should work. There isn't any changes that are needed to be made to the JavaScript. For those interested, and explaination of the JavaScript code follows.

## Functionality: JavaScript and ARISJS
**Again, no changes need to be made to the JavaScript.**

First we gather up all of the checkboxes into a node list using document.querySelector, so we can access them to add the functionality.
```javascript
var checkBoxNodeList = document.querySelectorAll('input[type="checkbox"]');
```
Then, if we jump down to the bottom of the JavaScript code, the handleCheck function uses an ARIS API call to get the id number of the ARIS item using the id of the checkbox we set in the HTML. Then it checks to see if the corresponding checkbox is checked. If it is, it sets the item count in ARIS to 1, if not it sets it to 0. 
```javascript
    function handleCheck(e) {
      var checkBoxItem_id = ARIS.cache.idForItemName(e.target.id);
      
      if (e.target.checked) {
        ARIS.setItemCount(checkBoxItem_id, 1);
      } else {
        ARIS.setItemCount(checkBoxItem_id, 0);
      }
    }
```
Jumping back up, we set up our ARIS object, and put the rest of the code inside the ARIS.ready function. Using a for loop, we attach the handleCheck function to each of the checkboxes. This loop also uses two ARIS API calls to retrieve the item count for each checkbox item in ARIS on page load. On page load if the item count is 1, the checkbox is checked, if 0 it is not.
```javascript
    var ARIS = {};
    ARIS.ready = function() {
    
      for (var i = 0; i < checkBoxNodeList.length; i++) {

        checkBoxNodeList[i].addEventListener("click", handleCheck, false);
       
        var checkBoxItem_id = ARIS.cache.idForItemName(checkBoxNodeList[i].id); 
        var checkBoxItem_qty = ARIS.cache.getPlayerItemCount(checkBoxItem_id);
        
        if (checkBoxItem_qty == 1) {
          checkBoxNodeList[i].checked = true;
        } 
      } 
    };
```
