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

/* URL Query String parameters that should be changed */

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

var min_cuffPressure = parseFloat( lookupGET('min_cuffPressure') ) || 0;
var max_cuffPressure = parseFloat( lookupGET('max_cuffPressure') ) || 0;

var min_setRate = parseFloat( lookupGET('min_setRate') ) || 0;
var max_setRate = parseFloat( lookupGET('max_setRate') ) || 0;

var min_totalRate = parseFloat( lookupGET('min_totalRate') ) || 0;
var max_totalRate = parseFloat( lookupGET('max_totalRate') ) || 0;

var min_setVt = parseFloat( lookupGET('min_setVt') ) || 0;
var max_setVt = parseFloat( lookupGET('max_setVt') ) || 0;

var min_expireVt = parseFloat( lookupGET('min_expireVt') ) || 0;
var max_expireVt = parseFloat( lookupGET('max_expireVt') ) || 0;

var min_spontVt = parseFloat( lookupGET('min_spontVt') ) || 0;
var max_spontVt = parseFloat( lookupGET('max_spontVt') ) || 0;

var min_exhaleVe = parseFloat( lookupGET('min_exhaleVe') ) || 0;
var max_exhaleVe = parseFloat( lookupGET('max_exhaleVe') ) || 0;

var min_psPc = parseFloat( lookupGET('min_psPc') ) || 0;
var max_psPc = parseFloat( lookupGET('max_psPc') ) || 0;

var min_o2Pcnt = parseFloat( lookupGET('min_o2Pcnt') ) || 0;
var max_o2Pcnt = parseFloat( lookupGET('max_o2Pcnt') ) || 0;

var min_setIpap = parseFloat( lookupGET('min_setIpap') ) || 0;
var max_setIpap = parseFloat( lookupGET('max_setIpap') ) || 0;

var min_setPeep = parseFloat( lookupGET('min_setPeep') ) || 0;
var max_setPeep = parseFloat( lookupGET('max_setPeep') ) || 0;

var min_totalPeep = parseFloat( lookupGET('min_totalPeep') ) || 0;
var max_totalPeep = parseFloat( lookupGET('max_totalPeep') ) || 0;

var min_Pip = parseFloat( lookupGET('min_Pip') ) || 0;
var max_Pip = parseFloat( lookupGET('max_Pip') ) || 0;

var min_plateau = parseFloat( lookupGET('min_plateau') ) || 0;
var max_plateau = parseFloat( lookupGET('max_plateau') ) || 0;

var min_map = parseFloat( lookupGET('min_map') ) || 0;
var max_map = parseFloat( lookupGET('max_map') ) || 0;

var min_clStatic = parseFloat( lookupGET('min_clStatic') ) || 0;
var max_clStatic = parseFloat( lookupGET('max_clStatic') ) || 0;

var min_clDynamic = parseFloat( lookupGET('min_clDynamic') ) || 0;
var max_clDynamic = parseFloat( lookupGET('max_clDynamic') ) || 0;

var min_raw = parseFloat( lookupGET('min_raw') ) || 0;
var max_raw = parseFloat( lookupGET('max_raw') ) || 0;

var min_peakFlow = parseFloat( lookupGET('min_peakFlow') ) || 0;
var max_peakFlow = parseFloat( lookupGET('max_peakFlow') ) || 0;

var min_inspTime = parseFloat( lookupGET('min_inspTime') ) || 0;
var max_inspTime = parseFloat( lookupGET('max_inspTime') ) || 0;

var min_ieRatioLeft = parseFloat( lookupGET('min_ieRatioLeft') ) || 0;
var max_ieRatioLeft = parseFloat( lookupGET('max_ieRatioLeft') ) || 0;

var min_ieRatioRight = parseFloat( lookupGET('min_ieRatioRight') ) || 0;
var max_ieRatioRight = parseFloat( lookupGET('max_ieRatioRight') ) || 0;

var message_success = lookupGET('message_success') || 'Success!';
var message_failure = lookupGET('message_failure') || 'Try again.';

var patient_name = lookupGET('name') || '????';
var patient_dob = lookupGET('dob') || '????';
var patient_mr = lookupGET('mrNum') || '????';
var patient_allergy = lookupGET('allergy') || '????';
var patient_weight = lookupGET('weight') || '????';
var patient_height = lookupGET('height') || '????';

var default_pulse        = parseFloat( lookupGET('default_pulse'       ) ) || "";
var default_resp_rate    = parseFloat( lookupGET('default_resp_rate'   ) ) || "";
var default_blood_top    = parseFloat( lookupGET('default_blood_top'   ) ) || "";
var default_blood_bottom = parseFloat( lookupGET('default_blood_bottom') ) || "";
var default_temp         = parseFloat( lookupGET('default_temp'        ) ) || "";
var default_oxygen       = parseFloat( lookupGET('default_oxygen'      ) ) || "";

var notAssessedValue = 9999;
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
  
    // Following code for easier testing. When un-commented, populates numerical
    //  entry fields with numbers that pass range checks.
  
    /*    
    document.getElementById('tbxCuffRange').value = 0;  
    document.getElementById('tbxSetRate').value = 45;      
    document.getElementById('tbxTotalRate').value = 79;
    document.getElementById('tbxSetVt').value = 523;
    document.getElementById('tbxExpireVt').value = 1856;
    document.getElementById('tbxSpontVt').value = 978;
    document.getElementById('tbxExhaleVe').value = 23.5;
    document.getElementById('tbxPsPc').value = 15;
    document.getElementById('tbxo2Pcnt').value = 78;    
    document.getElementById('tbxsetIpap').value = 36;
    document.getElementById('tbxsetPeep').value = 11.2;
    document.getElementById('tbxTotalPeep').value = 21.8;
    document.getElementById('tbxPip').value = 9.4;
    document.getElementById('tbxPlateau').value = 76.1;
    document.getElementById('tbxMap').value = 58.7;
    document.getElementById('tbxClStatic').value = 112.6;
    document.getElementById('tbxClDynamic').value = 59.3;
    document.getElementById('tbxRaw').value = 49.9;
    document.getElementById('tbxPeakFlow').value = 43;    
    document.getElementById('tbxInspTime').value = 3.2;    
    document.getElementById('tbxieRatioLeft').value = 2;
    document.getElementById('tbxieRatioRight').value = 13;
    */
    
    document.getElementById('button-submit').onclick = function(){

      // Number inputs
      var pulse = document.getElementById('field-pulse').value;
      var respRate = document.getElementById('field-respiratory-rate').value;
      var bpTop = document.getElementById('field-blood-pressure-top').value;
      var bpBottom = document.getElementById('field-blood-pressure-bottom').value;
      var temp = document.getElementById('field-temperature').value;
      var oxygen = document.getElementById('field-oxygen').value;
      
      // Drop down inputs
      var conscious = document.getElementById('dropConscious');
      var consciousValue = conscious.options[conscious.selectedIndex].value;
      
      var ptntColor = document.getElementById('dropPtntColor');
      var ptntColorValue = ptntColor.options[ptntColor.selectedIndex].value;

      var lungRul = document.getElementById('dropLungRul');
      var lungRulValue = lungRul.options[lungRul.selectedIndex].value;
      
      var lungRml = document.getElementById('dropLungRml');
      var lungRmlValue = lungRml.options[lungRml.selectedIndex].value;
      
      var lungRll = document.getElementById('dropLungRll');
      var lungRllValue = lungRll.options[lungRll.selectedIndex].value;
      
      var lungLul = document.getElementById('dropLungLul');
      var lungLulValue = lungLul.options[lungLul.selectedIndex].value;
      
      var lungLll = document.getElementById('dropLungLll');
      var lungLllValue = lungLll.options[lungLll.selectedIndex].value;
      
      var maskType = document.getElementById('dropMaskType');
      var maskTypeValue = maskType.options[maskType.selectedIndex].value;
      
      var maskSize = document.getElementById('dropMaskSize');
      var maskSizeValue = maskSize.options[maskSize.selectedIndex].value;
      
      var ettLocation = document.getElementById('dropEttLoc');
      var ettLocationValue = ettLocation.options[ettLocation.selectedIndex].value;
      
      var ettRelocated = document.getElementById('dropEttReloc');
      var ettRelocatedValue = ettRelocated.options[ettRelocated.selectedIndex].value;
      
      var securePatent = document.getElementById('cbxSecurePatent');
      
      var cuffPressure = document.getElementById('dropCuffPressure');
      var cuffPressureValue = cuffPressure.options[cuffPressure.selectedIndex].value;
      var cuffRangeValue = document.getElementById('tbxCuffRange').value;
      
      var oralCare = document.getElementById('dropOralCare');
      var oralCareValue = oralCare.options[oralCare.selectedIndex].value;
      
      var oralAmount = document.getElementById('dropOralAmount');
      var oralAmountValue = oralAmount.options[oralAmount.selectedIndex].value;
      
      var oralConsistency = document.getElementById('dropOralConsistency');
      var oralConsistencyValue = oralConsistency.options[oralConsistency.selectedIndex].value;
      
      var oralColor = document.getElementById('dropOralColor');
      var oralColorValue = oralColor.options[oralColor.selectedIndex].value;
      
      var trachAmount = document.getElementById('dropTrachAmount');
      var trachAmountValue = trachAmount.options[trachAmount.selectedIndex].value;
      
      var trachConsistency = document.getElementById('dropTrachConsistency');
      var trachConsistencyValue = trachConsistency.options[trachConsistency.selectedIndex].value;
      
      var trachColor = document.getElementById('dropTrachColor');
      var trachColorValue = trachColor.options[trachColor.selectedIndex].value;
      
      var hob = document.getElementById('dropHob');
      var hobValue = hob.options[hob.selectedIndex].value;
      
      var sedVacation = document.getElementById('dropsedVacation');
      var sedVacationValue = sedVacation.options[sedVacation.selectedIndex].value;
      
      var weanReady = document.getElementById('dropWeanReady');
      var weanReadyValue = weanReady.options[weanReady.selectedIndex].value;
      
      var pud = document.getElementById('dropPud');
      var pudValue = pud.options[pud.selectedIndex].value;
      
      var dvt = document.getElementById('dropDvt');
      var dvtValue = dvt.options[dvt.selectedIndex].value;
      
      var ventBipap = document.getElementById('dropVentBipap');
      var ventBipapValue = ventBipap.options[ventBipap.selectedIndex].value;
      
      var mode = document.getElementById('dropMode');
      var modeValue = mode.options[mode.selectedIndex].value;
      
      var setRate = document.getElementById('tbxSetRate').value;
      
      var totalRate = document.getElementById('tbxTotalRate').value;
      
      var setVt = document.getElementById('tbxSetVt').value;
      
      var expireVt = document.getElementById('tbxExpireVt').value;
      
      var spontVt = document.getElementById('tbxSpontVt').value;
      
      var exhaleVe = document.getElementById('tbxExhaleVe').value;
      
      var psPc = document.getElementById('tbxPsPc').value;
      
      var o2Pcnt = document.getElementById('tbxo2Pcnt').value;
      
      var setIpap = document.getElementById('tbxsetIpap').value;
      
      var setPeep = document.getElementById('tbxsetPeep').value;
      
      var totalPeep = document.getElementById('tbxTotalPeep').value;
      
      var pip = document.getElementById('tbxPip').value;
      
      var plateau = document.getElementById('tbxPlateau').value;
      
      var map = document.getElementById('tbxMap').value;
      
      var clStatic = document.getElementById('tbxClStatic').value;
      
      var clDynamic = document.getElementById('tbxClDynamic').value;
      
      var raw = document.getElementById('tbxRaw').value;
      
      var peakFlow = document.getElementById('tbxPeakFlow').value;
      
      var waveform = document.getElementById('dropWave');
      var waveformValue = waveform.options[waveform.selectedIndex].value;
      
      var inspTime = document.getElementById('tbxInspTime').value;
      
      var ieRatioLeft = document.getElementById('tbxieRatioLeft').value;
      var ieRatioRight = document.getElementById('tbxieRatioRight').value;
      
      var sense = document.getElementById('dropSense');
      var senseValue = sense.options[sense.selectedIndex].value;
      
      var alarms = document.getElementById('cbxAlarms');
      
      var bedside = document.getElementById('cbxBedside');
      
      var passed = true;
      
      if (!isNaN(parseFloat(pulse))) {
        passed = passed && checkFloat('field-pulse'                , min_pulse       , max_pulse       );
      }
      
      if (!isNaN(parseFloat(respRate))) {
        passed = passed && checkFloat('field-respiratory-rate'     , min_resp_rate   , max_resp_rate   );
      }
      
      if (!isNaN(parseFloat(bpTop))) {
        passed = passed && checkFloat('field-blood-pressure-top'   , min_blood_top   , max_blood_top   );
      }

      if (!isNaN(parseFloat(bpBottom))) {
        passed = passed && checkFloat('field-blood-pressure-bottom', min_blood_bottom, max_blood_bottom);
      }
      
      if (!isNaN(parseFloat(temp))) {
        passed = passed && checkFloat('field-temperature'          , min_temp        , max_temp        );
      }
      
      if (!isNaN(parseFloat(oxygen))) {
        passed = passed && checkFloat('field-oxygen'               , min_oxygen      , max_oxygen      );
      }

      if (cuffPressureValue == "range") {
        if (!isNaN(parseFloat(cuffRangeValue))) {
          passed = passed && checkFloat('tbxCuffRange', min_cuffPressure , max_cuffPressure);
        }
      }
      
      if (!isNaN(parseFloat(setRate))) {
        passed = passed && checkFloat('tbxSetRate'    , min_setRate      , max_setRate    );
      }
      
      if (!isNaN(parseFloat(totalRate))) {
        passed = passed && checkFloat('tbxTotalRate'  , min_totalRate    , max_totalRate  );
      }
      
      if (!isNaN(parseFloat(setVt))) {
        passed = passed && checkFloat('tbxSetVt'      , min_setVt        , max_setVt      );
      }
      
      if (!isNaN(parseFloat(expireVt))) {
        passed = passed && checkFloat('tbxExpireVt'   , min_expireVt     , max_expireVt   );
      }
      
      if (!isNaN(parseFloat(spontVt))) {
        passed = passed && checkFloat('tbxSpontVt'    , min_spontVt      , max_spontVt    );
      }
      
      if (!isNaN(parseFloat(exhaleVe))) {
        passed = passed && checkFloat('tbxExhaleVe'   , min_exhaleVe     , max_exhaleVe   );
      }
      
      if (!isNaN(parseFloat(psPc))) {
        passed = passed && checkFloat('tbxPsPc'       , min_psPc         , max_psPc       );
      }
      
      if (!isNaN(parseFloat(o2Pcnt))) {
        passed = passed && checkFloat('tbxo2Pcnt'     , min_o2Pcnt       , max_o2Pcnt     );
      }
      
      if (!isNaN(parseFloat(setIpap))) {
        passed = passed && checkFloat('tbxsetIpap'    , min_setIpap      , max_setIpap    );
      }
      
      if (!isNaN(parseFloat(setPeep))) {
        passed = passed && checkFloat('tbxsetPeep'    , min_setPeep      , max_setPeep    );
      }
      
      if (!isNaN(parseFloat(totalPeep))) {
        passed = passed && checkFloat('tbxTotalPeep'  , min_totalPeep    , max_totalPeep  );
      }
      
      if (!isNaN(parseFloat(pip))) {
        passed = passed && checkFloat('tbxPip'        , min_Pip          , max_Pip        );
      }
      
      if (!isNaN(parseFloat(plateau))) {
        passed = passed && checkFloat('tbxPlateau'    , min_plateau      , max_plateau    );
      }
      
      if (!isNaN(parseFloat(map))) {
        passed = passed && checkFloat('tbxMap'        , min_map          , max_map        );
      }
      
      if (!isNaN(parseFloat(clStatic))) {
        passed = passed && checkFloat('tbxClStatic'   , min_clStatic     , max_clStatic   );
      }
      
      if (!isNaN(parseFloat(clDynamic))) {
        passed = passed && checkFloat('tbxClDynamic'  , min_clDynamic    , max_clDynamic  );
      }
      
      if (!isNaN(parseFloat(raw))) {
        passed = passed && checkFloat('tbxRaw'        , min_raw          , max_raw        );
      }
      
      if (!isNaN(parseFloat(peakFlow))) {
        passed = passed && checkFloat('tbxPeakFlow'   , min_peakFlow     , max_peakFlow   );
      }

      if (!isNaN(parseFloat(inspTime))) {
        passed = passed && checkFloat('tbxInspTime'   , min_inspTime     , max_inspTime   );
      }
      
      if (!isNaN(parseFloat(ieRatioLeft))) {
        passed = passed && checkFloat('tbxieRatioLeft'   , min_ieRatioLeft     , max_ieRatioLeft   );
      }
      
      if (!isNaN(parseFloat(ieRatioRight))) {
        passed = passed && checkFloat('tbxieRatioRight'   , min_ieRatioRight     , max_ieRatioRight   );
      }
      
      // SAVE VITALS VALUES CODE: tells ARIS to set item quantities equal to field amounts, place code OUTSIDE "if (passed)" statement, ONLY IF inputing correct vitals should not affect simulaton programming

      /* end Ryan's Code */

      if (passed) {
        ARIS.givePlayerItemCount(item_id_to_give, 1);

        // SAVE VITALS CODE
        // SAVE VITALS VALUES CODE: tells ARIS to set item quantities equal to field amounts, place code within "if (passed)" statement, ONLY IF inputing correct vitals is essential to simulation programming
        
        var ventSubmitted_id = ARIS.cache.idForItemName('VentSubmitted');
        ARIS.setItemCount(ventSubmitted_id, 1);
        
        var pulse_id = ARIS.cache.idForItemName('Pulse');
        if (!isNaN(parseFloat(pulse))) {
          ARIS.setItemCount(pulse_id, pulse);
        } else {
          ARIS.setItemCount(pulse_id, notAssessedValue);
        }
        
        var respRate_id = ARIS.cache.idForItemName('RespRate');
        if (!isNaN(parseFloat(respRate))) {
          ARIS.setItemCount(respRate_id, respRate);
        } else {
          ARIS.setItemCount(respRate_id, notAssessedValue);
        }
        
        var bpTop_id = ARIS.cache.idForItemName('BP Systolic');
        if (!isNaN(parseFloat(bpTop))) {
          ARIS.setItemCount(bpTop_id, bpTop);
        } else {
          ARIS.setItemCount(bpTop_id, notAssessedValue);
        }
        
        
        var bpBottom_id = ARIS.cache.idForItemName('BP Dystolic');
        if (!isNaN(parseFloat(bpBottom))) {
          ARIS.setItemCount(bpBottom_id, bpBottom);
        } else {
          ARIS.setItemCount(bpBottom_id, notAssessedValue);
        }
        
        
        var temp_id = ARIS.cache.idForItemName('Temperature');
        if (!isNaN(parseFloat(temp))) {
          ARIS.setItemCount(temp_id, temp * 10);
        } else {
          ARIS.setItemCount(temp_id, notAssessedValue);
        }
        
        
        var o2_id = ARIS.cache.idForItemName('Oxygen');
        if (!isNaN(parseFloat(oxygen))) {
          ARIS.setItemCount(o2_id, oxygen);
        } else {
          ARIS.setItemCount(o2_id, notAssessedValue);
        }
        
        
        var conscious_id = ARIS.cache.idForItemName('VentConscious');
        if (consciousValue == "null") {
          ARIS.setItemCount(conscious_id, 0);
        } else if (consciousValue == "alert") {
          ARIS.setItemCount(conscious_id, 1);
        } else if (consciousValue == "confused") {
          ARIS.setItemCount(conscious_id, 2);
        } else if (consciousValue == "drowsy") {
          ARIS.setItemCount(conscious_id, 3);
        } else if (consciousValue == "lethargic") {
          ARIS.setItemCount(conscious_id, 4);
        } else if (consciousValue == "obtunded") {
          ARIS.setItemCount(conscious_id, 5);
        } else if (consciousValue == "comatose") {
          ARIS.setItemCount(conscious_id, 6);
        } else if (consciousValue == "sedated") {
          ARIS.setItemCount(conscious_id, 7);
        } else if (consciousValue == "paralyzed") {
          ARIS.setItemCount(conscious_id, 8);
        }
        
        var ptntColor_id = ARIS.cache.idForItemName('VentPtntColor');
        if (ptntColorValue == "null") {
          ARIS.setItemCount(ptntColor_id, 0);
        } else if (ptntColorValue == "normal") {
          ARIS.setItemCount(ptntColor_id, 1);
        } else if (ptntColorValue == "pale") {
          ARIS.setItemCount(ptntColor_id, 2);
        } else if (ptntColorValue == "flushed") {
          ARIS.setItemCount(ptntColor_id, 3);
        } else if (ptntColorValue == "red") {
          ARIS.setItemCount(ptntColor_id, 4);
        } else if (ptntColorValue == "yellowish") {
          ARIS.setItemCount(ptntColor_id, 5);
        } else if (ptntColorValue == "orangey") {
          ARIS.setItemCount(ptntColor_id, 6);
        } else if (ptntColorValue == "bluish") {
          ARIS.setItemCount(ptntColor_id, 7);
        } else if (ptntColorValue == "other") {
          ARIS.setItemCount(ptntColor_id, 8);
        }
        
        var lungRul_id = ARIS.cache.idForItemName('VentLungRUL');
        if (lungRulValue == "null") {
          ARIS.setItemCount(lungRul_id, 0);
        } else if (lungRulValue == "clear") {
          ARIS.setItemCount(lungRul_id, 1);
        } else if (lungRulValue == "diminished") {
          ARIS.setItemCount(lungRul_id, 2);
        } else if (lungRulValue == "crackles") {
          ARIS.setItemCount(lungRul_id, 3);
        } else if (lungRulValue == "courseCrackles") {
          ARIS.setItemCount(lungRul_id, 4);
        } else if (lungRulValue == "fineCrackles") {
          ARIS.setItemCount(lungRul_id, 5);
        } else if (lungRulValue == "wheezes") {
          ARIS.setItemCount(lungRul_id, 6);
        } else if (lungRulValue == "inspiratoryWheezes") {
          ARIS.setItemCount(lungRul_id, 7);
        } else if (lungRulValue == "expiratoryWheezes") {
          ARIS.setItemCount(lungRul_id, 8);
        } else if (lungRulValue == "stridor") {
          ARIS.setItemCount(lungRul_id, 9);
        } else if (lungRulValue == "rub") {
          ARIS.setItemCount(lungRul_id, 10);
        } else if (lungRulValue == "bronchial") {
          ARIS.setItemCount(lungRul_id, 11);
        } else if (lungRulValue == "gurgles") {
          ARIS.setItemCount(lungRul_id, 12);
        } else if (lungRulValue == "absent") {
          ARIS.setItemCount(lungRul_id, 13);
        }
        
        var lungRml_id = ARIS.cache.idForItemName('VentLungRML');
        if (lungRmlValue == "null") {
          ARIS.setItemCount(lungRml_id, 0);
        } else if (lungRmlValue == "clear") {
          ARIS.setItemCount(lungRml_id, 1);
        } else if (lungRmlValue == "diminished") {
          ARIS.setItemCount(lungRml_id, 2);
        } else if (lungRmlValue == "crackles") {
          ARIS.setItemCount(lungRml_id, 3);
        } else if (lungRmlValue == "courseCrackles") {
          ARIS.setItemCount(lungRml_id, 4);
        } else if (lungRmlValue == "fineCrackles") {
          ARIS.setItemCount(lungRml_id, 5);
        } else if (lungRmlValue == "wheezes") {
          ARIS.setItemCount(lungRml_id, 6);
        } else if (lungRmlValue == "inspiratoryWheezes") {
          ARIS.setItemCount(lungRml_id, 7);
        } else if (lungRmlValue == "expiratoryWheezes") {
          ARIS.setItemCount(lungRml_id, 8);
        } else if (lungRmlValue == "stridor") {
          ARIS.setItemCount(lungRml_id, 9);
        } else if (lungRmlValue == "rub") {
          ARIS.setItemCount(lungRml_id, 10);
        } else if (lungRmlValue == "bronchial") {
          ARIS.setItemCount(lungRml_id, 11);
        } else if (lungRmlValue == "gurgles") {
          ARIS.setItemCount(lungRml_id, 12);
        } else if (lungRmlValue == "absent") {
          ARIS.setItemCount(lungRml_id, 13);
        }
        
        var lungRll_id = ARIS.cache.idForItemName('VentLungRLL');
        if (lungRllValue == "null") {
          ARIS.setItemCount(lungRll_id, 0);
        } else if (lungRllValue == "clear") {
          ARIS.setItemCount(lungRll_id, 1);
        } else if (lungRllValue == "diminished") {
          ARIS.setItemCount(lungRll_id, 2);
        } else if (lungRllValue == "crackles") {
          ARIS.setItemCount(lungRll_id, 3);
        } else if (lungRllValue == "courseCrackles") {
          ARIS.setItemCount(lungRll_id, 4);
        } else if (lungRllValue == "fineCrackles") {
          ARIS.setItemCount(lungRll_id, 5);
        } else if (lungRllValue == "wheezes") {
          ARIS.setItemCount(lungRll_id, 6);
        } else if (lungRllValue == "inspiratoryWheezes") {
          ARIS.setItemCount(lungRll_id, 7);
        } else if (lungRllValue == "expiratoryWheezes") {
          ARIS.setItemCount(lungRll_id, 8);
        } else if (lungRllValue == "stridor") {
          ARIS.setItemCount(lungRll_id, 9);
        } else if (lungRllValue == "rub") {
          ARIS.setItemCount(lungRll_id, 10);
        } else if (lungRllValue == "bronchial") {
          ARIS.setItemCount(lungRll_id, 11);
        } else if (lungRllValue == "gurgles") {
          ARIS.setItemCount(lungRll_id, 12);
        } else if (lungRllValue == "absent") {
          ARIS.setItemCount(lungRll_id, 13);
        }
        
        var lungLul_id = ARIS.cache.idForItemName('VentLungLUL');
        if (lungLulValue == "null") {
          ARIS.setItemCount(lungLul_id, 0);
        } else if (lungLulValue == "clear") {
          ARIS.setItemCount(lungLul_id, 1);
        } else if (lungLulValue == "diminished") {
          ARIS.setItemCount(lungLul_id, 2);
        } else if (lungLulValue == "crackles") {
          ARIS.setItemCount(lungLul_id, 3);
        } else if (lungLulValue == "courseCrackles") {
          ARIS.setItemCount(lungLul_id, 4);
        } else if (lungLulValue == "fineCrackles") {
          ARIS.setItemCount(lungLul_id, 5);
        } else if (lungLulValue == "wheezes") {
          ARIS.setItemCount(lungLul_id, 6);
        } else if (lungLulValue == "inspiratoryWheezes") {
          ARIS.setItemCount(lungLul_id, 7);
        } else if (lungLulValue == "expiratoryWheezes") {
          ARIS.setItemCount(lungLul_id, 8);
        } else if (lungLulValue == "stridor") {
          ARIS.setItemCount(lungLul_id, 9);
        } else if (lungLulValue == "rub") {
          ARIS.setItemCount(lungLul_id, 10);
        } else if (lungLulValue == "bronchial") {
          ARIS.setItemCount(lungLul_id, 11);
        } else if (lungLulValue == "gurgles") {
          ARIS.setItemCount(lungLul_id, 12);
        } else if (lungLulValue == "absent") {
          ARIS.setItemCount(lungLul_id, 13);
        }
        
        var lungLll_id = ARIS.cache.idForItemName('VentLungLLL');
        if (lungLllValue == "null") {
          ARIS.setItemCount(lungLll_id, 0);
        } else if (lungLllValue == "clear") {
          ARIS.setItemCount(lungLll_id, 1);
        } else if (lungLllValue == "diminished") {
          ARIS.setItemCount(lungLll_id, 2);
        } else if (lungLllValue == "crackles") {
          ARIS.setItemCount(lungLll_id, 3);
        } else if (lungLllValue == "courseCrackles") {
          ARIS.setItemCount(lungLll_id, 4);
        } else if (lungLllValue == "fineCrackles") {
          ARIS.setItemCount(lungLll_id, 5);
        } else if (lungLllValue == "wheezes") {
          ARIS.setItemCount(lungLll_id, 6);
        } else if (lungLllValue == "inspiratoryWheezes") {
          ARIS.setItemCount(lungLll_id, 7);
        } else if (lungLllValue == "expiratoryWheezes") {
          ARIS.setItemCount(lungLll_id, 8);
        } else if (lungLllValue == "stridor") {
          ARIS.setItemCount(lungLll_id, 9);
        } else if (lungLllValue == "rub") {
          ARIS.setItemCount(lungLll_id, 10);
        } else if (lungLllValue == "bronchial") {
          ARIS.setItemCount(lungLll_id, 11);
        } else if (lungLllValue == "gurgles") {
          ARIS.setItemCount(lungLll_id, 12);
        } else if (lungLllValue == "absent") {
          ARIS.setItemCount(lungLll_id, 13);
        }
        
        var maskType_id = ARIS.cache.idForItemName('VentMaskType');
        if (maskTypeValue == "null") {
          ARIS.setItemCount(maskType_id, 0);
        } else if (maskTypeValue == "endotrachealTube") {
          ARIS.setItemCount(maskType_id, 1);
        } else if (maskTypeValue == "tracheostomyTube") {
          ARIS.setItemCount(maskType_id, 2);
        } else if (maskTypeValue == "fullFaceMask") {
          ARIS.setItemCount(maskType_id, 3);
        } else if (maskTypeValue == "nasalMask") {
          ARIS.setItemCount(maskType_id, 4);
        } else if (maskTypeValue == "totalFaceMask") {
          ARIS.setItemCount(maskType_id, 5);
        } 
        
        var maskSize_id = ARIS.cache.idForItemName('VentMaskSize');
        if (maskSizeValue == "null") {
          ARIS.setItemCount(maskSize_id, 0);
        } else if (maskSizeValue == "2.5") {
          ARIS.setItemCount(maskSize_id, 1);
        } else if (maskSizeValue == "3.0") {
          ARIS.setItemCount(maskSize_id, 2);
        } else if (maskSizeValue == "3.5") {
          ARIS.setItemCount(maskSize_id, 3);
        } else if (maskSizeValue == "4.0") {
          ARIS.setItemCount(maskSize_id, 4);
        } else if (maskSizeValue == "4.5") {
          ARIS.setItemCount(maskSize_id, 5);
        } else if (maskSizeValue == "5.0") {
          ARIS.setItemCount(maskSize_id, 6);
        } else if (maskSizeValue == "5.5") {
          ARIS.setItemCount(maskSize_id, 7);
        } else if (maskSizeValue == "6.0") {
          ARIS.setItemCount(maskSize_id, 8);
        } else if (maskSizeValue == "6.5") {
          ARIS.setItemCount(maskSize_id, 9);
        } else if (maskSizeValue == "7.0") {
          ARIS.setItemCount(maskSize_id, 10);
        } else if (maskSizeValue == "7.5") {
          ARIS.setItemCount(maskSize_id, 11);
        } else if (maskSizeValue == "8.0") {
          ARIS.setItemCount(maskSize_id, 12);
        } else if (maskSizeValue == "8.5") {
          ARIS.setItemCount(maskSize_id, 13);
        } else if (maskSizeValue == "9.0") {
          ARIS.setItemCount(maskSize_id, 14);
        } else if (maskSizeValue == "9.5") {
          ARIS.setItemCount(maskSize_id, 15);
        } else if (maskSizeValue == "10.0") {
          ARIS.setItemCount(maskSize_id, 16);
        } else if (maskSizeValue == "extrasmall") {
          ARIS.setItemCount(maskSize_id, 17);
        } else if (maskSizeValue == "small") {
          ARIS.setItemCount(maskSize_id, 18);
        } else if (maskSizeValue == "medium") {
          ARIS.setItemCount(maskSize_id, 19);
        } else if (maskSizeValue == "large") {
          ARIS.setItemCount(maskSize_id, 20);
        } else if (maskSizeValue == "extraLarge") {
          ARIS.setItemCount(maskSize_id, 21);
        }
        
        var ettLocation_id = ARIS.cache.idForItemName('VentEttLoc');
        if (ettLocationValue == "null") {
          ARIS.setItemCount(ettLocation_id, 0);
        } else if (ettLocationValue == "right") {
          ARIS.setItemCount(ettLocation_id, 1);
        } else if (ettLocationValue == "left") {
          ARIS.setItemCount(ettLocation_id, 2);
        } else if (ettLocationValue == "center") {
          ARIS.setItemCount(ettLocation_id, 3);
        }
        
        var ettRelocated_id = ARIS.cache.idForItemName('VentReloc');
        if (ettRelocatedValue == "null") {
          ARIS.setItemCount(ettRelocated_id, 0);
        } else if (ettRelocatedValue == "check") {
          ARIS.setItemCount(ettRelocated_id, 1);
        } else if (ettRelocatedValue == "contraindicated") {
          ARIS.setItemCount(ettRelocated_id, 2);
        }
        
        var securePatent_id = ARIS.cache.idForItemName('VentSecurePatent');
        if (securePatent.checked === true) {
          ARIS.setItemCount(securePatent_id, 1);
        } else {
          ARIS.setItemCount(securePatent_id, 0);
        }
        
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
        
        var oralCare_id = ARIS.cache.idForItemName('VentOralCare');
        if (oralCareValue == "null") {
          ARIS.setItemCount(oralCare_id, 0);
        } else if (oralCareValue == "check") {
          ARIS.setItemCount(oralCare_id, 1);
        } else if (oralCareValue == "contraindicated") {
          ARIS.setItemCount(oralCare_id, 2);
        }
        
        var oralAmount_id = ARIS.cache.idForItemName('VentOralAmount');
        if (oralAmountValue == "null") {
          ARIS.setItemCount(oralAmount_id, 0);
        } else if (oralAmountValue == "copious") {
          ARIS.setItemCount(oralAmount_id, 1);
        } else if (oralAmountValue == "large") {
          ARIS.setItemCount(oralAmount_id, 2);
        } else if (oralAmountValue == "moderate") {
          ARIS.setItemCount(oralAmount_id, 3);
        } else if (oralAmountValue == "small") {
          ARIS.setItemCount(oralAmount_id, 4);
        } else if (oralAmountValue == "scant") {
          ARIS.setItemCount(oralAmount_id, 5);
        } else if (oralAmountValue == "none") {
          ARIS.setItemCount(oralAmount_id, 6);
        }
        
        var oralConsistency_id = ARIS.cache.idForItemName('VentOralConsist');
        if (oralConsistencyValue == "null") {
          ARIS.setItemCount(oralConsistency_id, 0);
        } else if (oralConsistencyValue == "thick") {
          ARIS.setItemCount(oralConsistency_id, 1);
        } else if (oralConsistencyValue == "thin") {
          ARIS.setItemCount(oralConsistency_id, 2);
        } else if (oralConsistencyValue == "normal") {
          ARIS.setItemCount(oralConsistency_id, 3);
        } else if (oralConsistencyValue == "frothy") {
          ARIS.setItemCount(oralConsistency_id, 4);
        } 
        
        var oralColor_id = ARIS.cache.idForItemName('VentOralColor');
        if (oralColorValue == "null") {
          ARIS.setItemCount(oralColor_id, 0);
        } else if (oralColorValue == "clear") {
          ARIS.setItemCount(oralColor_id, 1);
        } else if (oralColorValue == "white") {
          ARIS.setItemCount(oralColor_id, 2);
        } else if (oralColorValue == "cream") {
          ARIS.setItemCount(oralColor_id, 3);
        } else if (oralColorValue == "yellow") {
          ARIS.setItemCount(oralColor_id, 4);
        } else if (oralColorValue == "green") {
          ARIS.setItemCount(oralColor_id, 5);
        } else if (oralColorValue == "tan") {
          ARIS.setItemCount(oralColor_id, 6);
        } else if (oralColorValue == "red") {
          ARIS.setItemCount(oralColor_id, 7);
        } else if (oralColorValue == "pink") {
          ARIS.setItemCount(oralColor_id, 8);
        } else if (oralColorValue == "brown") {
          ARIS.setItemCount(oralColor_id, 9);
        } else if (oralColorValue == "gray") {
          ARIS.setItemCount(oralColor_id, 10);
        } else if (oralColorValue == "black") {
          ARIS.setItemCount(oralColor_id, 11);
        }
        
        var trachAmount_id = ARIS.cache.idForItemName('VentTrachAmount');
        if (trachAmountValue == "null") {
          ARIS.setItemCount(trachAmount_id, 0);
        } else if (trachAmountValue == "copious") {
          ARIS.setItemCount(trachAmount_id, 1);
        } else if (trachAmountValue == "large") {
          ARIS.setItemCount(trachAmount_id, 2);
        } else if (trachAmountValue == "moderate") {
          ARIS.setItemCount(trachAmount_id, 3);
        } else if (trachAmountValue == "small") {
          ARIS.setItemCount(trachAmount_id, 4);
        } else if (trachAmountValue == "scant") {
          ARIS.setItemCount(trachAmount_id, 5);
        } else if (trachAmountValue == "none") {
          ARIS.setItemCount(trachAmount_id, 6);
        }
        
        var trachConsistency_id = ARIS.cache.idForItemName('VentTrachConsist');
        if (trachConsistencyValue == "null") {
          ARIS.setItemCount(trachConsistency_id, 0);
        } else if (trachConsistencyValue == "thick") {
          ARIS.setItemCount(trachConsistency_id, 1);
        } else if (trachConsistencyValue == "thin") {
          ARIS.setItemCount(trachConsistency_id, 2);
        } else if (trachConsistencyValue == "normal") {
          ARIS.setItemCount(trachConsistency_id, 3);
        } else if (trachConsistencyValue == "frothy") {
          ARIS.setItemCount(trachConsistency_id, 4);
        } 
        
        var trachColor_id = ARIS.cache.idForItemName('VentTrachColor');
        if (trachColorValue == "null") {
          ARIS.setItemCount(trachColor_id, 0);
        } else if (trachColorValue == "clear") {
          ARIS.setItemCount(trachColor_id, 1);
        } else if (trachColorValue == "white") {
          ARIS.setItemCount(trachColor_id, 2);
        } else if (trachColorValue == "cream") {
          ARIS.setItemCount(trachColor_id, 3);
        } else if (trachColorValue == "yellow") {
          ARIS.setItemCount(trachColor_id, 4);
        } else if (trachColorValue == "green") {
          ARIS.setItemCount(trachColor_id, 5);
        } else if (trachColorValue == "tan") {
          ARIS.setItemCount(trachColor_id, 6);
        } else if (trachColorValue == "red") {
          ARIS.setItemCount(trachColor_id, 7);
        } else if (trachColorValue == "pink") {
          ARIS.setItemCount(trachColor_id, 8);
        } else if (trachColorValue == "brown") {
          ARIS.setItemCount(trachColor_id, 9);
        } else if (trachColorValue == "gray") {
          ARIS.setItemCount(trachColor_id, 10);
        } else if (trachColorValue == "black") {
          ARIS.setItemCount(trachColor_id, 11);
        }
        
        var hob_id = ARIS.cache.idForItemName('VentHOB');
        if (hobValue == "null") {
          ARIS.setItemCount(hob_id, 0);
        } else if (hobValue == "check") {
          ARIS.setItemCount(hob_id, 1);
        } else if (hobValue == "contraindicated") {
          ARIS.setItemCount(hob_id, 2);
        }
        
        var sedVacation_id = ARIS.cache.idForItemName('VentSedVacation');
        if (sedVacationValue == "null") {
          ARIS.setItemCount(sedVacation_id, 0);
        } else if (sedVacationValue == "check") {
          ARIS.setItemCount(sedVacation_id, 1);
        } else if (sedVacationValue == "contraindicated") {
          ARIS.setItemCount(sedVacation_id, 2);
        }
        
        var weanReady_id = ARIS.cache.idForItemName('VentWeanReady');
        if (weanReadyValue == "null") {
          ARIS.setItemCount(weanReady_id, 0);
        } else if (weanReadyValue == "check") {
          ARIS.setItemCount(weanReady_id, 1);
        } else if (weanReadyValue == "contraindicated") {
          ARIS.setItemCount(weanReady_id, 2);
        }
        
        var pud_id = ARIS.cache.idForItemName('VentPUD');
        if (pudValue == "null") {
          ARIS.setItemCount(pud_id, 0);
        } else if (pudValue == "check") {
          ARIS.setItemCount(pud_id, 1);
        } else if (pudValue == "contraindicated") {
          ARIS.setItemCount(pud_id, 2);
        }
        
        var dvt_id = ARIS.cache.idForItemName('VentDVT');
        if (dvtValue == "null") {
          ARIS.setItemCount(dvt_id, 0);
        } else if (dvtValue == "check") {
          ARIS.setItemCount(dvt_id, 1);
        } else if (dvtValue == "contraindicated") {
          ARIS.setItemCount(dvt_id, 2);
        }
        
        var ventBipap_id = ARIS.cache.idForItemName('VentVentBipap');
        if (ventBipapValue == "null") {
          ARIS.setItemCount(ventBipap_id, 0);
        } else if (ventBipapValue == "vent") {
          ARIS.setItemCount(ventBipap_id, 1);
        } else if (ventBipapValue == "bipap") {
          ARIS.setItemCount(ventBipap_id, 2);
        }
        
        var mode_id = ARIS.cache.idForItemName('VentMode');
        if (modeValue == "null") {
          ARIS.setItemCount(mode_id, 0);
        } else if (modeValue == "volumeControl") {
          ARIS.setItemCount(mode_id, 1);
        } else if (modeValue == "pressureControl") {
          ARIS.setItemCount(mode_id, 2);
        } else if (modeValue == "simv") {
          ARIS.setItemCount(mode_id, 3);
        } else if (modeValue == "simvWithPs") {
          ARIS.setItemCount(mode_id, 4);
        } else if (modeValue == "cpapWithPs") {
          ARIS.setItemCount(mode_id, 5);
        } else if (modeValue == "cpap") {
          ARIS.setItemCount(mode_id, 6);
        } else if (modeValue == "biLevel") {
          ARIS.setItemCount(mode_id, 7);
        } else if (modeValue == "aprv") {
          ARIS.setItemCount(mode_id, 8);
        } else if (modeValue == "spontaneous") {
          ARIS.setItemCount(mode_id, 9);
        } else if (modeValue == "spontaneousTimed") {
          ARIS.setItemCount(mode_id, 10);
        }
        
        var setRate_id = ARIS.cache.idForItemName('VentSetRate');
        if (isNaN(parseFloat(setRate))) {
          ARIS.setItemCount(setRate_id, notAssessedValue);
        } else {
          ARIS.setItemCount(setRate_id, setRate);
        }
        
        
        var totalRate_id = ARIS.cache.idForItemName('VentTotalRate');
        if (isNaN(parseFloat(totalRate))) {
          ARIS.setItemCount(totalRate_id, notAssessedValue);
        } else {
          ARIS.setItemCount(totalRate_id, totalRate);
        }
        
        var setVt_id = ARIS.cache.idForItemName('VentSetVt');
        if (isNaN(parseFloat(setVt))) {
          ARIS.setItemCount(setVt_id, notAssessedValue);
        } else {
          ARIS.setItemCount(setVt_id, setVt);
        }
        
        
        var expireVt_id = ARIS.cache.idForItemName('VentExpireVt');
        if (isNaN(parseFloat(expireVt))) {
          ARIS.setItemCount(expireVt_id, notAssessedValue);
        } else {
          ARIS.setItemCount(expireVt_id, expireVt);
        }

        var spontVt_id = ARIS.cache.idForItemName('VentSpontVt');
        if (isNaN(parseFloat(spontVt))) {
          ARIS.setItemCount(spontVt_id, notAssessedValue);
        } else {
          ARIS.setItemCount(spontVt_id, spontVt);
        }

        var exhaleVe_id = ARIS.cache.idForItemName('VentExhaleVe');
        if (isNaN(parseFloat(exhaleVe))) {
          ARIS.setItemCount(exhaleVe_id, notAssessedValue);
        } else {
          exhaleVe *= 10;
          ARIS.setItemCount(exhaleVe_id, exhaleVe);
        }
        
        
        var psPc_id = ARIS.cache.idForItemName('VentPSPC');
        if (isNaN(parseFloat(psPc))) {
          ARIS.setItemCount(psPc_id, notAssessedValue);
        } else {
          ARIS.setItemCount(psPc_id, psPc);
        }
 
        var o2Pcnt_id = ARIS.cache.idForItemName('VentO2Pcnt');
        if (isNaN(parseFloat(o2Pcnt))) {
          ARIS.setItemCount(o2Pcnt_id, notAssessedValue);
        } else {
          ARIS.setItemCount(o2Pcnt_id, o2Pcnt);
        }
        
        
        var setIpap_id = ARIS.cache.idForItemName('VentSetIPAP');
        if (isNaN(parseFloat(setIpap))) {
          ARIS.setItemCount(setIpap_id, notAssessedValue);
        } else {
          ARIS.setItemCount(setIpap_id, setIpap);
        }
        
        var setPeep_id = ARIS.cache.idForItemName('VentSetPEEP');
        if (isNaN(parseFloat(setPeep))) {
          ARIS.setItemCount(setPeep_id, notAssessedValue);
        } else {
          setPeep *= 10;
          ARIS.setItemCount(setPeep_id, setPeep);
        }

        var totalPeep_id = ARIS.cache.idForItemName('VentTotalPEEP');
        if (isNaN(parseFloat(totalPeep))) {
          ARIS.setItemCount(totalPeep_id, notAssessedValue);
        } else {
          totalPeep *=10;
          ARIS.setItemCount(totalPeep_id, totalPeep);
        }

        var pip_id = ARIS.cache.idForItemName('VentPIP');
        if (isNaN(parseFloat(pip))) {
          ARIS.setItemCount(pip_id, notAssessedValue);
        } else {
          pip *= 10;
          ARIS.setItemCount(pip_id, pip);
        }

        var plateau_id = ARIS.cache.idForItemName('VentPlateau');
        if (isNaN(parseFloat(plateau))) {
          ARIS.setItemCount(plateau_id, notAssessedValue);
        } else {
          plateau *= 10;
          ARIS.setItemCount(plateau_id, plateau);
        }

        var map_id = ARIS.cache.idForItemName('VentMAP');
        if (isNaN(parseFloat(map))) {
          ARIS.setItemCount(map_id, notAssessedValue);
        } else {
          map *= 10;
          ARIS.setItemCount(map_id, map);
        }

        var clStatic_id = ARIS.cache.idForItemName('VentCLStatic');
        if (isNaN(parseFloat(clStatic))) {
          ARIS.setItemCount(clStatic_id, notAssessedValue);
        } else {
          clStatic *= 10;
          ARIS.setItemCount(clStatic_id, clStatic);
        }

        var clDynamic_id = ARIS.cache.idForItemName('VentCLDynamic');
        if (isNaN(parseFloat(clDynamic))) {
          ARIS.setItemCount(clDynamic_id, notAssessedValue);
        } else {
          clDynamic *= 10;
          ARIS.setItemCount(clDynamic_id, clDynamic);
        }

        var raw_id = ARIS.cache.idForItemName('VentRaw');
        if (isNaN(parseFloat(raw))) {
          ARIS.setItemCount(raw_id, notAssessedValue);
        } else {
          raw *= 10;
          ARIS.setItemCount(raw_id, raw);
        }

        var peakFlow_id = ARIS.cache.idForItemName('VentPeakFlow');
        if (isNaN(parseFloat(peakFlow))) {
          ARIS.setItemCount(peakFlow_id, notAssessedValue);
        } else {
          ARIS.setItemCount(peakFlow_id, peakFlow);
        }
        
        
        var waveform_id = ARIS.cache.idForItemName('VentWave');
        if (waveformValue == "null") {
          ARIS.setItemCount(waveform_id, 0);
        } else if (waveformValue == "square") {
          ARIS.setItemCount(waveform_id, 1);
        } else if (waveformValue == "descending") {
          ARIS.setItemCount(waveform_id, 2);
        } else if (waveformValue == "ascending") {
          ARIS.setItemCount(waveform_id, 3);
        } else if (waveformValue == "sine") {
          ARIS.setItemCount(waveform_id, 4);
        } else if (waveformValue == "ramp") {
          ARIS.setItemCount(waveform_id, 5);
        }
        
        var inspTime_id = ARIS.cache.idForItemName('VentInspTime');
        if (isNaN(parseFloat(inspTime))) {
          ARIS.setItemCount(inspTime_id, notAssessedValue);
        } else {
          inspTime *= 10;
          ARIS.setItemCount(inspTime_id, inspTime);
        }
        
        
        var ieRatioLeft_id = ARIS.cache.idForItemName('VentIERatioLeft');
        if (isNaN(parseFloat(ieRatioLeft))) {
          ARIS.setItemCount(ieRatioLeft_id, notAssessedValue);
        } else {
          ieRatioLeft *= 10;
          ARIS.setItemCount(ieRatioLeft_id, ieRatioLeft);
        }
  
        var ieRatioRight_id = ARIS.cache.idForItemName('VentIERatioRight');
        if (isNaN(parseFloat(ieRatioRight))) {
          ARIS.setItemCount(ieRatioRight_id, notAssessedValue);
        } else {
          ieRatioRight *= 10;
          ARIS.setItemCount(ieRatioRight_id, ieRatioRight);
        }

        var sense_id = ARIS.cache.idForItemName('VentSense');
        if (senseValue == "null") {
          ARIS.setItemCount(sense_id, 0);
        } else if (senseValue == "-0.5") {
          ARIS.setItemCount(sense_id, 1);
        } else if (senseValue == "-1.0") {
          ARIS.setItemCount(sense_id, 2);
        } else if (senseValue == "-1.5") {
          ARIS.setItemCount(sense_id, 3);
        } else if (senseValue == "-2.0") {
          ARIS.setItemCount(sense_id, 4);
        } else if (senseValue == "-2.5") {
          ARIS.setItemCount(sense_id, 5);
        } else if (senseValue == "-3.0") {
          ARIS.setItemCount(sense_id, 6);
        } else if (senseValue == "-3.5") {
          ARIS.setItemCount(sense_id, 7);
        } else if (senseValue == "-4.0") {
          ARIS.setItemCount(sense_id, 8);
        } else if (senseValue == "-4.5") {
          ARIS.setItemCount(sense_id, 9);
        } else if (senseValue == "-5.0") {
          ARIS.setItemCount(sense_id, 10);
        } else if (senseValue == "1lpm") {
          ARIS.setItemCount(sense_id, 11);
        } else if (senseValue == "2lpm") {
          ARIS.setItemCount(sense_id, 12);
        } else if (senseValue == "3lpm") {
          ARIS.setItemCount(sense_id, 13);
        } else if (senseValue == "4lpm") {
          ARIS.setItemCount(sense_id, 14);
        } else if (senseValue == "5lpm") {
          ARIS.setItemCount(sense_id, 15);
        } else if (senseValue == "other") {
          ARIS.setItemCount(sense_id, 16);
        }
        
        var alarms_id = ARIS.cache.idForItemName('VentAlarms');
        if (alarms.checked === true) {
          ARIS.setItemCount(alarms_id, 1);
        }
        
        var bedside_id = ARIS.cache.idForItemName('VentBedside');
        if (bedside.checked === true) {
          ARIS.setItemCount(bedside_id, 1);
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
  
  // For making sure outputs are blank upon first load
  
  var ventSubmitted_id = ARIS.cache.idForItemName('VentSubmitted');
  var ventSubmitted_qty = ARIS.cache.getPlayerItemCount(ventSubmitted_id);

  if (ventSubmitted_qty > 0) {
    
    var pulse_id = ARIS.cache.idForItemName('Pulse'); 
    var pulse_qty = ARIS.cache.getPlayerItemCount(pulse_id); 
    var pulseOutput = document.getElementById("pulseOutput"); 
    if (pulse_qty == notAssessedValue) {
      pulseOutput.innerHTML = "";
    } else {
      pulseOutput.innerHTML = pulse_qty;
    }
    
    var respRate_id = ARIS.cache.idForItemName('RespRate');
    var respRate_qty = ARIS.cache.getPlayerItemCount(respRate_id); 
    var respRateOutput = document.getElementById("respRateOutput");
    if (respRate_qty == notAssessedValue) {
      respRateOutput.innerHTML = "";
    } else {
      respRateOutput.innerHTML = respRate_qty;
    }

    var bpTop_id = ARIS.cache.idForItemName('BP Systolic');
    var bpTop_qty = ARIS.cache.getPlayerItemCount(bpTop_id);
    var bpTopOutput = document.getElementById("bpTopOutput");
    if (bpTop_qty == notAssessedValue) {
      bpTopOutput.innerHTML = "";
    } else {
      bpTopOutput.innerHTML = bpTop_qty;
    }
    
    var bpBottom_id = ARIS.cache.idForItemName('BP Dystolic');
    var bpBottom_qty = ARIS.cache.getPlayerItemCount(bpBottom_id);
    var bpBottomOutput = document.getElementById("bpBottomOutput");
    if (bpBottom_qty == notAssessedValue) {
      bpBottomOutput.innerHTML = "";
    } else {
      bpBottomOutput.innerHTML = bpBottom_qty;
    }
    
    var temp_id = ARIS.cache.idForItemName('Temperature');
    var temp_qty = ARIS.cache.getPlayerItemCount(temp_id);
    var tempOutput = document.getElementById("tempOutput");
    if (temp_qty == notAssessedValue) {
      tempOutput.innerHTML = "";
    } else {
      tempOutput.innerHTML = temp_qty / 10;
    }
    
    var o2_id = ARIS.cache.idForItemName('Oxygen');
    var o2_qty = ARIS.cache.getPlayerItemCount(o2_id);
    var o2Output = document.getElementById("o2OutPut");
    if (o2_qty == notAssessedValue) {
      o2Output.innerHTML = "";
    } else {
      o2Output.innerHTML = o2_qty;
    }   

    var conscious_id = ARIS.cache.idForItemName('VentConscious');
    var conscious_qty = ARIS.cache.getPlayerItemCount(conscious_id);
    var locOutput = document.getElementById("locOutput");
     if (conscious_qty == 0) {
       locOutput.innerHTML = "";
     } else if (conscious_qty == 1) {
       locOutput.innerHTML = "Alert";
     } else if (conscious_qty == 2) {
       locOutput.innerHTML = "Confused";
     } else if (conscious_qty == 3) {
       locOutput.innerHTML = "Drowsy";
     } else if (conscious_qty == 4) {
       locOutput.innerHTML = "Lethargic";
     } else if (conscious_qty == 5) {
       locOutput.innerHTML = "Obtunded";
     } else if (conscious_qty == 6) {
       locOutput.innerHTML = "Comatose";
     } else if (conscious_qty == 7) {
       locOutput.innerHTML = "Sedated";
     } else if (conscious_qty == 8) {
       locOutput.innerHTML = "Paralyzed";
     }

    var ptntColor_id = ARIS.cache.idForItemName('VentPtntColor');
    var ptntColor_qty = ARIS.cache.getPlayerItemCount(ptntColor_id);
    var ptntColorOutput = document.getElementById("ptntColorOutput");
    if (ptntColor_qty == 0) {
       ptntColorOutput.innerHTML = "";
     } else if (ptntColor_qty == 1) {
       ptntColorOutput.innerHTML = "Normal for Skin tone";
     } else if (ptntColor_qty == 2) {
       ptntColorOutput.innerHTML = "Pale";
     } else if (ptntColor_qty == 3) {
       ptntColorOutput.innerHTML = "Flushed";
     } else if (ptntColor_qty == 4) {
       ptntColorOutput.innerHTML = "Red";
     } else if (ptntColor_qty == 5) {
       ptntColorOutput.innerHTML = "Yellowish";
     } else if (ptntColor_qty == 6) {
       ptntColorOutput.innerHTML = "Orangey";
     } else if (ptntColor_qty == 7) {
       ptntColorOutput.innerHTML = "Bluish";
     } else if (ptntColor_qty == 8) {
       ptntColorOutput.innerHTML = "Other - See progress notes";
     }

    var lungRul_id = ARIS.cache.idForItemName('VentLungRUL');
    var lungRul_qty = ARIS.cache.getPlayerItemCount(lungRul_id);
    var lungRulOutput = document.getElementById("lungRulOutput");
    if (lungRul_qty == 0) {
       lungRulOutput.innerHTML = "";
     } else if (lungRul_qty == 1) {
       lungRulOutput.innerHTML = "Clear";
     } else if (lungRul_qty == 2) {
       lungRulOutput.innerHTML = "Diminished";
     } else if (lungRul_qty == 3) {
       lungRulOutput.innerHTML = "Crackles";
     } else if (lungRul_qty == 4) {
       lungRulOutput.innerHTML = "Course Crackles";
     } else if (lungRul_qty == 5) {
       lungRulOutput.innerHTML = "Fine Crackles";
     } else if (lungRul_qty == 6) {
       lungRulOutput.innerHTML = "Wheezes";
     } else if (lungRul_qty == 7) {
       lungRulOutput.innerHTML = "Inspiratory Wheezes";
     } else if (lungRul_qty == 8) {
       lungRulOutput.innerHTML = "Expiratory Wheezes";
     } else if (lungRul_qty == 9) {
       lungRulOutput.innerHTML = "Stridor";
     } else if (lungRul_qty == 10) {
       lungRulOutput.innerHTML = "Rub";
     } else if (lungRul_qty == 11) {
       lungRulOutput.innerHTML = "Bronchial";
     } else if (lungRul_qty == 12) {
       lungRulOutput.innerHTML = "Gurgles";
     } else if (lungRul_qty == 13) {
       lungRulOutput.innerHTML = "Absent";
     }

    var lungRml_id = ARIS.cache.idForItemName('VentLungRML');
    var lungRml_qty = ARIS.cache.getPlayerItemCount(lungRml_id);
    var lungRmlOutput = document.getElementById("lungRmlOutput");
    if (lungRml_qty == 0) {
       lungRmlOutput.innerHTML = "";
     } else if (lungRml_qty == 1) {
       lungRmlOutput.innerHTML = "Clear";
     } else if (lungRml_qty == 2) {
       lungRmlOutput.innerHTML = "Diminished";
     } else if (lungRml_qty == 3) {
       lungRmlOutput.innerHTML = "Crackles";
     } else if (lungRml_qty == 4) {
       lungRmlOutput.innerHTML = "Course Crackles";
     } else if (lungRml_qty == 5) {
       lungRmlOutput.innerHTML = "Fine Crackles";
     } else if (lungRml_qty == 6) {
       lungRmlOutput.innerHTML = "Wheezes";
     } else if (lungRml_qty == 7) {
       lungRmlOutput.innerHTML = "Inspiratory Wheezes";
     } else if (lungRml_qty == 8) {
       lungRmlOutput.innerHTML = "Expiratory Wheezes";
     } else if (lungRml_qty == 9) {
       lungRmlOutput.innerHTML = "Stridor";
     } else if (lungRml_qty == 10) {
       lungRmlOutput.innerHTML = "Rub";
     } else if (lungRml_qty == 11) {
       lungRmlOutput.innerHTML = "Bronchial";
     } else if (lungRml_qty == 12) {
       lungRmlOutput.innerHTML = "Gurgles";
     } else if (lungRml_qty == 13) {
       lungRmlOutput.innerHTML = "Absent";
     }

    var lungRll_id = ARIS.cache.idForItemName('VentLungRLL');
    var lungRll_qty = ARIS.cache.getPlayerItemCount(lungRll_id);
    var lungRllOutput = document.getElementById("lungRllOutput");
    if (lungRll_qty == 0) {
       lungRllOutput.innerHTML = "";
     } else if (lungRll_qty == 1) {
       lungRllOutput.innerHTML = "Clear";
     } else if (lungRll_qty == 2) {
       lungRllOutput.innerHTML = "Diminished";
     } else if (lungRll_qty == 3) {
       lungRllOutput.innerHTML = "Crackles";
     } else if (lungRll_qty == 4) {
       lungRllOutput.innerHTML = "Course Crackles";
     } else if (lungRll_qty == 5) {
       lungRllOutput.innerHTML = "Fine Crackles";
     } else if (lungRll_qty == 6) {
       lungRllOutput.innerHTML = "Wheezes";
     } else if (lungRll_qty == 7) {
       lungRllOutput.innerHTML = "Inspiratory Wheezes";
     } else if (lungRll_qty == 8) {
       lungRllOutput.innerHTML = "Expiratory Wheezes";
     } else if (lungRll_qty == 9) {
       lungRllOutput.innerHTML = "Stridor";
     } else if (lungRll_qty == 10) {
       lungRllOutput.innerHTML = "Rub";
     } else if (lungRll_qty == 11) {
       lungRllOutput.innerHTML = "Bronchial";
     } else if (lungRll_qty == 12) {
       lungRllOutput.innerHTML = "Gurgles";
     } else if (lungRll_qty == 13) {
       lungRllOutput.innerHTML = "Absent";
     }

    var lungLul_id = ARIS.cache.idForItemName('VentLungLUL');
    var lungLul_qty = ARIS.cache.getPlayerItemCount(lungLul_id);
    var lungLulOutput = document.getElementById("lungLulOutput");
    if (lungLul_qty == 0) {
       lungLulOutput.innerHTML = "";
     } else if (lungLul_qty == 1) {
       lungLulOutput.innerHTML = "Clear";
     } else if (lungLul_qty == 2) {
       lungLulOutput.innerHTML = "Diminished";
     } else if (lungLul_qty == 3) {
       lungLulOutput.innerHTML = "Crackles";
     } else if (lungLul_qty == 4) {
       lungLulOutput.innerHTML = "Course Crackles";
     } else if (lungLul_qty == 5) {
       lungLulOutput.innerHTML = "Fine Crackles";
     } else if (lungLul_qty == 6) {
       lungLulOutput.innerHTML = "Wheezes";
     } else if (lungLul_qty == 7) {
       lungLulOutput.innerHTML = "Inspiratory Wheezes";
     } else if (lungLul_qty == 8) {
       lungLulOutput.innerHTML = "Expiratory Wheezes";
     } else if (lungLul_qty == 9) {
       lungLulOutput.innerHTML = "Stridor";
     } else if (lungLul_qty == 10) {
       lungLulOutput.innerHTML = "Rub";
     } else if (lungLul_qty == 11) {
       lungLulOutput.innerHTML = "Bronchial";
     } else if (lungLul_qty == 12) {
       lungLulOutput.innerHTML = "Gurgles";
     } else if (lungLul_qty == 13) {
       lungLulOutput.innerHTML = "Absent";
     }

    var lungLll_id = ARIS.cache.idForItemName('VentLungLLL');
    var lungLll_qty = ARIS.cache.getPlayerItemCount(lungLll_id);
    var lungLllOutput = document.getElementById("lungLllOutput");
    if (lungLll_qty == 0) {
       lungLllOutput.innerHTML = "";
     } else if (lungLll_qty == 1) {
       lungLllOutput.innerHTML = "Clear";
     } else if (lungLll_qty == 2) {
       lungLllOutput.innerHTML = "Diminished";
     } else if (lungLll_qty == 3) {
       lungLllOutput.innerHTML = "Crackles";
     } else if (lungLll_qty == 4) {
       lungLllOutput.innerHTML = "Course Crackles";
     } else if (lungLll_qty == 5) {
       lungLllOutput.innerHTML = "Fine Crackles";
     } else if (lungLll_qty == 6) {
       lungLllOutput.innerHTML = "Wheezes";
     } else if (lungLll_qty == 7) {
       lungLllOutput.innerHTML = "Inspiratory Wheezes";
     } else if (lungLll_qty == 8) {
       lungLllOutput.innerHTML = "Expiratory Wheezes";
     } else if (lungLll_qty == 9) {
       lungLllOutput.innerHTML = "Stridor";
     } else if (lungLll_qty == 10) {
       lungLllOutput.innerHTML = "Rub";
     } else if (lungLll_qty == 11) {
       lungLllOutput.innerHTML = "Bronchial";
     } else if (lungLll_qty == 12) {
       lungLllOutput.innerHTML = "Gurgles";
     } else if (lungLll_qty == 13) {
       lungLllOutput.innerHTML = "Absent";
     }

    var maskType_id = ARIS.cache.idForItemName('VentMaskType');
    var maskType_qty = ARIS.cache.getPlayerItemCount(maskType_id);
    var maskTypeOutput = document.getElementById("maskTypeOutput");
    if (maskType_qty == 0) {
       maskTypeOutput.innerHTML = "";
     } else if (maskType_qty == 1) {
       maskTypeOutput.innerHTML = "Endotracheal Tube";
     } else if (maskType_qty == 2) {
       maskTypeOutput.innerHTML = "Tracheostomy Tube";
     } else if (maskType_qty == 3) {
       maskTypeOutput.innerHTML = "Full Face Mask";
     } else if (maskType_qty == 4) {
       maskTypeOutput.innerHTML = "Nasal Mask";
     } else if (maskType_qty == 5) {
       maskTypeOutput.innerHTML = "Total Face Mask";
     }

    var maskSize_id = ARIS.cache.idForItemName('VentMaskSize');
    var maskSize_qty = ARIS.cache.getPlayerItemCount(maskSize_id);
    var maskSizeOutput = document.getElementById("maskSizeOutput");
    if (maskSize_qty == 0) {
       maskSizeOutput.innerHTML = "";
     } else if (maskSize_qty == 1) {
       maskSizeOutput.innerHTML = "2.5";
     } else if (maskSize_qty == 2) {
       maskSizeOutput.innerHTML = "3.0";
     } else if (maskSize_qty == 3) {
       maskSizeOutput.innerHTML = "3.5";
     } else if (maskSize_qty == 4) {
       maskSizeOutput.innerHTML = "4.0";
     } else if (maskSize_qty == 5) {
       maskSizeOutput.innerHTML = "4.5";
     } else if (maskSize_qty == 6) {
       maskSizeOutput.innerHTML = "5.0";
     } else if (maskSize_qty == 7) {
       maskSizeOutput.innerHTML = "5.5";
     } else if (maskSize_qty == 8) {
       maskSizeOutput.innerHTML = "6.0";
     } else if (maskSize_qty == 9) {
       maskSizeOutput.innerHTML = "6.5";
     } else if (maskSize_qty == 10) {
       maskSizeOutput.innerHTML = "7.0";
     } else if (maskSize_qty == 11) {
       maskSizeOutput.innerHTML = "7.5";
     } else if (maskSize_qty == 12) {
       maskSizeOutput.innerHTML = "8.0";
     } else if (maskSize_qty == 13) {
       maskSizeOutput.innerHTML = "8.5";
     } else if (maskSize_qty == 14) {
       maskSizeOutput.innerHTML = "9.0";
     } else if (maskSize_qty == 15) {
       maskSizeOutput.innerHTML = "9.5";
     } else if (maskSize_qty == 16) {
       maskSizeOutput.innerHTML = "10.0";
     } else if (maskSize_qty == 17) {
       maskSizeOutput.innerHTML = "Extra Small";
     } else if (maskSize_qty == 18) {
       maskSizeOutput.innerHTML = "Small";
     } else if (maskSize_qty == 19) {
       maskSizeOutput.innerHTML = "Medium";
     } else if (maskSize_qty == 20) {
       maskSizeOutput.innerHTML = "Large";
     } else if (maskSize_qty == 21) {
       maskSizeOutput.innerHTML = "Extra Large";
     }

    var ettLocation_id = ARIS.cache.idForItemName('VentEttLoc');
    var ettLocation_qty = ARIS.cache.getPlayerItemCount(ettLocation_id);
    var ettLocOutput = document.getElementById("ettLocOutput");
    if (ettLocation_qty == 0) {
       ettLocOutput.innerHTML = "";
     } else if (ettLocation_qty == 1) {
       ettLocOutput.innerHTML = "Right";
     } else if (ettLocation_qty == 2) {
       ettLocOutput.innerHTML = "Left";
     } else if (ettLocation_qty == 3) {
       ettLocOutput.innerHTML = "Center";
     }

    var ettRelocated_id = ARIS.cache.idForItemName('VentReloc');
    var ettRelocated_qty = ARIS.cache.getPlayerItemCount(ettRelocated_id);
    var ettRelocOutput = document.getElementById("ettRelocOutput");
    if (ettRelocated_qty == 0) {
       ettRelocOutput.innerHTML = "";
     } else if (ettRelocated_qty == 1) {
       ettRelocOutput.innerHTML = "&check;";
     } else if (ettRelocated_qty == 2) {
       ettRelocOutput.innerHTML = "Contraindicated";
     }

    var securePatent_id = ARIS.cache.idForItemName('VentSecurePatent');
    var securePatent_qty = ARIS.cache.getPlayerItemCount(securePatent_id);
    var securePatentOutput = document.getElementById("securePatentOutput");
    if (securePatent_qty == 1) {
       securePatentOutput.innerHTML = "&check;";
     } else {
       securePatentOutput.innerHTML = "";
     }

    var cuffPressure_id = ARIS.cache.idForItemName('VentCuffPressure');
    var cuffPressure_qty = ARIS.cache.getPlayerItemCount(cuffPressure_id);
    var cuffPressureOutput = document.getElementById("cuffPressureOutput");
    if (cuffPressure_qty == 100) {
      cuffPressureOutput.innerHTML = "Minimal Leak";
    } else if (cuffPressure_qty == 101) {
      cuffPressureOutput.innerHTML = "Minimal Occluding Volume";
    } else if (cuffPressure_qty == notAssessedValue || cuffPressure_qty == 102) {
      cuffPressureOutput.innerHTML = "";
    } else {
      cuffPressure_qty /= 10;
      cuffPressureOutput.innerHTML = cuffPressure_qty;
    }

    var oralCare_id = ARIS.cache.idForItemName('VentOralCare');
    var oralCare_qty = ARIS.cache.getPlayerItemCount(oralCare_id);
    var oralCareOutput = document.getElementById("oralCareOutput");
    if (oralCare_qty == 0) {
       oralCareOutput.innerHTML = "";
     } else if (oralCare_qty == 1) {
       oralCareOutput.innerHTML = "&check;";
     } else if (oralCare_qty == 2) {
       oralCareOutput.innerHTML = "Contraindicated";
     }

    var oralAmount_id = ARIS.cache.idForItemName('VentOralAmount');
    var oralAmount_qty = ARIS.cache.getPlayerItemCount(oralAmount_id);
    var oralAmountOutput = document.getElementById("oralAmountOutput");
    if (oralAmount_qty == 0) {
       oralAmountOutput.innerHTML = "";
     } else if (oralAmount_qty == 1) {
       oralAmountOutput.innerHTML = "Copious";
     } else if (oralAmount_qty == 2) {
       oralAmountOutput.innerHTML = "Large";
     } else if (oralAmount_qty == 3) {
       oralAmountOutput.innerHTML = "Moderate";
     } else if (oralAmount_qty == 4) {
       oralAmountOutput.innerHTML = "Small";
     } else if (oralAmount_qty == 5) {
       oralAmountOutput.innerHTML = "Scant";
     } else if (oralAmount_qty == 6) {
       oralAmountOutput.innerHTML = "None";
     }

    var oralConsistency_id = ARIS.cache.idForItemName('VentOralConsist');
    var oralConsistency_qty = ARIS.cache.getPlayerItemCount(oralConsistency_id);
    var oralConsistOutput = document.getElementById("oralConsistOutput");
    if (oralConsistency_qty == 0) {
       oralConsistOutput.innerHTML = "";
     } else if (oralConsistency_qty == 1) {
       oralConsistOutput.innerHTML = "Thick";
     } else if (oralConsistency_qty == 2) {
       oralConsistOutput.innerHTML = "Thin";
     } else if (oralConsistency_qty == 3) {
       oralConsistOutput.innerHTML = "Normal";
     } else if (oralConsistency_qty == 4) {
       oralConsistOutput.innerHTML = "Frothy";
     }

    var oralColor_id = ARIS.cache.idForItemName('VentOralColor');
    var oralColor_qty = ARIS.cache.getPlayerItemCount(oralColor_id);
    var oralColorOutput = document.getElementById("oralColorOutput");
    if (oralColor_qty == 0) {
       oralColorOutput.innerHTML = "";
     } else if (oralColor_qty == 1) {
       oralColorOutput.innerHTML = "Clear";
     } else if (oralColor_qty == 2) {
       oralColorOutput.innerHTML = "White";
     } else if (oralColor_qty == 3) {
       oralColorOutput.innerHTML = "Cream";
     } else if (oralColor_qty == 4) {
       oralColorOutput.innerHTML = "Yellow";
     } else if (oralColor_qty == 5) {
       oralColorOutput.innerHTML = "Green";
     } else if (oralColor_qty == 6) {
       oralColorOutput.innerHTML = "Tan";
     } else if (oralColor_qty == 7) {
       oralColorOutput.innerHTML = "Red";
     } else if (oralColor_qty == 8) {
       oralColorOutput.innerHTML = "Pink";
     } else if (oralColor_qty == 9) {
       oralColorOutput.innerHTML = "Brown";
     } else if (oralColor_qty == 10) {
       oralColorOutput.innerHTML = "Gray";
     } else if (oralColor_qty == 11) {
       oralColorOutput.innerHTML = "Black";
     }

    var trachAmount_id = ARIS.cache.idForItemName('VentTrachAmount');
    var trachAmount_qty = ARIS.cache.getPlayerItemCount(trachAmount_id);
    var trachAmountOutput = document.getElementById("trachAmountOutput");
    if (trachAmount_qty == 0) {
       trachAmountOutput.innerHTML = "";
     } else if (trachAmount_qty == 1) {
       trachAmountOutput.innerHTML = "Copious";
     } else if (trachAmount_qty == 2) {
       trachAmountOutput.innerHTML = "Large";
     } else if (trachAmount_qty == 3) {
       trachAmountOutput.innerHTML = "Moderate";
     } else if (trachAmount_qty == 4) {
       trachAmountOutput.innerHTML = "Small";
     } else if (trachAmount_qty == 5) {
       trachAmountOutput.innerHTML = "Scant";
     } else if (trachAmount_qty == 6) {
       trachAmountOutput.innerHTML = "None";
     }

    var trachConsistency_id = ARIS.cache.idForItemName('VentTrachConsist');
    var trachConsistency_qty = ARIS.cache.getPlayerItemCount(trachConsistency_id);
    var trachConsistOutput = document.getElementById("trachConsistOutput");
    if (trachConsistency_qty == 0) {
       trachConsistOutput.innerHTML = "";
     } else if (trachConsistency_qty == 1) {
       trachConsistOutput.innerHTML = "Thick";
     } else if (trachConsistency_qty == 2) {
       trachConsistOutput.innerHTML = "Thin";
     } else if (trachConsistency_qty == 3) {
       trachConsistOutput.innerHTML = "Normal";
     } else if (trachConsistency_qty == 4) {
       trachConsistOutput.innerHTML = "Frothy";
     }

    var trachColor_id = ARIS.cache.idForItemName('VentTrachColor');
    var trachColor_qty = ARIS.cache.getPlayerItemCount(trachColor_id);
    var trachColorOutput = document.getElementById("trachColorOutput");
    if (trachColor_qty == 0) {
       trachColorOutput.innerHTML = "";
     } else if (trachColor_qty == 1) {
       trachColorOutput.innerHTML = "Clear";
     } else if (trachColor_qty == 2) {
       trachColorOutput.innerHTML = "White";
     } else if (trachColor_qty == 3) {
       trachColorOutput.innerHTML = "Cream";
     } else if (trachColor_qty == 4) {
       trachColorOutput.innerHTML = "Yellow";
     } else if (trachColor_qty == 5) {
       trachColorOutput.innerHTML = "Green";
     } else if (trachColor_qty == 6) {
       trachColorOutput.innerHTML = "Tan";
     } else if (trachColor_qty == 7) {
       trachColorOutput.innerHTML = "Red";
     } else if (trachColor_qty == 8) {
       trachColorOutput.innerHTML = "Pink";
     } else if (trachColor_qty == 9) {
       trachColorOutput.innerHTML = "Brown";
     } else if (trachColor_qty == 10) {
       trachColorOutput.innerHTML = "Gray";
     } else if (trachColor_qty == 11) {
       trachColorOutput.innerHTML = "Black";
     }

    var hob_id = ARIS.cache.idForItemName('VentHOB');
    var hob_qty = ARIS.cache.getPlayerItemCount(hob_id);
    var hobOutput = document.getElementById("hobOutput");
    if (hob_qty == 0) {
       hobOutput.innerHTML = "";
     } else if (hob_qty == 1) {
       hobOutput.innerHTML = "&check;";
     } else if (hob_qty == 2) {
       hobOutput.innerHTML = "Contraindicated";
     }

    var sedVacation_id = ARIS.cache.idForItemName('VentSedVacation');
    var sedVacation_qty = ARIS.cache.getPlayerItemCount(sedVacation_id);
    var sedVacationOutput = document.getElementById("sedVacationOutput");
    if (sedVacation_qty == 0) {
       sedVacationOutput.innerHTML = "";
     } else if (sedVacation_qty == 1) {
       sedVacationOutput.innerHTML = "&check;";
     } else if (sedVacation_qty == 2) {
       sedVacationOutput.innerHTML = "Contraindicated";
     }

    var weanReady_id = ARIS.cache.idForItemName('VentWeanReady');
    var weanReady_qty = ARIS.cache.getPlayerItemCount(weanReady_id);
    var weanReadyOutput = document.getElementById("weanReadyOutput");
    if (weanReady_qty == 0) {
       weanReadyOutput.innerHTML = "";
     } else if (weanReady_qty == 1) {
       weanReadyOutput.innerHTML = "&check;";
     } else if (weanReady_qty == 2) {
       weanReadyOutput.innerHTML = "Contraindicated";
     }

    var pud_id = ARIS.cache.idForItemName('VentPUD');
    var pud_qty = ARIS.cache.getPlayerItemCount(pud_id);
    var pudOutput = document.getElementById("pudOutput");
    if (pud_qty == 0) {
       pudOutput.innerHTML = "";
     } else if (pud_qty == 1) {
       pudOutput.innerHTML = "&check;";
     } else if (pud_qty == 2) {
       pudOutput.innerHTML = "Contraindicated";
     }

    var dvt_id = ARIS.cache.idForItemName('VentDVT');
    var dvt_qty = ARIS.cache.getPlayerItemCount(dvt_id);
    var dvtOutput = document.getElementById("dvtOutput");
    if (dvt_qty == 0) {
       dvtOutput.innerHTML = "";
     } else if (dvt_qty == 1) {
       dvtOutput.innerHTML = "&check;";
     } else if (dvt_qty == 2) {
       dvtOutput.innerHTML = "Contraindicated";
     }

    var ventBipap_id = ARIS.cache.idForItemName('VentVentBipap');
    var ventBipap_qty = ARIS.cache.getPlayerItemCount(ventBipap_id);
    var ventBipapOutput = document.getElementById("ventBipapOutput");
    if (ventBipap_qty == 0) {
       ventBipapOutput.innerHTML = "";
     } else if (ventBipap_qty == 1) {
       ventBipapOutput.innerHTML = "Vent";
     } else if (ventBipap_qty == 2) {
       ventBipapOutput.innerHTML = "BiPAP";
     }

    var mode_id = ARIS.cache.idForItemName('VentMode');
    var mode_qty = ARIS.cache.getPlayerItemCount(mode_id);
    var modeOutput = document.getElementById("modeOutput");
    if (mode_qty == 0) {
       modeOutput.innerHTML = "";
     } else if (mode_qty == 1) {
       modeOutput.innerHTML = "Volume Control";
     } else if (mode_qty == 2) {
       modeOutput.innerHTML = "Pressure Control";
     } else if (mode_qty == 3) {
       modeOutput.innerHTML = "SIMV";
     } else if (mode_qty == 4) {
       modeOutput.innerHTML = "SIMV with PS";
     } else if (mode_qty == 5) {
       modeOutput.innerHTML = "CPAP with PS";
     } else if (mode_qty == 6) {
       modeOutput.innerHTML = "CPAP";
     } else if (mode_qty == 7) {
       modeOutput.innerHTML = "BiLevel";
     } else if (mode_qty == 8) {
       modeOutput.innerHTML = "APRV";
     } else if (mode_qty == 9) {
       modeOutput.innerHTML = "Spontaneous";
     } else if (mode_qty == 10) {
       modeOutput.innerHTML = "Spontaneous-timed";
     }

    var setRate_id = ARIS.cache.idForItemName('VentSetRate');
    var setRate_qty = ARIS.cache.getPlayerItemCount(setRate_id); 
    var setRateOutput = document.getElementById("setRateOutput"); 
    if (setRate_qty == notAssessedValue) {
      setRateOutput.innerHTML = "";
    } else {
      setRateOutput.innerHTML = setRate_qty;
    }


    var totalRate_id = ARIS.cache.idForItemName('VentTotalRate');
    var totalRate_qty = ARIS.cache.getPlayerItemCount(totalRate_id); 
    var totalRateOutput = document.getElementById("totalRateOutput"); 
    if (totalRate_qty == notAssessedValue) {
      totalRateOutput.innerHTML = "";
    } else {
      totalRateOutput.innerHTML = totalRate_qty;
    }

    var setVt_id = ARIS.cache.idForItemName('VentSetVt');
    var setVt_qty = ARIS.cache.getPlayerItemCount(setVt_id); 
    var setVtOutput = document.getElementById("setVtOutput"); 
    if (setVt_qty == notAssessedValue) {
      setVtOutput.innerHTML = "";
    } else {
      setVtOutput.innerHTML = setVt_qty;
    }

    var expireVt_id = ARIS.cache.idForItemName('VentExpireVt');
    var expireVt_qty = ARIS.cache.getPlayerItemCount(expireVt_id); 
    var expireVtOutput = document.getElementById("expireVtOutput");
    if (expireVt_qty == notAssessedValue) {
      expireVtOutput.innerHTML = "";
    } else {
      expireVtOutput.innerHTML = expireVt_qty;
    }

    var spontVt_id = ARIS.cache.idForItemName('VentSpontVt');
    var spontVt_qty = ARIS.cache.getPlayerItemCount(spontVt_id); 
    var spontVtOutput = document.getElementById("spontVtOutput"); 
    if (spontVt_qty == notAssessedValue) {
      spontVtOutput.innerHTML = "";
    } else {
      spontVtOutput.innerHTML = spontVt_qty;
    }

    var exhaleVe_id = ARIS.cache.idForItemName('VentExhaleVe');
    var exhaleVe_qty = ARIS.cache.getPlayerItemCount(exhaleVe_id); 
    var exhaleVeOutput = document.getElementById("exhaleVeOutput"); 
    if (spontVt_qty == notAssessedValue) {
      exhaleVeOutput.innerHTML = "";
    } else {
      exhaleVe_qty /= 10;
      exhaleVeOutput.innerHTML = exhaleVe_qty;
    }

    var psPc_id = ARIS.cache.idForItemName('VentPSPC');
    var psPc_qty = ARIS.cache.getPlayerItemCount(psPc_id); 
    var psPcOutput = document.getElementById("psPcOutput"); 
    if (psPc_qty == notAssessedValue) {
      psPcOutput.innerHTML = "";
    } else {
      psPcOutput.innerHTML = psPc_qty;
    }

    var o2Pcnt_id = ARIS.cache.idForItemName('VentO2Pcnt');
    var o2Pcnt_qty = ARIS.cache.getPlayerItemCount(o2Pcnt_id); 
    var o2PcntOutput = document.getElementById("o2PcntOutput"); 
    if (o2Pcnt_qty == notAssessedValue) {
      o2PcntOutput.innerHTML = "";
    } else {
      o2PcntOutput.innerHTML = o2Pcnt_qty;
    }

    var setIpap_id = ARIS.cache.idForItemName('VentSetIPAP');
    var setIpap_qty = ARIS.cache.getPlayerItemCount(setIpap_id); 
    var setIpapOutput = document.getElementById("setIpapOutput"); 
    if (setIpap_qty == notAssessedValue) {
      setIpapOutput.innerHTML = "";
    } else {
      setIpapOutput.innerHTML = setIpap_qty;
    }

    var setPeep_id = ARIS.cache.idForItemName('VentSetPEEP');
    var setPeep_qty = ARIS.cache.getPlayerItemCount(setPeep_id); 
    var setPeepOutput = document.getElementById("setPeepOutput");
    if (setPeep_qty == notAssessedValue) {
      setPeepOutput.innerHTML = "";
    } else {
      setPeep_qty /= 10;
      setPeepOutput.innerHTML = setPeep_qty;
    }

    var totalPeep_id = ARIS.cache.idForItemName('VentTotalPEEP');
    var totalPeep_qty = ARIS.cache.getPlayerItemCount(totalPeep_id); 
    var totalPeepOutput = document.getElementById("totalPeepOutput"); 
    if (totalPeep_qty == notAssessedValue) {
      totalPeepOutput.innerHTML = "";
    } else {
      totalPeep_qty /= 10;
      totalPeepOutput.innerHTML = totalPeep_qty;
    }

    var pip_id = ARIS.cache.idForItemName('VentPIP');
    var pip_qty = ARIS.cache.getPlayerItemCount(pip_id); 
    var pipOutput = document.getElementById("pipOutput");
    if (pip_qty == notAssessedValue) {
      pipOutput.innerHTML = "";
    } else {
      pip_qty /= 10;
      pipOutput.innerHTML = pip_qty;
    }

    var plateau_id = ARIS.cache.idForItemName('VentPlateau');
    var plateau_qty = ARIS.cache.getPlayerItemCount(plateau_id); 
    var plateauOutput = document.getElementById("plateauOutput");
    if (plateau_qty == notAssessedValue) {
      plateauOutput.innerHTML = "";
    } else {
      plateau_qty /= 10;
      plateauOutput.innerHTML = plateau_qty;
    }

    var map_id = ARIS.cache.idForItemName('VentMAP');
    var map_qty = ARIS.cache.getPlayerItemCount(map_id); 
    var mapOutput = document.getElementById("mapOutput"); 
    if (map_qty == notAssessedValue) {
      mapOutput.innerHTML = "";
    } else {
      map_qty /= 10;
      mapOutput.innerHTML = map_qty;
    }

    var clStatic_id = ARIS.cache.idForItemName('VentCLStatic');
    var clStatic_qty = ARIS.cache.getPlayerItemCount(clStatic_id); 
    var clStaticOutput = document.getElementById("clStaticOutput");
    if (clStatic_qty == notAssessedValue) {
      clStaticOutput.innerHTML = "";
    } else {
      clStatic_qty /= 10;
      clStaticOutput.innerHTML = clStatic_qty;
    }

    var clDynamic_id = ARIS.cache.idForItemName('VentCLDynamic');
    var clDynamic_qty = ARIS.cache.getPlayerItemCount(clDynamic_id); 
    var clDynamicOutput = document.getElementById("clDynamicOutput"); 
    if (clDynamic_qty == notAssessedValue) {
      clDynamicOutput.innerHTML = "";
    } else {
      clDynamic_qty /= 10;
      clDynamicOutput.innerHTML = clDynamic_qty;
    }

    var raw_id = ARIS.cache.idForItemName('VentRaw');
    var raw_qty = ARIS.cache.getPlayerItemCount(raw_id); 
    var rawOutput = document.getElementById("rawOutput"); 
    if (raw_qty == notAssessedValue) {
      rawOutput.innerHTML = "";
    } else {
      raw_qty /=10;
      rawOutput.innerHTML = raw_qty;
    }

    var peakFlow_id = ARIS.cache.idForItemName('VentPeakFlow');
    var peakFlow_qty = ARIS.cache.getPlayerItemCount(peakFlow_id); 
    var peakFlowOutput = document.getElementById("peakFlowOutput"); 
    if (peakFlow_qty == notAssessedValue) {
      peakFlowOutput.innerHTML = "";
    } else {
      peakFlow_qty /=10;
      peakFlowOutput.innerHTML = peakFlow_qty;
    }


    var waveform_id = ARIS.cache.idForItemName('VentWave');
    var waveform_qty = ARIS.cache.getPlayerItemCount(waveform_id);
    var waveOutput = document.getElementById("waveOutput");
    if (waveform_qty == 0) {
       waveOutput.innerHTML = "";
     } else if (waveform_qty == 1) {
       waveOutput.innerHTML = "Square";
     } else if (waveform_qty == 2) {
       waveOutput.innerHTML = "Descending";
     } else if (waveform_qty == 3) {
       waveOutput.innerHTML = "Ascending";
     } else if (waveform_qty == 4) {
       waveOutput.innerHTML = "Sine";
     } else if (waveform_qty == 5) {
       waveOutput.innerHTML = "Ramp";
     }

    var inspTime_id = ARIS.cache.idForItemName('VentInspTime');
    var inspTime_qty = ARIS.cache.getPlayerItemCount(inspTime_id); 
    var inspTimeOutput = document.getElementById("inspTimeOutput"); 
    if (inspTime_qty == notAssessedValue) {
      inspTimeOutput.innerHTML = "";
    } else {
      inspTime_qty /= 10;
      inspTimeOutput.innerHTML = inspTime_qty;
    }


    var ieRatioLeft_id = ARIS.cache.idForItemName('VentIERatioLeft');
    var ieRatioLeft_qty = ARIS.cache.getPlayerItemCount(ieRatioLeft_id);
    var ieRatioRight_id = ARIS.cache.idForItemName('VentIERatioRight');
    var ieRatioRight_qty = ARIS.cache.getPlayerItemCount(ieRatioRight_id);
    var ieRatioOutput = document.getElementById("ieRatioOutput"); 
    if (ieRatioLeft_qty == notAssessedValue) {
      ieRatioOutput.innerHTML = "";
    } else {
      ieRatioLeft_qty /= 10;
      ieRatioRight_qty /= 10;
      ieRatioOutput.innerHTML = ieRatioLeft_qty + " : " + ieRatioRight_qty;
    }



    var sense_id = ARIS.cache.idForItemName('VentSense');
    var sense_qty = ARIS.cache.getPlayerItemCount(sense_id);
    var senseOutput = document.getElementById("senseOutput");
    if (sense_qty == 0) {
       senseOutput.innerHTML = "";
     } else if (sense_qty == 1) {
       senseOutput.innerHTML = "-0.5 cmH20";
     } else if (sense_qty == 2) {
       senseOutput.innerHTML = "-1.0 cmH20";
     } else if (sense_qty == 3) {
       senseOutput.innerHTML = "-1.5 cmH20";
     } else if (sense_qty == 4) {
       senseOutput.innerHTML = "-2.0 cmH20";
     } else if (sense_qty == 5) {
       senseOutput.innerHTML = "-2.5 cmH20";
     } else if (sense_qty == 6) {
       senseOutput.innerHTML = "-3.0 cmH20";
     } else if (sense_qty == 7) {
     } else if (sense_qty == 7) {
       senseOutput.innerHTML = "-3.5 cmH20";
     } else if (sense_qty == 8) {
       senseOutput.innerHTML = "-4.0 cmH20";
     } else if (sense_qty == 9) {
       senseOutput.innerHTML = "-4.5 cmH20";
     } else if (sense_qty == 10) {
       senseOutput.innerHTML = "-5.0 cmH20";
     } else if (sense_qty == 11) {
       senseOutput.innerHTML = "1 lpm";
     } else if (sense_qty == 12) {
       senseOutput.innerHTML = "2 lpm";
     } else if (sense_qty == 13) {
       senseOutput.innerHTML = "3 lpm";
     } else if (sense_qty == 14) {
       senseOutput.innerHTML = "4 lpm";
     } else if (sense_qty == 15) {
       senseOutput.innerHTML = "5 lpm";
     } else if (sense_qty == 16) {
       senseOutput.innerHTML = "Other – see progress note";
     }

    var alarms_id = ARIS.cache.idForItemName('VentAlarms');
    var alarms_qty = ARIS.cache.getPlayerItemCount(alarms_id);
    var alarmsOutput = document.getElementById("alarmsOutput");
    if (alarms_qty == 1) {
       alarmsOutput.innerHTML = "&check;";
     }

    var bedside_id = ARIS.cache.idForItemName('VentBedside');
    var bedside_qty = ARIS.cache.getPlayerItemCount(bedside_id);
    var bedsideOutput = document.getElementById("bedsideOutput");
    if (bedside_qty == 1) {
       bedsideOutput.innerHTML = "&check;";
     }
    
  }
  // end Ryan's code

  
};
  
// Display / Hide Cuff Pressure number box when "Range" is selected
    
// Funtion attached to the Cuff Pressure select in HTML
function displayCuffPressureRange(value) {
  if (value == "range") {
    tbxCuffRange.style.display = "block";
  } else {
    tbxCuffRange.style.display = "none";
  }
}

  
    
document.addEventListener('DOMContentLoaded', unlock);


// for debugging
// ARIS.givePlayerItemCount = ARIS.exit = function(){};
// ARIS.ready();