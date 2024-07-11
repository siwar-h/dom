var PlsBtn = document.getElementsByClassName('btnPls')
var minBtn = document.getElementsByClassName('btnMin')
console.log(PlsBtn)

var qtes = document.querySelectorAll('.qte')
console.log(typeof (+qtes[0].value))

var price = document.querySelectorAll('.price')
console.log(price)

console.log (typeof (+price[0].outerText))

var tot = document.querySelector('.totPrice')
console.log(tot)
console.log(tot.value)
console.log(typeof (+tot.outerText))

var heartBtn = document.querySelectorAll('.heart')

var del = document.querySelectorAll('.delete')
console.log("del",del)
// console.log(del[0].parentElement)

for (let i = 0; i < PlsBtn.length; i++) {
    PlsBtn[i].addEventListener("click" , () => {
        
        +qtes[i].value ++
        tot.value = +tot.value + (+price[i].value )  
    })
}
console.log(tot)

for (let i = 0; i < minBtn.length; i++) {
    minBtn[i].addEventListener("click" , test = ()=>{
        if(+qtes[i].value > 0){

            +qtes[i].value --
            tot.value = +tot.value - (+price[i].value )  
        }  
    })
    
}

for (let i = 0; i < del.length; i++) {
    del[i].addEventListener("click" , ()=>{
        console.log("i",i)
        del[i].parentElement.remove()
        tot.value = +tot.value - (+price[i].value * +qtes[i].value )  
    })    
    
}

for (let i = 0; i < heartBtn.length; i++) {
    heartBtn[i].addEventListener('click',()=>{
        console.log(heartBtn[i])
        if ( heartBtn[i].style.textDecoration === "none") {
            heartBtn[i].style.textDecoration = "line-through";
            heartBtn[i].style.color = "red";
          
          } else {
            heartBtn[i].style.textDecoration = "none";
            heartBtn[i].style.color = "blue";
          }
    })
    
}
