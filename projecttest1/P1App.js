alert("Website for random lottery number generation")
let usernumber = prompt("Enter your number (1-999)")
let lotterynumber = Math.floor(Math.random() * 1000)
if(usernumber == lotterynumber){
    document.getElementById("alert").innerHTML = "ยินดีด้วย!! คุณถูกรางวัลเลขท้าย 3 ตัว"
} 
else{
    document.getElementById("alert").innerHTML = "เสียใจด้วย คุณไม่ถูกรางวัลเลขท้าย 3 ตัว"
}
document.getElementById("result").innerHTML = "User = " + usernumber
document.getElementById("random").innerHTML = "Lottery = " + lotterynumber