//word list
const wordList = [
    {word: "acromantula",
     question: "What deadly creature did Hagrid let loose into the Forbidden Forest?"
    },
    {word: "alohomora",
     question: "What is the incantation to unlock something?"
    },
    {word: "animagus",
     question: "Someone who can at will transform into a specific animal is called what?"
    },
    {word: "arithmancy",
     question:"This is the study of the magical properties of numbers."
    },
    {word: "astronomy",
     question: "This is the study of the stars and planets."
    },
    {word: "azkaban",
     question: "What is the name of the wizarding prison?"
    },
    {word: "basilisk",
     question: "What type of creature was hidden in the Chamber of Secrets?"
    },
    {word: "beauxbatons",
     question: "What was the name of Fleur Delacour's school?"
    },
    {word: "bezoar",
     question: "What did Harry use to save Ron when he was poisoned?"
    },
    {word: "boggart",
     question: "What creature turned into Prof. Snape in a dress?"
    },
    {word: "bowtruckle",
     question: "These creatures look like sticks"
    },
    {word: "bubotuber",
     question: "The pus from this creature is used to cure acne."
    },
    {word: "cleansweep",
     question: "What model broom did the twins have?"
    },
    {word: "colloportus",
     question: "What incantation is used to lock doors?"
    },
    {word: "cruciatus",
     question: "This pain causing curse was used on Neville's parents."
    },
    {word: "dementor",
     question: "What creatures guarded Azkaban? "
    },
    {word: "densaugeo",
     question: "Which incantation causing teeth to grow?"
    },
    {word: "diffindo",
     question: "What is the severing charm?"
    },
    {word: "disapparate",
     question: "To travel instantly by magic"
    },
    {word: "disillusionment",
     question: "What charm is a magical form of concealment?"
    },
    {word: "dissendium",
     question: "Which incantation do you use to open the entrance to a secret passage leading to Hogsmeade?"
    },
    {word: "divination",
     question: "Which subject did Prof. Trelawney teach?"
    },
    {word: "dormiens",
     question: "Draco ________ Nunquam Titillandus"
    },
    {word: "durmstrang",
     question: "Which school did Viktor Krum attend?"
    },
    {word: "evanesco",
     question: "What is the incantation for the vanishing spell?"
    },
    {word: "expelliarmus",
     question: "What is the incantation for the disarming charm"
    },
    {word: "fidelius",
     question: "What charm conceals a secret within a person (Secret Keeper)?"
    },
    {word: "firebolt",
     question: "What brand of broom did Sirius get for Harry?"
    },
    {word: "flobberworm",
     question: "Hagrid had his class feeding these creatures lettuce in class."
    },
    {word: "fortesque",
     question: "Florean _________'s Ice-Cream Parlour"
    },
    {word: "furnunculus",
     question: "What is the incantation for a curse that causes boils?"
    },
    {word: "galleon",
     question: "Wizard money with the highest value."
    },
    {word: "gillyweed",
     question: "Which plant, if eaten, permits you to temporarily breathe underwater"
    },
    {word: "gobstones",
     question: "The wizarding version of marbles"
    },
    {word: "herbology",
     question: "What was Neville's best subject?"
    },
    {word: "hinkypunk",
     question: "Small, one-legged creatures that live in bogs and swamps"
    },
    {word: "impedimenta",
     question: "What is the incantation to slow down and obstruct attackers. "
    },
    {word: "imperius",
     question: "it gives a witch or wizard complete control over another one"
    },
    {word: "incendio",
     question: "Fire-Making Spell."
    },
    {word: "invisibility",
     question: "Harry's cloak granted him ____"
    },
    {word: "jinx",
     question: "What is Jelly-Legs and Impediment examples of?"
    },
    {word: "kedavra",
     question: "What is the second half of the Killing Curse incantation?"
    },
    {word: "kneazle",
     question: "a magical cat-like creature."
    },
    {word: "kwikspell",
     question: "course in beginner's magic for Squibs"
    },
    {word: "legilimency",
     question: "The magical ability to extract thoughts, feelings and memories from another person's mind"
    },
    {word: "lumos",
     question: "Incantation of the spell that causes a wand-tip to flare with magical light"
    },
    {word: "mandrake",
     question: "What is another name for Mandragora?"
    },
    {word: "metamorphmagus",
     question: "A witch or wizard who can change their appearance at will."
    },
    {word: "mobilicorpus",
     question: "Incantation for a spell to move someone who can't walk."
    },
    {word: "niffler",
     question: "Magical creatures that can find buried treasure."
    },
    {word: "nimbus",
     question: "The brand of Harry's first broom"
    },
    {word: "nox",
     question: "Spell to extinguish light coming from your wand"
    },
    {word: "obliviate",
     question: "Incantation for a spell that modifies the subject’s memories."
    },
    {word: "ollivanders",
     question: "Whose shop sign stated 'Makers of Fine Wands since 382 BC'"
    },
    {word: "omnioculars",
     question: "Magical binoculars with slow-motion and replay settings."
    },
    {word: "parselmouth",
     question: "What are witches and wizard who can talk to snakes called?"
    },
    {word: "patronus",
     question: "This charm is used against dementors"
    },
    {word: "pensieve",
     question: "A magical dish used to view memories."
    },
    {word: "phoenix",
     question: "Rare bird that bursts into flames and rises from its ashes"
    },
    {word: "poltergeist",
     question: "Peeves is a what?"
    },
    {word: "protego",
     question: "A spell used to guard its caster from incoming spells"
    },
    {word: "quaffle",
     question: "Red ball used for scoring in Quidditch"
    },
    {word: "quidditch",
     question: "The wizarding world's favorite sport"
    },
    {word: "reducto",
     question: "This incantation reduces a solid object to dust."
    },
    {word: "remembrall",
     question: "Magical glass ball whose smoke turns red when there is something you have forgotten"
    },
    {word: "rennervate",
     question: "Incantation spoken to revive someone."
    },
    {word: "reparo",
     question: "Incantation of the Repairing Charm"
    },
    {word: "riddikulus",
     question: "Incantation for the charm to defend oneself against a Boggart"
    },
    {word: "salamander",
     question: "Fire-dwelling lizard that feeds on flame"
    },
    {word: "scourgify",
     question: "An incantation often used in cleaning."
    },
    {word: "seeker",
     question: "Quidditch player who tries to catch the Golden Snitch."
    },
    {word: "sickle",
     question: "There are seventeen of these to a Galleon"
    },
    {word: "tarantallegra",
     question: "Incantation that causes the victims legs to dance uncontrollably."
    },
    {word: "thestral",
     question: "They are visible only by those who have witnessed a death"
    },
    {word: "transfiguration",
     question: "The art of turning one thing into another."
    },
    {word: "umbridge",
     question: "Which professor was hated almost as much as Voldemort?"
    },
    {word: "unspeakable",
     question: "Employee of the Department of Mysteries"
    },
    {word: "veritaserum",
     question: "Powerful Truth Potion"
    },
    {word: "wingardium",
     question: "add Leviosa and a swish and flick of the wand, this incantation is used to make an object rise into the air."
    },
    {word: "wizengamot",
     question: "The Wizard High Court"
    },
    {word: "wulfric",
     question: "One of Dumbledore's middle names"
    },
  
]
//game functions
const tiles = document.querySelector('.tiles'),
questionTag = document.querySelector('.question span'),
attempts = document.querySelector('.attempts span'),
graveyard = document.querySelector('.guessed span'),
restartButton = document.querySelector('#restart'),
answerTiles = document.querySelector('.answer-tiles'),
howTo = document.querySelector('#how-to');

//const winCount = document.querySelector('.win-count span');

let word, maxGuesses, wrongLetters = [], correctLetters = []; 
//New word
function gamePlay(){
    let newWord = wordList[Math.floor(Math.random() * wordList.length)]
    word = newWord.word
//set number of guesses
    maxGuesses = word.length >= 6 ? 8 : 5
    attempts.innerText = maxGuesses
//wrong answers
    correctLetters = []; wrongLetters = [];
    questionTag.innerText = newWord.question
    graveyard.innerText = wrongLetters
   
// this part of code from https://www.codingnepalweb.com/word-guessing-game
    let html = '';    
    for (let i = 0; i < word.length; i++){
        html += `<input type='text' disabled>`;
        tiles.innerHTML = html;
    }
}
gamePlay()
// const wins = [];

//event listeners to set up the game.
// this part of code from https://www.codingnepalweb.com/word-guessing-game
function startGame(e) {
    let key = e.target.value;
    if(key.match(/^[A-Za-z]+$/) && !wrongLetters.includes(` ${key}`) && !correctLetters.includes(key)) {
        if(word.includes(key)) {
            for (let i = 0; i < word.length; i++) {
                if (word[i] == key) {
                    correctLetters += key;
                    tiles.querySelectorAll('input')[i].value = key;
                }
            }
        } else {
            maxGuesses--;
            wrongLetters.push(` ${key}`);
           // wins = 0    work on this!!!
        }
        attempts.innerText = maxGuesses
        graveyard.innerText = wrongLetters
        // winCount.innerText = wins
     
    }
    answerTiles.value = '';
//winner alert
    setTimeout(() => {
        if(correctLetters.length === word.length) {
            alert(`"You're a little scary sometimes, you know that? Brilliant... but scary!" Great job! You have answered correctly. Can you do it again?`)
            // wins++; //win count
            return gamePlay()
        } else if (maxGuesses === 0) {
            alert(`Don't let the muggles get you down, try again!`)
            for(let i = 0; i < word.length; i++){
                tiles.querySelectorAll('input')[i].value = word[i]
            }
        }
    }, 100)
}
function direction() {
    alert("Using the hint/question, guess the letters to spell out the answer. You get between 5 or 8 attempts, depending on the length of the word. You win when you find the answer.");
  }

//instructions
//reset button
howTo.addEventListener('click', direction)
restartButton.addEventListener('click', gamePlay);
answerTiles.addEventListener('input', startGame);
tiles.addEventListener('click', () => answerTiles.focus());
document.addEventListener('keydown', () => answerTiles.focus());



