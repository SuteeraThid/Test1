// show_hide
let a;
function show_hidden_tag()
{   
    if(a===1){}
    else
    {
        document.getElementById("table-tag").style.display="flex";
        document.getElementById("table-anchor").style.display="none";
        return a=0;
    }

    // if(a===1)
    // {
    //     document.getElementById("table-tag").style.display="none";
    //     document.getElementById("table-anchor").style.display="flex";
    //     return a=0;
    // }
    // else
    // {
    //     document.getElementById("table-tag").style.display="flex";
    //     document.getElementById("table-anchor").style.display="none";
    //     return a=1;
    // }

}


let b;
function show_hidden_anchor()
{
    if(b===1){}
    else{
        document.getElementById("table-anchor").style.display="flex";
        document.getElementById("table-tag").style.display="none";
        return b=0;
    }

    // if(a===1)
    // {
    //     return a=0;
    // }
    // else
    // {
    //     document.getElementById("table-anchor").style.display="flex";
    //     document.getElementById("table-tag").style.display="none";
    //     return a=1;
    // }
}