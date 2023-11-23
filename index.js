                                                                                    //2
let lastName = prompt('Введите фамилию');
let firstName = prompt('Введите имя');
function generateEmail(lastName, firstName) {
    let email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@gmail.com`;
    return email;
}



let email = generateEmail(lastName, firstName);
console.log(email);









                                                                                  //4
function sortArray(arr) {
    let sorted = false;

    while (!sorted) {
        sorted = true;

        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                sorted = false;
            }
        }
    }

    return arr;
}

let numbers = [5, 2, 8, 1, 4, 3, 10];
let sortedNumbers = sortArray(numbers);
console.log(sortedNumbers);