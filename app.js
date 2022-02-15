const chair = 25;
const daw = 68;
const loungo = 90;


function  chairFunction(sum, id, price) {
    let chirFeild = document.querySelector(id+"-input");
    
    if (sum == true) {
        chirFeild.value ++;
    } else if(chirFeild.value > 0){
        chirFeild.value --;

    }
    document.querySelector(id+"-price").innerText = chirFeild.value * price;
    calcalut()

}
function percentage(percent, total) {
    return ((percent/ 100) * total).toFixed(2)
}

function calcalut(){
    let chairTotal = document.querySelector("#chair-price").innerText;
    let dawTotal = document.querySelector("#daw-price").innerText;
    let loungoTotal = document.querySelector("#loungo-price").innerText;
    let subTotal = document.querySelector("#sub-total")
    subTotal.innerText = parseInt(chairTotal) + parseInt(dawTotal) + parseInt(loungoTotal);
    let subTotalConvert = parseInt(subTotal.innerText);
    let tax = percentage(5, subTotalConvert);
    document.querySelector("#tax").innerText = tax;
    document.querySelector("#total").innerText = subTotalConvert + parseInt(tax);
     
}

// chair 
document.querySelector("#chair-plus").addEventListener("click", function  (e) {
    let sum = true;
    chairFunction(sum, "#chair", chair)
})

document.querySelector("#chair-minus").addEventListener("click", function  (e) {
    let sum = false;
    chairFunction(sum, "#chair", chair)
})



// daw 
document.querySelector("#daw-plus").addEventListener("click", function  (e) {
    let sum = true;
    chairFunction(sum, "#daw", daw)
})

document.querySelector("#daw-minus").addEventListener("click", function  (e) {
    let sum = false;
    chairFunction(sum, "#daw", daw)
})

// loungo
document.querySelector("#loungo-plus").addEventListener("click", function  (e) {
    let sum = true;
    chairFunction(sum, "#loungo", loungo)
})

document.querySelector("#loungo-minus").addEventListener("click", function  (e) {
    let sum = false;
    chairFunction(sum, "#loungo", loungo)
})
