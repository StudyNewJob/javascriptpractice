'use strict';

alert('Welcome to my Star Wars Fan Page!')

function getVisitor() {
    let visName = prompt('What is your name?');
    return userName;
}


function hello_vis(name) {
    while(name == null || name == ""){
        name = prompt('I need your name buddy');
    }

    if (name == null || name == ""){
        document.write('May the force be with you!');
    } else {
        document.write('Yer a jedi ' + name);
    }   
}



function ewoks() {
    let num = prompt('How many ewoks do you want to see (1-3)?');

    for(let i = 0; i < num; i++) {
        document.write("<img src='fedora.jpeg' alt='fedoras for everyone!' >")
        document.write(`<p>Hat number ${i + 1}</p>`)
    }
}
