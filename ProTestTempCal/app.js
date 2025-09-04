function FtoC(ftemp)
{
    let ctemp = (ftemp - 32) * 5/9
    return "Temperature from F to C : " + ctemp.toFixed(2) + " C"
}
function CtoF(ctemp)
{
    let ftemp = (ctemp * 9/5) + 32
    return "Temperature from C to F : " + ftemp.toFixed(2) + " F"
}
function display(ElementId, value)
{
    document.getElementById(ElementId).innerHTML = "<b>" + value + "</b>"
}

var choice = prompt("Enter choice : \n1. F to C \n2. C to F")
if(choice == 1){
    let ftemp = prompt("Enter temperature in F : ")
    alert(FtoC(ftemp))
    display("result", FtoC(ftemp))
}
else if(choice == 2){
    let ctemp = prompt("Enter temperature in C : ")
    alert(CtoF(ctemp)) 
    display("result", CtoF(ctemp))
}