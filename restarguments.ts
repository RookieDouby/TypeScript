/**
 * Created by sam on 17-10-11.
 */
function push(array: any[], ...items: any[]) {
    items.forEach((item) => array.push(item));
}

let arr = [];
let newArr = push(arr, 1,2,3,4)
console.log(newArr);
