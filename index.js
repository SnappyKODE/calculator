import toggle from "./toggle.js";

toggle();

let btn = Array.from(document.querySelectorAll("button"));
let screen = document.querySelector("h1")
let v = "";
var a=0,b = 0,c=1,operator;

function printReset(op){
    a=0;
    v="";
    screen.innerHTML=op;
    operator=op;
}

btn.forEach(element => {
    element.addEventListener("click",()=>{
        if(element.value=="reset"){
            a=b;
            b=0;
            c=1;
            v="";
            screen.innerHTML=v;
        }
        else if(element.value=="del"){
            v = v.substring(0, v.length - 1);
            screen.innerHTML=v;
        }
        else if(element.value == "+"){
            b=b+a;
            printReset(element.value);
        }
        else if(element.value == "-"){
            b=Math.abs(b-a);
            printReset(element.value);
        }
        else if(element.value == "*"){
            c=Math.abs(c*a);
            b=c;
            printReset(element.value);
        }
        else if(element.value == "/"){
            c= c>1 ? Math.abs(c/a) : a;
            b=c;
            printReset(element.value);
        }
        else if(element.value == "equal"){

            if(operator == "+"){
                b=b+a;
                screen.innerHTML=b;
                operator=""
            }
            if(operator == "-"){
                b=Math.abs(b-a);
                screen.innerHTML=b;
                operator=""
            }
            if(operator == "*"){
                c=Math.abs(c*a);
                b=c;
                screen.innerHTML=b;
                operator=""
            }
            if(operator == "/"){
                c= c>1 ? Math.abs(c/a) : a;
                b=c;
                screen.innerHTML=b;
                operator=""
            }
            a=b;
            b=0;
            c=1;
            v="";

        }
        else{
            v = v+element.value;
            a=Number(v);
            screen.innerHTML=v;
        }
        
    })

});
