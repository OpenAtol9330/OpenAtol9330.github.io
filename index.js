//function to show image of Blart
function blart() {

let image = document.getElementById("BlarkSon0");

BlarkSon0.src = "Blark.jpg"

document.getElementById('BlarkSon1');
}

//function to show image of Son
function son() {

let image = document.getElementById("BlarkSon0");

BlarkSon0.src = "Son.jpg"

document.getElementById('BlarkSon2');
}

//function to show image of Fletch
function fletch() {

let image = document.getElementById("BlarkSon0");

BlarkSon0.src = "Fletch.jpg"

document.getElementById('BlarkSon3');
}

//function to show image of Regina
function regina() {

let image = document.getElementById("BlarkSon0");

BlarkSon0.src = "Regina.jpg"

document.getElementById('BlarkSon4');
}

//function to show image of Stacy
function stacy() {

let image = document.getElementById("BlarkSon0");

BlarkSon0.src = "Stacy.jpg"

document.getElementById('BlarkSon5');
}

//function to show image of Junior
function junior() {

let image = document.getElementById("BlarkSon0");

BlarkSon0.src = "Junior.jpg"

document.getElementById('BlarkSon6');
}

//function to show image of Zeke
function zeke() {

let image = document.getElementById("BlarkSon0");

BlarkSon0.src = "Zeke.jpg"

document.getElementById('BlarkSon7');
}

//function to show image of Frankie
function frankie() {

let image = document.getElementById("BlarkSon0");

BlarkSon0.src = "Frankie.jpg"

document.getElementById('BlarkSon8');
}

//function to show the original image
function blarkandson() {

let image = document.getElementById("BlarkSon0");

BlarkSon0.src = "Blarkandson.jpg"

document.getElementById('Blarkandson');
}

//function to modify the size of the image
function size() { 
    //variable to show the image
    var picture = document.getElementById("zoolander1");
    const me = document.getElementById("winsize");
    let literally = me.valueAsNumber;
    picture.width = literally; 
} 

//function to check, sum and display your score
function answer() {
    //variable to select all class elements for the answers
    const questions = document.querySelectorAll(".question");
    //variable to create an answer for all the questions
    var answer_sheet = {
        "maincharacter": "postaldude",
        "voiceactor": "rickhunter",
        "days": "7",
        "factory": "napalm",
        "dadgrave": "wednesday",
        "weapon": "shovel",
        "wife": "bitch",
        "uncle": "dave",
        "health": "healthpipe",
        "games": "4"
    };

    var score = 0;
    questions.forEach((question) => {
    if(!(question.id in answer_sheet)) return;

        var questionValue = question.value.toLowerCase();
        var answerValue = answer_sheet[question.id].toLowerCase();

        if(questionValue == answerValue) {
            score++;
        }
        if (score >= 0 && score <= 2) {
            document.getElementById("answer").innerHTML = "Your score is: " + score + "/10";
            document.getElementById("subtext").innerHTML = "you know fuck all!";
        }
        else if (score >= 3 && score <= 5) {
            document.getElementById("answer").innerHTML = "Your score is: " + score + "/10";
            document.getElementById("subtext").innerHTML = "you know barely anything!";
        }
        else if (score >= 6 && score <= 7) {
            document.getElementById("answer").innerHTML = "Your score is: " + score + "/10";
            document.getElementById("subtext").innerHTML = "you know a decent amount!";
        }
        else if (score >= 8 && score <= 9) {
            document.getElementById("answer").innerHTML = "Your score is: " + score + "/10";
            document.getElementById("subtext").innerHTML = "you know loads!";
        }
        else if (score == 10) {
            document.getElementById("answer").innerHTML = "Your score is: " + score + "/10";
            document.getElementById("subtext").innerHTML = "true postal chad!";
        }
    });
}