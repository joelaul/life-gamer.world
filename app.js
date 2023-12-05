const chawenje = {
    bgIdx: 0,
    maxTempo: document.querySelectorAll("input[type='range']")[0].value,
    numConstraints: document.querySelectorAll("input[type='range']")[1].value,
    checkboxes: document.querySelectorAll("input[type='checkbox']"),

    imgs: [ 
        'url("img/bananas.png")', 
        'url("img/beige-tiles.png")', 
        'url("img/christmas-black.png")', 
        'url("img/cork-board.png")', 
        'url("img/halftone-yellow.png")', 
        'url("img/leaves.png")', 
        'url("img/paisley.png")', 
        'url("img/wheat.png")',
        'url("img/moroccan-flower-dark.png")'
    ],

    params: [],

    genres: [ // pick two, first is primary, second is secondary
        rockMetal = {
            subgenres: ['power metal', 'metalcore', 'boomer death metal', 'djent', 'deathcore', 'NAWOHM', 'black metal', 'hardcore', 'thrash']
        },
        edm = {
            subgenres: ['DnB', 'house/deep house', 'glitch hop', 'disco', 'neurofunk', 'late 90\'s jungle/IDM', 'dubstep']
        },
        country = {
            subgenres: ['rockabilly', 'nashville chicken pickin\'', 'bro country (luke combs, etc)', 'country rap']
        },
        jazz = {
            subgenres: ['bossa nova', 'lounge/muzak', 'that shit dave weckl be doin', 'J-fusion', 'citypop']
        },
        hiphop = {
            subgenres: ['plug type beat', 'detroit teejayx6 shit', '90\'s east coast hip hop']
        }
        
    ],

    styleOfs: [
        'a shonen anime theme',
        'nobuo uematsu',
        'tee lopes',
        'zack ordway',
        'michael jackson',
        'cattle decap',
        'spongebob music',
        'snarky puppy',
        'soreption',
        'cocomelon',
        'jun sunuoe',
        'SA2 rouge levels',
        'joeyy',
        'lorna shore',
        'myrone',
        'bulb',
        'protest the hero',
        'toshiki kadomatsu',
        'joshua travis',
        'khublai khan TX',
        'toby fox',
        'fearofdark',
        'stinkbug',
        'chon',
        'car bomb',
        'all that remains',
        'pat metheny group',
        'the dillinger escape plan',
        'killswitch engage',
        'mastodon',
        'epicardiectomy',
        'hans zimmer',
        'young chop on the beat!',
        'the dogshit beats that soulja boy made for I am not a human being 2 by lil wayne',
        'bilmuri',
        'porter robinson',
        'bicflame',
        'new edition',
        'steve reich',
        'pola and bryson',
        'wilderun',
        'pierre sancan',
        'jake bowen',
        'fallujah',
        'allan holdsworth',
        'sam gelliatry',
        'steely dan',
        'casiopea',
        'spite',
        'vildhjarta',
        'dezolve',
        'thundercat',
        'vein.fm',
        'the hallowing of heirdom by winterfylleth',
        'the reign of kindo',
        'varra',
        'abominable putridity',
        'zelliack',
        'the sonic R soundtrack',
        'mitch murder',
        'k suave',
        'kk slider',
        'koji kondo'
    ],

    philosophies: [
        'life gamer',
        'the maxx shit',
        '\'twin\'',
        'king of beers',
        'gerbil dudaddy',
        'gobal',
        'energic sound ♩',
        'nofap day 492',
        'speedrun your life (KYS ASAP)',
        'the true distruction',
        'i\'m in my feels, real ones know (fake friends: don\'t text me)',
        'schlii',
        '"coffee is makes riff go fast"',
        'xXBonJoviFan420Xx',
        'primitive sound ♩',
        'health sound ♩',
        'silly sound ♩',
        'GOabl sound ♩'
    ],

    modes: [
        'major',
        'dorian',
        'phrygian',
        'lydian',
        'mixolydian', 
        'minor',
        'harmonic minor',
        'melodic minor'
    ],

    timeSigs: [
        '3/4',
        '3/4',
        '3/4 triplet feel',
        '3/4 swing feel',
        '4/4',
        '4/4',
        '4/4',
        '4/4',
        '4/4 triplet feel',
        '4/4 swing feel',
        '5/4',
        '6/8',
        '7/8',
        '9/8',
        '11/16',
        '13/16',
        '15/16'
    ],

    constraints: [ 
        '?nomorethanx',
        '?randomtuning',
        '?ignoreXstrings',
        'use a bitcrusher',
        'use the lick',
        'needs cowbell',
        'needs improv',
        'needs the Bleed rhythm',
        'needs orchestra',
        'needs hybrid picking',
        'needs a section without guitar',
        'transpose an idea up an octave',
        'move an idea through chords diatonically',
        'use modal interchange at least once',
        'use metric modulation at least once',
        'left/right panned call and response',
        'sample - voice memo audio',
        'sample - funny',
        'sample - spotify liked song',
        'sample - something else you\'ve made',
        'no real drums',
        'one takes only',
        'time stretch everything',
        'reverse at least 1 track',
        'guitar intentionally out of tune',
        'intentionally play "wrong" notes',
        'force your mom to listen to it',
        'ask Aviations member for additional constraint'
    ], 

    vibes: [
        'floating in the chao garden pool, looking at the clouds', 'Valley rock-face city festival, and you finally mustered up the courage to hold hands with your crush during the fireworks show at the top of the valley',
        'Underground civic waterworks system for metropolis is failing with large scale corrosion, all high pressure systems, so it doubles as a waterpark (if you can fit in the tubes)',
        'theme song for large fat demon god who wears a big tan trenchcoat and has an \"I\'d rather be fishing\" shirt (no pants)',
        'Turn up anthem! uh yeaaaaaaaa',
        'The best sandwich that money can buy is at a hoagie shop... at the bottom of the marianas trench',
        'Flashcard song for trivia time in a game that tests whether or not you\'re predisposed for dimentia (brain age 3: the regression)',
        'Balinese, Maritius, Indonesian gamelan players all come to battle to see who have best gamelon',
        'The fight theme that played when Jair Bolsonario got attacked by that Emu',
        'Post-Baltic Far right ethnostate music',
        'a song called "soulfracked"',
        'soundtrack for a video of nicocadoavacado eating gravel', 'the feeling of MW2 (2009) split screen Knife wars on Rust','coffee on an empty stomach',
        'Getting in a fight with the owner of the bowling alley cause he won\'t let you play as "Jizzy Gillespe"',
        'Panic attack in an Arby\'s',
        'The bi-annual cloud festival where you and all the others race your handbuilt cloud cars. You\'re gonna win it this time, you can feel it.',
        'Accidently clipping through the geometry of the simulation and falling into the earth\'s core',
        'Dripped out in the freshest designer clothes but you spilled buffalo wild wings asian zing (tm) on it',
        'Giant mech walking through the ocean that got its foot stuck in a really deep hole',
        'We finally built an oil pipeline to the peak of the tallest mountain in the wordl!',
        'Fat People falling compilation on Youtube (2008)',
        'That one day that Evan Stanley said that an egirl simp doxxed him',
        'The song that was playing in Drake\'s head when he posted Hentai to his instagram story'
    ],
    
    pick(arr) { // picks one element from each array
        let idx = Math.floor(Math.random()*arr.length);
        return arr[idx];
    },

    pickMultiple(arr, n) {
        for (let i = 0; i < n; i++){
            this.pick(arr);
        }
    },

    retune(char) {
        let pitches = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
        let newChar = "";
        let random;
        switch(random = Math.floor(Math.random() * 5)) {
            case 0: // char becomes char 2 idx back in pitches
                newChar=pitches[pitches.indexOf(char) - 2]+" ";
                break;
            case 1: // char becomes char 1 idx back in pitches
                newChar=pitches[pitches.indexOf(char) - 1]+" ";
                break;
            case 2: // char stays same
                newChar=char+" ";
                break;
            case 3: // char becomes char 1 idx ahead in pitches
                if (char == 'B') {
                    newChar='C ';
                }
                else {
                    newChar=pitches[pitches.indexOf(char) + 1]+" ";
                }
                break;
            case 4: // char becomes char 2 idx ahead in pitches
                if (char == 'B') {
                    newChar='C# ';
                }
                else {
                    newChar=pitches[pitches.indexOf(char) + 2]+" ";
                }
                break;
        }
        return newChar;
    },

    // SET MAIN PARAMETERS

    genreOrStyle() { // call this in setParams
        let random = Math.random();
        if (random < 0.5) {
            this.setGenres();
        }
        else {
            this.style = this.pick(this.styleOfs);
            this.params.push(`· style of: ${this.style}`);
        }
    },

    setGenres() {
        const {
            pick, 
            genres} = this;

        let primaryGenre = pick(genres);
        this.primary = pick(primaryGenre.subgenres);
        let secondaryGenre = pick(genres);
        let same = secondaryGenre == primaryGenre;
        while (same) {
            secondaryGenre = pick(genres);
            same = secondaryGenre == primaryGenre;
        }
        this.secondary = pick(secondaryGenre.subgenres);
        this.params.push(`· primary genre: ${this.primary}\n· with elements of: ${this.secondary}`);
    },

    // SET DYNAMIC PARAMETERS 

    setTempo() { // 80 - maxTempo
        this.tempo = Math.floor(Math.random()*(this.maxTempo-79)) + 80;
        this.params.push("· tempo: " + this.tempo + " BPM");
    },
    
    setTimeLimit() { // random 30-180 15 min increments
        this.timeLimit = 30 + (15 * Math.floor(Math.random()*11));
        this.params.push("· time limit: " + this.timeLimit + " minutes");
    },

    // SET STATIC PARAMETERS (PRE-EXISTING VALUES)

    setOthers() {
        const {
            philosophies,
            modes,
            timeSigs,
            vibes,
            constraints, 
            checkboxes} = this;

            let others = [philosophies, modes, timeSigs, vibes, constraints];
            let othersTypes = ["· philosophy: ", "· mode: ", "· time sig: ", "· vibe: ", ""];
            let checkboxesOthers = [...checkboxes].slice(1, 6);
            
            if (checkboxes[0].checked) {
                this.setTempo();
            }

            for (let i = 0; i < checkboxesOthers.length; i++) {
                if (checkboxesOthers[i].checked) {
                    this.params.push(othersTypes[i] + this.pick(others[i]));  
                }
            }

            // add first constraint and all extra constraints to one array usedConstraints, then join by semicolons and update

            if (checkboxes[5].checked) {
                const {numConstraints} = this;

                let usedConstraints = [];
                let firstConstraint = this.params[this.params.length-1];
                usedConstraints.push(firstConstraint);

                for (let i = 0; i < numConstraints - 1; i++) {
                    let extraConstraint = this.pick(this.constraints);
                    let same = usedConstraints.includes(extraConstraint);
                    while (same) {
                        extraConstraint = this.pick(this.constraints);
                        same = usedConstraints.includes(extraConstraint);
                    } // re-rolls until extra constraint is new
                    usedConstraints.push(extraConstraint);
                }

                usedConstraints = usedConstraints.map(x => this.constraintFix(x));
                
                this.params[this.params.length-1] = "· constraints: " + usedConstraints.join('; ');
            }

            if (checkboxes[6].checked) {
                this.setTimeLimit();
            }   
    },

    // SET PARAMETERS TO BE MODIFIED (?constraint)

    constraintNoMoreThanX(string) { 
        let random = Math.floor(Math.random() * 5 + 1);
        if (random > 1) {
            string = `no more than ${random} tracks`;
        }
        else {
            string = `no more than 1 track`; 
        }
        return string;
    },

    constraintRandomTuning(string) { 
        let standard = "EADGBE"
        let randomTuning = "";
        
        for (let char of standard) {
            let newPitch = this.retune(char);
            randomTuning += newPitch;
        }
        string = `random tuning - ${randomTuning}`.slice(0, -1);
        
        return string;
    },

    constraintIgnoreXStrings(string) {
        let random;
        switch (random = Math.floor(Math.random() * 3)) {
            case 0: 
                string = "ignore 1 string (your choice)";
                break;
            case 1:
                string = "ignore 2 strings (your choice)";
                break;
            case 2:
                string = "ignore 3 strings (your choice)";
                break;
        }
        return string;
    },

    constraintFix(string) { // calls all 3 ?constraint setter functions
        if (string == '?nomorethanx') {
            string = this.constraintNoMoreThanX(string);
        }
        else if (string == '?randomtuning') {
            string = this.constraintRandomTuning(string);
        }
        else if (string == '?ignoreXstrings') {
            string = this.constraintIgnoreXStrings(string);
        }
        return string;
    },

    setParams() { // fills params array with one element of each, then strips down params
        this.genreOrStyle();
        this.setOthers();
    },

    clickSound() {
        let files = [           
            "audio/kidpix/i made a booboo.wav",
            "audio/kidpix/no no no.wav",
            "audio/kidpix/no way.wav",
            "audio/kidpix/now wait a minute.wav",
            "audio/kidpix/nuh uh.wav",
            "audio/kidpix/oh no.wav",
            "audio/kidpix/oops.wav",
            "audio/kidpix/oops2.wav",
            "audio/kidpix/uh oh.wav",
            "audio/kidpix/uhoh.wav",
            "audio/kidpix/undo undo.wav",
            "audio/kidpix/wait a minute.wav",
            "audio/kidpix/yikes.wav",
            "audio/kidpix/you dont want it.wav",
            "audio/kidpix/yuck.wav"
        ]
        let random = files[Math.floor(Math.random()*files.length)];
        let sound = new Audio(random);
        sound.pause();
        sound.play();
    },

    stripDown(params) { // removes elements from array, random amount and index, leaving at least one element
        let deleteCount = Math.floor((Math.random()*params.length-1)) + 1;
        for (let i = 0; i < deleteCount; i++) {
                let idx = Math.floor(Math.random()*params.length);
                if (!(params[idx].includes("style of:") || params[idx].includes("primary genre:"))) {
                params.splice(idx, 1);
                }
        }   
    },
    
    output(arr) {
        let string = "";
        for (let el of arr) {
            string += el + "\n";
        }
        return string;
    },

    // TOP LEVEL FUNCTIONS

    generate() { // prints stripped down array with template message
        const {checkboxes} = this;

        this.clickSound();
        
        this.setParams();
        if (checkboxes[7].checked) {
            this.stripDown(this.params);
        }
        let output = this.output(this.params);
        let p = document.querySelector('p');
        p.innerText = output;

        this.params = [], output = ""
    },

    changeBG() {
        const {bgIdx, imgs} = this;
        const body = document.querySelector('body');
        const p = document.querySelector('p');
        const h1 = document.querySelector('h1');
        const labels = document.querySelectorAll('label')

        body.style.backgroundImage = imgs[bgIdx];

        if (![0, 1, 3, 4, 5, 6].includes(bgIdx)) {
            p.style.color = "whitesmoke";
            h1.style.color = "whitesmoke";
            for (let label of labels) {
                label.style.color = "whitesmoke";
            }
            body.style.borderLeft = "1px solid whitesmoke";
            body.style.borderRight =  "1px solid whitesmoke";
        }
        else {
            p.style.color = "black";
            h1.style.color = "black";
            for (let label of labels) {
                label.style.color = "black";
            }
            body.style.borderLeft = "2px solid black";
            body.style.borderRight =  "2px solid black";
        }

        this.bgIdx = (this.bgIdx + 1) % this.imgs.length;
    },

    setSliders() {
        const labels = document.querySelectorAll('label');
        const maxTempoSlider = document.querySelectorAll('input[type="range"]')[0]; // element to display current value of
        const maxTempoLabel = labels[labels.length-2];
    
        maxTempoSlider.addEventListener('input', function() {
            maxTempoLabel.innerText = "";
            maxTempoLabel.innerText = "Max Tempo: " + this.value;
            chawenje.maxTempo = this.value;
        });
    
        const constraintsNumSlider = document.querySelectorAll('input[type="range"]')[1]; // element to display current value of
        const constraintsNumLabel = labels[labels.length-1];
    
        constraintsNumSlider.addEventListener('input', function() {
            constraintsNumLabel.innerText = "";
            constraintsNumLabel.innerText = "Constraints: " + this.value;
            chawenje.numConstraints = this.value;
        });
    
    }
}

// SLIDERS

chawenje.setSliders();

// GENERATE

const btn = document.querySelector('#btn');
btn.addEventListener("click", (x) => {chawenje.generate()});

// CHANGE BACKGROUND

const btn2 = document.querySelector('#btn2');
btn2.addEventListener("click", (x) => {chawenje.changeBG()});

    // EXPERT MODE: RETURN OUTPUT AS INDIVIDUAL LABELED ELEMENTS INSTEAD OF ONE <p> (store parameters in their own variables, then fill each <p> or <td>) 

    // EVENT LISTENER = RUNS ON EVENT
    // NO EVENT LISTENER = RUNS ON PAGE LOAD