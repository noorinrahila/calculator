// open and close the hamburger menu
function openMenu(){
    document.getElementById("myMenu").style.height = "100%"
    }
    function closeMenu(){
        document.getElementById("myMenu").style.height = "0%" 
    }
    let factors1 = new Array(1, 33.8, 274.15);
    let factors2 = new Array(-17.222, 1, 255.928);
    let factors3 = new Array(-272.15, -457.87, 1);

      let factors = new Array(factors1,factors2,factors3);
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