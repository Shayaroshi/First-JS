let score = prompt("Enter your score (0-100) : ")
if (score < 50){
    document.getElementById("result").innerHTML = "คุณได้เกรด F!!!"
}
else if (score < 60){
    document.getElementById("result").innerHTML = "คุณได้เกรด D!!!"
}
else if (score < 70){
    document.getElementById("result").innerHTML = "คุณได้เกรด C!!!"
}
else if (score < 80){
    document.getElementById("result").innerHTML = "คุณได้เกรด B!!!"
}
else{
    document.getElementById("result").innerHTML = "คุณได้เกรด A!!!"
}   