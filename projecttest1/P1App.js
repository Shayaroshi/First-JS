alert("Website for random lottery number generation")
var usernumber = prompt("Enter your number (1-99)")
document.getElementById("result").innerHTML = "User = " + usernumber
document.getElementById("random").innerHTML = "Lottery = " + Math.floor(Math.random() * 100)