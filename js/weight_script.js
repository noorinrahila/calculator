// open and close the hamburger menu
function openMenu(){
    document.getElementById("myMenu").style.height = "100%"
    }
    function closeMenu(){
        document.getElementById("myMenu").style.height = "0%" 
    }
    let factors1 = new Array(1, 0.000001, 0.01,0.0000022046,0.000000001,0.000035274);
    let factors2 = new Array(1000000, 1, 1000,2.20462,0.001,35.274);
    let factors3 = new Array(1000, 0.001, 1,0.00220462,0.000001,0.035274);
    let factors4 = new Array(453592,0.453592,453.592,1,0.000453592,16);
    let factors5 = new Array(1000000000,1000,1000000,2204.62,1,35274);
    let factors6= new Array(28349.5,0.0283495,28.3495,0.0625,0.00002835,1);
      let factors = new Array(factors1,factors2,factors3,factors4,factors5,factors6);
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