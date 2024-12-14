
const dateElement=document.querySelector(".date-value");
function display(){
  const myDate=new Date();
let dateValue=myDate.toLocaleTimeString()
dateElement.textContent=dateValue;
}


const id=setInterval(()=>{display()}, 1000);

