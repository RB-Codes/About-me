'use strict'

alert('Welcome to the page');
alert('Wanna start guessing?');
var joinus = prompt('type (Sure/Later)');
var joinusin = joinus.toLocaleLowerCase();
console.log(joinusin);
switch (joinus.toLocaleLowerCase()) {
    case 'sure':
        alert('Seems you are confident');
        console.log('Seems you are confident');

        break;
    case 'later':
        alert('As you like!');
        console.log('user did not like the page');
        break;
    default:
        alert('I have to know if you are sure');
        console.log('You are not answering');
        
        while (joinus === null); {
            prompt (joinus)
        }

        



        function rightanswer() { }
}