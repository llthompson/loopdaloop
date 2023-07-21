// const arrayOfPeeps =
//     [
//         {
//             firstName: "Jane",
//             lastName: "Doe",
//             birthDate: "Jan 5, 1985",
//             gender: "female"
//         },
//         {
//             firstName: "John",
//             lastName: "Smith",
//             birthDate: "Dec 10, 1989",
//             gender: "male"
//         },
//         {
//             firstName: "Emma",
//             lastName: "Johnson",
//             birthDate: "Mar 15, 1992",
//             gender: "female"
//         },
//         {
//             firstName: "Michael",
//             lastName: "Brown",
//             birthDate: "Sep 20, 1978",
//             gender: "male"
//         }
//     ]

    function myFind(array, callback) {
        for (const element of array) {
            if (callback(element)) {
                return element;
            }
        }
        return undefined;
    }
    
    const woman = myFind(arrayOfPeeps, peep =>
        peep.gender === 'female'
    )
    
    console.log('Did I find her?', woman)