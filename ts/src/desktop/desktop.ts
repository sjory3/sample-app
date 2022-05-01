import { AppWindow } from "../AppWindow";
import { kWindowNames } from "../consts";


let data;

function getData(){   
    const url = "https://script.google.com/macros/s/AKfycbwD8pCJpdyJrR4mEFvcrdfYsdLFgqBddOipMXPTHWC0iqXP3J3LHg5CFA4GrpVUP9gX/exec";
    fetch(url,{mode: 'no-cors', method: 'GET'})
    .then(d => d.json())
    .then((json) => {
        document.getElementById("middle").textContent =  json[1];
        console.log(json[0]);
        console.log(json[1]);
        console.log(json[2]);
        console.log(json[3]);
    });

}

document.getElementById("btn").addEventListener("click", getData); 

// The desktop window is the window displayed while game is not running.
// In our case, our desktop window has no logic - it only displays static data.
// Therefore, only the generic AppWindow class is called.
new AppWindow(kWindowNames.desktop);
