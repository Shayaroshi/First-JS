function FtoC(){
    let choice = prompt("Enter choice : \n1. F to C \n2. C to F")
    if(choice == 1){
        let ftemp = prompt("Enter temperature in F : ")
        let ctemp = (ftemp - 32) * 5/9
        document.getElementById("result").innerHTML = "<p>" + "Temperature from F to C : " + ctemp.toFixed(2) + " C" + "</p>"
    }
    else if(choice == 2){
        let ctemp = prompt("Enter temperature in C : ")
        let ftemp = (ctemp * 9/5) + 32
        document.getElementById("result").innerHTML = "<p>" + "Temperature from C to F : " + ftemp.toFixed(2) + " F" + "</p>"
    }
}
FtoC()