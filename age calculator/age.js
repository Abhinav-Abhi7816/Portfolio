const incont=document.getElementById('initial-container');
const doBBtn=document.getElementById('dob-btn');
const date11=document.getElementById('date1');
let dobopen =false;
const datECont=document.getElementById('datecon');
let dateval;
let newdate;
let datEAdd=document.getElementById('add-btn');
const yearel=document.getElementById('years');
const monthel=document.getElementById('months');
const dayel=document.getElementById('days');
const hourel=document.getElementById('hours');
const minel=document.getElementById('minutes');
let secel=document.getElementById('sec');
const secB=document.getElementById('section-b');
const secA=document.getElementById("sec-a")
open();
function open()
{ 
    if(dobopen==false)
    {
        datECont.classList.add("hide");
        doBBtn.textContent="Enter DOB";
    }
    else{
        datECont.classList.remove("hide");
        doBBtn.textContent="close";
    }
    dobopen=!dobopen;
}
doBBtn.addEventListener('click',function(){
    open();
})
datEAdd.addEventListener('click',function()
{
    calculate();
    hide();
    setInterval(() => {
        
    calculate()}, 1000);
})

function calculate()
{  
    let today=new Date;
    datestring=date11.value;
    dateval=new Date(datestring);
    newdate=today-dateval;
    
    let year=Math.floor(newdate/(1000*60*60*24*365));
    let months=Math.floor(newdate/(1000*60*60*24*30))%12;
    let day=Math.floor(newdate/(1000*60*60*24))%30;
    let hour=Math.floor(newdate/(1000*60*60))%24;
    let minute=Math.floor(newdate/(1000*60))%60;
    let sec=Math.floor(newdate/(1000))%60;
    yearel.textContent=year;
    monthel.textContent=months;
    dayel.textContent=day;
    hourel.textContent=hour;
    minel.textContent=minute;
    secel.textContent=sec;
}
function hide()
{   
    secA.classList.add("hide");
    secB.classList.remove("hide");
}