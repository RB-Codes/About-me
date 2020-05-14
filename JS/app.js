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
                        prompt(joinus)
                }
}

q1();
q2();
q3();




function q1() {
        var uanswer = prompt('Only one of these things I can not do, now type letters O and K')
        var unanswer2 = uanswer.toLocaleUpperCase;
        console.log('we are doing it baby')
        switch (uanswer.toLocaleUpperCase()) {
                case 'OK':
                        alert('you are amazing')
                        console.log('he said ok')
                        break;
        }
        alert('1.Rope skipping')
        alert('2.Play soccer')
        alert('3.Drifting')
        alert('4.Horse riding')

        var finalguess = prompt('Your guess is?')


        while (finalguess === '3'); {
                prompt('Your guess is?')
                console.log(finalguess)
        }
}


function q2() {
        var ageYear = 22;

        var answer = prompt('tell me how old am i ?');
        for (var i = 1; i < 4; i++) {
                if (answer > ageYear) {
                        alert('too high');
                        answer = prompt('tell me how old am i ?');
                } else if (answer < ageYear) {
                        alert('too low');
                        answer = prompt('tell me how old am i ?');
                } else if (answer == ageYear) {
                        alert('you are correct');
                        break;
                }

        }
}

function q3() {

        var favSnac = prompt('What is my favorite chocolate snack?');
        var snacMenu = ['galaxy', 'snickers', 'twix', 'mars', 'reeses', 'kinder'];
        var i = 0;
        var answer = false;

        while (i < 6) {

                favSnac = prompt('What is my favorite chocolate snack?');

                for (var j = 0; j < snacMenu.length; j++) {
                        if (favSnac == snacMenu[j]) {
                                alert('you are correct')
                                answer = true;
                                break;
                        }

                }
                if (answer) {
                        break;
                }
                i++;
        }


}
