// open and close the hamburger menu
function openMenu(){
    document.getElementById("myMenu").style.height = "100%"
    }
    function closeMenu(){
        document.getElementById("myMenu").style.height = "0%" 
    }
//Declaring and initializing the variables
let submit = document.getElementById("submit");
let output = document.getElementById("output");

submit.addEventListener("click",()=>{
    // create a Date object from input value
    let date1 = new Date(document.getElementById("date-1").value);
    let date2 = new Date(document.getElementById("date-2").value);
    // check if the input dates are valid
    //if valid calculate the differnce
    if(date1.getTime()&& date2.getTime() ){
        //calculate difference in time using getTime function
        //getTime calculates number of year since January 1,1970
        let timedifference = date2.getTime() - date1.getTime();
        let dayDifference=Math.abs(timedifference/(1000*3600*24));
        output.innerHTML =`Difference between the two dates is 
        <span> ${dayDifference} </span> days`;
    }
    else{
        output.innerHTML ="please enter valid dates";
    }
    
})