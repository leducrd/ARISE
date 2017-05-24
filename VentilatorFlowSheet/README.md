# Ventilator Flow Sheet Customization

By: Ryan LeDuc
Created: 1/11/17
Updated: 03/28/17

Languages: JavaScript, HTML, CSS

Developed for the Act 4 Health Care ARISE project, for use in ARISE simulation scenarios involving the assessment of a patient on a ventilator.
  
Built upon the the code from the Custom Vitals, originally programmed by ARIS for the ARISE project found at: https://github.com/ARISGames/ARISE/blob/master/vitals.html
  
## Features
Allows ARISE simulation users to record patient and ventilator assessments, saves them, and allows them to be reviewed at a later point in time if they return Ventilator Flow Sheet within the same simulation.

## Ventilator FlowSheet Query String
	?&min_pulse=112&max_pulse=200&min_resp_rate=22&max_resp_rate=28&min_blood_top=140&max_blood_top=150&min_blood_bottom=92&max_blood_bottom=100&min_temp=32&max_temp=42&min_oxygen=87&max_oxygen=97&min_pain=0&max_pain=10&min_cuffPressure=0&max_cuffPressure=60&min_setRate=0&max_setRate=80&min_totalRate=0&max_totalRate=80&min_setVt=0&max_setVt=2000&min_expireVt=0&max_expireVt=2000&min_spontVt=0&max_spontVt=2000&min_exhaleVe=0&max_exhaleVe=50&min_psPc=0&max_psPc=40&min_o2Pcnt=0&max_o2Pcnt=100&min_setIpap=0&max_setIpap=50&min_setPeep=0&max_setPeep=40&min_totalPeep=0&max_totalPeep=40&min_Pip=0&max_Pip=80&min_plateau=0&max_plateau=80&min_map=0&max_map=80&min_clStatic=0&max_clStatic=150&min_clDynamic=0&max_clDynamic=150&min_raw=0&max_raw=50&min_peakFlow=0&max_peakFlow=200&min_inspTime=0&max_inspTime=5&min_ieRatioLeft=1&max_ieRatioLeft=3&min_ieRatioRight=1&max_ieRatioRight=15&message_success=Entries%20within%20acceptable%20ranges.&message_failure=Please%20recheck%20the%20accuracy%20of%20your%20numerical%20entries.&default_pulse=0&default_resp_rate=0&default_blood_top=0&default_blood_bottom=0&default_temp=0&default_oxygen=0&default_o2percent=0&default_LPM=0&default_pain=0&name=Patrick%20A.%20Armstrong&dob=11/16/20XX&mrNum=1116&allergy=NKDA&height=177.5&weight=109
    
Changing the numbers to the right of the equal sign will change the acceptable entry ranges for each of the numerical entries in the flow sheet. If an entry is outside of the acceptable min/max for an assessment, the user will be prompted to check the accuracy of their entires (but will not be told which entry is incorrect at this point in time) and entries will not be submitted or saved until the user has entred numbers with in the acceptable range.

## Ventilator Items and Variables
**Item Names in ARIS must match exactly, or values will not save**

Not all fields in flow sheet are checked for entry accuracy
#### Patient Info Includes
|Patient Information   | Query String     |
|----------------------|------------------|
|Patient Name          |name              |
|DOB                   |dob               |
|MR#                   |mrnum             |
|Allergies             |allergy           |
|Height(cm)            |height            |
|Admission Weight      |weight            |

#### Ventilator Submitted Tracker
This item tracks whether or not the user has submitted Ventilator Flow Sheet information at least once. Without this item, when the Ventilator Flow Sheet is first visited, the "Previous" column will be filled with 0's instead of being blank. Submitting entries to the Ventilator Flow Sheet once gives the user 1 of the VentSubmitted item, which allows displaying of item values.

|JS variable   | Item Name in ARIS|
|--------------|------------------|
|ventSubmitted |VentSubmitted     |

#### Patient Assessment Table
|Field in Plaque        | Item Name in ARIS|Query String                      |
|-----------------------|------------------|----------------------------------|
|Heart Rate             |Pulse             |min_pulse, max_pulse              |
|Respiratory Rate       |RespRate          |min_resp_rate, max_resp_rate      |
|BP Systolic            |BP Systolic       |min_blood_top, max_blood_top      |
|BP Diastolic           |BP Dystolic       |min_blood_bottom, max_blood_bottom|
|Temperature (°C)       |Temperature       |min_temp, max_temp                |
|O2 Saturation (%)      |Oxygen            |min_oxygen, max_oxygen            |
|Level of Consciousness |VentConscious     |N/A                               |
|Color                  |VentPtntColor     |N/A                               |
|Lung Sounds – RUL      |VentLungRUL       |N/A                               |
|Lung Sounds – RML      |VentLungRML       |N/A                               |
|Lung Sounds – RLL      |VentLungRLL       |N/A                               |
|Lung Sounds – LUL      |VentLungLUL       |N/A                               |
|Lung Sounds – LLL      |VentLungLLL       |N/A                               |

#### Airway Assessment Table
|Field in Plaque         | Item Name in ARIS|Query String                      |
|------------------------|------------------|----------------------------------|
|Airway/Mask Type        |VentMaskType      |N/A                               |
|Airway/Mask Size        |VentMaskSize      |N/A                               |
|ETT Location Number     |VentEttNum        |min_ettNum, max_ettNum            |
|ETT Location            |VentEttLoc        |N/A                               |
|ETT Relocated           |VentReloc         |N/A                               |
|Secure & Patent         |VentSecurePatent  |N/A                               |
|Cuff Pressure           |VentCuffPressure  |min_cuffPressure, max_cuffPressure|
|Oral Care Completed     |VentOralCare      |N/A                               |
|**Oral Secretions**     |N/A               |N/A                               |
|Amount                  |VentOralAmount    |N/A                               |
|Consistency             |VentOralConsist   |N/A                               |
|Color                   |VentOralColor     |N/A                               |
|**Tracheal Secretions** |N/A               |N/A                               |
|Amount                  |VentTrachAmount   |N/A                               |
|Consistency             |VentTrachConsist  |N/A                               |
|Color                   |VentTrachColor    |N/A                               |

#### Ventilator Bundle Table
|Field in Plaque          | Item Name in ARIS|Query String                      |
|-------------------------|------------------|----------------------------------|
|HOB > 30°                |VentHOB           |N/A                               |
|Daily Sedation Vacation  |VentSedVacation   |N/A                               |
|Assess Weaning Readiness |VentWeanReady     |N/A                               |
|PUD Prophylaxis          |VentPUD           |N/A                               |
|DVT Prophylaxis          |VentDVT           |N/A                               |

#### Ventilator Assessment Table
|Field in Plaque             | Item Name in ARIS|Query String                       |
|----------------------------|------------------|-----------------------------------|
|Vent/BiPAP                  |VentVentBipap     |N/A                                |
|Mode                        |VentMode          |N/A                                |
|Set Rate                    |VentSetRate       |min_setRate, max_setRate           |
|Total Rate                  |VentTotalRate     |min_totalRate, max_totalRate       |
|Set VT (ml)                 |VentSetVt         |min_setVt, max_setVt               |
|Expiratory VT (ml)          |VentExpireVt      |min_expireVt, max_expireVt         |
|Spontaneous VT (ml)         |VentSpontVt       |min_spontVt, max_spontVt           |
|Exhaled Ve (lpm)            |VentExhaleVe      |min_exhaleVe, max_exhaleVe         |
|Set PS or PC (cmH2O)        |VentPSPC          |min_psPc, max_psPc                 |
|O2 (%)                      |VentO2Pcnt        |min_o2Pcnt, max_o2Pcnt             |
|Set IPAP                    |VentSetIPAP       |min_setIpap, max_setIpap           |
|Set PEEP (cmH2O)            |VentSetPEEP       |min_setPeep, max_setPeep           |
|Total PEEP (cmH2O)          |VentTotalPEEP     |min_totalPeep, max_totalPeep       |
|PIP (cmH2O)                 |VentPIP           |min_Pip, max_Pip                   |
|Plateau (cmH2O)             |VentPlateau       |min_plateau, max_plateau           |
|MAP (cmH2O)                 |VentMAP           |min_map, max_map                   |
|CL-Static (ml/cmH2O)        |VentCLStatic      |min_clStatic, max_clStatic         |
|CL-Dynamic (ml/cmH2O)       |VentCLDynamic     |min_clDynamic, max_clDynamic       |
|Raw (cmH2O/L/sec)           |VentRaw           |min_raw, max_raw                   |
|Peak Flow (lpm)             |VentPeakFlow      |min_peakFlow, max_peakFlow         |
|Waveform                    |VentWave          |N/A                                |
|Inspiratory Time            |VentInspTime      |min_inspTime, max_inspTime         |
|**I:E Ratio (of set rate)** |N/A               |N/A                                |
|left Number                 |VentIERatioLeft   |min_ieRatioLeft, max_ieRatioLeft   |
|right Number                |VentIERatioRight  |min_ieRatioRight, max_ieRatioRight |
|Sensitivity                 |VentSense         |N/A                                |
|All Alarms On & Set         |VentAlarms        |N/A                                |
|Bag/Mask at bedside         |VentBedside       |N/A                                |

#### Change Inventory Maximums

The default setting for "Max Quantity in Inventory" for items in ARIS is 500. For all of the numerical field inputs, we use the number 9999 as an indication that the user has left a field blank, indicating that that item was not assessed. Quantities for items relating to the ventilator should be raised to 9999 to accomidate this number. At MINIMUM, the following items REQUIRE an inventory max of 9999:
+ Pulse
+ RespRate
+ BP Systolic
+ BP Dystolic
+ Temperature
+ Oxygen
+ VentCLDynamic
+ VentCLStatic
+ VentCuffPressure
+ VentEttNum
+ VentExhaleVe
+ VentExpireVt
+ VentIERatioLeft
+ VentIERatioRight
+ VentInspTime
+ VentMAP
+ VentO2Pcnt
+ VentPeakFlow
+ VentPIP
+ VentPlateau
+ VentPSPC
+ VentSetIPAP
+ VentSetPEEP
+ VentSetRate
+ VentSetVt
+ VentSpontVt
+ VentRaw
+ VentTotalPEEP
+ VentTotalRate

## Ventilator Code Overview

### Original ARIS Code
```javascript
function lookupGET(val)
```

+ Parses the query string for mins and maxs that creates the acceptable range of values to be entered in numerical fields. By using a query string instead of hard coding, we can use one single page across all scenarios

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
	var locks = 2;
    function unlock() {
      locks--;
      if (locks == 0) appReady();
    }
```
+ Prevents the page from loading until for ARIS and the DOM are ready. If called in the ARIS.ready API function

```javascript
function appReady()
```
+ Executes the range checking and value saving. Called within the unlock()

```javascript
var passed = true;
    passed = passed && checkFloat( 'fieldToCheck' , min_item  , max_item );
```
+ Sets passed variable to true; if checkFloat fails, returns False and makes passed variable False. If passed is false, accuracy check fails and the user must check their entries are correct.

### Ventilator Specific Code
#### Getting Entry Values
##### Numerical Fields
```javascript
var someName = document.getElementById('corresponding_HTML_ID').value;
```
##### Drop Down Fields
```javascript
var someName = document.getElementById('corresponding_HTML_ID');
var someNameValue = someName.options[someName.selectedIndex].value;
```
##### Checkboxes
```javascript
var someName = document.getElementById('corresponding_HTML_ID');
```
#### Checking Acceptable Entries
```javascript
if (!isNaN(parseFloat(someName))) {
   passed = passed && checkFloat('corresponding_HTML_ID', min_someName, max_someName);
}
```
+ Not all entries are checked for validity (for instance, checkboxes and dropdown menus). In order to let users leave fields "not assessed", validity of numerical entries is only checked if the value of the entry is a number. 

#### VentSubmitted item
```javascript
var ventSubmitted_id = ARIS.cache.idForItemName('VentSubmitted');
        ARIS.setItemCount(ventSubmitted_id, 1);
```
```javascript
if (ventSubmitted_qty > 0)...
```
+ Sets the VentSubmitted ARIS item to 1. Default amount when starting the scenario is 0. Used when displaying entries in the "previous" column. Code for displaying entries if encapsulated by an if statement which only allows displaying item counts in the "previous" column when the VentSubmitted quanitity is greater than 0. This is to make sure the "previous" column is blank before the user submits Ventilator entries.

#### Saving Entry Values
##### Numerical Entries
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

##### Dropdown entries
```javascript
var conscious_id = ARIS.cache.idForItemName('VentConscious');
if (consciousValue == "null") {
  ARIS.setItemCount(conscious_id, 0);
} else if (consciousValue == "alert") {
  ARIS.setItemCount(conscious_id, 1);
} else if (consciousValue == "confused") {
  ARIS.setItemCount(conscious_id, 2);
}
```
+ Each option in every drop down menu is assigned an integer value that is associated with the string value.

##### Checkbox entries
+ These work like the Dropdown entries, with item count of 1 for checked and 0 for unchecked.

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

##### Dropdown Entries
```javascript
var someName_id = ARIS.cache.idForItemName('ARIS_item_name');
var someName_qty = ARIS.cache.getPlayerItemCount(someName_id);
var someNameOutput = document.getElementById("someNameOutput");
if (someName_qty == 0) {
   someNameOutput.innerHTML = "";
 } else if (someName_qty == 1) {
   someNameOutput.innerHTML = "Clear";
 } else if (someName_qty == 2) {
   someNameOutput.innerHTML = "Diminished";
 } else if (someName_qty == 3) {
   someNameOutput.innerHTML = "Crackles";
 }
```

##### Checkboxes
+ Work like the dropdown menus, with 1 displaying a &check;, and 0 displaying an empty string

#### Special Case: Cuff Pressure Field
+ The Cuff Pressure field allows for either a drop down string selection or the ability to enter a numerical range. 

```javascript
function displayCuffPressureRange(value) {
  if (value == "range") {
    tbxCuffRange.style.display = "block";
  } else {
    tbxCuffRange.style.display = "none";
  }
}
```
+ Function dynamically changes the entry type of the Cuff Pressure field if "range" is selected from the drop down menu

```javascript
if (cuffPressureValue == "range") {
  if (!isNaN(parseFloat(cuffRangeValue))) {
    passed = passed && checkFloat('tbxCuffRange', min_cuffPressure , max_cuffPressure);
  }
}
```
+ Cuff Pressure is checked for accuracy if "range" options is selected

```javascript
var cuffPressure_id = ARIS.cache.idForItemName('VentCuffPressure');
if (cuffPressureValue == "null") {
  ARIS.setItemCount(cuffPressure_id, 102);
} else if (cuffPressureValue == "minimalLeak") {
  ARIS.setItemCount(cuffPressure_id, 100);
} else if (cuffPressureValue == "minimalOccluding") {
  ARIS.setItemCount(cuffPressure_id, 101);
} else if (cuffPressureValue == "range") {
  if (isNaN(parseFloat(cuffRangeValue))) {
    ARIS.setItemCount(cuffPressure_id, notAssessedValue);
  } else {
    cuffRangeValue *= 10;
    ARIS.setItemCount(cuffPressure_id, cuffRangeValue);
  }          
}
```
+ Cuff Pressure saves values either the drop down menu way, or the numerical entry way depending on which option is selected.
+ Cuff pressure is one of the fields that allows for precision to the tenths place, to entries are multiplied by 10 before being save in ARIS; divided by 10 before being dispalyed on the plaque