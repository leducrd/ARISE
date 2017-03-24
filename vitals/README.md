# Custom Vitals Entry Form Documentation 
for ACT4HealthCare Vitals Simulations

This version of the custom vitals has been improved and expanded from the custom vitals page originally programmed by Michael Tolly of ARIS Games. The original vitals customization can be found at:  https://github.com/ARISGames/ARISE/blob/master/vitals.html

## Author
Ryan LeDuc - ARISE Programming Intern
Created: 08/11/2016
Updated: 03/24/2017

## What is the Vitals Entry Form?
The vitals entry form simulates an electronic program that allows a student to enter a patients vital signs. Students are able to enter vital values, and select the type of oxygen a patient is on. Includes optional validation procedures that notifies student if the vital signs they entered are outside of the acceptable range for the simualtion.

## Patient Info Include
Small table at the top of the Vitals Entry form page. Includes basic patient information. Fields are populated using span tags in the HTML and variables in the URL query string.

### Vitals Objects Naming Standards
In order to save previous vital entries across an entire game session, we need to set the vitals entered by a player as a quantity of those items as an object. For widest use across simulations, the following naming conventions should be used for each Vital item in each program (Case matters!):

| Vital             |Object Name in ARIS|Var name in JS| HTML Input Type|
|-------------------|-------------------|--------------|----------------|
|Pulse              |Pulse              |pulse         |number field    |
|Resp. Rate (/min)  |RespRate           |respRate      |number field    |
|BP Systolic (mmHg) |BP Systolic        |bpTop         |number field    |
|BP Diastolic (mmHg)|BP Dystolic        |bpBottom      |number field    |
|Temperature(°C)    |Temperature        |temp          |radio button    |
|R/A                |Room Air           |roomAir       |radio button    |
|O² Applied         |O2Applied          |o2_app        |radio button    |
|NC                 |NC                 |NC            |radio button    |
|Simple Mask        |Simple Mask        |simpleMask    |radio button    |
|Venti Mask         |Venti Mask         |ventiMask     |radio button    |
|NRB                |NRB                |NRB           |radio button    |
|BiPap              |BiPap              |biPap         |radio button    |
|Ventilator         |Ventilator         |ventilator    |radio button    |
|%FiO²              |OxygenFIO2         |oxygenFio2    |number field    |
|L/Min              |OxygenLPM          |oxygenLPM     |number field    |
|Pain (1-10)        |Pain               |pain          |number field    |



### Grabbing entered values from fields and saving them
This procedure uses the values entered in the number fields, and stores them as item quantities. For instance, from the programming side, a player has X number of "pulse" items, but the front end "pulse" quantity is displayed as the pulse of the simulated patient.

Convention for grabbing values entered in a form field:

    var JS_variable_Name = document.getElementById('form_field_id').value;

- **JS_variable_name**: variable name that reflects what vital it's supposed to represent
- **form_field_id**: id of the HTML form field that you need the entered value from
- must use **.value** or javascript will try and grab the entire HTML element instead of just the entered number.
- >##### Example code:
    > var pulse = document.getElementById('field-pulse').value;

Saving vital values

    var yourVital_id = ARIS.cache.idForItemName('ARIS_Vital_Name');  
    ARIS.setItemCount(yourVital_id, JS_variable_name);

- line 1 tells ARIS to return the object id# based on the in game name of the object
- line 2 tells ARIS to set the object's quantity based on the variable
- **yourVital_id**: variable name that reflects the corresponding vital
- **ARIS_Vital_Name**: The vitals object name in the ARIS program
- **JS_variable_name**: variable name from step one
-   Example code: 
    > var pulse_id = ARIS.cache.idForItemName('Pulse');  
    > ARIS.setItemCount(pulse_id, pulse);
                
### Displaying Previously entered vitals

Convention for displaying vital values:

    var yourVital_id = ARIS.cache.idForItemName('ARIS_Vital_Name');  
    var yourVital_qty = ARIS.cache.getPlayerItemCount(yourVital_id);   
    var yourVitalOutput = document.getElementById("yourVitalOutput");  
    yourVitalOutput.innerHTML = yourVital_qty;  
    <span id="yourVitalOutput"></span>
- line 1 tells ARIS to return the object id# based on the in game name of the object
- line 2 tells ARIS to set the object’s quantity based on the variable
- line 3 sets a variable for the HTML output element
- line 4 sets the value of the HTML output element equal to the vital quantity
- **yourVital_id**: variable name that reflects the corresponding vital
- **yourVital_qty**: variable name that reflects the corresponding vital quantity
- **ARIS_Vital_Name**: The vitals object name in the ARIS program
- **yourVitalOutput**: variable and ID for the vital output field
- Example Code:
    > var respRate_id = ARIS.cache.idForItemName('RespRate');  
    > var resRate_qty = ARIS.cache.getPlayerItemCount(respRate_id);   
    > var respRateOutput = document.getElementById("respRateOutput");  
    > `<span id="respRateOutput"></span>  `

### Oxygen Vital and Radio Button Funcationality
The Oxygen vital contains two groups of radio buttons. 

The first group is always visible, and consists of the R/A (Room Air) and O² Applied options. Selecting R/A sets the Room Air ARIS object quantity to 1. Selecting O² Applied sets the O2Applied ARIS object quantity to 1, as well as revealing extra options for the student to select what mask and the ability enter %FIO2 and L/Min.

The second group of radio buttons are the types of masks a patient might be on. Only applicable if a patient is on applied oxygen. Selecting any mask sets the coressponding ARIS object quantity to 1, and resets all of the other mask's ARIS object quantities to 0.

####Handlers for live displaying of Oxygen Options
>handleO2RadioSelect()
>handleRoomAirSelect()

When O2 Applied radio button is selected, the extra O2 options are displayed using the "handleO2RadioSelect" function. When the Room Air radio button is selected, the extra O2 options are hidden using the "handleRoomAirSelect" function

### URL Query String

>?item_id=75052&min_pulse=110&max_pulse=120&min_resp_rate=21&max_resp_rate=
>29&min_blood_top=140&max_blood_top=150&min_blood_bottom=90&max_blood_
>bottom=100&min_temp=37&max_temp=38&min_oxygen=90&max_oxygen=92&min_pain=0
>&max_pain=10&message_success=Vitals%20entered.&message_failure=Please%20recheck
>%20the%20accuracy%20of%20your%20vital%20signs.&default_pulse=0
>&default_resp_rate=0&default_blood_top=0&default_blood_bottom=0&default_temp=0
>&name=Patrick%20A.%20Armstrong&dob=11/16/20XX&mrNum=1116&allergy=NKDA
>&height=177.5&weight=109

####Variables for vitals accuracy checks
item_id=75052 - ID# of an ARIS object
min_pulse=110 - minimum acceptable pulse entry
max_pulse=120– maximum acceptable pulse entry
min_resp_rate=21- minimum acceptable respiratory rate entry
max_resp_rate=29- maximum acceptable respiratory rate entry
min_blood_top=140- minimum acceptable BP Systolic entry
max_blood_top=150- maximum acceptable BP Systolic entry
min_blood_bottom=90- minimum acceptable BP Diastolic entry
max_blood_bottom=100- maximum acceptable BP Diastolic entry
min_temp=37- minimum acceptable Temperature entry
max_temp=38- maximum acceptable Temperature entry
min_oxygen=90- minimum acceptable O2 entry
max_oxygen=92- maximum acceptable O2 entry
min_pain=0- minimum acceptable Pain entry
max_pain=10- maximum acceptable Pain entry
message_success=Vitals%20entered. – Success Message
message_failure=Please%20recheck%20the%20accuracy%20of%20your%20vital%20signs. – Failure Message
default_pulse=0 – Default pulse
default_resp_rate=0 – Default Respiratory Rate
default_blood_top=0 – Default BP Systolic
default_blood_bottom=0 – Default BP Diastolic
default_temp=0 – Default Temperature
default_oxygen=0 – Default O2
default_pain=0 – Default Pain
#### Variables for Patient Info Include
name=Carl%20D.%20Fullerton – Patient’s Name
dob=02/26/19xx – Patient’s Date of Birth
mrNum=1116 - Patient MR#
allergy=NKDA - Patient Allergy Info
height=177.5 - Patient Height in centimeters
weight=109 - Patient Weight in kilograms
physician=LeDuc – Physician’s Name