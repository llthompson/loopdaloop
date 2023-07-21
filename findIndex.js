function myFindIndex(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return i;
        }
    }
    return -1;
}

const findWomanLocation = myFindIndex(arrayOfPeeps, (person) => person.gender === "female");
console.log('The woman is at index', findWomanLocation); 