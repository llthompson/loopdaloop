console.log('Hello, Lisa')

let loopCount = '';
let i = 0;

do {
    i++;
    loopCount = loopCount + i;
} while (i < 10);

console.log('This is a lot of numbers: ', loopCount)


const person = {
    name: 'Lisa Thompson',
    age: '34',
    gender: 'Female',
    location: 'Austin, TX',
    hobby: 'reading',
}

function logKeys(obj) {
    const keys = Object.keys(obj);
    keys.forEach(key => {
        console.log('Here are the keys: ', keys.join(', '))
    })
}

logKeys(person)

function logEntries(obj) {
    const deets = Object.entries(obj);
    deets.forEach(entry => {
        console.log('Here is each entry: ', entry)
    })
}

logEntries(person)

const arrayOfPeeps =
    [
        {
            firstName: "Jane",
            lastName: "Doe",
            birthDate: "Jan 5, 1985",
            gender: "female"
        },
        {
            firstName: "John",
            lastName: "Smith",
            birthDate: "Dec 10, 1989",
            gender: "male"
        },
        {
            firstName: "Emma",
            lastName: "Johnson",
            birthDate: "Mar 15, 1992",
            gender: "female"
        },
        {
            firstName: "Michael",
            lastName: "Brown",
            birthDate: "Sep 20, 1978",
            gender: "male"
        }
    ]

    function oddPeeps(peeps) {
        for (const peep of peeps) {
            const birthYear = new Date(peep.birthDate).getFullYear();
            if (birthYear % 2 !== 0) {
                console.log('Odd birthdate:', peep.birthDate);
            }
        }
    }

oddPeeps(arrayOfPeeps)