
//  let count1=Number(localStorage.getItem("count")) || 0
let data1=JSON.parse(localStorage.getItem("cart")) 
displaycart(data1)
let total= localStorage.getItem("total") ||0
function displaycart(data){
    
    let total= 0
    // let count1=1 
    // console.log(data)
   if(data.length===0){
    document.querySelector("#cart1").innerHTML=""
    let divu=document.createElement("div")
     let img=   document.createElement("img")
     divu.setAttribute("class","emptycart")
        img.setAttribute("src","https://www.netmeds.com/msassets/images/emptycart.svg")
       
        divu.append(img)
        document.querySelector("#cart1").append(divu)
        
   }else{
    document.querySelector("#cart1").innerHTML=""
    data.forEach((ele,i) => {
        
        let divu=document.createElement("div")

        let divx=document.createElement("div")

        let divy=document.createElement("div")

        let div1=document.createElement("div")

        let div2=document.createElement("div")
        
        let img=document.createElement("img")
        img.setAttribute("src",ele.img)
        div1.append(img)

        let tittle=document.createElement("h2")
        tittle.innerText=ele.tittle

        let cat=document.createElement("p")
        cat.innerText="Mfr: Inlife Pharma Private Limited"

        let price=document.createElement("h2")
        price.innerText="Best Price : "+ele.price

        let date=document.createElement("p")
        date.innerText="Delivery between NOVEMBER 11-NOVEMBER 12"

        div2.append(tittle,cat,price,date)

       divx.append(div1,div2)
        
        total+=Number(ele.price)

        document.querySelector("#t").innerText="MRP TOTAL : "+total
        document.querySelector("#D").innerText="GETCURE DISCOUNT : 20 "
        document.querySelector("#a").innerText="TOTAL AMOUNT : "+(total-20)
        document.querySelector("#s").innerText="TOTAL SAVINGS : "+20

        localStorage.setItem("total",total)


        let hr=document.createElement("hr")

        

        divu.append(divx)

        document.querySelector("#cart1").append(divu,hr)
    });
   }
    
}



