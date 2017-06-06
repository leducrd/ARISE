# Drag and Drop Customization

By: Ryan LeDuc
Created: 06/06/2017
Updated: 06/06/2017

Languages: HTML, CSS, JavaScript

Developed for the Act 4 Health Care ARISE project, for use in ARISE scenarios, to simulate a drag and drop matching functionality. 

## Features
---
Allows creation of multiple draggable objects and drop locations by creating multiple HTML elements with specific classes. The Javascript collects the draggable objects and drop locations into node lists and loops through and compares them when evaluating conditions.

## Identifying draggable objects and drop locations
---
### Creating touch objects
+ Give all touch objects a class of **_touchObject_**
+ All touch objects must have a position of **_absolute_**
+ All touch objects must have a **_top, left, height and width_**

### Creating drop locations
+ Give all touch objects a class of **_dropLoc_**
+ All touch objects must have a position of **_absolute_**
+ All touch objects must have a **_top, left, height and width_**