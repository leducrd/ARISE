# Ventilator Suggested Settings Customization

By: Ryan LeDuc
Created: 11/14/2017
Updated: 11/14/2017

Languages: JavaScript, HTML, CSS

Developed for the Act 4 Health Care ARISE project, for use in ARISE simulation scenarios involving the assessment of a patient on a ventilator.
  
Built upon the the code from the Custom Vitals, originally programmed by ARIS for the ARISE project found at: https://github.com/ARISGames/ARISE/blob/master/vitals.html
  
## Features
Allows ARISE simulation users to record necessary ventilator settings, saves them, and allows them to be reviewed at a later point in time if they return Suggested Ventilator Settings sheet within the same simulation.

## Patient Settings JS Include
This customization uses a patient.js include, which holds setting constants and ranges, where "patient" in patient.js is the patient name.

## Items and Variables
**Item Names in ARIS must match exactly, or values will not save**

#### Ventilator Submitted Tracker
This item tracks whether or not the user has submitted Suggested Ventilator Settings Sheet information at least once. Without this item, when the Ventilator Flow Sheet is first visited, the "Previous" column will be filled with 0's instead of being blank. Submitting entries to the Ventilator Flow Sheet once gives the user 1 of the SugVentSubmitted item, which allows displaying of item values.

|ventSettings.js | Item Name in ARIS|
|----------------|------------------|
|SUBMITTED_NAME  |SugVentSubmitted  |

#### Entry Fields Item names in ARIS
|Field in Plaque | Item Name ARIS|
|----------------|---------------|
|Rate            |SugSetRate     |
|Vt              |SugSetVt       |
|FiO2            |SugSetFio2     |
|PEEP            |SugSetPeep     |

#### Change Inventory Maximums

The default setting for "Max Quantity in Inventory" for items in ARIS is 500. For all of the numerical field inputs, we use the number 9999 as an indication that the user has left a field blank, indicating that that item was not assessed. Quantities for these items in ARIS should be set to 9999 to allow for them to not be assessed.

## Ventilator Code Overview

### Original ARIS Code

```javascript
function checkFloat(id, min, max)
```
+ Tests entered values against the mins and maxs found in the URL query string


```javascript 
	var inputs = document.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
      (function(){
        var input = inputs[i];
        input.onclick = function(){ input.value = ''; };
      })();
    }
```
+ Clears input boxes when the user taps them

```javascript
var passed = true;
    passed = passed && checkFloat( 'fieldToCheck' , min_item  , max_item );
```
+ Sets passed variable to true; if checkFloat fails, returns False and makes passed variable False. If passed is false, accuracy check fails and the user must check their entries are correct.

### Ventilator Specific Code
#### Getting Entry Values
```javascript
var someName = document.getElementById('corresponding_HTML_ID').value;
```
#### Checking Acceptable Entries
```javascript
if (!isNaN(parseFloat(someName))) {
   passed = passed && checkFloat('corresponding_HTML_ID', min_someName, max_someName);
}
```

#### VentSubmitted item
```javascript
var submitted_id = ARIS.cache.idForItemName(SUBMITTED_NAME);
ARIS.setItemCount(submitted_id, 1);
```
```javascript
if (submitted_qty > 0)...
```
+ Sets the SugVentSubmitted ARIS item to 1. Default amount when starting the scenario is 0. Used when displaying entries in the "previous" column. Code for displaying entries if encapsulated by an if statement which only allows displaying item counts in the "previous" column when the VentSubmitted quanitity is greater than 0. This is to make sure the "previous" column is blank before the user submits Ventilator entries.

#### Saving Entry Values
```javascript
var someName_id = ARIS.cache.idForItemName('ARIS_item_name');
if (!isNaN(parseFloat(someName))) {
  ARIS.setItemCount(someName_id, someName);
} else {
  ARIS.setItemCount(someName_id, notAssessedValue);
}
```
+ the !NaN method is used here again to only save the entry if a number was entered. Otherwise set to notAssessedValue, which is set nearer to the beginning of the cusomization to 9999. The 9999 value is later used for displaying an empty string if the field was "not assessed"
+ Some entry fields need to allow for decimal values as acurate to the tenths place. In these places, entry values are multiplied by 10, to convert to an integer value, before being stored in an ARIS item


#### Displaying Entry Values
##### Numercial Entries
```javascript
var someName_id = ARIS.cache.idForItemName('ARIS_item_name'); 
var someName_qty = ARIS.cache.getPlayerItemCount(someName_id); 
var someNameOutput = document.getElementById("someNameOutput"); 
if (someName_qty == notAssessedValue) {
  someNameOutput.innerHTML = "";
} else {
  someNameOutput.innerHTML = someName_qty;
}
```
+ If entry was "not assessed" display an empty string. Otherwise display the item count
+ Some numerical entries require accuracy to the tenths place. Since only integer values can be save, these values are divided by 10 before being displayed on the plaque