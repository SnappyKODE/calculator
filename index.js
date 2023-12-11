import toggle from "./toggle.js";

toggle();

let btn = Array.from(document.querySelectorAll("button"));
let screen = document.querySelector("h1")
let v = "";
var a=0,b = 0,c=1,operator;

btn.forEach(element => {
    element.addEventListener("click",()=>{
        if(element.value=="reset"){
            v="";
            screen.innerHTML=v;
        }
        else if(element.value=="del"){
            v = v.substring(0, v.length - 1);
            screen.innerHTML=v;
        }
        else if(element.value == "+"){
            b=b+a;
            a=0;
            v="";
            // console.log(element.value);
            // console.log(b);
            screen.innerHTML="+";
            operator="+";

        }
        else if(element.value == "-"){
            b=Math.abs(b-a);
            a=0;
            v="";
            // console.log(element.value);
            // console.log(b);
            screen.innerHTML="-";
            operator="-";
        }
        else if(element.value == "*"){
            c=Math.abs(c*a);
            b=c;
            a=0;
            v="";
            // console.log(element.value);
            // console.log(b);
            screen.innerHTML="x";
            operator="*";
        }
        else if(element.value == "/"){
            c= c>1 ? Math.abs(c/a) : a;
            b=c;
            a=0;
            v="";
            // console.log(element.value);
            // console.log(b);
            screen.innerHTML="/";
            operator="/";
        }
        else if(element.value == "equal"){
            // console.log(b);
            // screen.innerHTML=b;

            if(operator == "+"){
                b=b+a;
                // console.log(b);
                screen.innerHTML=b;
                operator=""
            }
            if(operator == "-"){
                b=Math.abs(b-a);
                // console.log(b);
                screen.innerHTML=b;
                operator=""
            }
            if(operator == "*"){
                c=Math.abs(c*a);
                b=c;
                // console.log(b);
                screen.innerHTML=b;
                operator=""
            }
            if(operator == "/"){
                c= c>1 ? Math.abs(c/a) : a;
                b=c;
                // console.log(b);
                screen.innerHTML=b;
                operator=""
            }
            a=b;
            b=0;
            c=1;
            v=""
            // screen.innerHTML=b;
        }
        else{
            // console.log(element.value);
            v = v+element.value;
            a=Number(v);
            screen.innerHTML=v;
        }
        
    })

});




