var r;

function disbutton() {
    if (document.getElementById("bin").checked) {
        document.getElementById("b1").disabled = false;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        document.getElementById("b0").disabled = false;
        document.getElementById("ba").disabled = true;
        document.getElementById("bb").disabled = true;
        document.getElementById("bc").disabled = true;
        document.getElementById("bd").disabled = true;
        document.getElementById("be").disabled = true;
        document.getElementById("bf").disabled = true
    } else if (document.getElementById("dec").checked) {
        document.getElementById("b1").disabled = false;
        document.getElementById("b2").disabled = false;
        document.getElementById("b3").disabled = false;
        document.getElementById("b4").disabled = false;
        document.getElementById("b5").disabled = false;
        document.getElementById("b6").disabled = false;
        document.getElementById("b7").disabled = false;
        document.getElementById("b8").disabled = false;
        document.getElementById("b9").disabled = false;
        document.getElementById("b0").disabled = false;
        document.getElementById("ba").disabled = true;
        document.getElementById("bb").disabled = true;
        document.getElementById("bc").disabled = true;
        document.getElementById("bd").disabled = true;
        document.getElementById("be").disabled = true;
        document.getElementById("bf").disabled = true
    } else if (document.getElementById("hex").checked) {
        document.getElementById("b1").disabled = false;
        document.getElementById("b2").disabled = false;
        document.getElementById("b3").disabled = false;
        document.getElementById("b4").disabled = false;
        document.getElementById("b5").disabled = false;
        document.getElementById("b6").disabled = false;
        document.getElementById("b7").disabled = false;
        document.getElementById("b8").disabled = false;
        document.getElementById("b9").disabled = false;
        document.getElementById("b0").disabled = false;
        document.getElementById("ba").disabled = false;
        document.getElementById("bb").disabled = false;
        document.getElementById("bc").disabled = false;
        document.getElementById("bd").disabled = false;
        document.getElementById("be").disabled = false;
        document.getElementById("bf").disabled = false
    } else if (document.getElementById("oct").checked) {
        document.getElementById("b1").disabled = false;
        document.getElementById("b2").disabled = false;
        document.getElementById("b3").disabled = false;
        document.getElementById("b4").disabled = false;
        document.getElementById("b5").disabled = false;
        document.getElementById("b6").disabled = false;
        document.getElementById("b7").disabled = false;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        document.getElementById("b0").disabled = false;
        document.getElementById("ba").disabled = true;
        document.getElementById("bb").disabled = true;
        document.getElementById("bc").disabled = true;
        document.getElementById("bd").disabled = true;
        document.getElementById("be").disabled = true;
        document.getElementById("bf").disabled = true
    }
}

function dis() {
    if (document.getElementById("bin").checked) {
        document.getElementById("opbin").disabled = true;
        document.getElementById("opdec").disabled = false;
        document.getElementById("ophex").disabled = false;
        document.getElementById("opoct").disabled = false
    } else if (document.getElementById("dec").checked) {
        document.getElementById("opbin").disabled = false;
        document.getElementById("opdec").disabled = true;
        document.getElementById("ophex").disabled = false;
        document.getElementById("opoct").disabled = false
    } else if (document.getElementById("hex").checked) {
        document.getElementById("opbin").disabled = false;
        document.getElementById("opdec").disabled = false;
        document.getElementById("ophex").disabled = true;
        document.getElementById("opoct").disabled = false
    } else if (document.getElementById("oct").checked) {
        document.getElementById("opbin").disabled = false;
        document.getElementById("opdec").disabled = false;
        document.getElementById("ophex").disabled = false;
        document.getElementById("opoct").disabled = true
    }
}

function setr() {
    document.getElementById("box").disabled = true;
    if (document.getElementById("bin").checked) r = 2;
    else if (document.getElementById("dec").checked) r = 10;
    else if (document.getElementById("hex").checked) r = 16;
    else if (document.getElementById("oct").checked) r = 8
}

function btn1() {
    var x = document.getElementById("box");
    x.value = x.value + "1"
}

function btn2() {
    var x = document.getElementById("box");
    x.value = x.value + "2"
}

function btn3() {
    var x = document.getElementById("box");
    x.value = x.value + "3"
}

function btn4() {
    var x = document.getElementById("box");
    x.value = x.value + "4"
}

function btn5() {
    var x = document.getElementById("box");
    x.value = x.value + "5"
}

function btn6() {
    var x = document.getElementById("box");
    x.value = x.value + "6"
}

function btn7() {
    var x = document.getElementById("box");
    x.value = x.value + "7"
}

function btn8() {
    var x = document.getElementById("box");
    x.value = x.value + "8"
}

function btn9() {
    var x = document.getElementById("box");
    x.value = x.value + "9"
}

function btn0() {
    var x = document.getElementById("box");
    x.value = x.value + "0"
}

function btna() {
    var x = document.getElementById("box");
    x.value = x.value + "A"
}

function btnb() {
    var x = document.getElementById("box");
    x.value = x.value + "B"
}

function btnc() {
    var x = document.getElementById("box");
    x.value = x.value + "C"
}

function btnd() {
    var x = document.getElementById("box");
    x.value = x.value + "D"
}

function btne() {
    var x = document.getElementById("box");
    x.value = x.value + "E"
}

function btnf() {
    var x = document.getElementById("box");
    x.value = x.value + "F"
}

function clr() {
    var x = document.getElementById("box");
    x.value = ""
}

function process() {
    if (document.getElementById("bin").checked) {
        handle_bin()
    } else if (document.getElementById("dec").checked) {
        handle_dec()
    } else if (document.getElementById("hex").checked) {
        handle_hex()
    } else if (document.getElementById("oct").checked) {
        handle_oct()
    }
}

function handle_bin() {
    if (document.getElementById("opdec").checked) {
        converttodec()
    } else if (document.getElementById("ophex").checked) {
        converttohex()
    } else if (document.getElementById("opoct").checked) {
        converttooct()
    }
}

function handle_dec() {
    if (document.getElementById("opbin").checked) {
        converttobin()
    } else if (document.getElementById("ophex").checked) {
        converttohex()
    } else if (document.getElementById("opoct").checked) {
        converttooct()
    }
}

function handle_hex() {
    if (document.getElementById("opdec").checked) {
        converttodec()
    } else if (document.getElementById("opoct").checked) {
        converttooct()
    } else if (document.getElementById("opbin").checked) {
        converttobin()
    }
}

function handle_oct() {
    if (document.getElementById("opdec").checked) {
        converttodec()
    } else if (document.getElementById("ophex").checked) {
        converttohex()
    } else if (document.getElementById("opbin").checked) {
        converttobin()
    }
}

function converttobin() {
    var no = document.getElementById("box");
    var y = parseInt(no.value, r);
    var z = y.toString(2);
    no.value = z
}

function converttodec() {
    var no = document.getElementById("box");
    var y = parseInt(no.value, r);
    no.value = y
}

function converttohex() {
    var no = document.getElementById("box");
    var y = parseInt(no.value, r);
    var z = y.toString(16);
    no.value = z
}

function converttooct() {
    var no = document.getElementById("box");
    var y = parseInt(no.value, r);
    var z = y.toString(8);
    no.value = z
}

function openMenu(){
    document.getElementById("myMenu").style.height = "100%"
    }
    function closeMenu(){
        document.getElementById("myMenu").style.height = "0%" 
    }

    const themeToggleBtn = document.querySelector('.theme-toggler');
 const calculator = document.querySelector('.calculator');
 const toggleIcon = document.querySelector('.toggler-icon');
 let isDark = true;
 themeToggleBtn.onclick = () =>{
     calculator.classList.toggle('dark');
     themeToggleBtn.classList.toggle('active');
     isDark = !isDark;
 }