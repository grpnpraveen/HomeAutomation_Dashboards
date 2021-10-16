var light1_on=false;
var light2_on=false;
var light3_on=false;
var light4_on=false;
function bulb_on_off(x)
{
switch(x)
{
    case 1:
        var livingroom=document.getElementById("livingroom_bulb");

        if(light1_on)
        {
        livingroom.style.fill ="rgba(255, 69, 0,0.26)" ;
        light1_on=!light1_on;
        }
        else{
        livingroom.style.fill ="rgba(255, 69, 0,1)" ;
        light1_on=!light1_on;
        }
        break;
    case 2:
        var kitchen=document.getElementById("kitchen_bulb");

        if(light2_on)
        {
            kitchen.style.fill ="rgba(255, 69, 0,0.26)" ;
        light2_on=!light2_on;
        }
        else{
            kitchen .style.fill ="rgba(255, 69, 0,1)" ;
        light2_on=!light2_on;
        }
        break;
    case 3:
        var bedroom_bulb=document.getElementById("bedroom_bulb");

        if(light3_on)
        {
            bedroom_bulb.style.fill ="rgba(255, 69, 0,0.26)" ;
        light3_on=!light3_on;
        }
        else{
            bedroom_bulb .style.fill ="rgba(255, 69, 0,1)" ;
        light3_on=!light3_on;
        }
        break;
    case 4: 
    var dinning_bulb=document.getElementById("dinning_bulb");

    if(light4_on)
    {
        dinning_bulb.style.fill ="rgba(255, 69, 0,0.26)" ;
    light4_on=!light4_on;
    }
    else{
        dinning_bulb .style.fill ="rgba(255, 69, 0,1)" ;
    light4_on=!light4_on;
    }
        break;
}
}


var fan1_on=false;
var fan2_on=false;
var fan3_on=false;
var fan4_on=false;

function fan_on_off(x)
{

    switch(x)
{
    case 1:
        var fan1=document.getElementById("fan1");

        if(fan1_on)
        {
            fan1.style.animation ="none" ;
        fan1_on=!fan1_on;
        }
        else{
            fan1.style.animation =" 3s linear 0s infinite rotate360" ;
        fan1_on=!fan1_on;
        }
        break;
    case 2:
        var fan2=document.getElementById("fan2");

        if(fan2_on)
        {
            fan2.style.animation ="none" ;
        fan2_on=!fan2_on;
        }
        else{
            fan2.style.animation ="  3s linear 0s infinite rotate360" ;
        fan2_on=!fan2_on;
        }
        break;
    case 3:
        var fan3=document.getElementById("fan3");

        if(fan3_on)
        {
            fan3.style.animation ="none" ;
        fan3_on=!fan3_on;
        }
        else{
            fan3.style.animation ="  3s linear 0s infinite rotate360" ;
        fan3_on=!fan3_on;
        }
        break;
    case 4: 
    var fan4=document.getElementById("fan4");

    if(fan4_on)
    {
        fan4.style.animation ="none" ;
    fan4_on=!fan4_on;
    }
    else{
        fan4.style.animation ="  3s linear 0s infinite rotate360" ;
    fan4_on=!fan4_on;
    }
        break;
}
}