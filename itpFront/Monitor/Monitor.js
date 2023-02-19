// import{confirmModal} from './modals'

// show_hide

let a;

/*
a = 1 กด
a = 0 ไม่กด
 */

function show_hide()
{
    // confirmModal("su", "tee");

    if(a==1)
    {
        // ใส่ id ของส่วนที่อยากให้ show hide
        document.getElementById("display1").style.display="none";
        document.getElementById("display2").style.display="none";
        return a=0;
    }
    else
    {
        document.getElementById("display1").style.display="flex";
        document.getElementById("display2").style.display="flex";
        return a=1;
    }
}

// click floor plan return x y
document.getElementById('click-me').onclick = function clickEvent(e){
    // e = Mouse click event.
    var rect = e.target.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    console.log("x = " + x + " // Y = " + y + ".");
}
