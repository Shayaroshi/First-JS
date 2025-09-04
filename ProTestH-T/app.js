var round = prompt("Enter the number of rounds to toss : ")
var point = 0
for(var i = 0; i < round; i++){
    let user = prompt("Enter your choice (head/tail) : ")
    let random_value = ""
    if(Math.floor(Math.random() * 2) == 0){
        random_value = "head"
    }
    else{
        random_value = "tail"
    }3
    if(user == random_value){
        alert("You win!!!")
        point += 1
    }
    else{
        alert("You lose!!!")
    }
    document.getElementById("game-list").innerHTML += "<h4> Round " + (i+1) + " : You choose " + "[" + user + "]" + " Correct answer is " + "[" + random_value + "]" + "</h4>"
}
document.getElementById("total-point").innerHTML = "Total Point : " + point