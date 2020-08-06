
const input = function (name) {
     if (name) {
          alert(`Your name is ${name}`);
     } 
     else {
          alert(`Invalid Input`);
     }
}

let name = window.prompt("Please enter your name");
input(name)

