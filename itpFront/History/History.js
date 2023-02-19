
// show_hide
let a;
function show_hide()
{
    
    if(a==1)
    {
        document.getElementById("display1").style.display="none";
        document.getElementById("display2").style.display="none";
        document.getElementById("display3").style.display="none";

        return a=0;
    }
    else
    {
        document.getElementById("display1").style.display="flex";
        document.getElementById("display2").style.display="flex";
        document.getElementById("display3").style.display="flex";
        return a=1;
    }
}

