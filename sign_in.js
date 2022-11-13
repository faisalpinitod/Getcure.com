let m=document.querySelector("#bun").addEventListener("click",myfun) 
myfun()
function myfun(event){
    event.preventDefault()
    let n=document.querySelector("#num").value 
    if(n.length<10 || n.length>10){
        alert("Please Type Correct Number")
    }else{
        window.open("create_account.html")
    }
}

