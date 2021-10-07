//Задание №1

function count(arr) {

let ZeroNum = 0;
let Even = 0;
let Odd = 0;

 for (h = 0; h < arr.length; h++) {
        if (Number.isInteger(arr[h]) == true) {
            if (arr[h] == 0) {
                ZeroNum += 1;
            }
            else if (!(arr[h] % 2)) {
                Even += 1;
            }
            else {
                Odd += 1;
            }
        }
        else {
            continue;
        }
    }
    return console.log(ZeroNum, Even, Odd)
}
const a = [1, 2, 3, 4, 6, 8, 10, 11, 12, 0, "lalala"];
count(a);