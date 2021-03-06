
// this document contains arrays of backstories

// Basic Characters
const races = ['Dragonborn', 'Dwarf', 'Elf', 'Gnome', 'Half-Elf', 'Halfling', 'Half-Orc', 'Human', 'Tiefling', 'Orc of Exandria']
const classes = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Figther', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Socerer', 'Warlock', 'Wizard']

//Backstories
// Array with a number of areas from The Forgotten Realms
const area = ['The High Forest', 'Anauroch', 'Amn', 'The Dalelands', 'Sembia', 'Wealdath', 'Tethyr','Calimshan','Lantan', 'The Moonshae isles', 'Nimbral', 'Elkazar', 'an unknown land']
// Array with different types of locations
const terrain = ['the city', 'the forest', 'a costal town', 'a small village', 'a farmhouse', 'a barn', 'a castle', 'a dungeon']
// relation ship to parents
const parents = ['with your mom', 'alone', 'as a noble', 'with only you sister', 'with both your parents', 'among wolfs', 'in a monastry']
// Array describing childhood
const childhood = ['very tortured', 'just lovely', 'shielded', 'violent']

// Returns a random trait from an Array
let randomGen = (arr) => {
    return arr[Math.floor(Math.random()*arr.length)]
}

// Charactor object factory
const characterGen = (name) => {
    return {
        name: name,
        race: randomGen(races),
        class: randomGen(classes),
        hitdie: (Math.floor((Math.random()*3)) + 3)*2,
        backstory: `Your were born in ${randomGen(area)}, where you lived in ${randomGen(terrain)}. Luckyly you grew up ${randomGen(parents)}, as it shaped the person you are today. You wouldn't wanna change your ${randomGen(childhood)} childhood for anything.`,
        // logs Hello
        sayHello(){
            console.log(this.name + ' says hello!')
        },
        rollHitdie(){
            return Math.floor(Math.random()*this.hitdie)
        },
        figth(character){
            let myScore = this.rollHitdie()
            let oppScore = character.rollHitdie()
            if(myScore > oppScore){
                console.log(`${this.name} wins!!!`)
            } else {
                console.log(`${character.name} wins and you will forever be enslaved`)
            }
        }

    }
}

//generates two random characters
const harald = characterGen('Harald')
const john = characterGen('john')

// logs the characters to the console
console.log(harald)
console.log(john)

// the characters fight eachother and the winner is declared
harald.figth(john)




