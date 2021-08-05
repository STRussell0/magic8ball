// Created an array of all the potential answers

const answer = [
    './magic/magic8ball_1.png',
    './magic/magic8ball_2.png',
    './magic/magic8ball_3.png',
    './magic/magic8ball_4.png',
    './magic/magic8ball_5.png',
    './magic/magic8ball_6.png',
    './magic/magic8ball_7.png',
    './magic/magic8ball_8.png',
    './magic/magic8ball_9.png',
    './magic/magic8ball_10.png',
    './magic/magic8ball_11.png',
    './magic/magic8ball_12.png',
    './magic/magic8ball_13.png',
    './magic/magic8ball_14.png',
    './magic/magic8ball_15.png',
    './magic/magic8ball_16.png',
    './magic/magic8ball_17.png',
    './magic/magic8ball_18.png',
    './magic/magic8ball_19.png',
    './magic/magic8ball_20.png',
]

// An array of potential "thinking" responses while it comes up with an answer

const response = ['One moment please...', 'Hold on just a moment...', 'Give me a few seconds...', 'Calculating response...'];

// Used getElementByID for the image. Started with the extra image (looks better than start to me personally)

const start = document.getElementById('start');
start.src = './magic/magic8ball_extra.png';
start.style.width = '400px';

// Used querySelector for the remaining variables

const ask = document.querySelector('label')
ask.innerHTML = 'Ask me anything!';
ask.style.fontSize = '36px';

const input = document.querySelector('input');

// First button has an click event where it will perform a function created below that hides all elements except the image. The event also changes the source of the image to a random one from the list of 20. This button will throw an alert out if you attempt to press it without entering anything into the input field. It also now performs the shake function.

const button = document.querySelector('#button');
button.innerHTML = 'Submit';
button.addEventListener('click', function() {

    if (input.value < 1) {
        alert('Please ask a question!');
}   else {
    shake();
    ask.innerHTML = response[Math.floor(Math.random() * response.length)];
    setTimeout(hideAll, 2000);
    
}});

// This is the second button. It starts out being hidden, but will appear after the first button is pressed. This button has an event that will perform a function created below that will return all elements to their starting positions.

const button2 = document.querySelector('.button');
button2.innerHTML = 'Try again?';
button2.style.display = 'none';
button2.addEventListener('click', function () {
    returnAll();
})


// hideAll will hide the original buttons, but will allow the Try Again button to appear. It also changes the label to display the input value.

function hideAll() {
    input.style.display = 'none';
    button.style.display = 'none';
    button2.style.display = 'block';
    ask.innerHTML = input.value;
    start.src = answer[Math.floor(Math.random() * answer.length)];
}

// returnAll will return all the original buttons, but will hide the Try Again button. It also displays the original start image of the magic 8 ball and will delete the contents of the input field from before.

function returnAll() {
    ask.innerHTML = 'Ask me anything!';
    input.style.display = 'block';
    input.value = '';
    button.style.display = 'block';
    start.src = './magic/magic8ball_extra.png';
    button2.style.display = 'none';
}

// function that will add a class that will animate the magic 8 ball, but after 2 seconds, it will be removed.

function shake() {
    start.classList.add('shake');

    setTimeout(function() {
        start.classList.remove('shake');
    }, 2000)
}

//Problems I had with this project:

//Initially tried to do GetElementByID for all elements, but could not change their display value. Was able to fix by using QuerySelector

//Had to use the entirety of math.random instead of giving a variable the value of math.random. While console.log would give me a new answer, hitting the button would result in the same answer given each time.