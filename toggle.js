var state1 = document.querySelector("#state1");
var state2 = document.querySelector("#state2");
var state3 = document.querySelector("#state3");
var Switch = document.getElementById("theme-switcher")

export default function themeToggle(){
    state1.addEventListener("click",()=>{
        state2.checked =false;
        state3.checked = false;
        Switch.href =""
})

state2.addEventListener("click",()=>{
    state1.checked =false;
    state3.checked = false;
    Switch.href ="./styles/theme2.css";
})

state3.addEventListener("click",()=>{
    state2.checked =false;
    state1.checked = false;
    Switch.href ="./styles/theme3.css"
})
}
