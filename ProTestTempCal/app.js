function FtoC(ftemp)
{
    let ctemp = (ftemp - 32) * 5/9
    return ctemp.toFixed(2) + " °C"
}
function CtoF(ctemp)
{
    let ftemp = (ctemp * 9/5) + 32
    return ftemp.toFixed(2) + " °F"
}
// function display(ElementId, value)
// {
//     document.getElementById(ElementId).innerHTML = "<b>" + value + "</b>"
// }
function toCProgram(value)
{
    alert(FtoC(value))
}
function toFProgram(value)
{
    alert(CtoF(value))
}