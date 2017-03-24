  function lookupGET(val) {
      var result = null,
          tmp = [];
      var items = location.search.substr(1).split("&");
      for (var index = 0; index < items.length; index++) {
          tmp = items[index].split("=");
          if (tmp[0] === val) result = decodeURIComponent(tmp[1]);
      }
      return result;
  }

  /* parameters that should be changed */

  var item_id_to_give = parseInt( lookupGET('item_id') ) || 0;

  var min_pulse = parseFloat( lookupGET('min_pulse') ) || 0;
  var max_pulse = parseFloat( lookupGET('max_pulse') ) || 0;

  var min_resp_rate = parseFloat( lookupGET('min_resp_rate') ) || 0;
  var max_resp_rate = parseFloat( lookupGET('max_resp_rate') ) || 0;

  var min_blood_top = parseFloat( lookupGET('min_blood_top') ) || 0;
  var max_blood_top = parseFloat( lookupGET('max_blood_top') ) || 0;

  var min_blood_bottom = parseFloat( lookupGET('min_blood_bottom') ) || 0;
  var max_blood_bottom = parseFloat( lookupGET('max_blood_bottom') ) || 0;

  var min_temp = parseFloat( lookupGET('min_temp') ) || 0;
  var max_temp = parseFloat( lookupGET('max_temp') ) || 0;

  var min_oxygen = parseFloat( lookupGET('min_oxygen') ) || 0;
  var max_oxygen = parseFloat( lookupGET('max_oxygen') ) || 0;

  var min_o2percent = parseFloat( lookupGET('min_o2percent') ) || 0;
  var max_o2percent = parseFloat( lookupGET('max_o2percent') ) || 0;

  var min_LPM = parseFloat( lookupGET('min_LPM') ) || 0;
  var max_LPM = parseFloat( lookupGET('max_LPM') ) || 0;

  var min_pain = parseFloat( lookupGET('min_pain') ) || 0;
  var max_pain = parseFloat( lookupGET('max_pain') ) || 0;

  var message_success = lookupGET('message_success') || 'Success!';
  var message_failure = lookupGET('message_failure') || 'Try again.';

  var patient_name = lookupGET('name') || '????';
  var patient_dob = lookupGET('dob') || '????'
  var patient_mr = lookupGET('mrNum') || '????';
  var patient_allergy = lookupGET('allergy') || '????';
  var patient_weight = lookupGET('weight') || '????';
  var patient_height = lookupGET('height') || '????';

  var default_pulse        = parseFloat( lookupGET('default_pulse'       ) ) || 0;
  var default_resp_rate    = parseFloat( lookupGET('default_resp_rate'   ) ) || 0;
  var default_blood_top    = parseFloat( lookupGET('default_blood_top'   ) ) || 0;
  var default_blood_bottom = parseFloat( lookupGET('default_blood_bottom') ) || 0;
  var default_temp         = parseFloat( lookupGET('default_temp'        ) ) || 0;
  var default_oxygen       = parseFloat( lookupGET('default_oxygen'      ) ) || 0;
  var default_o2percent    = parseFloat( lookupGET('default_o2percent'   ) ) || 0;
  var default_LPM          = parseFloat( lookupGET('default_LPM'         ) ) || 0;
  var default_pain         = parseFloat( lookupGET('default_pain'        ) ) || 0;

  /* end of parameters ------ */

  var ARIS = {};

  function checkFloat(id, min, max) {
    var response = parseFloat( document.getElementById(id).value );
    return min <= response && response <= max;
  }

  function appReady() {

    FastClick.attach(document.body);
    document.getElementById('ptntNameOutput').innerHTML = patient_name;
    document.getElementById('ptntDOBOutput').innerHTML = patient_dob;
    document.getElementById('ptntMROutput').innerHTML = patient_mr;
    document.getElementById('ptntAllergyOutput').innerHTML = patient_allergy;
    document.getElementById('ptntHeightOutput').innerHTML = patient_height;
    document.getElementById('ptntWeightOutput').innerHTML = patient_weight;
    var inputs = document.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
      (function(){
        var input = inputs[i];
        input.onclick = function(){ input.value = ''; };
      })();
    }

    document.getElementById('field-pulse'                ).value = default_pulse       ;
    document.getElementById('field-respiratory-rate'     ).value = default_resp_rate   ;
    document.getElementById('field-blood-pressure-top'   ).value = default_blood_top   ;
    document.getElementById('field-blood-pressure-bottom').value = default_blood_bottom;
    document.getElementById('field-temperature'          ).value = default_temp        ;
    document.getElementById('field-oxygen'               ).value = default_oxygen      ;
    document.getElementById('field-fio2'                 ).value = default_o2percent   ;
    document.getElementById('field-lpm'                  ).value = default_LPM         ;
    document.getElementById('field-pain'                 ).value = default_pain        ;
    document.getElementById('button-submit').onclick = function(){


      var passed = true;
      passed = passed && checkFloat('field-pulse'                , min_pulse       , max_pulse       );
      passed = passed && checkFloat('field-respiratory-rate'     , min_resp_rate   , max_resp_rate   );
      passed = passed && checkFloat('field-blood-pressure-top'   , min_blood_top   , max_blood_top   );
      passed = passed && checkFloat('field-blood-pressure-bottom', min_blood_bottom, max_blood_bottom);
      passed = passed && checkFloat('field-temperature'          , min_temp        , max_temp        );
      passed = passed && checkFloat('field-oxygen'               , min_oxygen      , max_oxygen      );
      passed = passed && checkFloat('field-pain'                 , min_pain        , max_pain        );
      
      if (document.getElementById("radO2app").checked) { 
        passed = passed && checkFloat('field-fio2'                 , min_o2percent   , max_o2percent   );
        passed = passed && checkFloat('field-lpm'                  , min_LPM         , max_LPM         );
      }
      
      /* Ryan's Code for Saving Player Input */

      var pulse = document.getElementById('field-pulse').value; // grabs value for specified field
      var respRate = document.getElementById('field-respiratory-rate').value;
      var bpTop = document.getElementById('field-blood-pressure-top').value;
      var bpBottom = document.getElementById('field-blood-pressure-bottom').value;
      var temp = document.getElementById('field-temperature').value;
      var pain = document.getElementById('field-pain').value;
      var oxygen = document.getElementById('field-oxygen').value;
      var oxygenFio2 = document.getElementById('field-fio2').value;
      var oxygenLPM = document.getElementById('field-lpm').value;

      // SAVE VITALS VALUES CODE: tells ARIS to set item quantities equal to field amounts, place code OUTSIDE "if (passed)" statement, ONLY IF inputing correct vitals should not affect simulaton programming

      /* end Ryan's Code */

      if (passed) {
        ARIS.setItemCount(item_id_to_give, 1);

        // SAVE VITALS CODE
        // SAVE VITALS VALUES CODE: tells ARIS to set item quantities equal to field amounts, place code within "if (passed)" statement, ONLY IF inputing correct vitals is essential to simulation programming
        var pulse_id = ARIS.cache.idForItemName('Pulse');
        ARIS.setItemCount(pulse_id, pulse);
        
        var respRate_id = ARIS.cache.idForItemName('RespRate');
        ARIS.setItemCount(respRate_id, respRate);
        
        var bpTop_id = ARIS.cache.idForItemName('BP Systolic');
        ARIS.setItemCount(bpTop_id, bpTop);
        
        var bpBottom_id = ARIS.cache.idForItemName('BP Dystolic');
        ARIS.setItemCount(bpBottom_id, bpBottom);
        
        var temp_id = ARIS.cache.idForItemName('Temperature');
        ARIS.setItemCount(temp_id, temp * 10);
        
        var o2_id = ARIS.cache.idForItemName('Oxygen');
        ARIS.setItemCount(o2_id, oxygen);
        
        var pain_id = ARIS.cache.idForItemName('Pain');
        ARIS.setItemCount(pain_id, pain);
        
        // Assigning variables to the coresponding ARIS objects
        var roomAir_id = ARIS.cache.idForItemName('Room Air');
        var o2_app_id = ARIS.cache.idForItemName('O2Applied');
        var NC_id = ARIS.cache.idForItemName('NC');
        var simpleMask_id = ARIS.cache.idForItemName('Simple Mask');
        var ventiMask_id = ARIS.cache.idForItemName('Venti Mask');
        var NRB_id = ARIS.cache.idForItemName('NRB');
        var biPap_id = ARIS.cache.idForItemName('BiPap');
        var ventilator_id = ARIS.cache.idForItemName('Ventilator');
        var lpm_id = ARIS.cache.idForItemName('OxygenLPM');
        var fio2_id = ARIS.cache.idForItemName('OxygenFIO2');
        
        // Since an patient can only be on one type of mask at a time, we must make sure that only the selected mask's item quantity is set to 1
        if (document.getElementById("radO2app").checked) {
          ARIS.setItemCount(roomAir_id, 0);
          ARIS.setItemCount(o2_app_id, 1);
          ARIS.setItemCount(lpm_id, oxygenLPM);
          ARIS.setItemCount(fio2_id, oxygenFio2);
          if (document.getElementById("radNC").checked) {
            ARIS.setItemCount(NC_id, 1);
            ARIS.setItemCount(simpleMask_id, 0);
            ARIS.setItemCount(ventiMask_id, 0);
            ARIS.setItemCount(NRB_id, 0);
            ARIS.setItemCount(biPap_id, 0);
            ARIS.setItemCount(ventilator_id, 0);
          } else if (document.getElementById("radSimpleMask").checked) {
            ARIS.setItemCount(NC_id, 0);
            ARIS.setItemCount(simpleMask_id, 1);
            ARIS.setItemCount(ventiMask_id, 0);
            ARIS.setItemCount(NRB_id, 0);
            ARIS.setItemCount(biPap_id, 0);
            ARIS.setItemCount(ventilator_id, 0);
          } else if (document.getElementById("radVentiMask").checked) {
            ARIS.setItemCount(NC_id, 0);
            ARIS.setItemCount(simpleMask_id, 0);
            ARIS.setItemCount(ventiMask_id, 1);
            ARIS.setItemCount(NRB_id, 0);
            ARIS.setItemCount(biPap_id, 0);
            ARIS.setItemCount(ventilator_id, 0);
          } else if (document.getElementById("radNRB").checked) {
            ARIS.setItemCount(NC_id, 0);
            ARIS.setItemCount(simpleMask_id, 0);
            ARIS.setItemCount(ventiMask_id, 0);
            ARIS.setItemCount(NRB_id, 1);
            ARIS.setItemCount(biPap_id, 0);
            ARIS.setItemCount(ventilator_id, 0);
          } else if (document.getElementById("radBiPap").checked) {
            ARIS.setItemCount(NC_id, 0);
            ARIS.setItemCount(simpleMask_id, 0);
            ARIS.setItemCount(ventiMask_id, 0);
            ARIS.setItemCount(NRB_id, 0);
            ARIS.setItemCount(biPap_id, 1);
            ARIS.setItemCount(ventilator_id, 0);
          } else if (document.getElementById("radVentilator").checked) {
            ARIS.setItemCount(NC_id, 0);
            ARIS.setItemCount(simpleMask_id, 0);
            ARIS.setItemCount(ventiMask_id, 0);
            ARIS.setItemCount(NRB_id, 0);
            ARIS.setItemCount(biPap_id, 0);
            ARIS.setItemCount(ventilator_id, 1);
          }
          
        } else {
          ARIS.setItemCount(roomAir_id, 1);
          ARIS.setItemCount(o2_app_id, 0);
          ARIS.setItemCount(NC_id, 0);
          ARIS.setItemCount(simpleMask_id, 0);
          ARIS.setItemCount(ventiMask_id, 0);
          ARIS.setItemCount(NRB_id, 0);
          ARIS.setItemCount(biPap_id, 0);
          ARIS.setItemCount(ventilator_id, 0);
        }
        // End SAVE VITALS CODE

        document.getElementById('feedback').innerHTML = message_success;
        setTimeout(function(){
          ARIS.exit();
        }, 1500);
      } else {
        document.getElementById('feedback').innerHTML = message_failure;
        setTimeout(function(){
          if (document.getElementById('feedback').innerHTML === message_failure) {
            document.getElementById('feedback').innerHTML = '';
          }
        }, 1500);
      }
    };
  }

  // hack to wait for both aris and the dom
  var locks = 2;
  function unlock() {
    locks--;
    if (locks == 0) appReady();
  }

  //ARIS.ready = unlock;

  ARIS.ready = function() {

    unlock();
    
    // get current vital levels and display them
    
    var pulse_id = ARIS.cache.idForItemName('Pulse'); // get id of player attribute or item
    var pulse_qty = ARIS.cache.getPlayerItemCount(pulse_id); // get quantity of said item
    var pulseOutput = document.getElementById("pulseOutput"); // attach to HTML element
    pulseOutput.innerHTML = pulse_qty; // output to HTML element

    var respRate_id = ARIS.cache.idForItemName('RespRate');
    var respRate_qty = ARIS.cache.getPlayerItemCount(respRate_id); 
    var respRateOutput = document.getElementById("respRateOutput");
    respRateOutput.innerHTML = respRate_qty;

    var bpTop_id = ARIS.cache.idForItemName('BP Systolic');
    var bpTop_qty = ARIS.cache.getPlayerItemCount(bpTop_id);
    var bpTopOutput = document.getElementById("bpTopOutput");
    bpTopOutput.innerHTML = bpTop_qty;

    var bpBottom_id = ARIS.cache.idForItemName('BP Dystolic');
    var bpBottom_qty = ARIS.cache.getPlayerItemCount(bpBottom_id);
    var bpBottomOutput = document.getElementById("bpBottomOutput");
    bpBottomOutput.innerHTML = bpBottom_qty;

    var temp_id = ARIS.cache.idForItemName('Temperature');
    var temp_qty = ARIS.cache.getPlayerItemCount(temp_id);
    var tempOutput = document.getElementById("tempOutput");
    tempOutput.innerHTML = temp_qty / 10;
    
    var o2_id = ARIS.cache.idForItemName('Oxygen');
    var o2_qty = ARIS.cache.getPlayerItemCount(o2_id);
    var o2Output = document.getElementById("o2OutPut");
    o2Output.innerHTML = o2_qty;

    var pain_id = ARIS.cache.idForItemName('Pain');
    var pain_qty = ARIS.cache.getPlayerItemCount(pain_id);
    var painOutput = document.getElementById("painOutput");
    painOutput.innerHTML = pain_qty;
    
    var fio2_id = ARIS.cache.idForItemName('OxygenFIO2');
    var fio2_qty = ARIS.cache.getPlayerItemCount(fio2_id);
    var fio2Output = document.getElementById("fio2Output");
    fio2Output.innerHTML = fio2_qty;
    
    var lpm_id = ARIS.cache.idForItemName('OxygenLPM');
    var lpm_qty = ARIS.cache.getPlayerItemCount(lpm_id);
    var lpmOutput = document.getElementById("lpmOutput");
    lpmOutput.innerHTML = lpm_qty;
    
    // pre-select oxygen options that student previously entered
    var roomAir_id = ARIS.cache.idForItemName('Room Air');
    var roomAir_qty = ARIS.cache.getPlayerItemCount(roomAir_id);
    
    var o2_app_id = ARIS.cache.idForItemName('O2Applied');
    var o2_app_qty = ARIS.cache.getPlayerItemCount(o2_app_id);
    
    var NC_id = ARIS.cache.idForItemName('NC');
    var NC_qty = ARIS.cache.getPlayerItemCount(NC_id);
    
    var simpleMask_id = ARIS.cache.idForItemName('Simple Mask');
    var simpleMask_qty = ARIS.cache.getPlayerItemCount(simpleMask_id);
    
    var ventiMask_id = ARIS.cache.idForItemName('Venti Mask');
    var ventiMask_qty = ARIS.cache.getPlayerItemCount(ventiMask_id);
    
    var NRB_id = ARIS.cache.idForItemName('NRB');
    var NRB_qty = ARIS.cache.getPlayerItemCount(NRB_id);
    
    var biPap_id = ARIS.cache.idForItemName('BiPap');
    var biPap_qty = ARIS.cache.getPlayerItemCount(biPap_id);
    
    var ventilator_id = ARIS.cache.idForItemName('Ventilator');
    var ventilator_qty = ARIS.cache.getPlayerItemCount(ventilator_id);
    
    // Preselect oxygen options on load, if O2 applied was entered previously
    if (o2_app_qty > 0) {
      document.getElementById("radO2app").checked = true;
      document.getElementById("o2Options").style.display = "table-row";
      document.getElementById("lpmOption").style.display = "table-row";
      if (NC_qty > 0) {
        document.getElementById("radNC").checked = true;
      } else if (simpleMask_qty > 0) {
        document.getElementById("radSimpleMask").checked = true;
      } else if (ventiMask_qty > 0) {
        document.getElementById("radVentiMask").checked = true;
      } else if (NRB_qty > 0) {
        document.getElementById("radNRB").checked = true;
      } else if (biPap_qty > 0) {
        document.getElementById("radBiPap").checked = true;
      } else if (ventilator_qty > 0) {
        document.getElementById("radVentilator").checked = true;
      }
    } else if (roomAir_qty > 0)  {
      document.getElementById("roomAir").checked = true;
    }
    
    // end Ryan's code

  }

  // for displaying and hiding the extra oxygen options
    var radioRoomAir = document.getElementById("roomAir");
    var radioO2Applied = document.getElementById("radO2app");
    radioO2Applied.addEventListener("click", handleO2RadioSelect, false);
    radioRoomAir.addEventListener("click", handleRoomAirSelect, false);
    
    function handleO2RadioSelect() {
      document.getElementById("o2Options").style.display = "table-row";
      document.getElementById("lpmOption").style.display = "table-row";
    }
    
    function handleRoomAirSelect() {
      document.getElementById("o2Options").style.display = "none";
      document.getElementById("lpmOption").style.display = "none";
    }
    
    
  document.addEventListener('DOMContentLoaded', unlock);
  

  // for debugging
  // ARIS.givePlayerItemCount = ARIS.exit = function(){};
  // ARIS.ready();