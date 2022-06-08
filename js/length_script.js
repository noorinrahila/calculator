// open and close the hamburger menu
function openMenu(){
    document.getElementById("myMenu").style.height = "100%"
    }
    function closeMenu(){
        document.getElementById("myMenu").style.height = "0%" 
    }
    let factors1 = new Array(1, 0.001, 0.000621,3.28084,1.09361,100,39.3701,1609.34);
    let factors2 = new Array(1000, 1, 0.621,3280.84,1093.61,100000,39370.1,1.60934);
    let factors3 = new Array(1609.34, 1.60934, 1,5280,1760,169034,63360,160900000);
    let factors4 = new Array(0.3048,0.0003048,0.000189394,1,0.333333,30.48,12,5280);
    let factors5 = new Array(0.9144,0.0009144,0.000568182,3,1,91.44,36,1760);
    let factors6= new Array(0.01,0.00001,0.0000062137,0.0328084,0.0109361,1,0.393701,10);
    let factors7= new Array(0.0254,0.0000254,0.000015783,0.0833333,0.0277778,2.54,1,25.4);
    let factors8 = new Array(0.01,0.000001,0.00000062137,0.00328084,0.00109361,0.1,0.039371,1)
    let factors = new Array(factors1,factors2,factors3,factors4,factors5,factors6,factors7,factors8);
    
    function convertUnit()
    {
      // Grab the correct conversion factor from our arrays
      fromIndex = document.lengthCon.fromUnit.selectedIndex;
      toIndex = document.lengthCon.toUnit.selectedIndex;
      factor = factors[fromIndex][toIndex];
      // Create the text that we want to write on the middle line
      fromUnitText = document.lengthCon.fromUnit.options[document.lengthCon.fromUnit.selectedIndex].text;
      toUnitText = document.lengthCon.toUnit.options[document.lengthCon.toUnit.selectedIndex].text;
      document.getElementById("formula").innerHTML = fromUnitText + ' = ' + factor + ' ' + toUnitText;
      // Check the input box to make sure we have a valid number
      if(isNaN(document.lengthCon.fromValue.value))
        document.getElementById("toValue").innerHTML = "Not a valid number.";
      // Output the converted number...last number on last line
      else {
        document.getElementById("toValue").innerHTML = `value:${factor * document.lengthCon.fromValue.value}`;
      }
    }