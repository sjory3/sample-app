import { GoogleAuth } from "google-auth-library";
import { AppWindow } from "../AppWindow";
import { kWindowNames } from "../consts";


function getData(){   
    const url = "https://script.google.com/macros/s/AKfycbz4PwWwNyg5SDuizRr-X-IzqJ2LAaWrSqM4u63cy25LJB2MEjiLqG9efmjccsrb9xaE/exec";
    fetch(url,{mode: 'no-cors',})
    .then(d => d.json())
    .then(d => {
        document.getElementById("middle").textContent =  d[1];
        console.log(d[0]);
        console.log(d[1]);
        console.log(d[2]);
        console.log(d[3]);
    });
}

document.getElementById("btn").addEventListener("click", getData); 


// The desktop window is the window displayed while game is not running.
// In our case, our desktop window has no logic - it only displays static data.
// Therefore, only the generic AppWindow class is called.
new AppWindow(kWindowNames.desktop);
