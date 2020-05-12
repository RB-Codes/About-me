'use srict'

var ageGuess = prompt('How old am I in months?')



while (ageGuess < 250); {
        alert('your guess is too low')
        prompt('How old am I in months?')
}
while (ageGuess !== 269 && ageGuess < 250 && ageGuess > 269); {
        alert('you are close, go a bit higher')
        prompt('How old am I in months?')
}

while (ageGuess > 290); {
        alert('dude I am not that old')
        prompt('How old am I in months?')
}
while (ageGuess !== 269 && ageGuess > 290 && ageGuess < 269); {
        alert('you are close, go a bit lower')
        prompt('How old am I in months?')
}

var favSnac = prompt('What is my favorite chocolate snack?')
var snacMenu = ['galaxy', 'snickers', 'twix', 'mars' ,'reeses', 'kinder']