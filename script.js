document.querySelector("#clear").addEventListener("click",()=>{
    document.querySelector("#display").value=" ";
})

const backspace =()=>{
   const num = document.querySelector("#display").value.slice(0,-1);
   document.querySelector("#display").value=num;
   

}