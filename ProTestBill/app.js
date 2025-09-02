let qrt_item = prompt("Enter amout of items : ")
let sum = 0
for(let i = 1; i <= qrt_item; i++)
{
    let price_item = prompt("Enter price of item No " + i + " : ")
    sum += parseInt(price_item)
    document.getElementById("list").innerHTML += "Item No " + i + " : " + price_item + " Bath" + "<br>"
}
document.getElementById("sum").innerHTML = "Total of price : " + sum + " Bath"